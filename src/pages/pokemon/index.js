import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const Pokemon = () => {
  const data = useStaticQuery(graphql`
  query {
    wpPage(title: {eq: "Pokémon Page"}) {
      id
      pokemonpagefields {
        pokemonpageDescription
        pokemonpagePicture {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      title
    }
    allWpPokemon {
      edges {
        node {
          pokemonFieldGroup {
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            title
          }
          id
          slug
          title
          uri
        }
      }
    }
  }
  `)
 
  const pokemonData = data.allWpPokemon.edges;
  const {pokemonpageDescription, pokemonpagePicture} = data.wpPage.pokemonpagefields;
  const title = data.wpPage.title;
  const imagePage = getImage(pokemonpagePicture.localFile);
  return (
    <Layout pageTitle={title}>
      <div class="tempFlex">
        <p className="descriptionText">{pokemonpageDescription}</p>
        <GatsbyImage className="pokedex" image={imagePage} alt={"Pokedex"} />
      </div>
      <div class="pokemonContainer">
        {pokemonData.map((pokemon) => {
          const name = pokemon.node.pokemonFieldGroup.title
          const image = getImage(pokemon.node.pokemonFieldGroup.picture.localFile)
          return (
            <div className="pokemonCard">
              <GatsbyImage image={image} alt={name} />
              <h2>{name}</h2>
              <Link to={`/pokemon/${pokemon.node.slug}`}>View Pokemon</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Pokemon
