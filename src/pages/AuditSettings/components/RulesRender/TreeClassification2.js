/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/dot-notation */
import React, { useState, useEffect } from 'react';
import { Form, Tree } from 'antd';
import _ from 'lodash';
import { history } from 'umi';
import * as api from '@/services/global';

// 优化处理树形结构数据
const filterTreeData = (data = [], isEdit) => {
  if (_.isEmpty(data)) return;
  for (let i = data.length - 1; i >= 0; i--) {
    data[i]['key'] = data[i].code;
    data[i]['title'] = data[i].name;
    isEdit === 'text' && (data[i]['disabled'] = true);
    if (data[i].subCategorgs) {
      data[i]['children'] = data[i].subCategorgs;
      filterTreeData(data[i].subCategorgs, isEdit);
    }
  }
};

// 设置默认选项
const defaultCheckedKeys = [];
const getAllTreeCode = (data = []) => {
  if (_.isEmpty(data)) return;
  for (let i = data.length - 1; i >= 0; i--) {
    defaultCheckedKeys.push(data[i].code);
    if (data[i].subCategorgs) {
      getAllTreeCode(data[i].subCategorgs, null);
    }
  }
};

function TreeClassification(props) {
  const { showType = 'form', value = [], type = '', onChange = () => {} } = props;

  // console.log('---value',value)

  const [treeData, setTreeData] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState(value);

  useEffect(() => {
    getCategoryTreeData();
  }, [type]);

  useEffect(()=>{
    setCheckedKeys(value)
  },[JSON.stringify(value)]);

  useEffect(() => {
    const action = history.location.query.action || '';
    if (action === 'create') {
      getAllTreeCode(treeData);
      setCheckedKeys([...defaultCheckedKeys]);
      onChange([...defaultCheckedKeys]);
    }
  }, [JSON.stringify(treeData)]);

  const getCategoryTreeData = async () => {
    const { code, data } = await api.getCategoryTree({ type });
    if (code === 200 && data) {
      filterTreeData(data, showType);
      setTreeData(data);
    }
  };

  const onCheck = (checkedKeys) => {
    setCheckedKeys(checkedKeys);
    onChange(checkedKeys);
  };

  return (
    <Tree 
      height= {400}
      checkable
      checkedKeys={checkedKeys} 
      treeData={treeData} 
      onCheck={onCheck} 
    />
  );
}

export default TreeClassification;
