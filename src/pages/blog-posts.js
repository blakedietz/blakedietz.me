import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { getFormattedDate } from "../utils/utils"
import "./blog-posts.css"
import { Pills } from "../components/pill"

const PostLink = ({ post }) => (
  <div className="post-and-description-container">
    <Link className="post-title text-xl my-6" to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>
    <div className="post-description">{post.frontmatter.description}</div>
    <div className="post-tags">
      {post.frontmatter.tags && <Pills pills={post.frontmatter.tags} />}
    </div>
    <div className="post-date">
      {getFormattedDate(new Date(post.frontmatter.date))}
    </div>
  </div>
)

const BlogPostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <SEO title={"All blog posts"} />
      <Layout>
        <h1>All posts</h1>
        <div>{Posts}</div>
      </Layout>
    </>
  )
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
            description
            tags
            path
            title
          }
        }
      }
    }
  }
`
