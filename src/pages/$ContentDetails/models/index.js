/* eslint-disable object-shorthand */
/* eslint-disable no-console */
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
      const { query, queueContentData } = yield select(({ CDetails }) => CDetails);

      console.log(queueContentData)
      console.log(payload)

      let feedMessage = {...queueContentData.feedMessage, ...payload.content};
      // 合并参数
      const params = {
        info: query,
        data:{
          ...queueContentData,
          feedMessage: {
            ...feedMessage
          },
        }
      };

      console.log(params)

      const { code } = yield call(api.getNewsSaveContent, params);
      if (code === 200) {
        yield put({ type: 'getNewsGetTask', payload: { ...query } });
      }
    },


    // 裁切视频
    *cutVideo({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { actionLoading: true } });
      const { code, data } = yield call(api.cutVideo, payload);
      if(code === 200){
        const { curArt } = yield select(({ CDetails }) => CDetails);
        curArt.mediaInfo.videos[1].src = data.url;
        curArt.mediaInfo.videos[1].duration = data.duration;
        curArt.mediaInfo.videos[1].videoSize = data.videoSize;
        curArt.mediaInfo.videos[1].videoSizeByte = data.videoSizeByte;
        curArt.mediaInfo.videos[1].durationType = data.durationType;
        console.log( curArt.mediaInfo.videos)
        yield put({ type: 'save', payload: { curArt: {...curArt} } });
      }
      yield put({ type: 'save', payload: { actionLoading: false } });
      callback(code, data);
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
        let code = 0;
        let data = {};

        // 领取 单独处理
        if(!payload.queueSubmitType){
          const { query } = yield select(({ CDetails }) => CDetails);
          // 合并参数
          const params = {
            id: sessionStorage.getItem('$queueContentId'),
            ...query,
            ...payload,
          };

          const res = yield call(api.getNewsGetTask, params);
          code = res.code;
          data = res.data;
          
        }else{ // 处理领审页面中确定和跳过操作获取的数据直接使用
          code = 200;
          data = payload.data;
        }
        

        if (code === 200) {
          if (data) {

            // 存储文章id
            sessionStorage.setItem('$queueContentId', data.id);

            yield put({
              type: 'save',
              payload: {
                loading: false,
                isEdit: false, //  左侧编辑状态
                actionLoading: false, // 页面操作loading
                reason: data.reason, // 审核原因
                auditState: data.auditState, //  审核状态
                queueContentData: data, // 所有数据
                curArt: data.feedMessage, // 文章详情
                queueContentId: sessionStorage.getItem('$queueContentId'), // 队列id
                // category: data.content.categoryIds,
                newsDataType: data.feedMessage.articleType,
                forbiddenWordList: data.feedMessage.extra.forbiddenwords || [], // 违禁词
                sensitiveWordList: data.feedMessage.extra.sensitivewords || [], // 敏感词
                hotWord: data.feedMessage.extra.hotwords || [], // 热词
                personalWord: data.feedMessage.extra.personagewords  || [], //人物词
              },
            });
            callback(data);
          } else {
            callback(null);
          }
          return; 
        }

        callback(null);
      }catch(e){console.log('e',e)}
      
    },

    // 确认审核
    *getAuditSave({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { actionLoading: true } });

      const { query } = yield select(({ CDetails }) => CDetails);
      // 合并参数
      const params = {
        info: query,...payload,
      };
      const { code, data } = yield call(api.getAuditSave, params);
      if (code === 200) {
        yield put({ type: 'getNewsGetTask', payload: {queueSubmitType: 'save', data: data} ,callback});
        return; 
      }

      callback(null);
    },

    // 跳过当前待审文章
    *getNewsSkip({ payload, callback }, { call, put, select }) {
      yield put({ type: 'save', payload: { actionLoading: true } });

      const { query } = yield select(({ CDetails }) => CDetails);
      // 合并参数
      const params = {
        info: {...query, ...payload}
      };
      const { code, data } = yield call(api.getNewsSkip, params);
      if (code === 200) {
        yield put({ type: 'getNewsGetTask', payload: {queueSubmitType: 'save', data: data}, callback});
        return; 
      }

      callback(null);
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
        return; 
      }

      callback(null);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
