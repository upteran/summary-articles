import React from "react";

import "./styles.scss";

export const Header = ({ children, tag = "h1" }) => {
  const Tag = tag;
  return <Tag className="title">{children}</Tag>;
};
