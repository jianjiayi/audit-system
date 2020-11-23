/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import 'echarts/map/js/china';
import echarts from 'echarts/lib/echarts';
// 词云
import 'echarts-wordcloud';
// 柱状图
import 'echarts/lib/chart/bar';
// 饼状图
import 'echarts/lib/chart/pie';
// 线图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/lines';
// 地图
import 'echarts/lib/chart/map';
// 标题
import 'echarts/lib/component/title';

function useECharts(chartRef, config) {
  const { option, getOption, data } = config;
  let chartIS = null;

  // 渲染charts
  const renderChart = () => {
    const renderIS = echarts.getInstanceByDom(chartRef.current);
    if (renderIS) {
      chartIS = renderIS;
    } else {
      chartIS = echarts.init(chartRef.current);
    }
    const finalOption = getOption(option, data);
    // console.log(finalOption)
    chartIS.setOption(finalOption);
  };

  useEffect(() => {
    renderChart();
    return () => {
      chartIS && chartIS.dispose();
    };
  }, [chartIS, config, renderChart]);

  return;
}

export default useECharts;
