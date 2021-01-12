/* eslint-disable import/order */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable array-callback-return */

import * as api from '../services/index.js';
import _ from 'lodash';

export default {
  namespace: 'Sensitive',

  state: {
    loading: false,
    // 查询条件
    query: {},
    // 文章列表
    dataSource: [],
    // 分页信息
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      pageSize: 10,
      current: 1,
      total: null,
    },
  },

  effects: {
    // 初始化
    *init({ payload }, { put }) {
      yield put({ type: 'reset' });
      yield put({ type: 'getSensitiveQuery', payload });
    },

    // 创建和修改敏感词
    *addOrUpdateSensitive({ payload, callback }, { call, put }) {
      const { code } = yield call(api.addOrUpdateSensitive, payload);
      callback(code);
    },

    // 获取列表
    *getSensitiveQuery({ payload }, { call, put, select }) {
      yield put({ type: 'save', payload: { query: {}, loading: true } });
      try{
        const { query, pagination } = yield select(({ Sensitive }) => Sensitive);
        // 合并参数
        const params = {
          ...query,
          pageNum: 1,
          pageSize: pagination.pageSize,
          ...payload,
        };

        const { code, data } = yield call(api.getSensitiveQuery, params);

        if (code === 200 && data) {
          yield put({
            type: 'save',
            payload: {
              loading: false,
              query: params,
              dataSource: data.data || [],
              pagination: {
                ...pagination,
                total: data.totalSize,
                current: data.pageNum,
                pageSize: params.pageSize,
              },
            },
          });
        }
      }catch(e){
        yield put({
          type: 'save',
          payload: {
            loading: true,
          },
        });
      }
    },
  },

  reducers: {
    reset() {
      return {
        loading: false,
        // 查询条件
        query: {},
        // 文章列表
        dataSource: [],
        // 分页信息
        pagination: {
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: total => `共 ${total} 条`,
          pageSize: 10,
          current: 1,
          total: null,
        },
      };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
