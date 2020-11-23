/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react';
import { connect } from 'dva';
import { Form, message, Modal } from 'antd';
import _ from 'lodash';

import FormCoverImage from './FormCoverImage';
import FormExtraInfo from './FormExtraInfo';
import FormAction from './FormAction';

function Operate() {
  const FormCoverImageProps = {
    handleCoverImages: (fileList)=> {
      console.log('fileList',fileList)
    }
  }
  const FormExtraInfoProps = {
    name: 'FormExtraInfo'
  }
  const FormActionProps = {
    name: 'FormAction',
  }

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          console.log(values)
        }}
       >
        <div>
          <FormCoverImage {...FormCoverImageProps}></FormCoverImage>
          <FormExtraInfo {...FormExtraInfoProps}></FormExtraInfo>
          <FormAction {...FormActionProps}></FormAction>
        </div>
      </Form.Provider>
    </>
  );
}

function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(Operate);
