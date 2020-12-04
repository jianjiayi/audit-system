/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import {
  PATH_HOME, PATH_USER, PATH_USER_LOGIN, rootPathName,
} from '../constants/routesConfig';

import HomePageRouter from './HomePage/router';
import AuditQueueRouter from './AuditQueue/router';
import AuditSearchRouter from './AuditSearch/router';
import AuditSettingsRouter from './AuditSettings/router';
import AuditStatisticsRouter from './AuditStatistics/router';
import AuditRightsRouter from './AuditRights/router';
import AuditThesaurusRouter from './AuditThesaurus/router';
import AuditContentRouter from './$ContentDetails/router';

const extraRoutes = () =>([
  {
    path: PATH_USER,
    layout: false,
    routes: [
      {
        name: '登录',
        path: PATH_USER_LOGIN,
        component: './user/login',
      },
    ],
  },
  HomePageRouter(PATH_HOME),
  AuditSettingsRouter(),
  AuditQueueRouter(),
  AuditSearchRouter(),
  AuditStatisticsRouter(),
  AuditThesaurusRouter(),
  AuditRightsRouter(),
  AuditContentRouter(),
  {
    path: '/',
    redirect: PATH_HOME,
  },
  {
    component: './404',
  },
])

export default extraRoutes;