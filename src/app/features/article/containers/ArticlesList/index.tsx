import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Link } from "wouter";
import { List, PageHeader } from "antd";

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
        <PageHeader
          className="site-page-header"
          title="Title"
          subTitle="This is a subtitle"
        />
      </div>
      <div className="articleList">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={articles}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={172}
                  alt="logo"
                  src={`http://localhost:1337${item.mainImg[0].url}`}
                />
              }
            >
              <List.Item.Meta
                title={
                  <Link href={`/profile/${userId}/article/${item.id}`}>
                    {item.title}
                  </Link>
                }
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
