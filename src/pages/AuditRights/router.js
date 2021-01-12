/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/rights`,
    name: '权限管理',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: `/rights/user`,
        name: '用户管理',
        component: './AuditRights/routes/Users',
        access: 'canAdmin',
      },
      {
        path: `/rights/role`,
        name: '角色管理',
        component: './AuditRights/routes/Roles/index',
        access: 'canAdmin',
      },
      {
        component: './404',
      },
    ],
  });
export default routes;
