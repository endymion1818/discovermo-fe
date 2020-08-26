const path = require(`path`)
const markdown = require(`remark-parse`)
const html = require(`remark-html`)
const unified = require(`unified`);
const { parse } = require("path");

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getAlbums = makeRequest(graphql, `
    {
      allStrapiAlbum {
        edges {
          node {
            id
            Slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiAlbum.edges.forEach(({ node }) => {
      createPage({
        path: `/album/${node.Slug}`,
        component: path.resolve(`src/components/Templates/album.js`),
        context: {
          id: node.id,
          slug: node.Slug
        },
      })
    })
  });

  const getPosts = makeRequest(graphql, `
    {
      allStrapiPost {
        edges {
          node {
            id
            Slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/news/${node.Slug}`,
        component: path.resolve(`src/components/Templates/post.js`),
        context: {
          id: node.id,
          slug: node.Slug
        },
      })
    })
  });

  const getDiscoveries = makeRequest(graphql, `
  {
    allStrapiDiscovery {
      edges {
        node {
          id
          Slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allStrapiDiscovery.edges.forEach(({ node }) => {
      createPage({
        path: `/discovery/${node.Slug}`,
        component: path.resolve(`src/components/Templates/discovery.js`),
        context: {
          id: node.id,
          slug: node.Slug
        },
      })
    })
  });

  const createNodes = onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions  

    const parse = md => unified()
    .use(markdown)
    .use(html, { sanitize: md })
    .processSync(md)
  
    if (node.internal.type === 'StrapiPost') {
        createNodeField({
          node,
          name: 'BodyHtml',
          value: parse(node.Body),
        })
    }
  }

  return Promise.all([
    getAlbums,
    getPosts,
    getDiscoveries,
    createNodes
  ])
};
