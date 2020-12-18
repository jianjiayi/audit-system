/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable spaced-comment */
import request from '@http';

// 获取分类树接口
export async function getCategoryTree(params) {
  return request(`/audit/categoryTree?type=${params.type}`, {
    method: 'GET',
  });
}

// 获取分类接口
export async function getCategory(params) {
  return request(`/audit/categoryInfo?parentCode=${params.id}&type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}

// 获取一级分类接口
export async function getFirstCategory(params) {
  return request(`/audit/categoryInfo?parentCode=0&type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}

//获取二级分类接口
export async function getSecondCategory(params) {
  return request(`/audit/categoryInfo?parentCode=${params.id}&type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}

// 获取三级分类接口
export async function getThirdCategory(params) {
  return request(`/audit/categoryInfo?parentCode=${params.id}&type=${params.type === 'VIDEO'? 1 :0}`, {
    method: 'GET',
  });
}

// 获取图片库接口
export async function getAuditImages(params) {
  return request(`/audit/images?pageNo=${params.pageNo}&pageSize=${params.pageSize}`, {
    method: 'GET',
  });
}
