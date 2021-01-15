/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable spaced-comment */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable array-callback-return */
/* eslint-disable no-eval */
/* eslint-disable react/jsx-no-duplicate-props */

import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import classNames from 'classnames';
import { Form, message } from 'antd';
import moment from 'moment';
import _ from 'lodash';

import TopForm from './TopForm';
import { AudioPlayer } from '@components/MediaComponents';
import VideoModule from './videoModule/index';
import ContentModule from './contentModule/index';

import styles from './index.module.less';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

function Content(props) {
  const [selfForm] = Form.useForm();
  const [videoCropForm] = Form.useForm();

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
    selfForm.setFieldsValue({
      title: curArt.title,
      originName: curArt.originName,
      datetime: moment(curArt.pubTime),
    });
  }, [isEdit]);

  // 表单模块
  const topFromProps = {
    curArt,
    isEdit,
    pForm: selfForm,
    className: classNames(className, styles.container),
    handelSaveArt: () => {
      selfForm
        .validateFields()
        .then((values) => {
          // 处理视频占位符
          let textHtml = values.content;
          const reg = /<img [^>]*src=["http://lucky.peopletech.cn/static/video_placeholder_img.png">]*>/gi;
          textHtml = textHtml.replace(reg, (tag) => {
            return videoPlaceholder;
          });

          values.content = textHtml;

          if (!_.isEmpty(values.datetime)) {
            const time = values.datetime.format(dateFormat);
            values.pubTime = new Date(time.replace(/-/g, '/')).getTime();
          }
          delete values.datetime;

          const { id, ...rest } = values;
          dispatch({
            type: 'CDetails/getNewsSaveContent',
            payload: {
              content: rest,
              id: queueContentId,
            },
          });
        })
        .catch((errorInfo) => {
          console.log('errorInfo', errorInfo);
        });
    },
    changeIsEdit: (status) => {
      if (!status) {
        selfForm.resetFields();
      }
      dispatch({ type: 'CDetails/save', payload: { isEdit: status } });
    },
  };

  // 音频模块
  const audioProps = {
    url: curArt.mediaInfo && curArt.mediaInfo.audios,
  };

  // 视频模块
  const videoProps = {
    source: curArt.mediaInfo && curArt.mediaInfo.videos && curArt.mediaInfo.videos[1].src,
    poster: (curArt.covers && curArt.covers[0]) || {},
    duration: curArt.mediaInfo && curArt.mediaInfo.videos && curArt.mediaInfo.videos[1].duration,
    showType: curArt.mediaInfo && curArt.mediaInfo.videos && curArt.mediaInfo.videos[1].showType,
    pFrom: videoCropForm,
    onChange: (params) => {
      dispatch({
        type: 'CDetails/cutVideo',
        payload: { ...params},
        callback: (code, data) => {
          if (code !== 200) return message.error('裁切失败');
          videoCropForm.resetFields();
        },
      });
    },
  };

  // 缓存下视频占位符
  const [videoPlaceholder, setVideoPlaceholder] = useState('');
  // 富文本内容
  const [editorText, setEditorText] = useState('');
  useEffect(() => {
    setEditorText(filterPlaceholder(curArt.content));
  }, [curArt.content]);
  // 处理视频占位符
  const filterPlaceholder = (textHtml) => {
    // return textHtml;
    if (!textHtml) return textHtml;
    const reg = /#{{[^]+}}#/g;
    return textHtml.replace(eval(reg), (tag) => {
      setVideoPlaceholder(tag);
      return `<img src="http://lucky.peopletech.cn/static/video_placeholder_img.png"/>`;
    });
  };
  // 富文本
  const contentProps = {
    isEdit,
    contentText: editorText,
    pForm: selfForm,
    forbiddenWordList, // 违禁词
    sensitiveWordList, // 敏感词
    hotWord, // 热词
    personalWord, // 人物词
  };

  return (
    <div className={classNames(className, styles.container)}>
      <TopForm {...topFromProps}></TopForm>
      {newsDataType === 'AUDIO' && <AudioPlayer {...audioProps} />}
      {newsDataType === 'VIDEO' && <VideoModule pForm={selfForm} {...videoProps} />}
      <ContentModule {...contentProps}></ContentModule>
    </div>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(Content);
