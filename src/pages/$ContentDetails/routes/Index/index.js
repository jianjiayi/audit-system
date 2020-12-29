/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Spin } from 'antd';

import Content from '../leftContent';
// import Operate from '../RightContent';
import Operate from '../Operate';

import styles from './index.module.less';

function ContentDetails(props) {
  const {
    history,
    dispatch,
    CDetails: { loading, actionLoading },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'CDetails/init',
      payload: {
        routersource: 'task'
      },
      callback: ()=>{}
    });
  }, [dispatch]);

  const contentProps = {
    className: styles.content,
  };
  const operateProps = {
    className: styles.action,
    history,
  };

  const pageProps = {
    className: styles.container,
  };

  // console.log('loading:', loading);

  return (
    <div {...pageProps}>
      <Content {...contentProps} />
      <Operate {...operateProps} />
      {actionLoading && (
        <div className={styles.loading}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(ContentDetails);
