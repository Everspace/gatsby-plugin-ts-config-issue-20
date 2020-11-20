import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query PlanetGreetings ($id: String) {
    planet(id: { eq: $id }) {
      word
      greeting: parent {
        ... on Greeting {
          word
        }
      }
    }
  }
`

export default ( ({data: planet}) => {
  return <div>
    <h1>{planet.greeting.word} {planet.word}</h1>
    <Link to="/">send me back</Link>
  </div>
})

