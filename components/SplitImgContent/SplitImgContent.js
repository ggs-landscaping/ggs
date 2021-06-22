import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Title from "../Title/title"
import Button from "./../Button/button"

import "../SplitImgContent/split-img-content.scss"

const SplitImgContent = ({ img, subTitle, desc, btnText, btnLink }) => {
  return (
    <>
      <section className="split-img-content">
        <Container>
          <Row>
            <Col lg="6">
              <img className="img-fluid" src={img} alt={subTitle} />
            </Col>
            <Col lg="6">
              <Title title="We've perfected our craft in Niagara" />
              <h3>{subTitle}</h3>
              <p>{desc}</p>
              <Link to={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SplitImgContent
