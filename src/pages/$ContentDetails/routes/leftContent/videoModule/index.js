/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { VideoPlayer } from '@components/MediaComponents';
import VideoCropper from './VideoCropper';
import styles from './index.module.less';

function VideoModule(props) {
  const {
    source = '',
    poster = '',
    duration = '',
    showType = '',
    pFrom,
    onChange = () => {}, // 该函数用来修改全局中的时长以及视频新地址
  } = props;

  const cropOptions = {
    pFrom,
    duration,
    className: styles.form,
    onFinish: (values) => {
      const {start, end} = values.videoInfo;
      onChange({start:start*1000,end:end*1000, duration, videoUrl: source, showType })
    },
  };

  return (
    <>
      <h4 className={styles.title}>视频详情 : </h4>
      <div className={styles.container}>
        <div className={styles.video}>
          <VideoPlayer source={source} poster={poster} duration={duration} />
        </div>
        <VideoCropper {...cropOptions}></VideoCropper>
      </div>
    </>
  );
}

export default VideoModule;
