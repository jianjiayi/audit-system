/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-control-regex */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { Select, message } from 'antd';
import _ from 'lodash';

// 标签文字长度校验
const calcStrLength = (value) => {
  return Math.ceil(calcByteLength(value) / 2);
};
const calcByteLength = (s) => {
  return s.replace(/[^\x00-\xff]/g, 'aa').length;
};

function SelectModeTags(props) {
  const { value = [], onChange } = props;

  const [tagsList, setTagsList] = useState(value);

  useEffect(() => {
    if (!_.isEmpty(value)) {
      // console.log('tags',value)
      setTagsList(value);
    }
  }, [JSON.stringify(value)]);

  // 回车添加标签
  const onInputKeyDown = (e) => {
    const tempVal = e.target.value;
    if (e.key === 'Enter') {
      if(tempVal === '') return;
      // console.log('tagsList.length', tagsList.length);
      if (tagsList.length >= 10) {
        return message.error('最多支持10个标签');
      }
      console.log(calcStrLength(tempVal));
      if (calcStrLength(tempVal) > 50) {
        // console.log(calcStrLength(tempVal));
        return message.error('您输入的文字过长，最多可输入50个字');
      }

      const isRepeat = tagsList.indexOf(tempVal);
      if (isRepeat > -1) {
        return message.error('该标签已存在，请不要重复创建');
      }
      onChange([...tagsList, tempVal]);
    }
  };

  // 删除指定标签
  const onDeselect = (e) => {
    console.log(e);
    const List = _.cloneDeep(tagsList);
    let index = List.indexOf(e);
    if (index > -1) {
      List.splice(index, 1);
      onChange([...List]);
    }
  };

  return (
    <Select
      value={_.isEmpty(tagsList) ? [] : tagsList}
      mode="tags"
      filterOption={false}
      open={false}
      placeholder="请输入标签"
      onDeselect={onDeselect}
      onInputKeyDown={onInputKeyDown}
    ></Select>
  );
}

export default SelectModeTags;
