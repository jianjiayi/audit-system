/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/setting`,
    name: '审核设置',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: `/setting/`,
        name: '审核设置',
        component: './AuditSettings/routes/Index',
        access: 'canAdmin',
        hideInMenu:true,
      },
      {
        path: `/setting/details/`,
        name: '角队列详情色管理',
        component: './AuditSettings/routes/Details',
        access: 'canAdmin',
        hideInMenu:true,
      },
      {
        component: './404',
      },
    ],
  });
export default routes;
