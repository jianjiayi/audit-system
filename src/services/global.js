/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable spaced-comment */
import request from '@http';

// 获取分类树接口
export async function getCategoryTree(params) {
  return request(`/audit/categoryTree?type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}

// 获取分类接口
export async function getCategory(params) {
  let id = params.id ? `parentCode=${params.id}&` : '';
  if(params.id === 0) id = `parentCode=${0}&`
  
  return request(`/audit/categoryInfo?${id}type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}

// 获取图片库接口
export async function getAuditImages(params) {
  return request(`/audit/images?pageNo=${params.pageNo}&pageSize=${params.pageSize}`, {
    method: 'GET',
  });
}

// 上传文件接口
export async function fileUploadImage(params) {
  return request(`/audit/file/upload/image`, {
    method: 'POST',
    body: params
  });
}
