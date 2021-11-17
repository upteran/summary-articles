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

// import './index.css';

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/profile/:name*">
            <UserCard />
          </Route>
          <Route path="/registration">reg</Route>
          <Route path="/:rest*">
            {(params) => `404, Sorry the page ${params.rest} does not exist!`}
          </Route>
        </Switch>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
