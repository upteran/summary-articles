import React from "react";
import { PageHeader } from "antd";

export const ArticleInner = () => {
  return (
    <>
      <div className="article">
        <div className="articleTitle">
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
        </div>
        <div className="articleText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab error
          illum ipsam iste laboriosam laudantium nam nostrum placeat quae sequi.
          Aspernatur at blanditiis culpa cumque dolorum explicabo libero
          molestias, voluptate!
        </div>
      </div>
    </>
  );
};
