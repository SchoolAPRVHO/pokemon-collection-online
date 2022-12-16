module.exports = {
  siteMetadata: {
    title: `The Pokemon Collection`,
    description: `Our Pokemon website provides all sorts of information about the various Pokemon that exist. Whether you're looking for the stats of your favorite Pokemon, or want to learn more about their attacks and abilities, you can find it all here. Our website is built with Gatsby, which means it's fast and easy to use, even on mobile devices. Search for your favorite Pokemon or browse through our list of all Pokemon to see what's in store.`,
    author: `RavenMyrrdin`,
    siteUrl: `https://leafy-parfait-b2af0c.netlify.app/`,
    favicon: `https://www.flaticon.com/free-icons/pokemon`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    
  ],
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://wordpress.afdelingbrabo.be/graphql",
      },
    },
  ],
}
