/* eslint-disable @typescript-eslint/dot-notation */
import React from 'react';
import classNames from 'classnames';
import { connect } from 'dva';

import styles from './FormExtraInfo.module.less';

function FormExtraInfo(props) {
  // console.log(props)
  const { 
    className, 
    CDetails: {
      curArt,
    },
  } = props;
  return (
    <div className={classNames(className, styles['container'])}>
      <p>
        <span>抓取来源ID: {curArt.sourceName || ''}</span>
        <span>抓取来源： {curArt.sourceId || ''}</span>
      </p>
      <p>
        原文链接： <a href={curArt.originUrl || ''}>{curArt.originUrl || ''}</a>
      </p>
      <p>摘要： {curArt.summary || ''}</p>
    </div>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(FormExtraInfo);
