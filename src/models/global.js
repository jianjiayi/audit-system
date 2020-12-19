import * as api from '../services/global';

export default {
  namespace: 'Global',

  state: {
    categoryTree: [], // 分类树
    firstCategory: [], // 一级分类
  },

  effects: {
    *getCategoryTree({ payload }, { call, put }) {
      const { code, data } = yield call(api.getCategoryTree, payload);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            categoryTree: data,
          },
        });
      }
    },
    // 获取分类
    *getCategory({ payload }, { call, put }) {
      const { code, data } = yield call(api.getCategory, payload);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            firstCategory: data,
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
