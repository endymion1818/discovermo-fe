const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `{
          allStrapiPost {
            edges {
              node {
                slug
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allStrapiPost.edges.forEach(({ node }) => {
          createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve(`src/templates/post.js`),
            context: {
              id: node.slug,
            },
          })
        })
      })
    )
  })
}