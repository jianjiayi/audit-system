/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import styles from './index.module.less';
import _ from 'lodash';

function VideoPlayer(props) {
  const videoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [hasControls, setHasControls] = useState(false);
  const { className, name, source, poster, duration } = props;

  const onPlay = () => {
    const video = videoRef.current;
    video.play();
    setShowOverlay(false);
    setHasControls(true);
  };
  const onEnded = () => {
    setShowOverlay(true);
  };

  return (
    <div className={styles['video-player']}>
      <video
        ref={videoRef}
        controls={hasControls}
        controlsList="nodownload"
        src={source}
        poster={(!_.isEmpty(poster) && poster[0].originalUrl) || ''}
        // ended={()=>onEnded()}
      ></video>
      {showOverlay && (
        <div className={styles['video-overlay']} style={{ backgroundImage: `url(${poster})` }}>
          <a className={styles['btn-play']} onClick={() => onPlay()}></a>
          <span className={styles['duration-wrap']}>
            <i className={styles['icon']}></i>
            <span className={styles['duration']}>{duration}</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
