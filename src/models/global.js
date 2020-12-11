import * as api from '../services/global';

export default {
  namespace: 'Global',

  state: {
    categoryTree: [], // 分类树
    firstCategory: [], // 一级分类
    secondCategory: [], // 二级分类
    thirdCategory: [], // 三级分类
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
    // 获取一级分类
    *getFirstCategory({ payload }, { call, put }) {
      // console.log('payload----getFirstCategory',payload)
      const { code, data } = yield call(api.getFirstCategory, payload);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            firstCategory: data,
            secondCategory: [],
            thirdCategory: []
          },
        });
      }
    },
    // 获取二级分类
    *getSecondCategory({ payload }, { call, put }) {
      // console.log('payload++++getSecondCategory',payload)
      const { code, data } = yield call(api.getSecondCategory, payload);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            secondCategory: data,
          },
        });
      }
    },
    // 获取三级分类
    *getThirdCategory({ payload }, { call, put }) {
      const { code, data } = yield call(api.getThirdCategory, payload);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            thirdCategory: data,
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
