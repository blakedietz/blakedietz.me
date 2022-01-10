/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
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
      <div className="layout">
        <div className="header">
          <Link to="/" className={`home-link text-mustard text-xl`}>
            {data.site.siteMetadata.title}
            <span id="cursor">|</span>
          </Link>
          <div className={`nav-bar`}>
            <div className={`link-blog mr-2`}>
              <Link to="/">blog</Link>
            </div>
            <div className={`link-about mr-2`}>
              <Link to="/about">about</Link>
            </div>
            <div className={`link-projects mr-2`}>
              <Link to="/projects">projects</Link>
            </div>
            <div className={`link-resume mr-2`}>
              <Link to="/resume">resume</Link>
            </div>
            <div className={`link-social mr-2`}>
              <Link to="/social">social</Link>
            </div>
          </div>
        </div>
        <main className={`content`}>{children}</main>
        <footer className={`footer my-8 w-full text-roman-silver`}>
          <div className={`flex flex-col text-xs`}>
            <div>
              <a href="https://github.com/blakedietz/blakedietz.me">
                Made with ❤️ by @blakedietz.{" "}
              </a>
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
