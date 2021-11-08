import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Cta from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import "react-alice-carousel/lib/alice-carousel.css"
import "../scss/image-gallery.scss"

import image1 from "../img/river-1.jpg"

const RiverBrink = () => {
  return (
    <>
      <Helmet>
        <title>RiverBrink Art Museum - GGS Niagara Landscaping</title>
        <meta
          name="description"
          content="Check out the RiverBrink Art Museum project from GGS Niagara Landscaping. Click here now."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="RiverBrink Art Museum"
        description="Check out the project we did for RiverBrink Art Museum below"
      />
      <InnerContent>
        <section className="inner">
          <Container>
            <Row>
              <Col lg="12">
                <img className="pd-btm-30" src={image1} alt="riverbrink" />
                <h2>What We Did</h2>
                <p>
                  RiverBrink Art Museum wanted to create an eye popping annual
                  bed beside their entryway to welcome their guests. GGS was
                  hired to create the design and do the planting to achieve this
                  goal. GGS used a combination of shorter and higher plants to
                  optimize the space. They also managed to have colour all
                  season long by selecting plants that would flower during
                  different times throughout the spring and summer.
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

export default RiverBrink
