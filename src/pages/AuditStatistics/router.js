/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/statistics`,
    name: '审核统计',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: `/statistics/classify`,
        name: '分类统计',
        component: './AuditStatistics/routes/Classify',
        access: 'canAdmin',
      },
      {
        path: `/statistics/personnel`,
        name: '人员统计',
        access: 'canAdmin',
        routes: [
          {
            path: `/statistics/personnel/`,
            name: '人员统计',
            component: './AuditStatistics/routes/Personnel/List',
            access: 'canAdmin',
            hideInMenu:true,
          },
          {
            path: `/statistics/personnel/details`,
            name: '审核明细',
            component: './AuditStatistics/routes/Personnel/Details',
            access: 'canAdmin',
            hideInMenu:true,
          },
          {
            component: './404',
          },
        ]
      },
      {
        component: './404',
      },
    ],
  });
export default routes;
