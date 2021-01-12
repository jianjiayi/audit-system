/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/thesaurus`,
    name: '敏感词库',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: `/thesaurus`,
        name: '敏感词管理',
        component: './AuditThesaurus/routes/List',
        access: 'canAdmin',
        hideInMenu:true,
      },
      {
        path: `/thesaurus/details`,
        name: '敏感词详情',
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
