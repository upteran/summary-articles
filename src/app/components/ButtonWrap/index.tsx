import React from "react";

import "./styles.scss";

type ButtonWrapType = {
  tag: "a" | "button" | "div";
  children: any;
};

export const ButtonWrap = ({ tag = "button", children }: ButtonWrapType) => {
  const Tag = tag;
  return <Tag className="btn">{children}</Tag>;
};
