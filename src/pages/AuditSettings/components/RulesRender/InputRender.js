/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function InputRender(props) {
  const { showType = 'form', value = '', onChange } = props;

  return (
    <>
      {showType === 'form' ? (
        <TextArea placeholder={'输入框输用","隔开或是"||"隔开，仅支持一种模式'} defaultValue={value} onChange={onChange}/>
      ) : (
        <span>{value}</span>
      )}
    </>
  );
}
export default InputRender;

