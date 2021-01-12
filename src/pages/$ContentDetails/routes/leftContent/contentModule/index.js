/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect, useRef} from 'react';
import {Form} from 'antd';
import Ueditor from '@components/Editor/index2.js';
import styles from './index.module.less';

function ContentModule(props) {
  const {
    isEdit = false,
    pForm,
    contentText = '',
    forbiddenWordList = [], // 违禁词
    sensitiveWordList = [], // 敏感词
    hotWord = [], // 热词
    personalWord = [], // 人物词
  } = props;


  const ueRef = useRef(null);

  const [config] = useState({
    initialFrameWidth: '100%',
    initialFrameHeight: 400
  })

  useEffect(()=>{
    if(pForm){
      const {getFieldsValue,setFieldsValue} = pForm;
      const values = getFieldsValue();
      setFieldsValue({
        ...values,
        content: contentText,
      })
    }
  },[contentText])
  
  // 富文本失焦就触发setContent函数设置表单的content内容
  const setContent = (content)=>{
    const {getFieldsValue,setFieldsValue} = pForm;
    const values = getFieldsValue();
    setFieldsValue({
      ...values,
      content,
    })
  }

  /**
   * @name: 高亮单词
   * @test: test font
   * @msg:
   * @param {string, object}
   * @return {string}
   */
  const getContentHtml = (textHtml, List) => {
    // let textHtml = _.cloneDeep(html);
    if (!textHtml) return;

    List.forEach((item) => {
      if (item.value.length > 0) {
        const data = item.value;
        // 模糊匹配修改样式
        data.map((v) => {
          const reg = />[^<]+</g;
          textHtml = textHtml.replace(eval(reg), (tag) => {
            // console.log('tag',tag)
            const regTag = `/${v}/g`;
            const text = tag.replace(
              eval(regTag),
              `<span style="background:${item.color};color:#ffffff;padding:0 5px;margin:0 2px;">${v}</span>`,
            );
            return text;
          });
        });
      }
    });
    return textHtml;
  };

  const list = [
    {
      name: 'forbiddenWordList',
      color: '#ff1840',
      value: forbiddenWordList,
    },
    {
      name: 'hotWord',
      color: '#1890ff',
      value: hotWord,
    },
    {
      name: 'sensitiveWordList',
      color: '#ff6600',
      value: sensitiveWordList,
    },
    {
      name: 'personalWord',
      color: '#00ff97',
      value: personalWord,
    },
  ];

  // 正文
  const textHtml = { __html: getContentHtml(contentText, list) };

  return (
    <Form form={pForm} className="">
      <h3 className={styles.title}>正文详情 : </h3>
      <Form.Item name="content" noStyle></Form.Item>
      {isEdit && (
        <div className={styles.ueditor}>
          <Ueditor 
            id="container" 
            ref={ueRef} 
            config={config} 
            initData={contentText} 
            setContent={(e)=>setContent(e)}>
            </Ueditor>
        </div>
      )}
      {!isEdit && (
        <div className={styles['content-box']}>
          <div className={styles['content-text']} dangerouslySetInnerHTML={textHtml} />
        </div>
      )}
    </Form>
  );
}

export default ContentModule;
