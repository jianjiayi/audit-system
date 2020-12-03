/* eslint-disable import/no-unresolved */
import request from '@http';

// 审核统计列表查询接口
export async function getStatisticQuery(params){
  // console.log('params',params)
  return request(`/audit/statistic/${params.type}/query`, {
    method: 'POST',
    body: params
  })
}

// 人员统计详情查询接口
export async function getPersoneDetailQuery(params){
  return request(`/audit/statistic/person/detail/query`, {
    method: 'POST',
    body: params
  })
}

// 下载excel
export async function getPersoneExportExcel(params){
  return request(`/audit/statistic/person/export`, {
    method: 'POST',
    body: params
  })
}