module.exports = {
  siteMetadata: {
    title: 'Discover Mike Oldfield',
  },
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://discovermikeoldfield-content.herokuapp.com`,
        contentTypes: [`post`],
      },
    },
  ],
}
