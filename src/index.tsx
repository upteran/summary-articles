/* global document */
import * as React from "react";
import { render } from "react-dom";
import App from "./app/App";

const rootEl = document.getElementById("root");

// @ts-ignore
render(<App />, rootEl);
