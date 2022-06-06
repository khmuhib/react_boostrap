import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import './App.css';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/inc/Nav";

function App() {
  return (

    
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>

    // <Router>
    //   <div>
    //     <Nav/>
    //     <Route path="/">
    //       <Home/>
    //     </Route>

    //     <Route path="/about">
    //       <About/>
    //     </Route>

    //     <Route path="/contact">
    //       <Contact/>
    //     </Route>
    //   </div>

    // </Router>

  );
}

export default App;
