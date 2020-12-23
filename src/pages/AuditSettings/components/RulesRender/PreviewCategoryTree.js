/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */

import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import * as api from '@/services/global';

// 数组去重
const listRemoveRepeat = (x) => {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    let flag = true;
    let temp = x[i];
    for (let j = 0; j < result.length; j++) {
      // 普通数组 (temp === result[j])
      if (temp.code === result[j].code) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(temp);
    }
  }
  return result;
};

// 生成树形结构
const listToTree = (oldArr) => {
  oldArr.forEach((element) => {
    element.key = element.code;
    element.title = element.name;
    let parentCode = element.parentCode;
    if (parentCode !== 0) {
      oldArr.forEach((ele) => {
        if (ele.code === parentCode) {
          if (!ele.children) {
            ele.key = ele.code;
            ele.title = ele.name;
            ele.children = [];
          }
          ele.children.push(element);
        }
      });
    }
  });
  oldArr = oldArr.filter((ele) => ele.parentCode === 0);
  return oldArr;
};

function PreviewCategoryTree(props) {
  const { value = [] } = props;

  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    getRealTreeData(value).then((res) => {
      setTreeData(res);
    });
  }, [JSON.stringify(value)]);

  // 预览分类
  const getRealTreeData = async (value) => {
    if (_.isEmpty(value)) return [];
    const { code, data } = await api.getCategory({ type });
    if (code === 200) {
      let tree = [];
      value.map((code) => {
        const item = data.filter((v) => v.code === code);
        tree = [...tree, item[0]];
      });
      let tree1 = [];
      tree.map((category) => {
        const item = data.filter((v) => v.code === category.parentCode);
        if (_.isEmpty(item)) return;
        const isExist = tree1.filter((v) => v.code === item[0].code);
        if (_.isEmpty(isExist)) {
          tree1 = [...tree1, item[0]];
        }
      });

      let tree2 = [];
      tree1.map((category) => {
        const item = data.filter((v) => v.code === category.parentCode);
        if (_.isEmpty(item)) return;
        const isExist = tree2.filter((v) => v.code === item[0].code);
        if (_.isEmpty(isExist)) {
          tree2 = [...tree2, item[0]];
        }
      });
      return listToTree(listRemoveRepeat([...tree2, ...tree1, ...tree]));
    }
  };
  return <Tree showLine switcherIcon={<DownOutlined />} treeData={treeData} />;
}

export default PreviewCategoryTree;
