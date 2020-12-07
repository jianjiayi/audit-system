/* eslint-disable object-shorthand */
import React, { useRef } from 'react';
import useECharts from '../lib/useECharts';

import options from './option';
import getOption from './getOptions';

function BarChart(props) {
  const { option = options, width = '300px', height = '200px' } = props;
  // console.log(data)
  const chartRef = useRef(null);
  const config = { option, getOption, props };

  useECharts(chartRef, config);

  return (
    <div>
      <div style={{ width: width, height: height }} ref={chartRef} />
    </div>
  );
}

export default BarChart;
