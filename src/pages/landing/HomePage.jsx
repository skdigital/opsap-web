import React from 'react';
import {
  MDBMask,
  MDBView,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBNavLink,
  MDBBtn,
  MDBAnimation
} from 'mdbreact';
import styled from 'styled-components';
import landing from '../../images/home/landing.jpg';

function HomePage(props) {
  return (
    <React.Fragment>
      <HomeWrapper>
        <MDBRow>
          <MDBCol sm="12" className="col-lg-8">
            <MDBAnimation type="fadeIn" duration="3s">
              <MDBView>
                <img
                  src={landing}
                  className="img-fluid img-responsive"
                  alt="Diver Pictures"
                />
                <MDBMask
                  className="flex-center container-fluid"
                  overlay="blue-slight"
                />
              </MDBView>
            </MDBAnimation>
          </MDBCol>
          <MDBCol className="d-flex flex-column">
            <MDBContainer className="justify-content-center">
              <h1 className="flex-center mt-4">Welcome</h1>
            </MDBContainer>
            <MDBContainer className="justify-content-center">
              <ul className="mt-4 list-style-none">
                <MDBAnimation duration="0.8s" delay="0.2s" type="fadeInRight">
                  <li>
                    <MDBNavLink to="/divers-page">
                      <h4>Divers</h4>
                      <p className="font-weight-light font-italic">
                        Easily log and track career data, search for companies
                        and apply for jobs.
                      </p>
                    </MDBNavLink>
                  </li>
                </MDBAnimation>
                <MDBAnimation duration="0.8" delay="0.5s" type="fadeInRight">
                  <li className="mt-2">
                    <MDBNavLink to="/divers-page">
                      <h4>ROV Pilots</h4>
                      <p className="font-weight-light font-italic">
                        Easily log and track all your career data, search for
                        companies and apply for jobs.
                      </p>
                    </MDBNavLink>
                  </li>
                </MDBAnimation>
                <MDBAnimation duration="0.8" delay="0.8s" type="fadeInRight">
                  <li className="mt-2">
                    <MDBNavLink to="/divers-page">
                      <h4>NDT Inspectors</h4>
                      <p className="font-weight-light font-italic">
                        Easily log and track all your career data, search for
                        companies and apply for jobs.
                      </p>
                    </MDBNavLink>
                  </li>
                </MDBAnimation>
                <MDBAnimation duration="0.8" delay="1s" type="fadeInRight">
                  <li className="mt-2">
                    <MDBNavLink to="/divers-page">
                      <h4>Underwater Contractors</h4>
                      <p className="font-weight-light font-italic">
                        Dive and Inspection Analytics, jobs management and
                        personnel recruitment
                      </p>
                    </MDBNavLink>
                  </li>
                </MDBAnimation>
                <MDBAnimation duration="0.8" delay="1.3s" type="fadeInRight">
                  <li className="mt-2">
                    <MDBNavLink to="/divers-page">
                      <h4>Crewing & Recruitment Agencies</h4>
                      <p className="font-weight-light font-italic">
                        Applicant Tracking system that makes sourcing and
                        managing divers, rov pilots and inspection personnel
                        easy.
                      </p>
                    </MDBNavLink>
                  </li>
                </MDBAnimation>
              </ul>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow className="">
          <MDBCol sm="8" className="mx-auto">
            <MDBContainer className="d-flex mt-5 mb-5">
              <div className="text-center">
                <MDBAnimation duration="0.8" delay="0.8s" type="fadeInUp">
                  <h2>About</h2>
                  <p className="mt-3">
                    OPSAP's mission is to consolidate the marine construction
                    industry by providing easy to use tooling for Divers, Rov
                    Pilots, Inspection specialists, Companies and Recruiters to
                    list and apply for jobs, track their careers and communicate
                    efficiently.
                  </p>
                  <MDBBtn className="mt-4" size="md" outline color="info">
                    READ MORE
                  </MDBBtn>
                </MDBAnimation>
              </div>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </HomeWrapper>
    </React.Fragment>
  );
}

export default HomePage;

const HomeWrapper = styled.div`
  .temp-border {
    border: 1px dotted lightcoral;
  }

  .list-style-none {
    list-style: none;
  }

  a {
    color: #263238;
    :hover {
      color: #33b5e5;
    }
  }

  h4 {
    font-weight: bold;
  }

  h1 {
    color: #3f729b;
    font-weight: 400;
  }
`;
