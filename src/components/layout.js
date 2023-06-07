import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav class="site-navigation" style={{ display: `flex`, justifyContent: `space-between` }}>
      <Link to="/">blog</Link>
      <Link to="/about">about</Link>
      <Link to="/projects">projects</Link>
      <Link to="/resume">resume</Link>
      <Link to="/social">social</Link>
      <Link to="/uses">uses</Link>
    </nav>
  )
};

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <Navigation />
      </>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <Navigation />
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with ❤️ by Blake Dietz
      </footer>
    </div>
  )
}

export default Layout
