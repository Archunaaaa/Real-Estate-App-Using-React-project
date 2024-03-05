import React from "react"
import Header from "../Common/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../Home/Home"
import Footer from "../Common/Footer/Footer"
import About from "../About/About"
import Pricing from "../Pricing/Pricing"
import Blog from "../Blog/Blog"
import Services from "../Services/Services"
import Contact from "../Contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
