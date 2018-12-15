import React, { Component } from 'react';
import NavBar from './components/navBar.js';
import AllItems from './components/allItems.js';
import './App.css';
import 'bulma/css/bulma.css';

// import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <section class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                freedomEx
              </h1>
              <h2 class="subtitle">
                The Future of Exchanging Digital Assets
              </h2>
            </div>
          </div>
        </section>

        <AllItems />
        
      </div>
    );
  }
}

export default App;
