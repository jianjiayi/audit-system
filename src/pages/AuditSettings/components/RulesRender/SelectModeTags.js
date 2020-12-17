/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect} from 'react';
import { Select, Tag } from 'antd';
import _ from 'lodash';

function SelectModeTags(props) {
  console.log('props',props)
  const {
    showType = 'form',
    value =[], 
    onChange
  }= props;

  const [tagsList, setTagsList] = useState(value);

  useEffect(()=>{
    if(!_.isEmpty(value)){
      setTagsList(value)
    }
  },[JSON.stringify(value)])

  const handleChange = (e)=>{
    console.log(e)
  }

  return (
    <>
    {showType === 'form' ? (
      <Select 
        defaultValue={_.isEmpty(tagsList)? [] : tagsList}
        mode="tags" 
        open={false} 
        placeholder="请输入特定次"
        onChange={onChange} 
      ></Select>
    ): (
      <>
        {!_.isEmpty(tagsList) &&
          tagsList.map((item, index) => {
            return <Tag key={index}>{item}</Tag>;
          })}
      </>
    )}
    </>
  )
}

export default SelectModeTags;
