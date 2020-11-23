/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef } from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { useModel } from 'umi';

import BaseForm from '@components/BaseForm';
import TextCountUp from '@components/TextCountUp';

import PieChart from '@components/Charts/Pie';

import { ExObject } from '@utils/utils.js';
import { colorList } from '../constants';

import styles from './index.module.less';

function HomePage(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const formRef = useRef(null);

  const {
    dispatch,
    business = currentUser.business || {},
    DataView: {
      loading,
      dataSource,
      // 昨日的音，视，图，文的审核量统计
      yesterdaySource,
      // 新增的音，视，图，文的总量统计
      newAddSource,
      // 累计的音，视，图，文的待审核量的统计
      totalSource,
    },
  } = props;

  // console.log('initialState', currentUser.business)

  useEffect(() => {
    let businessId = formRef.current.getFieldValue('businessId');
    // let businessId = '';
    if (!businessId) return;
    dispatch({
      type: 'DataView/init',
      payload: {
        businessId,
      },
    });
  }, [dispatch, business]);

  // 多条件搜索配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'businessId',
        initialValue: ExObject.getFirstValue(business),
        map: business,
      },
    ],
    onReset: () => {},
    onSubmit: (formValues) => {
      dispatch({
        type: 'DataView/getStatisticCount',
        payload: {
          ...formValues,
        },
      });
    },
  };

  let TextCountUpProps = {
    dataSource,
  };

  const getOptions = (data = []) => {
    return {
      color: colorList,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: '统计',
          type: 'pie',
          // radius: [30, 110],
          center: ['50%', '50%'],
          // roseType: 'radius',
          label: {
            show: true,
            formatter: '{b} : {c} ({d}%)',
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data,
        },
      ],
    };
  };

  const pieChartsProps1 = {
    option: getOptions(yesterdaySource),
    width: '800px',
    height: '500px',
  };
  const pieChartsProps2 = {
    option: getOptions(newAddSource),
    width: '800px',
    height: '500px',
  };
  const pieChartsProps3 = {
    option: getOptions(totalSource),
    width: '800px',
    height: '500px',
  };
  return (
    <div className={styles.container}>
      <BaseForm {...searchFormProps} pRef={formRef}></BaseForm>
      <TextCountUp {...TextCountUpProps}></TextCountUp>
      <div className={styles.echarts}>
        <div className={styles.piebox}>
          <h2>昨日的音，视，图，文的审核量统计</h2>
          <PieChart {...pieChartsProps1}></PieChart>
        </div>
        <div className={styles.piebox}>
          <h2>新增的音，视，图，文的总量统计</h2>
          <PieChart {...pieChartsProps2}></PieChart>
        </div>
        <div className={styles.piebox}>
          <h2>累计的音，视，图，文的待审核量的统计</h2>
          <PieChart {...pieChartsProps3}></PieChart>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ DataView }) {
  return { DataView };
}

export default connect(mapStateToProps)(HomePage);
