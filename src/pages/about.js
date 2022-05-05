import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <h2>🧑‍💻 Me 🚲</h2>
    <h3>Hobbies</h3>
    <h4>Current</h4>
    <ul>
      <li>Traditional weight lifting</li>
      <li>Mountain biking</li>
      <li>PC gaming</li>
    </ul>
    <h4>Past</h4>
    <ul>
      <li>Archival book scanning</li>
      <li>Concert band</li>
      <li>Generative art</li>
      <li>Hi-fi audio</li>
      <li>Keyboard building</li>
      <li>Kombucha brewing</li>
      <li>Marching band</li>
      <li>Pen plotting</li>
      <li>Photoshop tennis</li>
      <li>Rock climbing</li>
      <li>Taekwondo</li>
      <li>Vintage pen collection and restoration</li>
      <li>Yo-yoing</li>
    </ul>

    <h2>👫 Family 🐕</h2>
    <p>
      <a href={"https://instagram.com/allyan_na"}>Allyanna Wintermote</a> is my
      partner. <a href={"https://instagram.com/velo.dog"}>Velo</a> is my dog.
    </p>

    <h2>🪴 This site 🌿</h2>
    <p>
      This site is more of a digital garden than it is a blog. I post here more
      as a way of solidifying my knowledge than in hopes of garnering an
      audience. The process of publishing something has a sort of effect on
      turning the conceptual into the concrete; perhaps it's the writing
      process, or perhaps it's knowing that it might be public. Either way, if
      you do end up finding this garden helpful, that's even better. 😄
    </p>
  </Layout>
)

export default AboutPage
