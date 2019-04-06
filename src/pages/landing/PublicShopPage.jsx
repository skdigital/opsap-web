import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from 'mdbreact';

import greenRiver from '../../images/shop/greenRiver.jpg';
import underwaterToolBag from '../../images/shop/underwaterToolBag.jpg';

const PublicShopPage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Consumables Store
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        If you find our platform useful please support our growth by buying
        through us. Every cent earned through purchases goes into progressing
        the platform further. We ship and post internationally very quickly
        using our network of fulfilment partners. We insure quick delivery of
        your order without paying import duty as we source our stock locally.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={greenRiver}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Victory Green River</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Dive Knife
                    <MDBBadge className="ml-3" pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>39$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={underwaterToolBag}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>KFD Heavy Duty Underwater Toolbag</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Underwater Toolbag
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Grey blouse{' '}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Black jacket
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default PublicShopPage;
