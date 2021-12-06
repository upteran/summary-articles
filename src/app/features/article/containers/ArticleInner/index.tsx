import React from "react";
import { PageHeader } from "antd";
import { useStoreMap } from "effector-react";
import { useLocation } from "wouter";

import { $userArticles } from "../../store";
import { IArticle } from "../../types";

export const ArticleInner = ({ id }: { id: string }) => {
  const [location, setLocation] = useLocation();
  const article = useStoreMap({
    store: $userArticles,
    keys: [id],
    fn: (articles, [id]) =>
      articles.find(({ id: articleId }) => Number(articleId) === Number(id)),
  });
  const onBackClick = () => {
    setLocation(location.replace(`article/${id}`, "articles"));
  };
  if (!article) return null;
  const { title, published_at, content }: IArticle = article;
  return (
    <>
      <div className="article">
        <div className="articleTitle">
          <PageHeader
            className="site-page-header"
            onBack={onBackClick}
            title={title}
            subTitle={published_at}
          />
        </div>
        <div className="articleText">{content}</div>
      </div>
    </>
  );
};
