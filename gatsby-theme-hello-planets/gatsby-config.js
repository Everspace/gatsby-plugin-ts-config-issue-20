const tsconfig = require("gatsby-plugin-ts-config")

//@ts-ignore props is optional
module.exports = tsconfig.generateConfig({
  configDir: ".gatsby",
  projectRoot: __dirname,
})
