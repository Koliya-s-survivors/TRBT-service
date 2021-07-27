import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavigationMenu from '../navigation-menu';
import { Catalogue, MyProfile, LogIn } from '../pages';

export default class App extends Component {

  render() {

    return (
      <>
        <header>This is header tag</header>

        <NavigationMenu />

        <section className={"searchPanel"}>This is search panel</section>

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
        <footer> This is footer tag</footer>
      </>
    );
  }
}