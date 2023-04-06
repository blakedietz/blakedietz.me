import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Technologies } from "../components/technologies"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Blake Dietz</h1>
    <p>
      Proto-mathematician, computer scientist, cyclist at heart. I love
      discovering through the learning process.
    </p>
    <h2>Contact</h2>
    <ul>
      <li>
        Email: <a href="mailto:blakedietz@gmail.com">blakedietz@gmail.com</a>
      </li>
      <li>Phone: +12085771368</li>
      <li>
        Website: <a href="https://blakedietz.me">https://blakedietz.me</a>
      </li>
      <li>
        Linkedin:{" "}
        <a href="https://www.linkedin.com/in/blake-dietz-08229a61/">
          https://www.linkedin.com/in/blake-dietz-08229a61
        </a>
      </li>
    </ul>
    <h2>Education</h2>
    <h3>Bachelor of Science in Applied Mathematics, minor in Computer Science: Boise State University</h3>
    <div className={`mx-2`}>
      <h4>2009-2014</h4>
    </div>
    <h2>Projects</h2>
    View a list of personal projects I've built{" "}
    <a href="/projects">here</a>.
    <h2>Experience</h2>
    <h3>Owner: Cyberdeck LLC</h3>
    <div className={`mx-2`}>
      <h4>2021/07/01 - Present</h4>
      <Technologies
        tech={[
          "Elixir",
          "Phoenix",
          "Postgres",
          "Liveview",
          "TypeScript",
          "GraphQL",
          "React",
        ]}
      />
    </div>
    <h3>
      Founding engineer: <a href="https://www.elegysoftware.com">elegy software</a>
    </h3>
    <div className={`mx-2`}>
      <h4>2022/06/20 - Present</h4>
      <p>As one of two founding engineers, I directly impacted our customers' experience while also contributing significantly to the development of the Phoenix LiveView codebase.
        My involvement spanned almost every aspect of product delivery, from conducting on-site follow-me-home research with customers to identify potential features, to assisting
        in building the SaaS product from scratch, epitomizing the full-stack role.
      </p>

      <p>Here are some specific examples of features and domains I've helped shape:</p>
      <ul>
        <li>Developed a comprehensive, customizable invoicing system tailored to the customer domain, which directly contributed to customer acquisition.</li>
        <li>Constructed an internal component ecosystem to expedite and standardize feature delivery across the product.</li>
        <li>Designed and implemented app-wide mobile support.</li>
        <li>Incorporated error logging and user interaction instrumentation for analytics.</li>
        <li>Advocated for app-wide user experience enhancements, such as redesigning page information hierarchy and implementing autosave functionality.</li>
        <li>Devised and prototyped cutting-edge EDRS integrations.</li>
        <li>Prioritized and scoped issues based on customer feedback.</li>
      </ul>
      <Technologies
        tech={["Elixir", "Phoenix", "Tailwind", "LiveView", "Postgres", "GitHub Actions", "AWS Fargate", "DataDog", "Sentry", "fly.io"]}
      />
    </div>
    <h3>
      Senior software engineer: <a href="https://www.intuit.com">Intuit</a>
    </h3>
    <div className={`mx-2`}>
      <h4>2021/05/01 - 2022/06/01</h4>
      <h5>Team: Growth</h5>
      <Technologies
        tech={["TypeScript", "GraphQL", "React", "Amplitude", "Splunk"]}
      />
    </div>
    <h3>
      Integrations engineer: <a href="https://www.instinct.vet">Instinct</a>
    </h3>
    <div className={`mx-2`}>
      <h4>2020/10/05 - 2021/01/28</h4>
      <Technologies
        tech={[`Elixir`, `OTP`, `Postgres`, `Erlang`, `GraphQL`, `REST`]}
      />
    </div>
    <h3>
      Full stack software engineer:{" "}
      <a href="https://www.vetspire.com">Vetspire</a>
    </h3>
    <div className={`mx-2`}>
      <h4>2019/12/09 - 2020/09/03</h4>
      <h5>Dedicated engineer for PETCO</h5>
      <p>
        Worked with project managers and engineers at Petco to gather
        requirements, understand customer problems and plan bodies of work.
        Features that are built based upon Petco's request are implemented with
        all Vetspire customers in mind.
      </p>
      <Technologies
        tech={[
          `Elixir`,
          `Phoenix`,
          `Postgres`,
          `GraphQL`,
          `React`,
          `GCP`,
          `Kubernetes`,
          `Erlang`,
          `Github Actions`,
        ]}
      />
    </div>
    <h3>
      Senior software engineer:
      <a href="https://www.intuit.com"> Intuit</a>
    </h3>
    <div className={`mx-2`}>
      <h4>2019/03/01 - 2019/12/09</h4>
      <h5>Team: Developer experience </h5>
      <p>
        Responsible for creating a paved road development experience for a team
        of 90+ engineers with a primary focus on the backend. Challenges
        included transitioning the full team of developers from SVN to git,
        creating continuous delivery, integration and deployment pipelines in
        Kubernetes while also streamlining all aspects of the development
        process.
      </p>
      <h4> 2018/01/11 - 2019/03/01 </h4>
      <h5>Team: Core</h5>
      <p>
        Adopted and advocated for React as the frontend technology of choice for
        all frontend feature development at TSheets. Projects and
        responsibilities included the following:
      </p>
      <ul>
        <li>
          Acted as a consultant for feature development in React and Redux to
          encourage best practices.
        </li>
        <li>
          Communicated with both designers and developers to build a shared
          design system and library so developers could focus on feature
          development.
        </li>
        <li>
          Reduced boilerplate and encouraged best practices by creating
          generators for frontend features.
        </li>
        <li>
          Created a single step setup process for developers to register their
          new projects with the CI/CD pipeline.
        </li>
        <li>
          Empowered developers to create npm packages by creating a streamlined
          workflow for repositories to be automatically and semantically
          versioned and published based upon commit format.
        </li>
        <li>
          Ran multiple new hire trainings for React and Redux development
          practices.
        </li>
      </ul>
      <Technologies
        tech={[
          `node.js`,
          `AWS`,
          `DynamoDB`,
          `AWS Lambda`,
          `Jenkins`,
          `Docker`,
          `Kubernetes`,
          `CircleCI`,
        ]}
      />
    </div>
    <h3>
      Senior software engineer: <a href="https://www.tsheets.com">TSheets</a>
    </h3>
    <div className={`mx-2`}>
      <h4>2017/10/30 - 2018/01/10</h4>
      <h5>Team: Core</h5>
      <p>Acquired by Intuit while in this position. See above.</p>

      <h4>2016/10/31 - 2017/10/30</h4>
      <h5>Team: Scheduling</h5>
      <p>
        While on the scheduling team I identified the need to develop more
        quickly with fewer mistakes. Our frontend codebase was extremely
        susceptible to the CACE principle and I felt React's emphasis on
        declarative ui and simple state flow helped to address some of the
        problems that caused the CACE issue. I wrote the first feature in React
        and helped grow the learnings that I took from integrating React into
        the product into a plan for the rest of the organization to use.
      </p>
      <ul>
        <li>Implemented the first feature in React at TSheets.</li>
        <li>
          Extended the scheduling application to support more rich notification
          support.
        </li>
        <li>
          Fixed complex performance and printing bugs with legacy browsers.
        </li>
      </ul>
      <Technologies
        tech={[
          `PHP`,
          `Mysql`,
          `React`,
          `Redux`,
          `esNext`,
          `jQuery`,
          `CircleCI`,
        ]}
      />
    </div>
    <h3>
      Volunteer software engineer:{" "}
      <a href="https://www.treefortmusicfest.com">Treefort music festival</a>
    </h3>
    <div className={`mx-2`}>
      <p>
        Volunteered for a local music festival for a few years. This helped to
        scratch my itch to learn about deploying to AWS while also deploying a
        cross platform mobile application and getting a sneak peak at the artist
        lineups.
      </p>
      <h4>2017/08 - 2017/10</h4>
      <p>
        Continued to maintain and tune the backend API. Successfully served over
        one million requests throughout the duration of the festival.
      </p>
      <h4>2016/10 - 2017/03</h4>
      <p>
        Built, maintained and deployed a backend api to AWS Lambda, DynamoDB and
        API Gateway. Helped to maintain the mobile application from the previous
        year.
      </p>
      <h4> 2015/08 - 2016/05 </h4>
      <p>Lead frontend development for the application rewrite.</p>
      <Technologies
        tech={[
          `node.js`,
          `DynamoDB`,
          `AWS`,
          `AWS Lambda`,
          `Ionic`,
          `Angular v1.7`,
          `Cordova`,
        ]}
      />
    </div>
    <h3>
      Software engineer:{" "}
      <a href="https://www.whitecloud.com">WhiteCloud Analytics </a>
    </h3>
    <div className={`mx-2`}>
      <p>
        At WhiteCloud I grew from intern to a competent engineer with a penchant
        for frontend development.
      </p>

      <h4>2014/06 - 2016/10</h4>
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
        Focused on creating a customized charting solution in D3.js to power
        specialized data visualizations for physicians to better understand
        healthcare data.
      </p>
      <Technologies
        tech={[
          `Java`,
          `Spring`,
          `MySQL`,
          `javascript`,
          `d3.js`,
          `Angular`,
          `webpack`,
          `backbone.js`,
        ]}
      />
    </div>
  </Layout>
)

export default ResumePage
