import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = async (props, options) => {
  const { node: sourceNode, actions, createContentDigest, createNodeId } = props
  const { createNode, createParentChildLink } = actions

  if (sourceNode.internal.type == "Greeting") {
    const greeting = sourceNode.word as string
    ["World", "Earth", "Planet", "Bean"].forEach(planet => {
      const node = {
        id: createNodeId(`Planet${greeting}${planet}`),
        parent: sourceNode.id,
        word: planet,
        internal: {
          type: "Planet",
          contentDigest: createContentDigest({greeting, planet})
        }
      }
      createNode(node)
      //@ts-ignore createParentChildLink is weird
      createParentChildLink({parent: sourceNode, child: node})
    })
  }

  return
}
