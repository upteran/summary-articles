import React from "react";
import { Row, Col, Button, Typography } from "antd";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import faker from "faker";

import { InfoCard } from "../../components/InfoCard";
import { CenterSection } from "../../components/CenterSection";

import "./styles.scss";

const { Title } = Typography;

const createMock = () =>
  Array(3)
    .fill()
    .map((_, i) => ({
      id: i,
      title: faker.lorem.words(),
      img: faker.image.image(),
      description: faker.lorem.sentence(),
    }));

const list = createMock();

export const MainPage = () => {
  console.log(list);
  return (
    <>
      <div className="secArticle">
        <Row justify="center">
          <Col span={6}>
            <CenterSection>
              <Title level={2}>h3. Ant Design</Title>
            </CenterSection>
          </Col>
        </Row>
        <Row justify="center">
          {list.map(({ id, title, img, description }) => {
            return (
              <Col span={6} key={id}>
                <InfoCard
                  imgSrc={img}
                  description={description}
                  title={title}
                />
              </Col>
            );
          })}
        </Row>
        <Row justify="center">
          <Col span={6}>
            <CenterSection>
              <Button type="primary" shape="round" size="large">
                See more
              </Button>
            </CenterSection>
          </Col>
        </Row>
      </div>
      <div className="secArticle">
        <Row justify="center">
          <Col span={6}>
            <CenterSection>
              <Title level={2}>h3. Ant Design</Title>
            </CenterSection>
          </Col>
        </Row>
        <Row justify="center">
          {list.map(({ id, title, img, description }) => {
            return (
              <Col span={6} key={id}>
                <InfoCard
                  imgSrc={img}
                  description={description}
                  title={title}
                />
              </Col>
            );
          })}
        </Row>
        <Row justify="center">
          <Col span={6}>
            <CenterSection>
              <Button type="primary" shape="round" size="large">
                See more
              </Button>
            </CenterSection>
          </Col>
        </Row>
      </div>
    </>
  );
};
