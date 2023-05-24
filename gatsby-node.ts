import { title } from "process"

const path = require('path')
// const remp = require('./src/templates/blogItem.tsx')
exports.createPages = async ({ graphql, actions}:any) => {
    const {createPage} = actions
    const queryResults = await graphql(`
    query MyQuery {
      allSanityBlog {
        nodes {
          id
          title
          authorname
          content
          author {
            asset {
              gatsbyImageData
            }
          }
          image {
            asset {
              gatsbyImageData
            }
          }
          _rawRichText
        }
      }
    }
    `)
    console.log(queryResults.data.allSanityBlog.nodes,"asdf")
    queryResults.data.allSanityBlog.nodes.forEach((element :any,index:number) => {
      console.log(element,"ele")
        createPage({
          path:`/BlogItem/${index}`,
          component:path.resolve('./src/templates/blogItem.tsx'),
          context: {
            blog:element
          }
        })
    });
    // const BlogTemplate = path.resolve(`src/templates/blogItem.tsx`)
// queryResults.data.allSanityBlog.nodes.forEach((node:any) => {
//   console.log("HI")
//     createPages({
//         path: `/BlogItem/${node.id}`,
//         component: path.resolve('./src/templates/blogItem.tsx'),
//         context: {
//             product: node,
//         },

//     })
// })
}

