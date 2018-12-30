import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navBar";
import OverviewPage from "./components/overviewPage";
import PartsPage from "./components/partsPage";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route path="/overview" component={OverviewPage} />
            <Route path="/parts" component={PartsPage} />
            <Route path="/login" component={LoginForm} />
            <Redirect from="/" exact to="/overview" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
