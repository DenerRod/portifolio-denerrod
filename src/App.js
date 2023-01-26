import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import projectPixelsArt from "./components/projectPixelsArt";
import projectTrybeWarts from "./components/projectTrybeWarts";
import projectShoppingCart from "./components/projectShoppingCart";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/portifolio-denerrod"
          component={(props) => <Login {...props} />}
        />

        <Route exact path="/home" component={(props) => <Home {...props} />} />

        <Route exact path="/projects" component={Projects} />

        <Route exact path="/projectPixelsArt" component={projectPixelsArt} />

        <Route exact path="/projectTrybeWarts" component={projectTrybeWarts} />

        <Route exact path="/projectShoppingCart" component={ projectShoppingCart } />
      </Switch>
    </div>
  );
}
