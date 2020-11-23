/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/queue`,
    name: '审核队列',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    component: './AuditQueue/routes/index.js',
  });
export default routes;
