import React from "react"
import { Link } from "gatsby"
import { getFormattedDate } from "../utils/utils"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({getFormattedDate((new Date(post.frontmatter.date)))})
    </Link>
  </div>
)

export default PostLink