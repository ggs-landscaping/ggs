import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Cta from "../../components/CTA/Cta"
import Footer from "../../components/Footer/footer"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - GGS Niagara Landscaping</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero title="Contact Us" description="description" />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <p>content</p>
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

export default About
