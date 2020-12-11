/* eslint-disable spaced-comment */
/* eslint-disable no-func-assign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */

import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Tree } from 'antd';
import _ from 'lodash';

const getTreeData = (dataPermissions) => {
  // 深拷贝权限
  let permissions = _.cloneDeep(dataPermissions);
  if (_.isEmpty(permissions)) return;
  // 获取顶层路由
  let treeData = permissions.filter((item) => item.parentId === 0) || [];

  // 生成权限树
  const getPermissionsTree = (routes, data) => {
    if (routes.length === 0) return [];
    routes.map((item) => {
      item['title'] = item.permissionName;
      item['value'] = item.permissionId;
      item['key'] = item.permissionId;
      // item['checked'] = 'true';

      let children = data.filter((v) => v.parentId === item.permissionId);
      if (children.length > 0) {
        item.children = children;
        getPermissionsTree(children, data);
      }
    });
  };

  getPermissionsTree(treeData, permissions);

  return treeData;
};

function TreeClassification(props, ref) {
  const { permissionDataList, value = [], onChange = () => {} } = props;

  const [treeData, setTreeData] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState(value);
  const [concatTreeData, setcConcatTreeData] = useState([]);

  // 向父组件暴露的方法
  useImperativeHandle(ref, () => {
    return {
      concatTreeData
    };
  });

  useEffect(() => {
    setTreeData(getTreeData(permissionDataList));
  }, [JSON.stringify(permissionDataList)]);

  useEffect(() => {
    setCheckedKeys(value);
  }, [JSON.stringify(value)]);

  const onCheck = (checkedKeys,e) => {
    //注意：halfCheckedKeys 是没有全部勾选状态下的父节点
    setcConcatTreeData(checkedKeys.concat(e.halfCheckedKeys))

    setCheckedKeys(concatTreeData);
    onChange(checkedKeys);
  };

  return (
    <Tree height={400} checkable checkedKeys={checkedKeys} treeData={treeData} onCheck={onCheck} />
  );
}

TreeClassification = forwardRef(TreeClassification);

export default TreeClassification;
