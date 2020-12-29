/* eslint-disable import/no-unresolved */
import request from '@http';

// 队列查询接口
export async function getQueueListCount(params) {
  return request(`/audit/queue/listCount`, {
    method: 'POST',
    body: params,
  });
}

// 获取队列详情接口
export async function getQueueListDetails(params) {
  return request(`/audit/news/obtainDetail`, {
    method: 'POST',
    body: params,
  });
}
