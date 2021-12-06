/* eslint-disable */
import React from "react";
import { useRoute, Router } from "wouter";
import { pathToRegexp } from "path-to-regexp";

import makeCachedMatcher from "wouter/matcher";

/*
 * This function specifies how strings like /app/:users/:items* are
 * transformed into regular expressions.
 *
 * Note: it is just a wrapper around `pathToRegexp`, which uses a
 * slighly different convetion of returning the array of keys.
 *
 * @param {string} path — a path like "/:foo/:bar"
 * @return {{ keys: [], regexp: RegExp }}
 */
const convertPathToRegexp = (path) => {
  let keys = [];
  // we use original pathToRegexp package here with keys
  const regexp = pathToRegexp(path, keys, { strict: true });
  return { keys, regexp };
};

export const customMatcher = makeCachedMatcher(convertPathToRegexp);
