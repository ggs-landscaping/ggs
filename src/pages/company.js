import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Cta from "../../components/Cta/Cta"
import Footer from "../../components/Footer/footer"

import img from "../img/craft.jpg"

const Company = () => {
  return (
    <>
      <Helmet>
        <title>Our Company - GGS Niagara Landscaping</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Our Company"
        description="Complete Property Maintence & Garden Design Services"
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row className="align-items-center">
              <Col lg="6">
                <div className="img-container">
                  <img className="img-fluid" src={img} alt="our company" />
                </div>
              </Col>
              <Col lg="6">
                <p>
                  GGS Niagara Landscaping Inc. offers full service landscape
                  maintenance and garden design. After completing Niagara
                  College’s Landscape Technician program in 2013 my career in
                  the industry took off. Since that time I have worked with
                  different companies as a crew supervisor looking after some of
                  Niagara's finest landscapes. Over the years I have kept up
                  with the latest trends and knowledge to ensure each client
                  gets the best possible service.
                  <br />
                  <br />
                  From using organic bee safe fertilizer, to water management
                  practices not only will you have a beautiful landscape but it
                  will also be healthy, and good for the planet. With Nearly 10
                  years in the landscape industry I have learnt a lot about what
                  works and what doesn't, this can help save you time and money
                  by making sure the work is done right the first time.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Cta />
      <Footer />
    </>
  )
}

export default Company
