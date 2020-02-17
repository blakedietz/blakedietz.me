import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className={`my-8 w-full h-7 flex flex-row `}>
    <div className={`flex flex-col w-full`}>
      <div className={`mb-8`}>
        <Link
          to="/"
          className={`text-mustard text-xl`}
        >
          {siteTitle}<span id="cursor">|</span>
        </Link>
      </div>
      <div className={`flex flex-row flex-wrap `}>
        <div className={`mr-2`}>
          <Link
            to="/blog-posts"
          >
            blog
          </Link>
          {` | `}
        </div>
        <div className={`mr-2`}>
          <Link
            to="/about"
          >
            about
          </Link>
          {` | `}
        </div>
        <div className={`mr-2`}>
          <Link
            to="/projects"
          >
            projects
          </Link>
          {` | `}
        </div>
        <div className={`mr-2`}>
          <Link
            to="/resume"
          >
            resume
          </Link>
          {` | `}
        </div>
        <div className={`mr-2`}>
          <Link
            to="/social"
          >
            social
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
