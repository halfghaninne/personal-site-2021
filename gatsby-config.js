module.exports = {
  plugins: [
		`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      	name: `src`,
        path: `${__dirname}/src/`,
      },
    }
  ]
}