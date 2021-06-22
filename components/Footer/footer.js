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
              <p>
                Connect with us today for your free, no obligation consultation.
              </p>
            </Col>
            <Col lg="6">
              <Link to="/get-a-quote">
                <Button>Free Consultation</Button>
              </Link>
            </Col>
          </Row>
          <Row className="btm">
            <Col lg="3">
              <p>
                3842 Orlando Dr.
                <br />
                Niagara Falls, Ontario
                <br />
                L2J 4B7
              </p>
            </Col>
            <Col lg="3">
              <a href="tel:(905) 941-1575">(905) 941-1575</a>
            </Col>
            <Col lg="3">
              <a href="mailto:ggsniagara@gmail.com">ggsniagara@gmail.com</a>
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
