/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 17:16:33
 * @LastEditTime: 2021-09-07 20:08:55
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/router/config.js
 */

import Project from 'renderer/pages/project';
import Access from 'renderer/pages/system/access';
import Account from 'renderer/pages/system/account';
import ActionLog from 'renderer/pages/system/actionLog';
import Role from 'renderer/pages/system/role';
import Help from 'renderer/pages/help';

const routes = [
  {
    path: '/app',
    children: [
      {
        title: '项目管理',
        path: 'project',
        icon: 'icon-project',
        children: [
          {
            title: '项目列表',
            path: 'list',
            children: [
              { title: 'a项目', path: 'a', component: Help },
              { title: 'b项目', path: 'b', component: Project },
            ],
          },
          {
            title: '项目编辑',
            path: 'edit',
            hidden: true,
            component: Project,
          },
        ],
      },
      {
        title: '系统管理',
        path: 'system',
        icon: 'icon-system',
        children: [
          {
            title: '账号管理',
            path: 'account',
            component: Account,
          },
          {
            title: '权限设置',
            path: 'access',
            component: Access,
          },
          {
            title: '角色管理',
            path: 'role',
            component: Role,
          },
          {
            title: '操作日志',
            path: 'actionLog',
            component: ActionLog,
          },
        ],
      },
      {
        title: '帮助',
        path: 'help',
        icon: 'icon-help',
        component: Help,
      },
    ],
  },
];

export default routes;
