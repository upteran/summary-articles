import React from "react";
import { Route, Switch, Link } from "wouter";
import Avatar from "antd/lib/avatar";
import { UserOutlined } from "@ant-design/icons";

import { ArticlesList } from "../../features/article/containers/ArticlesList";
import { ArticleInner } from "../../features/article/containers/ArticleInner";

import "./styles.scss";

export const UserCard = () => {
  return (
    <>
      <div>
        <div className="userName">User Nick</div>
      </div>
      <div className="cardWrap">
        <div className="userControllers">
          <div className="userInfo">
            <div>
              <Avatar size={100} icon={<UserOutlined />} />
              <div className="social social-1">
                <Avatar size={40} icon={<UserOutlined />} />
              </div>
              <div className="social social-2">
                <Avatar size={40} icon={<UserOutlined />} />
              </div>
              <div className="social social-3">
                <Avatar size={40} icon={<UserOutlined />} />
              </div>
              <div className="social social-4">
                <Avatar size={40} icon={<UserOutlined />} />
              </div>
            </div>
          </div>
          {/*<div className="userSocial">User social</div>*/}
          <div className="userMenu">
            <div className="userMenuItem">
              <Link href="">skills</Link>
            </div>
            <div className="userMenuItem">
              <Link href="">articles</Link>
            </div>
            <div className="userMenuItem">
              <Link href="">some other list</Link>
            </div>
          </div>
        </div>
        <div className="userMainText">
          <Switch>
            <Route path="/profile/:name/article/:id">
              <ArticleInner />
            </Route>
            <Route path="/profile/:name">
              <ArticlesList userId="pezeze" />
            </Route>
          </Switch>
        </div>
        <div className="rightSidebar" />
      </div>
    </>
  );
};
