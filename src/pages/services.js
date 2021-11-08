import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Cta from "../../components/Cta/Cta"
import Footer from "../../components/Footer/footer"

import "../scss/services.scss"

import propertyImg from "../img/property-maintenance.jpg"
import lawnImg from "../img/lawn-care.jpg"
import landscapeImg from "../img/landscape.jpg"
import snowImg from "../img/snow.jpg"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Services - GGS Niagara Landscaping</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Services"
        description="Check out the services we offer below"
      />
      <InnerContent>
        <section className="inner services">
          <Container>
            <a id="property"></a>
            <Row>
              <Col lg="6">
                <div className="img-container">
                  <img
                    className="img-fluid"
                    src={propertyImg}
                    alt="property maintenance"
                  />
                </div>
              </Col>
              <Col lg="6">
                <h2>Property Maintenance</h2>
                <p>
                  We offer full service landscape maintenance to address all of
                  your property needs from regular cutting to fertilizing and
                  tree trimming.{" "}
                </p>
                <br />
                <ul>
                  <li>Lawn and garden maintenance</li>
                  <li>Mulching</li>
                  <li>Raking and removal of leaves and branches</li>
                  <li>Pruning of trees and shrubs</li>
                  <li>Garden edging</li>
                  <li>Annual planters</li>
                  <li>Interlock weed removal</li>
                  <li>Winterizing</li>
                  <li>And much more!</li>
                </ul>
              </Col>
            </Row>
            <a id="lawn"></a>
            <Row className="pd-top-30">
              <Col lg="6">
                <div className="img-container">
                  <img className="img-fluid" src={lawnImg} alt="Lawn Care" />
                </div>
              </Col>
              <Col lg="6">
                <h2>Lawn Care</h2>
                <p>
                  We want to keep your lawn looking healthy and beautiful, and
                  with over 10 years in the industry we know just how to achieve
                  this. Whether you are beginning to see yellow patches in your
                  grass, have damage due to insects or pests, or need to get rid
                  of weeds in your lawn we've got you covered.
                </p>
                <br />
                <p>What we offer:</p>
                <br />
                <ul>
                  <li>Topdressing and overseeding</li>
                  <li>Lawn and garden fertilization</li>
                  <li>Weed removal</li>
                  <li>Dethatching</li>
                  <li>Airaiting</li>
                </ul>
              </Col>
            </Row>
            <a id="landscape"></a>
            <Row className="pd-top-30">
              <Col lg="6">
                <div className="img-container">
                  <img
                    className="img-fluid"
                    src={landscapeImg}
                    alt="Landscape Design"
                  />
                </div>
              </Col>
              <Col lg="6">
                <h2>Landscape Design</h2>
                <p>
                  We would like to help you design your backyard oasis. Every
                  project begins with a design, and we will work with you to
                  ensure that the layout is not only beautiful but also
                  functional and fitting for your lifestyle.
                </p>
                <br />
                <p>Our services include:</p>
                <br />
                <ul>
                  <li>Garden bed design and planting</li>
                  <li>Tree and shrub install</li>
                </ul>
              </Col>
            </Row>
            <a id="snow"></a>
            <Row className="pd-top-30">
              <Col lg="6">
                <div className="img-container">
                  <img className="img-fluid" src={snowImg} alt="Snow Removal" />
                </div>
              </Col>
              <Col lg="6">
                <h2>Snow Removal</h2>
                <p>
                  We’ve got you covered during the winter months offering both
                  residential and commercial snow removal services. We
                  continuously monitor the weather to ensure that we are ready
                  to go as soon as a snow incident occurs. We are fully insured
                  and service the entire Niagara region.
                </p>
                <br />
                <p>What we offer:</p>
                <br />
                <ul>
                  <li>Residential and commercial snow plowing</li>
                  <li>Snow blowing</li>
                  <li>Shoveling of walkways</li>
                  <li>Salting and de-icing</li>
                </ul>
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
