import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import Loadable from 'react-loadable';
import Navbar from "./components/shared/Navbar";
import LoadingPuff from './components/shared/LoadingPuff'
import Footer from "./components/shared/Footer";

const HomePage = Loadable({
    loader: () => import("./pages/landing/HomePage"),
    loading: LoadingPuff
});

const PricingPage = Loadable({
    loader: () => import("./pages/landing/PricingPage"),
    loading: LoadingPuff
});

const PublicShopPage = Loadable({
    loader: () => import("./pages/landing/PublicShopPage"),
    loading: LoadingPuff
});

const ContactPage = Loadable({
    loader: () => import("./pages/landing/ContactPage"),
    loading: LoadingPuff
});

const App = () => {
    return (
      <React.Fragment>
          <AppWrapper>
        <BrowserRouter>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/contact-page" component={ContactPage}/>
                    <Route path="/pricing-page" component={PricingPage}/>
                    <Route path="/shop-page" component={PublicShopPage} />
                    <Route component={HomePage}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
          </AppWrapper>
      </React.Fragment>
    )
};

export default App;

const AppWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
`;
