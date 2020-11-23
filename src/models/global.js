import * as api from '../services/global';

export default {
  namespace: 'Global',

  state: {
    firstCategory: [], // 一级分类
    secondCategory: [], // 二级分类
    thirdCategory: [], // 三级分类
  },

  effects: {
    // 获取一级分类
    *getFirstCategory({ payload }, { call, put }) {
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
