/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 14:21:22
 * @LastEditTime: 2021-09-07 17:15:47
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/router/index.jsx
 */

import React from 'react';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';
import Layout from 'renderer/layout';
import Dashboard from 'renderer/pages/dashboard';
import Login from 'renderer/pages/login';
import routesConfig from './config';

const createRoute = (routes) => {
  const result = [];
  const deep = (list, parentPath = '') => {
    list.forEach((e) => {
      const path = parentPath ? parentPath + '/' + e.path : e.path;
      if (e.children) {
        deep(e.children, path);
      }
      if (e.component) {
        result.push(
          <Route
            key={path}
            path={path}
            exact={e.exact}
            component={e.component}
          />
        );
      }
    });
  };

  deep(routes);
  return result;
};

const LayoutWrap = () => {
  return (
    <Layout>
      <Switch>{createRoute(routesConfig)}</Switch>
    </Layout>
  );
};

export default function Router() {
  return (
    <MemoryRouter>
      <div>
        <Link to="/app/system/role">跳转到role</Link>
      </div>
      <div>
        <Link to="/login">跳转到登录</Link>
      </div>
      <div>
        <Link to="/">root</Link>
      </div>
      <div>
        <Link to="/app/system/account">账号管理</Link>
      </div>
      <div>
        <Link to="/app/help">帮助</Link>
      </div>
      <div>
        <Link to="/app/project/list">项目管理</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={LayoutWrap} />
      </Switch>
    </MemoryRouter>
  );
}
