// 根路由配置文件 router.js
import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
//import { createHashHistory } from 'history/createHashHistory';
import App from '../App';
import Login from '@/views/login/Index';
import Home from '@/views/home/Home';
import Article from '@/views/articleEdit/Article';
import Sentence from '@/views/articleEdit/Sentence';
import Edit from '@/views/articleEdit/Edit';

import ExtendRoute from '@/components/ExtendRoute'

const history = createBrowserHistory();

const routes = [
  //首页
  {
    path: '/',
    exact: true,
    component: Home,
  },
  //发现音乐/排行榜
  {
    path: '/article',
    exact: true,
    component: Article
  },
  //发现音乐/歌单
  {
    path: '/article/sentence',
    exact: true,
    component: Sentence
  },
  //发现音乐/电台主播
  {
    path: '/article/edit',
    exact: true,
    component: Edit
  },
]

const router = (
  <Router history={history}>
    <Switch>
      <Route path='/login' component={Login} />
      <App history={history}>
        <Switch>
          {
            routes.map((route, index) => (
              <ExtendRoute key={index} {...route} />
            ))
          }
        </Switch>
      </App>
    </Switch>
  </Router>
);

export default router;
