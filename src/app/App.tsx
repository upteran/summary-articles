import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "wouter";

import { Header } from "./layouts/Header";

// pages
import { MainPage } from "./pages/index";
import { Auth } from "./pages/auth";
import { UserCard } from "./pages/profile";

import "normalize.css/normalize.css";
import "antd/dist/antd.css";

import "./app.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Switch>
            <Route path="/">
              <MainPage />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/profile/:name/:type*">
              {({ name }) => <UserCard name={name} />}
            </Route>
            <Route path="/registration">reg</Route>
            <Route path="/:rest*">
              {(params) => `404, Sorry the page ${params.rest} does not exist!`}
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
