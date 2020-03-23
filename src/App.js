import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About}>
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
          </Route>
          <Route exact path="/contact" component={Contact}>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>

  )
}

export default App
