import React from "react";

import "./styles.scss";

type HeaderType = {
  children: any;
  tag?: "h1" | "h2" | "h3";
};

export const Header = ({ children, tag = "h1" }: HeaderType) => {
  const Tag = tag;
  return <Tag className="title">{children}</Tag>;
};
