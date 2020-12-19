/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable array-callback-return */

import * as api from '../services/index.js';

export default {
  namespace: 'Search',

  state: {
    loading: false,
    // 查询条件
    query: {},
    // 队列列表
    queueMap: {},
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
      yield put({
        type: 'getQueue',
        payload: {
          bid: payload.businessId,
        },
      });
      yield put({ type: 'getNewsList', payload });
    },

    // 获取队列列表
    *getQueue({ payload }, { call, put }) {
      yield put({ type: 'save', payload: { queueList: {} } });
      // 合并参数
      const params = {
        pageNum: 1,
        pageSize: 1000,
        ...payload,
      };

      const { code, data } = yield call(api.getQueue, params);

      if (code === 200 && data) {
        let map = {};
        data.data.map(item => {
          map[item.id] = item.name;
        });

        // console.log(map)
        yield put({
          type: 'save',
          payload: {
            queueMap: map,
          },
        });
      }
    },

    // 获取审核列表
    *getNewsList({ payload }, { call, put, select }) {
      yield put({ type: 'save', payload: { loading: true } });

      const { query, pagination } = yield select(({ Search }) => Search);
      // 合并参数
      const params = {
        ...query,
        pageNum: 1,
        pageSize: pagination.pageSize,
        ...payload,
      };

      // console.log(params)

      const { code, data } = yield call(api.getNewsList, params);

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

        sessionStorage.setItem('$QUERY_FROM_SEARCH', JSON.stringify({}));
      }
    },

    // 批量操作审核
    *batchAudit({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { loading: true } });

      const { query } = yield select(({ Search }) => Search);
      // 合并参数

      const { code, data } = yield call(api.getNewsBatch, payload);

      if (code === 200 && data) {
        // 刷新当前列表
        yield put({ type: 'getNewsList', payload: { ...query } });
        callback(data);
      }
    },

    // 加入复审队列
    *getNewsReAduit({ payload, callback }, { call }) {
      const { code, data } = yield call(api.getNewsReAduit, payload);

      callback(code, data);
    },

    // 查询操作记录
    *getNewsLog({ payload, callback }, { call }) {
      const { code, data } = yield call(api.getNewsLog, payload);

      if (code === 200) {
        callback(data);
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
          showQuickJumper: false,
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
