import React from "react"
import { render } from "@testing-library/react"
import Home from "./components/page/homePage/home.js"
import Home2 from "./components/page/homePage/home2.js"
import HomeLayout from "./components/page/homePage/homeLayout.js"
import About from "./components/page/homePage/about.js"
import Contact from "./components/page/homePage/contact.js"
import Dealing from "./components/page/homePage/dealing.js"
import Donating from "./components/page/homePage/donating.js"
import Login from "./components/page/loginPage/login.js"
import Register from "./components/page/loginPage/register.js"
import ResetPass from "./components/page/loginPage/resetPass.js"
import Test from './test.js'
import Test2 from './test2.js'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

// function App() {
//   return (
//     <div><Home/></div>
//   )
// }

const App = () => {
  
  return (  
    <BrowserRouter>
      
      <div>
        <div>
          <Route exact path="/" component={Home2} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </div>
  
    </BrowserRouter>
  )
}

export default App
