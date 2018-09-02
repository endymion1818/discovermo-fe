const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
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
            component: path.resolve(`src/components/Templates/post.js`),
            context: {
              id: node.slug,
            },
          })
        })
      })
    )
  })
}