import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Pills } from "../components/pill"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts
          .filter(post => post.frontmatter?.isPage !== true)
          .map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
                    <h2>
                      <Link to={post.frontmatter.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small style={{ color: `var(--color-roman-silver)`, flexShrink: 0, fontSize: `var(--fontSize-1)` }}>
                      <time dateTime={post.frontmatter.date}>
                        {post.frontmatter.date}
                      </time>
                    </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <div style={{ marginTop: `var(--spacing-3)` }}>
                    {post.frontmatter.tags && <Pills pills={post.frontmatter.tags} />}
                  </div>
                </article>
              </li>
            )
          })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { 
        frontmatter: { 
          draft: {ne: true} 
        }
      }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          slug
          date(formatString: "YYYY-MM-DD")
          isPage
          title
          description
          tags
        }
      }
    }
  }
`
