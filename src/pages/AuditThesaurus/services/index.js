/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
import request from '@http';

// 查询敏感词列表接口
export async function getSensitiveQuery(params) {
  return request(`/audit/sensitive/query`, {
    method: 'POST',
    body: params,
  });
}

// 新增、修改敏感词接口
export async function addOrUpdateSensitive(params) {
  const {id, ApiType, ...rest} = params;
  const data = ApiType === 'add' ? rest : {id, ...rest};
  return request(`/audit/sensitive/${ApiType}`, {
    method: 'POST',
    body: data,
  });
}


