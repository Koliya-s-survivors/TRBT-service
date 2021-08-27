import React, { Component } from 'react';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from '../header';
import { Catalogue, MyProfile, LogIn } from '../pages';
import Footer from "../footer";



export default class App extends Component {
  render() {

    return (
      <>
        <Router>
          <Header/>
          <main>
            <Switch>
              <Route
                path="/"
                component={Catalogue}
                exact />

              <Route
                path="/my-profile"
                component={MyProfile}
                exact />

              <Route
                path="/login"
                component={LogIn}
                exact />


              <Route render={() => <h2>Page not found</h2>} />

            </Switch>
          </main>

          <Footer/>
        </Router>

      </>
    );
  }
}
