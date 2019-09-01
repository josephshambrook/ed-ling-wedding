module.exports = {
  siteMetadata: {
    title: `Edward & Ling - June 28th 2020`,
    description: `The website to provide information for the wedding of Edward Shambrook and Ling Zhu in 2020.`,
    author: `josephshambrook`,
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edward and Ling - 28th June 2020`,
        short_name: `Ed & Ling`,
        start_url: `/`,
        background_color: `#81d8d0`,
        theme_color: `#81d8d0`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
