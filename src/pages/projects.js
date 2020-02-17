import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkList from "../components/link-list"

const codeSites = [
  { name: "GitHub", link: "https://github.com/blakedietz" },
  { name: "StackOverflow", link: "https://stackoverflow.com/users/1148547/arete" },
  { name: "npm", link: "https://www.npmjs.com/~blakedietz" },
]

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects"/>
    <h1>Projects</h1>

    <h2>Code</h2>
    <LinkList sites={codeSites}/>

    <h2>plott.id</h2>

    <p>A selection of generative algorithms re-implemented in React and browser technologies well fit for pen
      plotting.</p>
    <p><a href="https://plott.id">https://plott.id</a></p>

    <h2>Nested tags</h2>
    <p>A vs code plugin designed to organize your markdown notes by using arbitrary tagging and nested tagging. Stop
      using your file tree to organize your notes, use nested tags instead.</p>
    <p><a
      href="https://marketplace.visualstudio.com/items?itemName=vscode-nested-tags.vscode-nested-tags">vs-code-nested-tags</a>
    </p>

    <h2>kbd-prettier</h2>
    <p>Make your keyboard layouts pretty &#x2328;&#xFE0F;&#x1F485;&#x2728;.</p>
    <p>This tool automatically makes your keyboard layout uniform. That&apos;s right, no more updating your layouts by
      hand after you make changes. Just create a layout in the layouts.json file and add the necessary directives to
      your layout blocks then run the script against the keymap you want to prettify. For an added bonus, add a watcher
      script to your editor of choice to have the layouts get automatically prettified upon save.</p>
    <p><a href="https://www.npmjs.com/package/kbd-prettier">kbd-prettier</a></p>

    <h2>js-live-templates</h2>

    <p>An extensive set of Javascript live templates for use in JetBrains IDEs. These live templates are based off of <a
      href="https://atom.io/packages/es6-javascript">https://atom.io/packages/es6-javascript</a>.</p>
    <p><a href="https://github.com/blakedietz/js-live-template">js-live-templates</a></p>

    <h2>Treefort music fest</h2>

    <p>I worked on the Treefort music festival mobile application and backing api for a few years as a volunteer.</p>
    <h3>Built and deployed serverless apis</h3>

    <p>I wrote the backing api in AWS Lambda, DynamoDB and APIGateway. During the last two years the api handled over 1m
      requests within the festival timeframe each year. The api had an etl process that gathered backing data. There was
      also a ci/cd pipeline for each environment to enable iterative feature development.</p>
    <h3>Hybrid application development</h3>

    <p>I helped write the first iteration of the application in the Ionic framework. We were tasked with maintaining and
      rewriting the application and decided to go with a hybrid solution. This allowed us to write code that was
      deployed
      to both iOS and Android.</p>
    <p><a href="https://www.treefortmusicfest.com/app/">Treefort music fest apps</a></p>
  </Layout>
)

export default ProjectsPage
