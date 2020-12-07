/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
import React from 'react';

import Bar from '@components/Charts/Bar';
import WordCloud from '@components/Charts/WordCloud';
import Lines from '@components/Charts/Lines';
import Pie from '@components/Charts/Pie';

function DemoCharts() {
  return (
    <div>
      <div>
        <h2>饼状图</h2>
        <Pie></Pie>
      </div>
      <div>
        <h2>柱状图</h2>
        <Bar></Bar>
      </div>
      <div>
        <h2>折线图</h2>
        <Lines></Lines>
      </div>
      <div>
        <h2>词云</h2>
        <WordCloud></WordCloud>
      </div>
    </div>
  );
}

export default DemoCharts;
