import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import projectPixelsArt from "./components/projectPixelsArt";
import projectTrybeWarts from "./components/projectTrybeWarts";
import projectForms from "./components/projectForms";
import projectShoppingCart from "./components/projectShoppingCart";

export default function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/portifolio-denerrod" component={(props) => <Home {...props} />} />

        <Route exact path="/projectForms" component={ projectForms } />

        <Route exact path="/projects" component={Projects} />

        <Route exact path="/projectPixelsArt" component={projectPixelsArt} />

        <Route exact path="/projectTrybeWarts" component={projectTrybeWarts} />

        <Route exact path="/projectShoppingCart" component={ projectShoppingCart } />
      </Switch>
    </div>
  );
}
