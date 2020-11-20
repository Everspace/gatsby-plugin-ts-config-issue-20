A minimal repo case for [this issue](https://github.com/Js-Brecht/gatsby-plugin-ts-config/issues/20)

run `yarn && yarn build` to repo

In this example, I have a base package theme `greetings` that publishes a bunch of greetings.

I use that to make a `hello-planets` to say things like "Hej World" or "Hello Bean", and make pages for it.

The dependancy graph is

```
example-site
  \- gatsby-theme-hello-planets
      \- gatsby-theme-greetings
```

This should produce a link like `localhost:8000/hej/bean`, but I make no guarentees on the nodes/pages generated.
