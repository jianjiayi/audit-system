/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/dot-notation */

import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import _ from 'lodash';
import { getTreeData } from '../../utils/index';


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
  const { permissionDataList, value = [], type = 0, onChange = () => {} } = props;

  const [treeData, setTreeData] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState(value);


  useEffect(() => {
    setTreeData(getTreeData(permissionDataList))
    console.log('getTreeData(permissionDataList)',getTreeData(permissionDataList))
  }, [JSON.stringify(permissionDataList)]);


  const onCheck = (checkedKeys) => {
    // console.log('onCheck', checkedKeys);
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
