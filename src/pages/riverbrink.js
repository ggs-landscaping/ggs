import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "../scss/image-gallery.scss"

import image1 from "../img/hoppys-1.jpg"
import image2 from "../img/hoppys-2.jpg"
import image3 from "../img/hoppys-3.jpg"

const handleDragStart = e => e.preventDefault()

const items = [
  <img src={image1} onDragStart={handleDragStart} role="presentation" />,
  <img src={image2} onDragStart={handleDragStart} role="presentation" />,
  <img src={image3} onDragStart={handleDragStart} role="presentation" />,
]

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
                <AliceCarousel mouseTracking items={items} />
                <h2>What We Did</h2>
                <p>
                  Hoppy’s Bed and Breakfast was looking to create a new front
                  garden alongside their driveway. GGS was hired to plan and
                  design the project using armour stone to create the wall. GGS
                  also picked out and planted all of the flowers to complete the
                  look.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default RiverBrink
