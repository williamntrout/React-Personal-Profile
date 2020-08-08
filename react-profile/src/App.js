import React from "react";
import "./App.css";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Resume from "./pages/Resume/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={About} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/portfolio"}
        component={Portfolio}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/contact"}
        component={Contact}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/resume"}
        component={Resume}
      />
    </Router>
  );
}
export default App;
