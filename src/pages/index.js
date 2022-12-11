// Stap 1: Importeer React

import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import "../components/styles.css"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

// Stap 2: definieer je component
const IndexPage = () => {
  const data = useStaticQuery(graphql`query {
    allWpPage(
      filter: {homepagefields: {homepageTitle: {eq: "Gonna Catch Them All"}}}
    ) {
      edges {
        node {
          homepagefields {
            homepageTitle
            homepageDescription
            homepageFeaturedPokemon {
              ... on WpPokemon {
                id
                slug
                pokemonFieldGroup {
                  title
                  picture {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
            homepagePicture {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
  `)  
  const {homepageTitle, homepageDescription, homepageFeaturedPokemon, homepagePicture} = data.allWpPage.edges[0].node.homepagefields;
  const image = getImage(homepagePicture.localFile);
  return (
    <>
        <Layout pageTitle={homepageTitle}>
        <div className='homepage'>
          <p className='descriptionText'>{homepageDescription}</p>
          <GatsbyImage className='homepageImage' image={image} alt={"Dit is een alt"} />
        </div>
        <h2 className='pageTitle'>Featured Pokémon</h2>
        <div class="featuredPokemonFlex">
          {homepageFeaturedPokemon.map((pokemon)=> {
            const image = getImage(pokemon.pokemonFieldGroup.picture.localFile);
            const name = pokemon.pokemonFieldGroup.title
            return (
              <Link to={`/pokemon/${pokemon.slug}`}>
                <div className='pokemonCard'>
                  <h2 className='h2CardStyle'>{name}</h2>
                  <GatsbyImage image={image} alt={name} />
                </div>
              </Link>
            )
          })}
        </div>
        </Layout>
    </>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
