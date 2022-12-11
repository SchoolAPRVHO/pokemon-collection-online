import React from "react";
import {  graphql } from "gatsby";
import Layout from "../../components/layout";
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import "../../components/styles.css"

const individualPokemon = ({data: {wpPokemon: {pokemonFieldGroup: pokemon}}}) => {
    const {title, description, attackPoints, defensePoints, healthPoints, specialAttackPoints, specialDefensePoints, speed, regionOfAppearing, placeInEvolutionLine} = pokemon;     
    const image = getImage(pokemon.picture.localFile);
    return (
        <Layout pageTitle={title}>
            <div className="pokemonContainer">
            <div className="individualPokemonFlex">
                <GatsbyImage className="individualPokemonImage" image={image} alt={title} />
                <table className="pokemonTable">
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <td>{description}</td>
                        </tr>
                        <tr>
                            <th>AttackPoints</th>
                            <td>{attackPoints}</td>
                        </tr>
                        <tr>
                            <th>DefensePoints</th>
                            <td>{defensePoints}</td>
                        </tr>
                        <tr>
                            <th>HealthPoints</th>
                            <td>{healthPoints}</td>
                        </tr>
                        <tr>
                            <th>SpecialAttackPoints</th>
                            <td>{specialAttackPoints}</td>
                        </tr>
                        <tr>
                            <th>SpecialDefensePoints</th>
                            <td>{specialDefensePoints}</td>
                        </tr>
                        <tr>
                            <th>Speed</th>
                            <td>{speed}</td>
                        </tr>
                        <tr>
                            <th>Home region (region of appearing)</th>
                            <td>{regionOfAppearing}</td>
                        </tr>
                        <tr>
                            <th>The place in the evolution line</th>
                            <td>{placeInEvolutionLine}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    wpPokemon(id: {eq: $id}) {
      pokemonFieldGroup {
        attackPoints
        defensePoints
        fieldGroupName
        description
        healthPoints
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        placeInEvolutionLine
        regionOfAppearing
        specialAttackPoints
        specialDefensePoints
        speed
        title
      }
      slug
      id
    }
  }      
`

export default individualPokemon