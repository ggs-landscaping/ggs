import React from "react"
import { Container, Row, Col } from "reactstrap"
import Fade from "react-reveal/Fade"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Hero/hero"
import Title from "../../components/Title/title"
import ImageButton from "../../components/ImageButton/ImageButton"
import imgOne from "../img/property-maintenance.jpg"
import imgTwo from "../img/lawn-care.jpg"
import imgThree from "../img/landscape.jpg"
import imgFour from "../img/snow.jpg"
import SplitImgContent from "../../components/SplitImgContent/SplitImgContent"
import craftImg from "../img/craft.jpg"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/general.scss"
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Niagara-on-the-Lake Outdoor Landscaping Design &amp; Construction
        </title>
        <meta
          name="description"
          content="Niagara-on-the-Lake Outdoor Landscaping Design &amp; Construction Full Service Landscaping. Click here to learn more."
        />
      </Helmet>
      <Nav />
      <Hero />
      {/* Services */}
      <section id="grey">
        <Fade>
          <Container>
            <Row>
              <Col lg="12" className="text-center pd-btm-30">
                <Title title="Our Services" />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Fade delay={300}>
                  <ImageButton
                    title="Property Maintenance"
                    btnLink="/services#property"
                    btnText="Learn More"
                    bgImage={imgOne}
                  />
                </Fade>
              </Col>
              <Col lg="6" className="pd-top-20-mb">
                <Fade delay={500}>
                  <ImageButton
                    title="Lawn Care"
                    btnLink="/services#lawn"
                    btnText="Learn More"
                    bgImage={imgTwo}
                  />
                </Fade>
              </Col>
            </Row>
            <Row className="pd-top-30">
              <Col lg="6">
                <Fade delay={800}>
                  <ImageButton
                    title="Landscape Design"
                    btnLink="/services#landscape"
                    btnText="Learn More"
                    bgImage={imgThree}
                  />
                </Fade>
              </Col>
              <Col lg="6" className="pd-top-20-mb">
                <Fade delay={1100}>
                  <ImageButton
                    title="Snow Removal"
                    btnLink="/services#snow"
                    btnText="Learn More"
                    bgImage={imgFour}
                  />
                </Fade>
              </Col>
            </Row>
          </Container>
        </Fade>
      </section>
      <div className="pd-top-btm-120">
        <SplitImgContent
          img={craftImg}
          subTitle="Turn your Niagara outdoors into a work of art."
          desc="We work with the customer to achieve a desired look to suit their property and needs. Making sure its not only beautiful but also functional, getting the most use out of their space. This can include adding vegetable and herb plants among perennials that add to the garden in both form and function."
          btnText="About Us"
          btnLink="/company"
        />
      </div>
      <CTA />
      <Footer />
    </>
  )
}

export default Home
