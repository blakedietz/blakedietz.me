import React from "react"
import "./pill.css"

export const Pills = ({ pills }) => {
  return (
    <div className={`flex flex-row flex-wrap`}>
      {pills.map((text) => (
        <div key={text} className={`pill mr-2 mt-2`}>
          {text}
        </div>
      ))}
    </div>
  )
}
