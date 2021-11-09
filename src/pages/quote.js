import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Cta from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Get A Quote - GGS Niagara Landscaping</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Get A Quote"
        description="Fill out the form below to get your free consultation."
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div class="form-group">
                        <label>
                          First Name<sup>*</sup>
                        </label>
                        <input
                          name="name"
                          type="name"
                          class="form-control"
                          id="First Name"
                          aria-describedby="namehelp"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div class="form-group">
                        <label>
                          Last Name<sup>*</sup>
                        </label>
                        <input
                          name="name"
                          type="name"
                          class="form-control"
                          id="Last Name"
                          aria-describedby="namehelp"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div class="form-group">
                        <label>
                          Email <sup>*</sup>
                        </label>
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div class="form-group">
                        <div class="form-group">
                          <label>
                            Phone<sup>*</sup>
                          </label>
                          <input
                            name="phone"
                            type="phone"
                            class="form-control"
                            id="Phone"
                            aria-describedby="urlhelp"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>
                        Tell us more about your project:<sup>*</sup>
                      </label>
                      <textarea
                        name="Tell Us More"
                        class="form-control"
                        id="Tell Us More"
                        rows="10"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button className="quote" type="submit">
                    Submit
                  </button>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                </form>
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
