import React from "react"

export const Pills = ({ pills }) => {
  return (
    <div className={`flex flex-row flex-wrap`}>
      {pills.map((text, index) => (
        <div key={text} style={{
          display: `inline-flex`,
          flexGrow: 0,
          backgroundColor: `var(--color-hot-pink)`,
          color: `var(--color-raisin-black)`,
          fontFamily: `var(--fontFamily-sans)`,
          borderRadius: `9999px`,
          padding: `0.25rem 0.5rem`,
          lineHeight: `1rem`,
          marginLeft: index === 0 ? "0px" : `var(--spacing-2)`,
        }}>
          {text}
        </div>
      ))}
    </div>
  )
}
