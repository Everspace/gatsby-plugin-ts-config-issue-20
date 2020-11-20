import React from "react"
import { graphql, Link } from "gatsby"

export default function Home(data) {
  const links = data.allPlanet.node.map(planet => {
    return <li key={`/${planet.greeting.word}/${planet.word}`}>
      <Link to={`/${planet.greeting.word}/${planet.word}`}>{planet.greeting.word} {planet.word}</Link>
    </li>
  });

  return <div>
    <p>Homepage in a user's site</p>
    <ul>
      {links}
    </ul>
  </div>
}

export const query = graphql`
  query HomeInfo {
    allPlanet {
      node {
        word
        greeting: parent {
          ... on Greeting {
            word
          }
        }
      }
    }
  }
`
