/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import * as api from '../services/index.js';
import { statisticCount } from '../constants';

export default {
  namespace: 'DataView',

  state: {
    loading: false,
    // 查询条件
    query: {},
    // 文章列表
    dataSource: [],

    // 昨日的音，视，图，文的审核量统计
    yesterdaySource: [],
    // 新增的音，视，图，文的总量统计
    newAddSource: [],
    // 累计的音，视，图，文的待审核量的统计
    totalSource: [],
  },

  effects: {
    *init({ payload }, { put }) {
      yield put({ type: 'save', payload: { loading: true } });
      yield put({ type: 'getStatisticCount', payload });
    },

    *getStatisticCount({ payload }, { call, put }) {
      const { code, data } = yield call(api.getStatisticCount, payload);

      if (code === 200 && data) {
        let arr = [];
        for (let key in data) {
          arr.push({
            name: statisticCount[key],
            value: data[key].toString(),
          });
        }
        yield put({
          type: 'save',
          payload: {
            loading: false,
            dataSource: arr,
            yesterdaySource: [
              {
                name: '昨日审核图文数',
                value: data.yesterdayAuditNews.toString(),
              },
              {
                name: '昨日审核视频数',
                value: data.yesterdayAuditVideo.toString(),
              },
              {
                name: '昨日审核音频数',
                value: data.yesterdayAuditAudio.toString(),
              },
              {
                name: '昨日审核图集数',
                value: data.yesterdayAuditImage.toString(),
              },
            ],
            newAddSource: [
              {
                name: '今日新增图文数',
                value: data.todayAddNews.toString(),
              },
              {
                name: '今日新增视频数',
                value: data.todayAddVideo.toString(),
              },
              {
                name: '今日新增音频数',
                value: data.todayAddAudio.toString(),
              },
              {
                name: '今日新增图集数',
                value: data.todayAddImage.toString(),
              },
            ],
            totalSource: [
              {
                name: '待审图文数',
                value: data.notAuditNews.toString(),
              },
              {
                name: '待审视频数',
                value: data.notAuditVideo.toString(),
              },
              {
                name: '待审音频数',
                value: data.notAuditAudio.toString(),
              },
              {
                name: '待审图集数',
                value: data.notAuditImage.toString(),
              },
            ],
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
