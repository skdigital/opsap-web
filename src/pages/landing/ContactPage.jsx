import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput
} from 'mdbreact';

const ContactPage = () => {
  return (
    <React.Fragment>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Welcome to OPSAP, we are extremely excited that you found us, we are
          making huge strides and progress in building fluid streamlines
          applications that will make the process of listing or applying for
          work much easier. Please feel free to contact us if you require
          further information or are looking to partner with us.
        </p>
        <MDBRow>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header blue accent-1">
                  <h3 className="mt-2">
                    <MDBIcon icon="envelope" /> Write to us:
                  </h3>
                </div>
                <p className="dark-grey-text">
                  We'll write rarely, but only the best content.
                </p>
                <div className="md-form">
                  <MDBInput
                    icon="user"
                    label="Your name"
                    iconClass="grey-text"
                    type="text"
                    id="form-name"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Your email"
                    iconClass="grey-text"
                    type="text"
                    id="form-email"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="tag"
                    label="Subject"
                    iconClass="grey-text"
                    type="text"
                    id="form-subject"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Icon Prefix"
                    iconClass="grey-text"
                    type="textarea"
                    id="form-text"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="light-blue">Submit</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: '400px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d170343.16805639747!2d11.608035!3d48.156285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75a0b3ec3fe9%3A0x882fb2a1d42fee3c!2sPienzenauerstra%C3%9Fe+56%2C+81925+M%C3%BCnchen%2C+Germany!5e0!3m2!1sen!2sus!4v1554389104422!5m2!1sen!2sus"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p>Munich, 81925</p>
                <p className="mb-md-0">Germany</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+ 49 (0) 1525 160 7600</p>
                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p>contact@opsap.com</p>
                <p className="mb-md-0">sale@gmail.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
