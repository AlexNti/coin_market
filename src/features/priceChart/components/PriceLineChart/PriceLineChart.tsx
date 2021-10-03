import React from 'react';

import { ResponsiveLine } from '@nivo/line';
import { PriceChartSeries } from '../../types';

type PriceLineChartProps = {
  chartData: PriceChartSeries;
};

const theme = {
  background: '#222222',
  axis: {
    fontSize: '14px',
    tickColor: '#eee',
    ticks: {
      line: {
        stroke: '#555555'
      },
      text: {
        fill: '#ffffff'
      }
    },
    legend: {
      text: {
        fill: '#aaaaaa'
      }
    }
  },
  grid: {
    line: {
      stroke: '#555555'
    }
  }
};

const PriceLineChart = ({ chartData }: PriceLineChartProps): JSX.Element => {
  return (
    <ResponsiveLine
      theme={theme}
      data={chartData}
      colors={{ scheme: 'nivo' }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: 'time',
        format: '%Y-%m-%dT%H:%M:%SZ',
        useUTC: false,
        precision: 'minute'
      }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      xFormat="time:%Y-%m-%d"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: '%H:%M',
        tickValues: 'every 60 minutes'
      }}
      tooltip={(point) => {
        return <div></div>;
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      pointSize={2}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          itemTextColor: 'white',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default PriceLineChart;
