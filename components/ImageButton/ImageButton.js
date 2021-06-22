import React from "react"
import { Link } from "gatsby"
import Button from "./../Button/button"

import "../ImageButton/image-button.scss"

const ImageButton = ({ bgImage, title, btnLink, btnText }) => {
  return (
    <>
      <div
        className="img-box text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h3>{title}</h3>
        <Link to={btnLink}>
          <Button>{btnText}</Button>
        </Link>
      </div>
    </>
  )
}

export default ImageButton
