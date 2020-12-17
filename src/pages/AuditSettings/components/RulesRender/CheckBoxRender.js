/* eslint-disable react/no-array-index-key */
import React from 'react';
import _ from 'lodash';
import { Checkbox, Tag } from 'antd';

function CheckBoxRender(props) {
  const { showType = 'form', map = {}, value = [], onChange } = props;

  return (
    <>
      {showType === 'form' ? (
        <Checkbox.Group defaultValue={value} onChange={onChange}>
          {!_.isEmpty(map) &&
            Object.keys(map).map((key, index) => {
              return (
                <Checkbox key={key+index} value={key}>
                  {map[key]}
                </Checkbox>
              );
            })}
        </Checkbox.Group>
      ) : (
        <>
          {!_.isEmpty(value) &&
            value.map((key, index) => {
              return <Tag key={index}>{map[key]}</Tag>;
            })}
        </>
      )}
    </>
  );
}
export default CheckBoxRender;
