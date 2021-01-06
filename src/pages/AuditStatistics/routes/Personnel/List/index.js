/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef } from 'react';
import { Form, Input, Select } from 'antd';
import _ from 'lodash';
import { history, useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';

import { contentType, orderFieldMap, orderTypeMap, dateFormat } from '@/pages/constants';

import styles from './index.module.less';

import WrapAuthButton from '@components/WrapAuth';

const InputGroup = Input.Group;
const { Option } = Select;

function AuditStatistics(props) {
  const {
    initialState: { currentUser = {}},
  } = useModel('@@initialState');

  const formRef = useRef(null);

  const {
    dispatch,
    business = currentUser.business || {},
    Statistics: { loading, dataSource, pagination },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Statistics/init',
      payload: {
        type: 'person',
        ...formRef.current.getFieldsValue(),
      },
    });
  }, [dispatch]);

  // 多条件搜索配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/statistics/personnel/',
      perms: 'statistics:person:select',
    },
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'businessId',
        initialValue: (
          !_.isEmpty(business) && 
          business.find(v=>v.key===15000002) && 
          business.find(v=>v.key===15000002).key
        ) || '',
        map: business,
      },
      { label: '时间', name: 'datatime', type: 'DateTimeStartEnd' },
      {
        label: '类型',
        type: 'SELECT',
        name: 'newsType',
        initialValue: 'NEWS',
        map: contentType,
      },
      {
        label: '人员',
        name: 'user',
      },
      {
        label: '排序',
        name: 'params11',
        itemRender: (
          <InputGroup compact>
            <Form.Item name="orderField" initialValue="" noStyle>
              <Select style={{ width: '50%' }}>
                {Object.keys(orderFieldMap).map((item) => {
                  return (
                    <Option key={item} value={item}>
                      {orderFieldMap[item]}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="orderType" initialValue="desc" noStyle>
              <Select style={{ width: '50%' }}>
                {Object.keys(orderTypeMap).map((item) => {
                  return (
                    <Option key={item} value={item}>
                      {orderTypeMap[item]}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </InputGroup>
        ),
      },
    ],
    onReset: () => {
      dispatch({
        type: 'Statistics/init',
        payload: {
          type: 'person',
          businessId: formRef.current.getFieldValue('businessId'),
        },
      });
    },
    onSubmit: (formValues) => {
      if (!_.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(dateFormat);
        formValues.endTime = formValues.datatime[1].format(dateFormat);
      }
      delete formValues.datatime;

      console.log('formValues', formValues);
      dispatch({
        type: 'Statistics/getStatisticQuery',
        payload: {
          ...formValues,
          type: 'person',
        },
      });
    },
  };

  // 列表配置
  const tableProps = {
    // 类型
    selectionType: null, //checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '时间',
        dataIndex: 'dt',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '人员',
        align: 'center',
        dataIndex: 'auditorName',
      },
      {
        title: '领审量',
        align: 'center',
        dataIndex: 'takeCount',
      },
      {
        title: '审核量',
        align: 'center',
        dataIndex: 'auditCount',
      },
      {
        title: '审核通过量',
        align: 'center',
        dataIndex: 'auditPassedCount',
      },
      {
        title: '操作',
        width: '100px',
        align: 'center',
        render(r) {
          return (
            <WrapAuthButton
              pathUrl="/statistics/personnel/"
              perms={'statistics:person:select'}
              type="primary"
              size="small"
              text="明细"
              onClick={() => goDetails(r.auditorId)}
            ></WrapAuthButton>
          );
        },
      },
    ],
    loading,
    dataSource,
    pagination,
    onPageChg: (page) => {
      // console.log(page)
      dispatch({
        type: 'Statistics/getStatisticQuery',
        payload: {
          type: 'person',
          pageNum: page.current,
          pageSize: page.pageSize,
          businessId: formRef.current.getFieldValue('businessId'),
        },
      });
    },
  };

  // 审核详情页
  const goDetails = (id) => {
    let formValue = formRef.current.getFieldsValue();
    history.push({
      pathname: '/statistics/personnel/details',
      query: {
        ...formValue,
        id: id,
        isBack: true,
      },
    });
  };

  
  // 下载excel
  const DownloadExcel = () => {
    // run()
    dispatch({
      type: 'Statistics/getPersoneExportExcel',
      payload:{}
    })
  }

  return (
    <>
      <BaseForm {...searchFormProps} pRef={formRef}>
        <WrapAuthButton
          pathUrl= '/statistics/personnel/'
          perms= 'statistics:person:select'
          text="导出"
          ghost
          type="primary"
          onClick={() => DownloadExcel()}
        ></WrapAuthButton>
      </BaseForm>
      <BaseTable {...tableProps}></BaseTable>
    </>
  );
}

function mapStateToProps({ Statistics }) {
  return { Statistics };
}

export default connect(mapStateToProps)(AuditStatistics);
