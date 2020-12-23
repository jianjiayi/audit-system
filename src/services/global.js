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
  const id = params.id ? `parentCode=${params.id}&` : '';
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
