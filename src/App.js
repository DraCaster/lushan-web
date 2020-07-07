import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuToolbar from './components/menuToolbar/MenuToolbar'
import Home from './layout/home/Home'
import About from './layout/about/About'
import Experience from './layout/experience/Experience'
import Contact from './layout/contact/Contact'

export default function App() {

  return (
    <Router>
      <MenuToolbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <About />
          <Experience />
          <Contact/>
        </Route>
      </Switch>
    </Router>

  )
}

