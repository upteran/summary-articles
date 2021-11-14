import React from "react";
import { useStore } from "effector-react";
import { Form, Input, Button, Row, Col } from "antd";

import { IArticle } from "../../types";
import { addArticleFx, $userArticles } from "../../store";

import "./styles.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
export const CreateArticle = () => {
  const articles: Array<IArticle> = useStore($userArticles);
  const onFinish = (values: IArticle) => {
    console.log(values);
    addArticleFx(values);
  };

  return (
    <div className="createArticleWrapper">
      <Row>
        <Col span={18}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["article", "title"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["article", "description"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["article", "text"]} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
