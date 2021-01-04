/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';
import _ from 'lodash';
import * as api from '@/services/global';

const { Option } = Select;

function ThreeLevelCategory(props) {
  const { newsType = '', value = {}, onChange, isReset = false } = props;

  // 三级分类数据源
  const [firstCategory, setFirstCategory] = useState([]);
  const [secondCategory, setSecondCategory] = useState([]);
  const [thirdCategory, setThirdCategory] = useState([]);
  // 三级分类数据值
  const [category1, setCategory1] = useState(value.category1 || null);
  const [category2, setCategory2] = useState(value.category2 || null);
  const [category3, setCategory3] = useState(value.category3 || null);

  const fetchData = async (payload = {}, callback) => {
    const { code, data } = await api.getCategory(payload);
    if (code === 200) {
      callback(data || []);
    }
  };

  // 获取一级分类数据源
  useEffect(() => {
    if (!_.isEmpty(newsType)) {
      if (isReset) reset();
      fetchData({ id: 0, type: newsType }, setFirstCategory);
    }
  }, [newsType]);

  useEffect(() => {
    if (!_.isEmpty(value)) {
      setCategory1(value.category1);
      setCategory2(value.category2);
      setCategory3(value.category3);
    }
  }, [JSON.stringify(value)]);

  // 获取二级分类数据源
  useEffect(() => {
    if (!_.isEmpty(category1)) {
      fetchData({ id: category1, type: newsType }, setSecondCategory);
    } else {
      setSecondCategory([]);
    }
    setThirdCategory([]);
  }, [category1]);

  // 获取三级分类数据源
  useEffect(() => {
    if (!_.isEmpty(category2)) {
      fetchData({ id: category2, type: newsType }, setThirdCategory);
    }
    setThirdCategory([]);
  }, [category2]);

  // 重置组件数据
  const reset = () => {
    setCategory1(null);
    setCategory2(null);
    setCategory3(null);
    setFirstCategory([]);
    setSecondCategory([]);
    setThirdCategory([]);
  };

  /**
   * select发生变化
   * @param {*} value
   * @param {*} name
   */
  const handleChange = (eValue = null, name) => {
    // 一级分类发生变化
    if (name === 'category1') {
      setCategory1(eValue);
      setCategory2(null);
      setCategory3(null);
      onChange({ category1: eValue, category2: null, category3: null });
      return;
    }
    // 二级分类变化
    if (name === 'category2') {
      setCategory2(eValue);
      setCategory3(null);
      onChange({ category1, category2: eValue, category3: null });
      return;
    }
    // 三级分类变化，不涉及联动效果
    if (name === 'category3') {
      setCategory3(eValue);
      onChange({ category1, category2, category3: eValue });
    }
  };

  return (
    <Input.Group compact>
      <Select
        placeholder="一级分类"
        allowClear
        style={{ width: '33%' }}
        value={category1}
        onChange={(e) => handleChange(e, 'category1')}
      >
        {!_.isEmpty(firstCategory) &&
          firstCategory.map((item) => {
            return (
              <Option key={item.code} value={item.code.toString()}>
                {item.name}
              </Option>
            );
          })}
      </Select>
      <Select
        allowClear
        placeholder="二级分类"
        style={{ width: '33%' }}
        value={category2}
        onChange={(e) => handleChange(e, 'category2')}
      >
        {!_.isEmpty(secondCategory) &&
          secondCategory.map((item) => {
            return (
              <Option key={item.code} value={item.code.toString()}>
                {item.name}
              </Option>
            );
          })}
      </Select>
      <Select
        allowClear
        placeholder="三级分类"
        style={{ width: '33%' }}
        value={category3}
        onChange={(e) => handleChange(e, 'category3')}
      >
        {!_.isEmpty(thirdCategory) &&
          thirdCategory.map((item) => {
            return (
              <Option key={item.code} value={item.code.toString()}>
                {item.name}
              </Option>
            );
          })}
      </Select>
    </Input.Group>
  );
}

export default ThreeLevelCategory;
