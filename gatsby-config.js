module.exports = {
  siteMetadata: {
    title: `De Pokemon Collectie`,
    description: `Onze Pokemon website biedt allerlei informatie over de verschillende Pokemon die er bestaan. Of je nu op zoek bent naar de statussen van je favoriete Pokemon, of je wilt meer weten over hun aanvallen en vaardigheden, je vindt het hier allemaal. Onze website is gemaakt met Gatsby, wat betekent dat het snel en gemakkelijk te gebruiken is, zelfs op mobiele apparaten. Zoek naar jouw favoriete Pokemon of blader door onze lijst met alle Pokemon om te zien wat er te ontdekken valt.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
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
