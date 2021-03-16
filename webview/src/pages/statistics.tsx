import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');
import './statistics.less';

export default function IndexPage() {
  const pieOption = {
    title: {
      text: '东成镇农户户厕自然村分布图',
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      top: 'bottom'
    },
    series: [
      {
        name: '户厕数量',
        type: 'pie',
        radius: '60%',
        data: [
          { value: 1048, name: 'A村' },
          { value: 735, name: 'B村' },
          { value: 580, name: 'C村' },
          { value: 484, name: 'D村' },
          { value: 300, name: 'E村' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  const barOption = {
    title: {
      text: '东成镇厕改清淘服务工作量统计',
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['到户服务总量', '清淘打卡总量'],
      top: '10%'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      show: false,
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['A组', 'B组', 'C组', 'D组', 'E组', '全部小组']
    },
    series: [
      {
        name: '到户服务总量',
        type: 'bar',
        data: [18203, 23489, 29034, 10470, 13144, 63022]
      },
      {
        name: '清淘打卡总量',
        type: 'bar',
        data: [19325, 23438, 31000, 12194, 13141, 68180]
      }
    ]
  };

  return (
    <>
      <div className='title-wrap'>
        <div className='title'>农户报表</div>
      </div>
      <ReactECharts
        option={pieOption}
        notMerge={true}
        lazyUpdate={true}
      />
      <div className='title-wrap'>
        <div className='title'>服务统计</div>
      </div>
      <ReactECharts
        option={barOption}
        notMerge={true}
        lazyUpdate={true}
      />
    </>
  );
}
