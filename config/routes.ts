// 抽离Router的配置信息到单独文件.

import { IRoute } from 'umi';

const Routes: IRoute[] = [
  {
    path: '/user',
    hideLayout: true,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        key: 'showcases',
        name: 'showcases',
        icon: 'smile',
        path: '/admin/showcases',
        component: './ListTableList',
        exact: true,
      },
    ],
  },

  {
    name: 'admin2',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        key: 'showcases2',
        name: 'showcases2',
        icon: 'smile',
        path: '/admin2/showcases',
        component: './ListTableList',
        exact: true,
      },
    ],
  },

  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './ListTableList',
  },
  {
    component: './404',
  },
];

export default Routes;
