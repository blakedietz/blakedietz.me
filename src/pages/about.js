import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{ width: "100%", display: "grid", gridGap: "25px", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", marginBottom: `1.45rem` }}>
        <p>
          I'm a human who codes (sometimes known as a software engineer). I'm located in Boise, ID. Allyanna Wintermote
          is my <a href={"https://instagram.com/allyan_na"}> partner</a>. Velo is my{" "}
          <a href={"https://instagram.com/velo.dog"}>pupper</a>. I'm a lifelong learner. My hobbies include vintage pen
          restoration, keyboard building, mountain biking, kombucha brewing, lifting and rock climbing.
        </p>
        <Image />
      </div>
    </div>
  </Layout>
)

export default AboutPage
