import React from 'react'
import { render } from '@testing-library/react'
import Home from './components/page/homePage/home.js'
import Home2 from './components/page/homePage/home2.js'
import MarketPage from './components/page/marketPage/MarketPagess.js'
import About from "./components/page/homePage/about.js"
import Contact from "./components/page/homePage/contact.js"
// import Dealing from './components/page/homePage/dealing.js'
import DonatePage from './components/page/DonatePage/DonatePage.js'
import Login from './components/page/loginPage/login.js'
import Register from './components/page/loginPage/register.js'
import ResetPass from './components/page/loginPage/resetPass.js'
import manager from "./components/page/AdminManager/manager.js"
import Profile from './components/Profile/profile.js';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import { ScrollToTop } from './ScrollToTop.js'

// function App() {
//   return (
//     <div><Home/></div>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home2} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/market' component={MarketPage} />
        <Route path='/donate' component={DonatePage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/manager" component={manager}/>
        <Route path='/Profile' component={Profile}/>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App
