import React from "react";
import { useStoreMap } from "effector-react";
import { useLocation } from "wouter";

import { ArrowLeftOutlined } from "@ant-design/icons";

import { Text } from "../../../../components/Text";
import { Header } from "../../../../components/Header";

import { $userArticles } from "../../store";
import { IArticle } from "../../types";

import "./styles.scss";

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
  const { title, content }: IArticle = article;
  return (
    <>
      <div className="article">
        <Header>{title}</Header>
        <Text>{content}</Text>
        <div className="returnBtnWrap" onClick={onBackClick}>
          <ArrowLeftOutlined
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginRight: "12px",
            }}
          />
          <div className="returnBtnText">back</div>
        </div>
      </div>
    </>
  );
};
