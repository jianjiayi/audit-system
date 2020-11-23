import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import * as api from '@/services/global';


function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    } else if (node.children) {
      return { ...node, children: updateTreeData(node.children, key, children) };
    }

    return node;
  });
}

function utilsData(data,key=''){
  data.map((item) => {
    item['key'] = key? `${key}-${item.code}`: item.code;
    item['title'] = item.name;
  })
  return data;
}

function TreeClassification(props){
  const {value = [], type=0, onChange = () => {}} = props;
  console.log('value',value)

  const [treeData, setTreeData] = useState([]);

  useEffect(()=>{
    getFirstCategoryData();
  },[])

  // 一级分类
  const getFirstCategoryData = async()=>{
    const {code, data} = await api.getFirstCategory({type:type});
    if(code === 200 && data){
      setTreeData(utilsData(data,''));
    }
  }

  // 次级分类
  const getOtherCategoryData = async(id,key, resolve=()=>{})=>{
    const {code, data} = await api.getSecondCategory({id:id,type:type});
      if(code === 200 && data){
        setTreeData((origin) =>
          updateTreeData(origin, key, utilsData(data,key)),
        );
        resolve();
      }
  }

  
  // 异步加载分类数据
  const onLoadData = ({ key, children, props })=>{
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }

      console.log(props.data);
      const {id, level} = props.data;

      // 获取二级分类
      getOtherCategoryData(id, key, resolve());
    });
  }

  const onCheck = (checkedKeys) => {
    onChange(checkedKeys);
    console.log('onCheck', checkedKeys);
  };

  
  // const checkedKeys = [16"16-160000", "16-160001", "16-160005", "16-160006", "16-420100"];
  const [checkedKeys, setCheckedKeys] = useState([16,"16-160000", "16-160001", "16-160005", "16-160006", "16-420100"]);

  return <Tree checkable loadData={onLoadData} treeData={treeData} onCheck={onCheck}/>;
};


export default TreeClassification;
