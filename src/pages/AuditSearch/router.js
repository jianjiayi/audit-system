/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/search`,
    name: '审核检索',
    icon: 'UnorderedListOutlined',
    access: 'canAdmin',
    component: './AuditSearch/routes/index',
  });
export default routes;
