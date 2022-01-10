const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.upy.pl",
    title: "UPY AGENCY SEO",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [path.join(__dirname, "libs")],
        utils: path.join(__dirname, "src", "components", "utilities"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://upy.herokuapp.com`,
        queryLimit: 1000,
        singleTypes: [`home`],
        collectionTypes: [`executions`, `execution-categories`, `services`, `service-categories`, `wrote-about-uses`, `they-trusted-uses`, `blogs`, `tags`, `users`],
      },
    },
  ],
};
