import React from "react";
import { Link } from "wouter";
import { List, Space, PageHeader } from "antd";

type ArticlesListProps = {
  userId: string;
};

// @ts-ignore
const getData = (name) => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      id: i,
      href: "",
      title: `ant design part ${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }
  return listData;
};

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ArticlesList: React.FC<ArticlesListProps> = ({
  userId = "pezeze",
}) => {
  const data = getData(userId);
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
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={172}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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
