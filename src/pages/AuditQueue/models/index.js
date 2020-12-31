/* eslint-disable consistent-return */
/* eslint-disable no-console */
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

    // 领取队列
    *getQueueListDetails({ payload, callback=()=>{} }, { call, select }) {
      try{
        const { query } = yield select(({ CDetails }) => CDetails);
        // 合并参数
        const params = {
          id: sessionStorage.getItem('$queueContentId'),
          ...query,
          ...payload,
        };

        const {code, data} = yield call(api.getQueueListDetails, params);
        

        if (code === 200 && data) {
          // 存储文章id
          sessionStorage.setItem('$queueContentId', data.id);
          return callback(code, data);
        }

        return callback(code, data);
      }catch(e){
        console.log('e',e)
      }
      
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
