import React from 'react';
import './App.css';
import '../Home/home.scss';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import MyWork from '../MyWork/MyWork';



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/works" component={MyWork} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
