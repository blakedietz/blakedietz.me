import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostsPage = ({
                         data: {
                           allMarkdownRemark: { edges },
                         },
                       }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)

  return <>
    <SEO title={"All blog posts"}/>
    <Layout>
      <h1>All posts</h1>
      <div>{Posts}</div>
    </Layout>
  </>
}

export default BlogPostsPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`