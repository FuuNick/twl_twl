import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { NavbarComponent } from './components';
import { Home, Sukses } from './pages'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
          <main>
            <Switch>
              <Route path ='/' component={Home} exact/>
              <Route path ='/sukses' component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
