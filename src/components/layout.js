/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "./prism.css"
import "../utils/ascii"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={`container flex flex-col min-h-screen`}>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <main className={`flex-grow`}>
            {children}
        </main>
        <footer className={`my-8 w-full text-roman-silver`}>
          <div className={`flex flex-col text-xs`}>
            <div>
              <a href="https://github.com/blakedietz/blakedietz.me">Made with ❤️ by @blakedietz. </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
