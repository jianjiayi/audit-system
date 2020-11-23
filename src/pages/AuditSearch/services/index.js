/* eslint-disable import/no-unresolved */
import request from '@http';

// 审核检索列表查询接口
export async function getNewsList(params) {
  return request(`/audit/news/list`, {
    method: 'POST',
    body: params,
  });
}

// 队列查询接口
export async function getQueue(params) {
  return request(`/audit/queue/query`, {
    method: 'POST',
    body: params,
  });
}

// 批量审核接口
export async function getNewsBatch(params) {
  const { pass, paramsList } = params;
  return request(`/audit/news/batch?pass=${pass}`, {
    method: 'POST',
    body: paramsList,
  });
}

// 加队列接口
export async function getNewsReAduit(params) {
  return request(`/audit/news/reAudit`, {
    method: 'POST',
    body: params,
  });
}

// 操作记录接口
export async function getNewsLog(params) {
  return request(`/audit/news/log?id=${params.id}`, {
    method: 'GET',
  });
}
