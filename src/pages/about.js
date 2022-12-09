// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Definieer je component
const AboutPage = () => {
  return (
    <>
        <Layout pageTitle="About Us">
          <h1>About Us</h1>
          <p>The pokécentres are magical places where all trainers will come to help their pokémon to get better. It's a great place to get to know other trainers and to discover new pokémon.</p>
          </Layout>
    </>
  )
}

// Stap 3: Exporteer je component
export default AboutPage