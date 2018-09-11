const path = require(`path`);

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
            slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiAlbum.edges.forEach(({ node }) => {
      createPage({
        path: `/album/${node.slug}`,
        component: path.resolve(`src/components/Templates/album.js`),
        context: {
          id: node.id,
          slug: node.slug
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
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: path.resolve(`src/components/Templates/post.js`),
        context: {
          id: node.id,
          slug: node.slug
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