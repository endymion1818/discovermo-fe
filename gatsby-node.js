const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
    createNodeField({
      node,
      name: `slug`,
      value: node.slug,
    })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allStrapiPost {
        edges {
          node {
            title
            excerpt
            slug
            createdAt
            id
          }
        }
      }
    }
    `).then(result => {
      result.data.allStrapiPost.edges.forEach(({ node }) => {
        createPage({
          path: '/post/' + node.slug,
          component: path.resolve(`./src/components/Templates/post.js`),
          context: {
            title: node.title,
            excerpt: node.excerpt,
            slug: node.slug,
            createdAt: node.createdAt,
            id: node.id
          },
        })
      })
      resolve()
    })
  })

}

