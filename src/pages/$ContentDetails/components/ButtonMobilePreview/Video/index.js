/* eslint-disable func-names */
/* eslint-disable react/no-danger */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-var */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-redeclare */

import React from 'react';
import { VideoPlayer } from '@components/MediaComponents';

import { ExTime } from '@utils/utils.js';

import styles from './index.module.less';

function Video(props) {
  const { curArt = {} } = props;
  const videoProps = {
    className:styles.video_container,
    source: curArt.mediaInfo && curArt.mediaInfo.videos[1].src,
    poster: (curArt.mediaInfo && curArt.mediaInfo.images) || [],
    duration: curArt.mediaInfo && curArt.mediaInfo.videos[1].duration,
  };

  // 过滤富文本的样式
  const replaceImgStyle = (text) => {
    if (!text) return;

    return text.replace(/<[^>]+>/gi, function (tag) {
      var reg = /style\s*?=\s*?([‘"])[\s\S]*?\1/;
      var tag = tag.replace(reg, '');
      if (!(tag.indexOf('<img') > -1)) {
        tag = tag.replace(/width/gi, '');
        tag = tag.replace(/height/gi, '');
      }
      return tag;
    });
  };

  const textHtml = { __html: replaceImgStyle(curArt.content) || '' };

  return (
    <>
      <VideoPlayer {...videoProps}></VideoPlayer>
      <div className={styles.normal}>
        <p className={styles.title}>{curArt.title}</p>
        <p className={styles.source}>
          {curArt.createtime && <span>{ExTime.formatDate(curArt.createtime)}</span>}
          {curArt.origin && curArt.origin.length > 5 && <br />}
          <span> 来源：{curArt.origin || curArt.originName}</span>
        </p>
        <div className={styles['content-detail']} dangerouslySetInnerHTML={textHtml}></div>
      </div>
    </>
  );
}

export default Video;
