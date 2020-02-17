import React from "react"

const LinkList = ({ sites }) => (
  <ul>
    {sites.map(({ name, link }) => {
      return (
        <li key={name}><a href={link}>{name}</a></li>
      )
    })}
  </ul>
)

export default LinkList
