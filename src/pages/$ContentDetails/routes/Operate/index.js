/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react';
import { connect } from 'dva';
import { Form, message, Modal } from 'antd';
import _ from 'lodash';
import classNames from 'classnames';

import FormCoverImage from './FormCoverImage';
import FormExtraInfo from './FormExtraInfo';
import FormAction from './FormAction';

import styles from './index.module.less';

function Operate(props) {
  const { className, CDetails, dispatch } = props;
  const [selfForm] = Form.useForm();

  const FormCoverImageProps = {
    pForm: selfForm,
    handleCoverImages: (fileList)=> {
      // console.log('fileList',fileList)
    }
  }
  const FormExtraInfoProps = {
    name: 'FormExtraInfo',
    pForm: selfForm,
  }
  const FormActionProps = {
    name: 'FormAction',
    pForm: selfForm,
  }

  return (
    <>
      <Form form={selfForm}>
        <div className={classNames(className)}>
          <FormCoverImage {...FormCoverImageProps}></FormCoverImage>
          <FormExtraInfo {...FormExtraInfoProps}></FormExtraInfo>
          <FormAction {...FormActionProps}></FormAction>
        </div>
        
      </Form>
    </>
  );
}

function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(Operate);
