import React from "react"
import { Container, Row, Col } from "reactstrap"
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
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <Title title="Our Services" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <ImageButton
              title="Property Maintenance"
              btnLink="/services#property"
              btnText="Learn More"
              bgImage={imgOne}
            />
          </Col>
          <Col lg="6">
            <ImageButton
              title="Lawn Care"
              btnLink="/services#lawn"
              btnText="Learn More"
              bgImage={imgTwo}
            />
          </Col>
        </Row>
        <Row className="two">
          <Col lg="6">
            <ImageButton
              title="Landscape Design"
              btnLink="/services#landscape"
              btnText="Learn More"
              bgImage={imgThree}
            />
          </Col>
          <Col lg="6">
            <ImageButton
              title="Snow Removal"
              btnLink="/snow#lawn"
              btnText="Learn More"
              bgImage={imgFour}
            />
          </Col>
        </Row>
      </Container>
      <SplitImgContent
        img={craftImg}
        subTitle="Turn your Niagara outdoors into a work of art."
        desc="We work with the customer to achieve a desired look to suit their property and needs. Making sure its not only beautiful but also functional, getting the most use out of their space. This can include adding vegetable and herb plants among perennials that add to the garden in both form and function."
        btnText="About Us"
        btnLink="/about"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
