/* eslint-disable import/no-unresolved */
import React from 'react';
import { VideoPlayer } from '@components/MediaComponents';
import styles from './videoModule.less';

function VideoModule(props) {
  return (
    <>
      <h4 className={styles.title}>视频详情 : </h4>
      <div className={styles.video_container}>
        <VideoPlayer {...props} />
      </div>
    </>
  )
}

export default VideoModule
