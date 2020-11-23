/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useState, useCallback } from 'react';
import * as api from '../services/global';

export default function useCategoryModel() {
  const [firstCategory, setFirstCategory] = useState([]);
  const [secondCategory, setSecondCategory] = useState([]);
  const [thirdCategory, setThirdCategory] = useState([]);

  // 获取一级分类
  const getFirstCategory = useCallback(async () => {
    try {
      const { code, data } = await api.getFirstCategory();
      if (code === 200) {
        setFirstCategory(data);
      }
    } catch (error) {
      console.log('获取一级分类失败');
    }
  });

  // 获取二级分类
  const getSecondCategory = useCallback(async () => {
    try {
      const { code, data } = await api.getSecondCategory(payload);
      if (code === 200) {
        setSecondCategory(data);
      }
    } catch (error) {
      console.log('获取二级分类失败');
    }
  });

  // 获取三级分类
  const getThirdCategory = useCallback(async () => {
    try {
      const { code, data } = await api.getThirdCategory(payload);
      if (code === 200) {
        setThirdCategory(data);
      }
    } catch (error) {
      console.log('获取三级分类失败');
    }
  });

  return {
    firstCategory,
    secondCategory,
    thirdCategory,
    getFirstCategory,
    getSecondCategory,
    getThirdCategory,
  };
}
