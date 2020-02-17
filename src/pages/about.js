import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <h1>About</h1>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <p>
      I'm a software developer that lives in Boise, ID. I have a
      <a href={"https://instagram.com/allyan_na"}> partner</a> and a <a
      href={"https://instagram.com/velo.dog"}>pupper</a> that I spend my spare time with. I'm a life long learner, that
      spends way too much time tinkering. My hobbies include vintage pen restoration, keyboard building, mountain
      biking, kombucha brewing, lifting and rock climbing.
    </p>
  </Layout>
)

export default AboutPage
