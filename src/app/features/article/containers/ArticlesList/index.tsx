import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Link } from "wouter";
import { Row, Col } from "antd";

import { InfoCard } from "@components/InfoCard";
import { Text } from "@components/Text";
import { Header } from "@components/Header";

import { fetchArticlesFx, $userArticles } from "../../store";
import { IArticle } from "../../types";

type ArticlesListProps = {
  userId: string;
};

export const ArticlesList: React.FC<ArticlesListProps> = ({
  userId = "pezeze",
}) => {
  const articles: Array<IArticle> | [] = useStore($userArticles);

  useEffect(() => {
    fetchArticlesFx();
  }, []);
  return (
    <div className="userArticles">
      <div className="blockTitle">
        <Header tag="h1">Guidelines and Resources</Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          dolorem illum minus nobis numquam odit officia optio perferendis,
          perspiciatis praesentium quo, rem sequi soluta ut veritatis! Ad
          aliquid natus tempora?
        </Text>
      </div>
      <div className="articleList">
        <Header tag="h1">Guidelines and Resources</Header>
        <Row justify="start" gutter={[32, 24]}>
          {articles.map(({ title, id, description, mainImg, content }) => (
            <Col span={8} key={id}>
              <InfoCard
                buttonCtx={
                  <Link href={`/profile/${userId}/article/${id}`}>
                    Посмотреть поближе
                  </Link>
                }
                title={title}
                description={content}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
