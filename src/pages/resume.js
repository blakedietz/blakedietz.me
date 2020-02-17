import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./resume.css"

const Pills = (({ pills }) => {
  return (
    <div className={`flex flex-row flex-wrap`}>
      {pills.map((text) => <div key={text} className={`pill mr-2 mt-2`}>{text}</div>)}
    </div>
  )
})

const Technologies = ({ tech }) => {
  return (
    <>
      <h5>Technologies</h5>
      <Pills pills={tech}/>
    </>
  )
}

const ResumePage = () => (
  <Layout>
    <SEO title="Resume"/>
    <h1>Blake Dietz</h1>
    <p>
      Proto-mathematician, computer scientist, cyclist at heart. I love discovering through the learning
      process.
    </p>


    <h2>Contact</h2>
    <ul>
      <li>Email: blakedietz@gmail.com</li>
      <li>Phone: +12085771368</li>
      <li>Website: https://blakedietz.me</li>
      <li>Linkedin: https://www.linkedin.com/in/blake-dietz-08229a61/</li>
    </ul>

    <h2>Experience</h2>
    <h3>Full stack software engineer: Vetspire</h3>
    <div className={`mx-2`}>
      <Technologies tech={[
        `Elixir`, `Phoenix`, `Postgres`, `GraphQL`, `React`, `GCP`,
      ]}/>
      <h4>2019/12/09 - Present</h4>
      <p>
        Vetspire is an artificial intelligence driven veterinary medical records and practice management platform. The
        company is a startup re-imagining the way that veterinarians use technology, impacting every aspect of patient
        care from AI assistance in the exam room to managing client communications and clinical analytics.
      </p>
      <h5>
        Petco
      </h5>
      <p>
        From day to day I communicate with project managers and engineers at Petco to gather requirements, understand
        customer problems and plan bodies of work. Features that are built based upon Petco's request are implemented
        with all Vetspire customers in mind.
      </p>
    </div>

    <h3>Senior software engineer: Intuit</h3>
    <div className={`mx-2`}>
      <Technologies tech={[
        `node.js`, `AWS`, `DynamoDB`, `AWS Lambda`, `Jenkins`, `Docker`, `Kubernetes`,
      ]}/>
      <h4>2019/03/01 - 2019/12/09</h4>
      <h5>Team: Developer experience </h5>
      <p>
        I was responsible for creating a seamless development experience for a team of 90+ engineers with a primary
        focus on the backend. Challenges included transitioning the full team of developers from SVN to git, creating
        continuous delivery, integration and deployment pipelines in Kubernetes while also streamlining all aspects of
        the development process.
      </p>
      <h4> 2018/01/11 - 2019/03/01 </h4>
      <h5>Team: Core</h5>
      <p>
        Adopted and advocated for React as the frontend technology of choice for all frontend feature development at
        TSheets. Projects and responsibilites included the following:
      </p>
      <ul>
        <li>Acted as a consultant for feature development in React and Redux to encourage best practices.</li>
        <li>Communicated with both designers and developers to build a shared design system and library so developers
          could focus on feature development.
        </li>
        <li>Reduced boilerplate and encouraged best practices by creating generators for frontend features.</li>
        <li>Created a single step setup process for developers to register their new projects with the CI/CD pipeline.
        </li>
        <li>Empowered developers to create npm packages by creating a streamlined workflow for repositories to be
          automatically and semantically versioned and published based upon commit format.
        </li>
        <li>Ran multiple new hire trainings for React and Redux development practices.</li>
      </ul>
    </div>
    <h3>Senior software engineer: TSheets</h3>
    <div className={`mx-2`}>
      <Technologies tech={[
        `php`, `mysql`, `react`, `redux`, `esNext`, `jQuery`,
      ]}/>
      <h4>2017/10/30 - 2018/01/10</h4>
      <h5>Team: Core</h5>
      <p>
        Acquired by Intuit while in this position. See above.
      </p>

      <h4>2016/10/31 - 2017/10/30</h4>
      <h5>Team: Scheduling</h5>
      <p>
        While on the scheduling team I identified the need to develop more quickly with fewer mistakes. Our frontend
        codebase was extremely susceptible to the CACE principle and I felt React's emphasis on declarative ui and
        simple state flow helped to address some of the problems that caused the CACE issue. I wrote
        the first feature in React and helped grow the learnings that I took from integrating React into the product
        into
        a
        plan for the rest of the organization to use.
      </p>
      <ul>
        <li>Implemented the first feature in React at TSheets.</li>
        <li>Extended the scheduling application to support more rich notification support.</li>
        <li>Fixed complex performance and printing bugs with legacy browsers.</li>
      </ul>
    </div>
    <h3>
      Volunteer software engineer: Treefort music festival
    </h3>
    <div className={`mx-2`}>
      <Technologies tech={[
        `node.js`, `DynamoDB`, `AWS`, `AWS Lambda`, `Ionic`, `Angular v1.7`, `Cordova`,
      ]}/>
      <p>
        I volunteered for a local music festival for a few years. This helped to scratch my itch to learn about
        deploying to AWS while also deploying a cross platform mobile application and getting a sneak peak at the artist lineups.
      </p>
      <h4>2017/08 - 2017/10</h4>
      <p>
        Continued to maintain and tune the backend API. Successfully served over one million requests throughout the
        duration of the festival.
      </p>
      <h4>
        2016/10 - 2017/03
      </h4>
      <p>
        Built, maintained and deployed a backend api to AWS Lambda, DynamoDB and API Gateway.
        Helped to maintain the mobile application from the previous year.
      </p>
      <h4> 2015/08 - 2016/05 </h4>
      <p>
        Lead frontend development for the application rewrite.
      </p>
    </div>
    <h3> Software engineer: WhiteCloud Analytics </h3>
    <div className={`mx-2`}>
      <Technologies tech={[
        `Java`, `Spring`, `MySQL`, `javascript`, `d3.js`, `Angular`, `webpack`, `backbone.js`,
      ]}/>
      <p>
        At WhiteCloud I grew from intern to a competent engineer with a penchant for frontend development.
      </p>

      <h4>
        2014/06 - 2016/10
      </h4>
      <h5>Software engineer</h5>

      <p>
        Built the first Single page application at WhiteCloud in Angular.js.
      </p>
      <ul>
        <li>Became the subject matter expert for Angular.js.</li>
        <li>Established best practices for the frontend through training.</li>
      </ul>
      <h4> 2013/04 - 2014/06 </h4>
      <h5> Intern </h5>
      <p>
        Focused on creating a customized charting solution in D3.js to power specialized data visualizations for
        physicians to better understand healthcare data.
      </p>
    </div>
  </Layout>
)

export default ResumePage
