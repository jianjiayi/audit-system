/* eslint-disable import/newline-after-import */
/* eslint-disable react/react-in-jsx-scope */

const routes = () => ({
    path: `/:type/cdetails`,
    name: '内容详情',
    icon: 'UnorderedListOutlined',
    hideInMenu:true,
    component: './$ContentDetails/routes/Index',
    access: 'canAdmin',
  });
export default routes;
