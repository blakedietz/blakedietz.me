import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      Well shit, looks like Blake made a mistake. The page couldn't be found.
    </p>
  </Layout>
)

export default NotFoundPage
