const routes = (
  PATH_USER,
  PATH_USER_LOGIN,
  PATH_USER_REGISTER,
  PATH_USER_FORGET_PASSWORD
) => ([
  {
    path: PATH_USER,
    layout: false,
    routes: [
      {
        name: '登录',
        path: PATH_USER_LOGIN,
        component: './User/routes/login',
      },
      {
        name: '注册',
        path: PATH_USER_REGISTER,
        component: './User/routes/register',
      },
      {
        name: '忘记密码',
        path: PATH_USER_FORGET_PASSWORD,
        component: './User/routes/forgetPassword',
      },
    ],
  },
  {
    path: `/person/center`,
    name: '个人中心',
    icon: 'UnorderedListOutlined',
    component: './User/routes/personCenter',
  }
]);
export default routes;