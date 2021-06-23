import React from "react"
import Fade from "react-reveal/Fade"

import "../innerContent/inner-content.scss"

const InnerContent = props => {
  return (
    <>
      <Fade delay={300}>
        <section className="inner-content">{props.children}</section>
      </Fade>
    </>
  )
}

export default InnerContent
