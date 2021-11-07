import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import Button from "../Button/button"
import image from "../../src/img/niagara-on-the-lake-outdoor-landscaping-design-construction.png"

import "../Hero/hero.scss"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <Fade>
                <img
                  src={image}
                  alt="niagara landscaping design &amp; construction"
                />
              </Fade>
              <Fade delay={300}>
                <div className="box">
                  <h1>
                    Landscape design, Maintenance and construction servicing
                    <br /> the Niagara region
                  </h1>
                  <h2>Full Service Landscaping</h2>
                  <Link to="/quote">
                    <Button>Free Consultation</Button>
                  </Link>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
