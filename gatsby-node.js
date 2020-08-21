const path = require(`path`);
var remark = require(`remark`)

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
exports.onCreateNode = ({ node, actions, createContentDigest }) => {
  const { createNode, createNodeField } = actions  

  if (node.internal.type === 'StrapiPost') {
      const parsed = JSON.stringify(remark().parse(node.Body))
      const textNode = {
        id: `${node.id}-MarkdownBody`,
        parent: node.id,
        internal: {
          type: `${node.internal.type}MarkdownBody`,
          mediaType: "text/markdown",
          content: parsed,
          contentDigest: createContentDigest(parsed),
        },
      }
      createNode(textNode)
  
      createNodeField({
        node,
        name: "markdownBody___NODE",
        value: textNode.id,
      })
  }
}