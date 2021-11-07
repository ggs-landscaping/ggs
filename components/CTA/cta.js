import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"
import Title from "../Title/title"

import "../CTA/cta.scss"

const Cta = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <Title title="Our Portfolio" />
              <h3>Check out the work we've done for our Niagara clients.</h3>
              <Link to="/portfolio">
                <Button>View Portfolio</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Cta
