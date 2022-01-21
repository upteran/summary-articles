import React from "react";
import "./styles.scss";

export const ButtonWrap = ({ tag = "button", children }) => {
  const Tag = tag;
  return <Tag className="btn">{children}</Tag>;
};
