/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/thesaurus`,
    name: '词库管理',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: `/thesaurus`,
        name: '词库管理',
        component: './AuditThesaurus/routes/List',
        access: 'canAdmin',
        hideInMenu:true,
      },
      {
        path: `/thesaurus/details`,
        name: '词库详情',
        component: './AuditThesaurus/routes/Details',
        access: 'canAdmin',
        hideInMenu:true,
      },
      {
        component: './404',
      },
    ],
  });
export default routes;
