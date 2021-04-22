import React from 'react'
import { render } from '@testing-library/react'
import Home from './components/page/homePage/home.js'
import Home2 from './components/page/homePage/home2.js'
import MarketPage from './components/page/MarketPage/MarketPage.js'
import About from './components/page/homePage/about.js'
import Contact from './components/page/homePage/contact.js'
// import Dealing from './components/page/homePage/dealing.js'
import DonatePage from './components/page/DonatePage/DonatePage.js'
import Login from './components/page/loginPage/login.js'
import Register from './components/page/loginPage/register.js'
import ResetPass from './components/page/loginPage/resetPass.js'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'

// function App() {
//   return (
//     <div><Home/></div>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <div>
          <Route exact path='/' component={Home2} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/market' component={MarketPage} />
          <Route path='/donate' component={DonatePage} />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

// // Since routes are regular React components, they
// // may be rendered anywhere in the app, including in
// // child elements.
// //
// // This helps when it's time to code-split your app
// // into multiple bundles because code-splitting a
// // React Router app is the same as code-splitting
// // any other React app.

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/login">
//             <About />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }
