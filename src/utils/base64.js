/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/**
 * 字符串转base64
 * @param {*} str 
 */
export const encode = (str)=>{
  // 对字符串进行编码
  let encode = encodeURI(str);
  // 对编码的字符串转化base64
  let base64 = btoa(encode);
  return base64;
}

/**
 * base64转字符串
 * @param {*} base64 
 */
export const decode = (base64)=>{
  // 对base64转编码
  let decode = atob(base64);
  // 编码转字符串
  let str = decodeURI(decode);
  return str;
}