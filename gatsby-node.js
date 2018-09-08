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

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: path.resolve(`src/components/Templates/post.js`),
        context: {
          id: node.slug,
        },
      })
    })
  });

  const getAlbums = makeRequest(graphql, `
    {
      allStrapiAlbum {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiAlbum.edges.forEach(({ node }) => {
      createPage({
        path: `/album/${node.slug}`,
        component: path.resolve(`src/components/Templates/album.js`),
        context: {
          id: node.slug,
        },
      })
    })
  });

  const getDiscoveries = makeRequest(graphql, `
    {
      allStrapiDiscovery {
        edges {
          node {
            Slug
          }
        }
      }
  }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiDiscovery.edges.forEach(({ node }) => {
      createPage({
        path: `/discovery/${node.Slug}`,
        component: path.resolve(`src/components/Templates/discovery.js`),
        context: {
          id: node.slug,
        },
      })
    })
  });



  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getAlbums,
    getDiscoveries
  ])
};
