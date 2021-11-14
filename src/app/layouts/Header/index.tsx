import React from "react";
import { Row, Col, Button, Space } from "antd";
import { Link } from "wouter";

import "./styles.scss";

export const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col span={6} offset={16}>
          <Space>
            <Button type="primary">
              <Link to="/auth">auth</Link>
            </Button>
            <Button>
              <Link to="/registration">auth</Link>
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
