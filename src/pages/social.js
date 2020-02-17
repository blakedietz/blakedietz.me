import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkList from "../components/link-list"

const socialSites = [
  { name: "Goodreads", link: "https://www.goodreads.com/user/show/34266166-blake-dietz" },
  { name: "Keybase", link: "https://keybase.io/blakedietz" },
  { name: "Last.fm", link: "https://www.last.fm/user/ph3arl3ss" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/blake-dietz-08229a61/" },
  { name: "Meetup", link: "http://www.meetup.com/frontend-devs/" },
  { name: "Strava", link: "https://www.strava.com/athletes/105299" },
  { name: "Twitter", link: "https://twitter.com/DietzTweetz" },
  { name: "YouTube", link: "https://www.youtube.com/user/BlakeDietz/videos?shelf_id=0&view=0&sort=dd" },
]
const SocialPage = () => (
  <Layout>
    <SEO title="Social"/>
    <h1>Social</h1>
    <LinkList sites={socialSites}/>
  </Layout>
)

export default SocialPage
