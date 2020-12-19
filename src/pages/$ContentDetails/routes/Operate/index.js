/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react';
import { Form, Button, message, Modal } from 'antd';
import _ from 'lodash';
import { history, connect } from 'umi';
import classNames from 'classnames';
import { RollbackOutlined } from '@ant-design/icons';

import FormCoverImage from './FormCoverImage';
import FormExtraInfo from './FormExtraInfo';
import FormAction from './FormAction';

import WrapAuthButton from '@components/WrapAuth';

import styles from './index.module.less';

const { confirm } = Modal;

function Operate(props) {
  const { className, CDetails, dispatch } = props;
  const {
    curArt,
    isEdit,
    category,
    query,
    newsDataType,
    queueContentData,
    queueContentId,
  } = CDetails;

  // 提交审核按钮状态
  const [saveBtnLoading, setSaveBtnLoading] = useState(false);
  // 跳过按钮状态
  const [skipBtnLoading, setSkipBtnLoading] = useState(false);
  // 退出按钮状态
  const [exitBtnLoading, setExitBtnLoading] = useState(false);

  const [selfForm] = Form.useForm();

  const formProps = {
    form: selfForm,
    className: styles.operate_container
  };

  // 审核操作
  const auditSubmit = () => {
    // 判断左侧是否处于编辑状态
    if (isEdit) return message.error('左侧内容区域正处于编辑状态，请保存，或取取消编辑');

    selfForm.validateFields().then(values=>{
      console.log('values',values);
      // 处理封面图
      if(_.isEmpty(values.covers)) {
        values.covers = {}
      }else{
        values.covers = Object.fromEntries(values.covers.map((item,index) => [index, item]));
      }

      const copyArt = _.cloneDeep(curArt);
      // 处理大事件和热点
      values.hotValue = values.hotValue ? values.hotValue[0] : 0;
      values.bigEvent = values.bigEvent ? values.bigEvent[0] : 0;

      // 视频模式下，校验一级分类32
      if(newsDataType === 'VIDEO' &&values.categoryFirst === '32'){
        return message.error('视频文章, 一级分类不正确');
      }

      // 处理分类，设置末级分类
      values.categoryFirst = values.category.category1;
      values.categorySecond = values.category.category2;
      values.categoryThird = values.category.category3;
      delete values.category;

      if(values.categoryThird){
        values.lastCategory = values.categoryThird;
      }else if(values.categorySecond){
        values.lastCategory = values.categorySecond;
      }else if(values.categoryFirst){
        values.lastCategory = values.categoryFirst;
      }

      const {auditState, reason, ...rest} = values;

      dispatch({
        type: 'CDetails/getAuditSave',
        payload: {
          typename: 'news',
          data: {
            ...queueContentData,
            feedMessage: {
              ...copyArt,
              ...rest,
            },
            auditState,
            reason,
          },
        },
        callback: (data) => {
          selfForm.resetFields();
          setSaveBtnLoading(false);

          if (!data) {
            history.goBack();
          }
        },
      });

    }).catch(errorInfo => {
      console.log('errorInfo',errorInfo)
    })
  };

  // 跳过操作
  const skipNowContent = () => {
    // setSkipBtnLoading(true);
    dispatch({
      type: 'CDetails/getNewsSkip',
      payload: {
        skipId: queueContentId,
      },
      callback: () => {
        setSkipBtnLoading(false);
      },
    });
  };

  // 退出操作
  const exitQueue = () => {
    setExitBtnLoading(true);
    confirm({
      title: '温馨提示',
      content: '确定退出吗',
      onOk() {
        console.log('OK');
        dispatch({
          type: 'CDetails/getNewsExit',
          payload: {
            id: queueContentId,
          },
          callback: () => {
            setExitBtnLoading(false);
            history.go(-1)
          },
        });
      },
      onCancel() {},
    });
  };

  return (
      <Form {...formProps}>
        <div className={classNames(className)}>
          <FormCoverImage pForm={selfForm} name='FormCoverImage'></FormCoverImage>
          <FormExtraInfo pForm={selfForm} name='FormExtraInfo'></FormExtraInfo>
          <FormAction pForm={selfForm} name='FormAction'></FormAction>
          <Form.Item>
          <div className={styles.button_group}>
            <WrapAuthButton
              pathUrl="/:type/cdetails"
              text="确定"
              loading={saveBtnLoading}
              perms="news:audit"
              type="primary"
              onClick={() => auditSubmit()}
            />
            {query.routersource !== 'search' && (
              <WrapAuthButton
                pathUrl="/:type/cdetails"
                text="跳过"
                loading={skipBtnLoading}
                perms="news:skip"
                onClick={() => skipNowContent()}
              />
            )}
            <Button 
              loading={exitBtnLoading} 
              type="primary" 
              ghost 
              onClick={() => exitQueue()}
              icon={<RollbackOutlined></RollbackOutlined>}
            >
              退出
            </Button>
          </div>
        </Form.Item>
        </div>
        
      </Form>
  );
}

function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(Operate);
