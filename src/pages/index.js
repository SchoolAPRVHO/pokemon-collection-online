// Stap 1: Importeer React

import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import "../components/styles.css"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

// Stap 2: definieer je component
const IndexPage = () => {
  const data = useStaticQuery(graphql`query {
    allWpPage(
      filter: {homepagefields: {homepageTitle: {eq: "Gonna Cathch Them All"}}}
    ) {
      edges {
        node {
          homepagefields {
            homepageTitle
            homepageDescription
            homepageFeaturedPokemon {
              ... on WpPokemon {
                id
                uri
              }
            }
            homepagePicture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }`)  
  const {homepageTitle, homepageDescription, homepageFeaturedPokemon, homepagePicture} = data.allWpPage.edges[0].node.homepagefields;
  const image = getImage(homepagePicture.localFile);
  return (
    <>
        <Layout pageTitle={homepageTitle}>
        <div className='homepage pokemonPage'>
          <p className='homepageText'>{homepageDescription}</p>
          <GatsbyImage className='homepageImage' image={image} alt={"Dit is een alt"} />
        </div>
        </Layout>
    </>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
