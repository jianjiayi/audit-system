import React from 'react';
import classNames from 'classnames';
import styles from './index.module.less';

function AudioPlayer(props) {
  const { className, url } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <audio src={url} controls>
        浏览器版本过低，不支持audio标签
      </audio>
    </div>
  );
}

export default AudioPlayer;
