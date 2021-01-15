/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import request from '@http';

export async function queryArt(params) {
  // return request(`http://newsdata.peopletech.cn/wapapi/detail/ZXB-ORIGIN-4437761/webCard`, {
  //   method: 'get',
  // })
  return request(`https://newsdata.peopletech.cn/appapi/detail/4365092`, {
    method: 'get',
  });
}

// 领取队列
export async function getNewsGetTask(params) {
  return request(`/audit/news/${params.routersource === 'search' ? 'obtainId' : 'obtainDetail'}`, {
    method: 'POST',
    body: params,
  });
}

// 保存当前文章
export async function getNewsSaveContent(params) {
  return request(`/audit/news/save/content`, {
    method: 'POST',
    body: params,
  });
}

// 裁切视频
export async function cutVideo(params) {
  return request(`/audit/video/cut`, {
    method: 'POST',
    body: params,
    timeout: 5*1000*60
  });
}

// 校验标签是否存在
export async function getCheckoutTags(params) {
  return request(`/audit/tag/exists?name=${params.name}`, {
    method: 'GET',
  });
}

// 确认审核接口
export async function getAuditSave(params) {
  return request(`/audit/news/save/${params.typename}`, {
    method: 'POST',
    body: params,
  });
}

// 跳过当前待审文章
export async function getNewsSkip(params) {
  return request(`/audit/news/skip`, {
    method: 'POST',
    body: params,
  });
}

// 退出当前领取队列接口
export async function getNewsExit(params) {
  return request(`/audit/news/exit`, {
    method: 'POST',
    body: params,
  });
}

// 获取所有分类接口
export async function getAllCategory(params) {
  return request(`/audit/categoryInfo?type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}