const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.upy.pl",
    title: "UPY AGENCY SEO",
  },
  plugins: [
    "gatsby-plugin-styled-components",
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
  ],
};
