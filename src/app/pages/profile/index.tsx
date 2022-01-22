import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Route, Switch, Link } from "wouter";
import Avatar from "antd/lib/avatar";
import { UserOutlined } from "@ant-design/icons";

import { ArticlesList } from "@features/article/containers/ArticlesList";
import { ArticleInner } from "@features/article/containers/ArticleInner";
import { Header } from "@components/Header";
import { HtmlTextRender } from "@components/HtmlTextRender";

import { $user, fetchUserFx } from "../../entity/user/store";
import { IUserData } from "../../entity/user/types";

import "./styles.scss";

export const UserCard = ({ name }: { name: string }) => {
  useEffect(() => {
    fetchUserFx();
  }, []);
  const userData: IUserData = useStore($user);
  return (
    <>
      {/*<div>*/}
      {/*  <div className="userName">*/}
      {/*    {`${userData.firstName} ${userData.lastName}`}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="cardWrap">
        <div className="userControllers">
          <div className="userInfo">
            <div>
              <Avatar size={100} icon={<UserOutlined />} />
              {/*<div className="social social-1">*/}
              {/*  <Avatar size={40} icon={<UserOutlined />} />*/}
              {/*</div>*/}
              {/*<div className="social social-2">*/}
              {/*  <Avatar size={40} icon={<UserOutlined />} />*/}
              {/*</div>*/}
              {/*<div className="social social-3">*/}
              {/*  <Avatar size={40} icon={<UserOutlined />} />*/}
              {/*</div>*/}
              {/*<div className="social social-4">*/}
              {/*  <Avatar size={40} icon={<UserOutlined />} />*/}
              {/*</div>*/}
            </div>
          </div>
          {/*<div className="userSocial">User social</div>*/}
          <div className="userMenu">
            <div className="userMenuItem">
              <Link href={`/profile/${name}/skills`}>skills</Link>
            </div>
            <div className="userMenuItem">
              <Link href={`/profile/${name}/work`}>work</Link>
            </div>
            <div className="userMenuItem">
              <Link href={`/profile/${name}/articles`}>sharebox</Link>
            </div>
          </div>
        </div>
        <div className="userMainText">
          <Switch>
            <Route path="/profile/:name/article/:id">
              {({ id }) => <ArticleInner id={id} />}
            </Route>
            <Route path="/profile/:name/articles">
              <ArticlesList userId="pezeze" />
            </Route>
            <Route path="/profile/:name/work">
              <div className="userExtendInfo">
                <Header>Work</Header>
                <HtmlTextRender
                  data={userData.work}
                  styleClassName="workContent"
                />
              </div>
            </Route>
            <Route path="/profile/:name/skills">
              <div className="userExtendInfo">
                <Header>Skills</Header>
                <HtmlTextRender
                  data={userData.skills}
                  styleClassName="skillsContent"
                />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
