/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allStrapiPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
        result.data.allStrapiDiscovery.edges.forEach(({ node }) => {
            createPage({
            path: `/post/${node.Slug}`,
            component: path.resolve(`src/templates/post.js`),
            context: {
                id: node.slug,
            },
            })
        })
        resolve()
    })
    })
}