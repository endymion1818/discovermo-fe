const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const getArticles = makeRequest(graphql, `
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
    // Create pages for each article.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/post.js`),
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
          title
          slug
          about
          published
        }
      }
    }
  }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiAlbum.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/album.js`),
        context: {
          id: node.slug,
        },
      })
    })
  });



  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getAlbums
  ])
};
