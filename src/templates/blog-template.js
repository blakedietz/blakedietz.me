import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getFormattedDate } from "../utils/utils"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <div>
          <div
            className={`flex flex-row justify-between content-center items-center`}
          >
            <h1>{frontmatter.title}</h1>
            <h2>{getFormattedDate(new Date(frontmatter.date))}</h2>
          </div>
          {tableOfContents && (
          <div>
            <h2>Table of contents</h2>
            <div className="table-of-contents" dangerouslySetInnerHTML={{__html: tableOfContents }}/>
          </div>
          )}
          <div
            className="blog-post-content list-disc list-decimal"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
