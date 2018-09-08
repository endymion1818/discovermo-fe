module.exports = {
  siteMetadata: {
    title: 'Discover Mike Oldfield',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      },
    },
    // `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:  'https://discovermikeoldfield-content.herokuapp.com',
        contentTypes: [
          `post`,
          `album`,
          `discovery`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
