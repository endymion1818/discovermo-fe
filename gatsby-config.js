module.exports = {
  siteMetadata: {
    title: 'Discover Mike Oldfield',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'discover-mike-oldfield-content.herokuapp.com/wp/',
        protocol: 'http',
        useACF: true,
        concurrentRequests: 10,
      }
    }
  ],
}
