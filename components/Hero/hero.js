import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
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
              <img
                src={image}
                alt="niagara-on-the-lake outdoor landscaping design &amp; construction"
              />
              <div className="box">
                <h1>
                  Niagara-on-the-Lake Outdoor Landscaping Design &amp;
                  Construction
                </h1>
                <h2>Full Service Landscaping</h2>
                <Link to="/get-a-quote">
                  <Button>Free Consultation</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
