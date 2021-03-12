import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Nav from './components/Nav';
import Footer from './components/Footer'
import ContactInfo from './components/ContactInfo'
import ScrollToTop from './ScrollToTop'

// screens
import Home from './screens/Home';
import NotFound from './screens/NotFound'
import About from './screens/About'
import Curriculum from './screens/Curriculum'
import Admissions from './screens/Admissions'
import Contact from './screens/Contact'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/despre-noi' component={About} />
        <Route exact path='/curriculum' component={Curriculum} />
        <Route exact path='/înscrieri' component={Admissions} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <ContactInfo />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
