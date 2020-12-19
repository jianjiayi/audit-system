/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Input, InputNumber } from 'antd';

function IntervalValue(props) {
  // console.log('props', props)
  const {
    min = 0,
    max = 100,
    value = [],
    onChange = () => {},
  } = props;

  const [minValue, setMinValue] = useState(value&&value[0]);
  const [maxValue, setMaxValue] = useState(value&&value[1]);

  useEffect(() => {
    onChange([minValue, maxValue])
  }, [minValue, maxValue]);

  return (
    <Input.Group compact>
      <InputNumber
        min={min}
        max={max}
        defaultValue={minValue}
        style={{ width: 100 }}
        placeholder="最小值"
        onChange={(e) => setMinValue(e)}
      />
      <InputNumber
        min={min}
        max={max}
        defaultValue={maxValue}
        style={{ width: 100 }}
        placeholder="最大值"
        onChange={(e) => setMaxValue(e)}
      />
    </Input.Group>
  );
}

export default IntervalValue;
