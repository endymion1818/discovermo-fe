module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
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
