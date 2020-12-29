/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import {
  PATH_HOME, 
  PATH_USER, 
  PATH_USER_LOGIN,
  PATH_USER_REGISTER,
  PATH_USER_FORGET_PASSWORD, 
  rootPathName,
} from '../constants/routesConfig';

import HomePageRouter from './HomePage/router';
import AuditQueueRouter from './AuditQueue/router';
import AuditSearchRouter from './AuditSearch/router';
import AuditSettingsRouter from './AuditSettings/router';
import AuditStatisticsRouter from './AuditStatistics/router';
import AuditRightsRouter from './AuditRights/router';
import AuditThesaurusRouter from './AuditThesaurus/router';
import AuditContentRouter from './$ContentDetails/router';
import User from './User/router';

const extraRoutes = () =>([
  HomePageRouter(PATH_HOME),
  AuditSettingsRouter(),
  AuditQueueRouter(),
  AuditSearchRouter(),
  AuditStatisticsRouter(),
  AuditThesaurusRouter(),
  AuditRightsRouter(),
  AuditContentRouter(),
  ...User(
    PATH_USER, 
    PATH_USER_LOGIN,
    PATH_USER_REGISTER,
    PATH_USER_FORGET_PASSWORD
  ),
  {
    path: '/',
    redirect: PATH_HOME,
  },
  {
    component: './404',
  },
])

export default extraRoutes;