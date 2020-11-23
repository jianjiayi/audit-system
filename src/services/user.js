/* eslint-disable @typescript-eslint/no-unused-vars */
// import { request } from 'umi';

import { apiCommonPath } from '@/constants';
import request from '@/utils/request';

// 获取当前用户信息
export async function getCurrentUser() {
  return request(`${apiCommonPath}/user/getCurrentUser`, {
    method: 'GET',
  });
}

// 获取用户业务线
export async function getBusiness(params = {}) {
  return request(`${apiCommonPath}/business/list`, {
    method: 'GET',
  });
}

// 获取用户角色和权限
export async function getRoleAndPermission(params = {}) {
  return request(`${apiCommonPath}/user/getRoleAndPermission`, {
    method: 'GET',
  });
}

// 退出登录
export async function outLogin(params = {}) {
  return request(`${apiCommonPath}/user/logout`, {
    method: 'POST',
    body: params,
  });
}

