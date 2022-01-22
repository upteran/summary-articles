import React from "react";

import "./styles.scss";

export const Text = ({ children }: { children: any }) => {
  return <p className="text">{children}</p>;
};
