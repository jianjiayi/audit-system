/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import _ from 'lodash';

const formatDate = (time) => {
  let h = Math.floor(time / 3600);
  let m = Math.floor((time - h * 3600) / 60);
  let s = Math.floor(time % 60);
  if (s < 10) {
    s = '0' + s;
  }
  if (m < 10) {
    m = '0' + m;
  }
  let str = '';
  if (h > 0) {
    str = h + ':' + m + ':' + s;
  } else {
    str = m + ':' + s;
  }
  return str;
};

function VideoPlayer(props) {
  const videoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [hasControls, setHasControls] = useState(false);
  const { className, source, poster, duration } = props;

  const onPlay = () => {
    const video = videoRef.current;
    video.play();
    setShowOverlay(false);
    setHasControls(true);
  };

  return (
    <div className={classNames(className,styles['video-player'])}>
      <video
        ref={videoRef}
        controls={hasControls}
        controlsList="nodownload"
        src={source}
        poster={(!_.isEmpty(poster) && poster[1].src) || ''}
        // ended={()=>onEnded()}
      ></video>
      {showOverlay && (
        <div className={styles['video-overlay']} style={{ backgroundImage: `url(${poster})` }}>
          <a className={styles['btn-play']} onClick={() => onPlay()}></a>
          <span className={styles['duration-wrap']}>
            <i className={styles['icon']}></i>
            <span className={styles['duration']}>{formatDate(duration)}</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
