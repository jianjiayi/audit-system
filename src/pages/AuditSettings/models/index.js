/* eslint-disable no-empty-pattern */
import * as api from '../services/index.js';

export default {
  namespace: 'Settings',

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
    *init({}, { put }) {
      yield put({ type: 'reset' });
      yield put({ type: 'getQueue' });
      yield put({ type: 'QDetails/getRuleInfo' });
      yield put({ type: 'QDetails/getContentSource' });
    },

    // 获取队列列表
    *getQueue({ payload }, { call, put, select }) {
      yield put({ type: 'save', payload: { loading: true } });

      const { query, pagination } = yield select(({ Settings }) => Settings);
      // 合并参数
      const params = {
        ...query,
        pageNum: 1,
        pageSize: pagination.pageSize,
        ...payload,
      };

      const { code, data } = yield call(api.getQueue, params);

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
    },

    // 更新队列状态
    *updateQueueStatus({ payload, callback }, { call }) {
      // 根据number确认操作
      const { code } = yield call(api.updateQueueStatus, payload);
      if (code === 200) {
        callback();
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
