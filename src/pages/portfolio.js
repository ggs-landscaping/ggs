import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Cta from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import ImageButton from "../../components/ImageButton/ImageButton"

import hoppyImg from "../img/property-maintenance.jpg"
import riverImg from "../img/river-1.jpg"

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - GGS Niagara Landscaping</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Portfolio"
        description="Check out our portfolio items below"
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="6">
                <ImageButton
                  title="Hoppy's Bed and Breakfast"
                  btnLink="/hoppys"
                  btnText="View"
                  bgImage={hoppyImg}
                />
              </Col>
              <Col lg="6">
                <ImageButton
                  title="RiverBrink Art Museum"
                  btnLink="/riverbrink"
                  btnText="View"
                  bgImage={riverImg}
                />
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

export default Portfolio
