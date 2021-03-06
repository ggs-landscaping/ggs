import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../Footer/footer.scss"

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Have a project in mind?</h2>
              <p id="subtitle">
                Connect with us today for your free, no obligation consultation.
              </p>
            </Col>
            <Col lg="6" className="text-center">
              <Link to="/quote">
                <Button>Free Consultation</Button>
              </Link>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg="3">
              <p>
                10300 Stanley Ave.
                <br />
                Niagara Falls, Ontario
                <br />
                L2G 0V4
              </p>
            </Col>
            <Col lg="3">
              <p>
                Office: {""}
                <a href="tel:(905) 359-3748">(905) 359-3748</a>
              </p>
              <p>
                Direct: {""}
                <a href="tel:(905) 941-1575">(905) 941-1575</a>
              </p>
            </Col>
            <Col lg="3">
              <a href="mailto:admin@ggsniagara.ca">admin@ggsniagara.ca</a>
            </Col>
            <Col lg="3">
              <p className="grey">
                &copy; {new Date().getFullYear()} GGS Niagara Landscaping Inc.
                <br />
                All Rights Reserved. <br />
                <a href="https://infused.agency">Niagara web design</a> by
                Infused.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
