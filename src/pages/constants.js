/* eslint-disable import/newline-after-import */
/* eslint-disable global-require */
// import { BASEURL } from '@/config';
const BASEURL = '';
// 上传文件路径
export const UPLOAD_FILE_URL = `${BASEURL}/audit/file/upload/image`;
export const errorImg = require('@/assets/error.png');
export const acceptType = ['jpg', 'png', 'jpeg', 'gif'];
export const maxFileSize = 5;

// 视频占位符
export const videoPlaceholderImg = require('@/assets/video_placeholder_img.png');

// 系统使用的随机颜色
export const colorList = [
  '#7eacea',
  '#e15777',
  '#95ea71',
  '#ea9b4f',
  '#7577df',
  '#be72d8',
  '#6633FF',
  '#6600CC',
  '#006633',
  '#993333',
  '#FF9900',
  '#9999FF',
];

// 时间类型
export const dateFormat = 'YYYY-MM-DD HH:mm:ss';

// 内容类型
export const contentType = {
  '': '全部',
  NEWS: '图文',
  VIDEO: '视频',
  AUDIO: '音频',
  ATLAS: '图集',
  TEXT: '纯文本',
};

// 队列机制
export const queueType = { 
  '': '全部', 
  1: '先审后发', 
  2: '先发后审', 
  3: '免审' 
};

// 队列保存时长
export const keepDays = {
  '': '全部',
  1: '1天',
  3: '3天',
  7: '7天',
  15: '15天',
  30: '30天',
  60: '60天',
  90: '90天',
};

// 队列状态
export const queueStatus = { 
  '': '全部', 
  0: '启用', 
  1: '停用' 
};

// 权限状态
export const rightStatus = { 
  '': '全部', 
  0: '离线', 
  1: '在线', 
  2: '注销' 
};

// 角色状态
export const roleStatus = { 
  '': '全部', 
  0: '有效', 
  1: '注销' 
};

// 审核状态
export const auditStatus = { 
  '': '全部', 
  1: '待审核', 
  2: '审核通过', 
  3: '审核未通过' 
};

// 上架状态
export const runningStatus = { 
  '': '全部', 
  ONLINE: '上架', 
  OFFLINE: '下架' 
};

// 统计排序
export const orderFieldMap = {
  '': '全部',
  dt: '时间',
  entry_queue_count: '入审量',
  audit_count: '审核量',
  audit_passed_count: '审核通过量',
};

// 统计排序
export const orderTypeMap = { 
  desc: '降序', 
  asc: '升序' 
};

// 审核结果
export const auditResult = {
  '': '全部',
  INIT: '待审核',
  // PENDING: '已领取',
  PASS: '审核通过',
  REJECT: '审核未通过',
};
// 审核结果
export const auditResult1 = { 
  '': '全部', 
  审核通过: '审核通过', 
  审核未通过: '审核未通过' 
};

// 文章审核通过&未通过原因
export const passReason = ['去杂不净', '广告', '其他'];
export const rejectReason = [
  '文章质量差',
  '广告',
  '软文',
  '封图',
  '去杂不净',
  '抓取不全/错误',
  '版权问题',
  '其他',
];

// 敏感词状态
export const sensitiveStatus = { 0: '启用', 1: '停用' };
// 敏感词类别
export const sensitiveCategories = {
  1: '敏感词',
  2: '禁词',
};
// 敏感词分类
export const sensitiveClassification = {
  POLITICAL: '政治',
  OTHER: '脏话',
  PORNOGRAPHIC: '色情',
  CURRENT_EVENT: '敏感时事',
  LEADER: '领导人',
  ADVERTISEMENT: '广告',
  HIGH_RISK: '高危',
  RUBBISH: '垃圾',
  VIOLENCE: '暴恐',
};
// 敏感词等级
export const sensitiveLevel = {
  0: '一级(致命)',
  1: '一级(高危)',
  2: '二级(中危)',
  3: '三级(低危)',
  9: '特殊',
};
