import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `saint`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: "iqfl976a",
      dataset: "production",
      token: 'sk8zruQqZOCL6OeaNOkNKOvVvwxe9dFyAAbTjxq4pvN13zrAehsjBbX5SXzhcMVZeVCZOU9bKwwWRa0lo77umeCtxuEbSEpyBV9QM1ffRMftcNae5Ex34uMjBTfhQT3Kff6UJdCptvcaFDWhLuNp6qAFyX6ddSgWqJJ1JVCq1BfIdQHqEISt',
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
