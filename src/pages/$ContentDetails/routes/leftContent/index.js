/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable array-callback-return */
/* eslint-disable no-eval */
/* eslint-disable react/jsx-no-duplicate-props */

import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import { Form, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import _ from 'lodash';

import { AudioPlayer, VideoPlayer } from '@components/MediaComponents';
import Ueditor from '@components/Editor';

import { ExTime } from '@utils/utils.js';

import WrapAuthButton from '@components/WrapAuth';
import styles from './index.module.less';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

function Content(props) {
  const [selfForm] = Form.useForm();
  // 临时保存编辑器修改后的文章详情
  const [editorText, setEditorText] = useState('');

  const { className, CDetails, dispatch } = props;

  const {
    curArt,
    isEdit,
    queueContentId,
    newsDataType,
    forbiddenWordList, // 违禁词
    sensitiveWordList, // 敏感词
    hotWord, // 热词
    personalWord, // 人物词
  } = CDetails;

  useEffect(() => {
    setEditorText(curArt.content);
  }, [curArt.content]);

  const changeIsEdit = (status) => {
    if (!status) {
      selfForm.resetFields();
    }
    dispatch({ type: 'CDetails/save', payload: { isEdit: status } });
  };

  const formItemLayout = {
    form: selfForm,
    labelAlign: 'left',
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
  };

  // 保存函数
  const handelSaveArt = (values) => {
    values.content = editorText;
    if (!_.isEmpty(values.datetime)) {
      const time = values.datetime.format(dateFormat);
      values.pubtime = new Date(time.replace(/-/g, '/')).getTime();
    }
    delete values.datetime;

    values.originName = values.origin;

    const { id, ...rest } = values;

    dispatch({
      type: 'CDetails/getNewsSaveContent',
      payload: {
        data: {
          content: rest,
          id: queueContentId,
        },
      },
    });
    changeIsEdit(false);
  };

  // 表头
  const getHaderTpl = () => {
    return (
      <div className={styles.header}>
        <div className={styles['form-box']}>
          <Form.Item
            label="标题"
            name="title"
            initialValue={curArt.title}
            rules={[{ required: true, message: `请输入标题` }]}
          >
            {isEdit ? (
              <Input placeholder="请输入标题" />
            ) : (
              <h2 className={styles.title}>{curArt.title}</h2>
            )}
          </Form.Item>
          <Form.Item label="&nbsp;&nbsp;&nbsp;ID" name="id" initialValue={curArt.id}>
            <span>{curArt.id}</span>
          </Form.Item>
          <Form.Item
            label="来源"
            name={origin}
            initialValue={curArt.sourceId || curArt.sourceName}
            rules={[{ required: true, message: `请输入来源` }]}
          >
            {isEdit ? (
              <Input placeholder="请输入来源" />
            ) : (
              <span className={styles.title}>{curArt.sourceId || curArt.sourceName}</span>
            )}
          </Form.Item>
          <Form.Item
            label="时间"
            name="datetime"
            initialValue={moment(curArt.pubtime)}
            rules={[{ required: true, message: `请选择时间` }]}
          >
            {isEdit ? (
              <DatePicker showTime format={dateFormat} />
            ) : (
              <span className={styles.title}>{ExTime.formatDate(curArt.pubtime)}</span>
            )}
          </Form.Item>
        </div>
        <div className={styles['button-box']}>
          {!isEdit && (
            <WrapAuthButton
              pathUrl="/:type/cdetails"
              text="修改"
              perms="news:edit"
              type="primary"
              size="small"
              onClick={() => {
                changeIsEdit(true);
              }}
            />
          )}
          {isEdit && (
            <div className={styles['button-group']}>
              <Button type="primary" size="small" type="primary" htmlType="submit">
                确定
              </Button>
              <Button
                size="small"
                onClick={() => {
                  changeIsEdit(false);
                }}
              >
                取消
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

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

    List.forEach((item, index) => {
      if (item.value.length > 0) {
        const data = item.value;
        // 模糊匹配修改样式
        data.map((v, i) => {
          const reg = `/${v}/g`;
          textHtml = textHtml.replace(
            eval(reg),
            `<span style="background:${item.color};color:#ffffff;padding:0 5px;margin:0 2px;">${v}</span>`,
          );
        });
      }
    });
    return textHtml;
  };

  const list = [
    {
      name: 'forbiddenWordList',
      color: 'red',
      value: forbiddenWordList,
    },
    {
      name: 'hotWord',
      color: 'red',
      value: hotWord,
    },
    {
      name: 'sensitiveWordList',
      color: 'blue',
      value: sensitiveWordList,
    },
    {
      name: 'personalWord',
      color: 'green',
      value: personalWord,
    },
  ];

  // 正文
  const textHtml = { __html: getContentHtml(curArt.content, list) };
  const UeditorProps = {
    initialContent: curArt.content || '',
    onContentChange: (values) => {
      // console.log(values)
      setEditorText(values);
    },
  };
  // 音频
  const audioProps = {};
  // 视频
  const videoProps = {
    source: curArt.videoUrl,
    poster: (curArt.coverInfo && curArt.coverInfo.imageInfos) || [],
    duration: curArt.durationStr,
  };

  const getContentTpl = () => {
    return (
      <div className={styles['content-container']}>
        {newsDataType === 'AUDIO' && <AudioPlayer {...audioProps} />}

        {newsDataType === 'VIDEO' && (
          <div>
            <h2 className={styles.title}>视频详情 : </h2>
            <VideoPlayer {...videoProps} />
          </div>
        )}

        {(newsDataType === 'NEWS' || newsDataType === 'IMAGE') && (
          <div className="">
            <h2 className={styles.title}>文章详情 : </h2>
            {isEdit && (
              <div>
                <Ueditor {...UeditorProps} />
              </div>
            )}
            {!isEdit && (
              <div className={styles['content-box']}>
                <div className={styles['content-text']} dangerouslySetInnerHTML={textHtml} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Form
      {...formItemLayout}
      onFinish={handelSaveArt}
      className={classNames(className, styles.container)}
    >
      {getHaderTpl()}
      {getContentTpl()}
    </Form>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(Content);
