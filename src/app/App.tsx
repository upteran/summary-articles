import * as React from "react";
import { hot } from "react-hot-loader";
import { Route } from "wouter";

import { Header } from "./layouts/Header";

// pages
import { MainPage } from "./pages/index";
import { Auth } from "./pages/auth";
import { UserArticles } from "./pages/profile/UserArticles";

import "normalize.css/normalize.css";
import "antd/dist/antd.css";

// import './index.css';

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/registration">reg</Route>
        <Route path="/create-article">
          <UserArticles />
        </Route>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
