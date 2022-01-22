import React from "react";

import "./styles.scss";

type HtmlTextRenderType = {
  data: any;
  styleClassName: "skillsContent" | "workContent";
};

export const HtmlTextRender = ({
  data,
  styleClassName,
}: HtmlTextRenderType) => {
  return (
    <div className={styleClassName}>
      <div dangerouslySetInnerHTML={{ __html: `${data}` }} />
    </div>
  );
};
