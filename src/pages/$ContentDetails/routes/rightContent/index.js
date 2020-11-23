import React, { useState, useRef } from 'react';
import { connect } from 'dva';
import { Form, message, Modal, Button } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';

import WrapAuthButton from '@components/WrapAuth';
// import SectionCover from './sectionCover';
import SectionInfo from './sectionInfo';
import SectionAction from './sectionAction';

import styles from './index.module.less';

const { confirm } = Modal;

function Operate(props) {
  // 提交审核按钮状态
  const [saveBtnLoading, setSaveBtnLoading] = useState(false);
  // 跳过按钮状态
  const [skipBtnLoading, setSkipBtnLoading] = useState(false);
  // 退出按钮状态
  const [exitBtnLoading, setExitBtnLoading] = useState(false);

  const { history, className, CDetails, Global, dispatch } = props;
  // console.log(props)

  const {
    curArt,
    isEdit,
    category,
    query,
    queueContentData,
    queueContentId,
    newsDataType,
    forbiddenWordList, // 违禁词
    sensitiveWordList, // 敏感词
    hotWord, // 热词
    personalWord, // 人物词
    tagsList,
  } = CDetails;

  const coverRef = useRef(null);
  const actonRef = useRef(null);

  const sectionImgProps = {
    curArt,
    dispatch,
    ref: coverRef,
    newsDataType,
    className: styles.section,
  };

  const sectionInfoProps = {
    curArt,
    dispatch,
    className: styles.section,
  };

  const sectionActionProps = {
    ref: actonRef,
    dispatch,

    Global,

    curArt,
    category,
    queueContentId,
    newsDataType,
    forbiddenWordList, // 违禁词
    sensitiveWordList, // 敏感词
    hotWord, // 热词
    personalWord, // 人物词
    tagsList,

    className: styles.section,
  };

  // 审核操作
  const auditSubmit = () => {
    // 判断左侧是否处于编辑状态
    if (isEdit) return message.error('左侧内容区域正处于编辑状态，请保存，或取取消编辑');
    // 获取封面图
    const cover = coverRef.current;
    console.log(cover);

    // 获取输入表单项
    const { current } = actonRef;
    current.validateFields((err, values) => {
      if (!err) {
        // 设置按钮状态
        // setSaveBtnLoading(true);
        // 深拷贝art
        const copyArt = _.cloneDeep(curArt);
        // 处理大事件和热点
        values.hotValue = values.hotValue[0];
        values.bigEvent = values.bigEvent[0];
        // 处理分类
        values.categoryIds = [values.category];
        delete values.category;

        // 处理标签
        // values['labels'] = values.labels.join(',');
        // 处理可重复分发
        copyArt.extra.sourceExtra.repeat_delivery = values.repeat_delivery;
        delete values.repeat_delivery;
        // 处理封面图
        if (_.isEmpty(copyArt.coverInfo)) {
          copyArt.coverInfo = {
            imageInfos: cover,
          };
        }

        // 处理审核结果
        console.log('values', values);
        console.log({ ...copyArt, ...values });

        // actonRef.current.resetFields();

        dispatch({
          type: 'CDetails/getAuditSave',
          payload: {
            typename: curArt.newsType === 'NEWS' || curArt.newsType === 'IMAGE' ? 'news' : 'video',
            data: {
              ...queueContentData,
              content: {
                ...copyArt,
                ...values,
              },
              resultStatus: values.resultStatus,
            },
          },
          callback: (data) => {
            actonRef.current.resetFields();
            setSaveBtnLoading(false);
            if (!data) {
              history.goBack();
            }
          },
        });
      }
    });
  };

  // 跳过操作
  const skipNowContent = () => {
    // setSkipBtnLoading(true);
    dispatch({
      type: 'CDetails/getNewsSkip',
      payload: {
        data: {
          id: queueContentId,
        },
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
          payload: {},
          callback: () => {
            setExitBtnLoading(false);
            history.goBack();
          },
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <>
      <div className={classNames(className, styles.container)}>
        {/* <SectionCover {...sectionImgProps} /> */}
        <SectionInfo {...sectionInfoProps} />
        <SectionAction {...sectionActionProps} />

        <div className={styles['button-group']}>
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
          <Button loading={exitBtnLoading} type="primary" ghost onClick={() => exitQueue()}>
            退出
          </Button>
        </div>
      </div>
    </>
  );
}

function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(Operate);
