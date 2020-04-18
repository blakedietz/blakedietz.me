import React from "react"
import { Link } from "gatsby"
import { getFormattedDate } from "../utils/utils"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {getFormattedDate((new Date(post.frontmatter.date)))} - {post.frontmatter.title} 
    </Link>
  </div>
)

export default PostLink