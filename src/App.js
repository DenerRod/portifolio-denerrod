import React from "react";
import "./App.css";
import "./AppMobile.css";
import "./components/ProjectWallet/projectForms.css"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import projectPixelsArt from "./components/ProjectPixelsArt/projectPixelsArt";
import projectTrybeWarts from "./components/ProjectTrybeWarts/projectTrybeWarts";
import ProjectForms from "./components/ProjectWallet/projectForms";
import projectShoppingCart from "./components/ProjectShoppingCart/projectShoppingCart";
import ProjectWallet from "./components/ProjectWallet/projectWallet";

export default function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/portifolio-denerrod" component={Home} />

        <Route exact path="/projects" component={Projects} />

        <Route exact path="/projectPixelsArt" component={projectPixelsArt} />

        <Route exact path="/projectTrybeWarts" component={projectTrybeWarts} />

        <Route exact path="/projectShoppingCart" component={ projectShoppingCart } />

        <Route exact path="/projectForms" component={ (props) => <ProjectForms {...props} /> } />

        <Route exact path="/projectWallet" component={ (props) => <ProjectWallet {...props} />  } />
      </Switch>
    </div>
  );
}
