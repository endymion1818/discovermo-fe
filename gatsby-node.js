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

  return Promise.all([
    getAlbums,
    getPosts,
    getDiscoveries,
  ])
};
module.exports.onCreateNode = async ({ node, actions, createNodeId, createContentDigest }) => {
  if (node.internal.type === "StrapiPost") {
      const newNode = {
          id: createNodeId(`StrapiPostContent-${node.id}`),
          parent: node.id,
          children: [],
          internal: {
              content: JSON.stringify(
                unified()
                  .use(markdown)
                  .use(html, { sanitize: node.Body })
                  .processSync(node.Body)
              ) || " ",
              type: "StrapiPostContent",
              mediaType: "text/markdown",
              contentDigest: createContentDigest({
                content: JSON.stringify(node.Body),
              })
          },
      };
      actions.createNode(newNode);
      actions.createParentChildLink({
          parent: node,
          child: newNode,
      });
  }
};