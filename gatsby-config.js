module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        names: 'pages',
        path: 'src/pages/',
      },
    },
    'gatsby-transformer-remark'
  ],
}
