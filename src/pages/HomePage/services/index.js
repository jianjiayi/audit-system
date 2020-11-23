/* eslint-disable import/no-unresolved */
import request from '@http';

// 首页数据接口
export async function getStatisticCount(params) {
  return request(`/audit/statistic/count?businessId=${params.businessId}`, {
    method: 'GET',
  });
}
