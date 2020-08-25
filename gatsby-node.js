const path = require(`path`)
const markdown = require(`remark-parse`)
const html = require(`remark-html`)
const unified = require(`unified`)

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

  return Promise.all([
    getAlbums,
    getPosts,
    getDiscoveries
  ])
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions  

  if (node.internal.type === 'StrapiPost') {
    const parsedBody = parse(node.Body)
    console.log(parsedBody)
    createNodeField({
      node,
      name: 'BodyHtml',
      value: parsedBody,
    })
  }
}
const parse = md => unified()
  .use(markdown)
  .use(html, { sanitize: md })
  .process(md)