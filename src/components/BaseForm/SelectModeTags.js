/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect} from 'react';
import { Select } from 'antd';

function SelectModeTags(props) {
  console.log('props',props)
  const {value =[], onChange}= props;

  const [tagsList, setTagsList] = useState(value);

  useEffect(()=>{
    console.log(value)
    setTagsList(value)
  },[JSON.stringify(value)])

  const handleChange = (e)=>{
    console.log(e)
  }

  const fetchTags = (e)=>{
    console.log(e)
  }

  return (
    <>
      <Select 
        defaultValue={tagsList}
        mode="tags" 
        open={false} 
        placeholder="请输入标签"
        onChange={fetchTags}
        onFocus={(e)=>{console.log('nPressEnter')}} 
      ></Select>
    </>
  )
}

export default SelectModeTags;
