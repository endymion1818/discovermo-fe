module.exports = {
  siteMetadata: {
    title: 'Discover Mike Oldfield',
    description: 'Discover the music and inspiration behind multi-genre multi-instrumentalist Mike Oldfield'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [
          `post`,
          `album`
        ],
      },
    },
  ],
}
