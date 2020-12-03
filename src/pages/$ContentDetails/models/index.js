/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

import * as api from '../services/index.js';

export default {
  namespace: 'CDetails',

  state: {
    loading: false,
    actionLoading: false, //操作页面loading
    isEdit: false, // 判断左侧正文是否处于编辑状态
    query:
      sessionStorage.getItem('$QUERY') !== ''
        ? JSON.parse(sessionStorage.getItem('$QUERY')) || {}
        : {}, //查询条件
    queueContentId: '', //当前审核文章的id
    curArt: {}, //当前文章内容
    queueContentData: {}, //存放返回的所有数据
    category: [], //三级分类
    newsDataType: '', // 文章类型
    forbiddenWordList: [], // 违禁词
    sensitiveWordList: [], // 敏感词
    hotWord: [], // 热词
    personalWord: [], //人物词

    tagsList: [], //标签
  },

  effects: {
    // 初始化
    *init({ payload }, { put }) {
      yield put({ type: 'save', payload: { loading: true } });
      yield put({ type: 'getNewsGetTask', payload });
    },

    // 保存当前文章
    *getNewsSaveContent({ payload }, { call, put, select }) {
      const { query } = yield select(({ CDetails }) => CDetails);
      // 合并参数
      const params = {
        info: query,
        ...payload,
      };
      const { code } = yield call(api.getNewsSaveContent, params);
      if (code === 200) {
        yield put({ type: 'getNewsGetTask', payload: { ...query } });
      }
    },

    // 校验标签是否存在
    *getCheckoutTags({ payload, callback }, { call }) {
      const { code, data } = yield call(api.getCheckoutTags, payload);
      if (code === 200) {
        callback(data);
      }
    },

    // 领取队列
    *getNewsGetTask({ payload, callback=()=>{} }, { call, put, select }) {
      try{
        const { query } = yield select(({ CDetails }) => CDetails);
        // 合并参数
        const params = {
          ...query,
          ...payload,
        };

        const { code, data } = yield call(api.getNewsGetTask, params);

        if (code === 200) {
          if (data) {
            // 处理标签
            let list = [];
            let tagsArr = data.labels;
            // let tagsArr = ['as京东方','撒旦法'];
            for (let i in tagsArr) {
              let item = tagsArr[i];
              const { code: c, data: d } = yield call(api.getCheckoutTags, { name: item });
              if (c === 200) {
                list.push({
                  type: 1,
                  text: item,
                });
              }
            }

            // 获取分类
            yield put({ 
              type: 'Global/getFirstCategory',
              payload:{
                id: 0, 
                type: data.feedMessage.articleType === 'VIDEO' ? 1 : 0
              }
            });

            yield put({
              type: 'save',
              payload: {
                loading: false,
                isEdit: false,
                actionLoading: false,
                reason: data.reason,
                auditState: data.auditState,
                queueContentData: data,
                curArt: data.feedMessage,
                queueContentId: data.id,
                // category: data.content.categoryIds,
                newsDataType: data.feedMessage.articleType,
                forbiddenWordList: data.forbiddenWordList || [], // 违禁词
                sensitiveWordList: data.sensitiveWordList || [], // 敏感词
                hotWord: data.hotWord || [], // 热词
                personalWord: data.personalWord || [], //人物词

                tagsList: list,
              },
            });
            callback(data);
          } else {
            callback(null);
          }
        }
      }catch(e){console.log('e',e)}
      
    },

    // 确认审核
    *getAuditSave({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { actionLoading: true } });

      const { query } = yield select(({ CDetails }) => CDetails);
      // 合并参数
      const params = {
        info: query,
        ...payload,
      };
      const { code, data } = yield call(api.getAuditSave, params);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            loading: false,
            isEdit: false,
            actionLoading: false,
            queueContentData: {},
            curArt: {},
          },
        });
        yield put({ type: 'getNewsGetTask', payload: { ...query } ,callback});
        callback(data);
      }
    },

    // 跳过当前待审文章
    *getNewsSkip({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { actionLoading: true } });

      const { query } = yield select(({ CDetails }) => CDetails);
      // 合并参数
      const params = {
        info: query,
        ...payload,
      };
      const { code, data } = yield call(api.getNewsSkip, params);
      if (code === 200) {
        yield put({ type: 'getNewsGetTask', payload: { ...query }});

        callback(data);
      }
    },

    // 退出当前领取队列
    *getNewsExit({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { actionLoading: true } });
      const { query } = yield select(({ CDetails }) => CDetails);
      // 合并参数
      const params = {
        ...query,
        ...payload,
      };
      const { code } = yield call(api.getNewsExit, params);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            query: {},
            curArt: {},
            actionLoading: false,
          },
        });
        sessionStorage.setItem('$QUERY', JSON.stringify({}));
        callback(code);
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
