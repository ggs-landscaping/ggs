import React from "react"

import "../Title/title.scss"

const Title = ({ title }) => {
  return (
    <>
      <div className="title">
        <h2>{title}</h2>
        <hr />
      </div>
    </>
  )
}

export default Title
