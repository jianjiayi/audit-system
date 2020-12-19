/* eslint-disable @typescript-eslint/dot-notation */
import React from 'react';
import classNames from 'classnames';
import { connect } from 'umi';

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
        <span>抓取来源ID: {curArt.sourceId || ''}</span>
        <span>抓取来源： {curArt.sourceName || ''}</span>
      </p>
      <p>
        原文链接： <a href={curArt.originUrl || ''} target="_black">{curArt.originUrl || ''}</a>
      </p>
      <p>摘要： {curArt.summary || ''}</p>
    </div>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(FormExtraInfo);
