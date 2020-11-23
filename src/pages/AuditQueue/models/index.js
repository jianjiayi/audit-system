/* eslint-disable import/no-unresolved */
import * as api from '../services/index.js';

export default {
  namespace: 'Queue',

  state: {
    loading: false,
    // 查询条件
    query: {},
    // 文章列表
    dataSource: [],
  },

  effects: {
    // 初始化
    *init({ payload }, { put }) {
      sessionStorage.setItem('$QUERY_FROM_SEARCH', JSON.stringify({}));
      yield put({ type: 'getQueueListCount', payload });
    },
    *getQueueListCount({ payload }, { call, put }) {
      yield put({ type: 'save', payload: { query: {}, loading: true } });

      const { code, data } = yield call(api.getQueueListCount, payload);

      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            loading: false,
            dataSource: data || [],
          },
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
