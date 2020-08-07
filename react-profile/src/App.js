import React from "react";
import "./App.css";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Resume from "./pages/Resume/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </div>
      <Footer />
    </Router>
  );
}
export default App;