import React from "react"
import { Pills } from "./pill"

export const Technologies = ({ tech }) => {
  return (
    <>
      <h5>Technologies</h5>
      <Pills pills={tech}/>
    </>
  )
}