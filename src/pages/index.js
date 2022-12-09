// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <>
        <Layout pageTitle="Pokécenter">
        <h1>Welcome to the Pokécentre!</h1>
        <p>This is an place where you can find all the pokémon in the world</p>
        </Layout>
    </>
  )
}
// Stap 3: Exporteer je component
export default IndexPage