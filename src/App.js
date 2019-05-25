import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import Project3 from './components/Projects/Project3';
import Project4 from './components/Projects/Project4';
import Project5 from './components/Projects/Project5';
import Project6 from './components/Projects/Project6';
import Project7 from './components/Projects/Project7';
import Project8 from './components/Projects/Project8';
import Project9 from './components/Projects/Project9';
import Project10 from './components/Projects/Project10';
import Project11 from './components/Projects/Project11';
import Project12 from './components/Projects/Project12';
import Project13 from './components/Projects/Project13';

import Contact from './components/Contact';
import './App.css';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
      <Router>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <br></br>
          </main>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/project1" component={Project1} />
          <Route exact path="/project2" component={Project2} />
          <Route exact path="/project3" component={Project3} />
          <Route exact path="/project4" component={Project4} />
          <Route exact path="/project5" component={Project5} />
          <Route exact path="/project6" component={Project6} />
          <Route exact path="/project7" component={Project7} />
          <Route exact path="/project8" component={Project8} />
          <Route exact path="/project9" component={Project9} />
          <Route exact path="/project10" component={Project10} />
          <Route exact path="/project11" component={Project11} />
          <Route exact path="/project12" component={Project12} />
          <Route exact path="/project13" component={Project13} />

        </Switch>
      </Router>        

      <Footer />
      </div>
    )
  }
}
export default App;