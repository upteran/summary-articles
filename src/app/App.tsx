import * as React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

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
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/registration">reg</Route>
            <Route path="/create-article">
              <UserArticles />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
