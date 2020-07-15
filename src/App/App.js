import React from 'react'
import './App.css'
import '../Home/home.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {About} from '../About/About'
import {Skills} from '../Skills/Skills'
import {Contact} from '../Contact/Contact'
import {Home} from '../Home/Home'
import {MyWork} from '../MyWork/MyWork'
import {Nav} from "../Nav/Nav"

export const App = ()=> {
    return (
        <Router>
          <div className={'mainContent'}>
              <div className={'left-block'}>
                <Nav/>
              </div>
              <div className={'container'}>
                <div className={'row'}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contacts" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/works" component={MyWork} />
                  </Switch>
                </div>
              </div>
          </div>
        </Router>
    );

}

