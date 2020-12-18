import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import _ from 'lodash';

import * as api from '../src/services/global';

function ThreeLevelCategory(props) {
  const {
    type = '',
    value = {},
    onChange,
  } = props;

  // 三级分类数据源
  const [firstCategory, setFirstCategory] = useState([]);
  const [secondCategory, setSecondCategory] = useState([]);
  const [thirdCategory, setThirdCategory] = useState([]);
  // 三级分类数据值
  const [categoryFirst, setCategoryFirst] = useState(value.categoryFirst || null);
  const [categorySecond, setCategorySecond] = useState(value.categorySecond || null);
  const [categoryThird, setCategoryThird] = useState(value.categoryThird || null);

  // 获取一级分类数据源
  useEffect(async ()=>{
    const {code, data} = await api.getCategory({id:0,type: type});
    if(code === 200) setFirstCategory(data);
  },[]);

  // 获取二级分类数据源
  useEffect(()=>{
    const {code, data} = await api.getCategory({id:categoryFirst,type: type});
    if(code === 200) setSecondCategory(data);
  }, [categoryFirst]);

  // 获取三级分类数据源
  useEffect(()=>{
    const {code, data} = await api.getCategory({id:categorySecond,type: type});
    if(code === 200) setCategoryThird(data);
  }, [categorySecond])

  return (
    <div>
      
    </div>
  )
}

export default ThreeLevelCategory;
