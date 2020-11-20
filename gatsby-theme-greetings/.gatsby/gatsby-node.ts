import { GatsbyNode } from "gatsby"

export const sourceNodes: GatsbyNode["sourceNodes"] = async (props, options) => {
  ["Hello", "Hola", "Hai", "Hej"].forEach(greeting => {
    props.actions.createNode({
      id: props.createNodeId(`Greeting${greeting}`),
      word: greeting,
      internal: {
        type: "Greeting",
        contentDigest: props.createContentDigest(greeting),
      },
    })
  })

  return
}
