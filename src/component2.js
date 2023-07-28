import React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [2, 5, 6, 8, 10],
  },
];

export default function Combining() {
  return (
    <ChartContainer 
      series={series}
      width={500}
      height={300}
      xAxis={[
        {
          id: 'years',
          data: [2019, 2020, 2021, 2022, 2023],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Years" position="bottom" axisId="years"/>
      <ChartsYAxis label="Weeks" position="left" axisId="eco" />
      <ChartsYAxis label="Citations" position="right" axisId="pib" />
    </ChartContainer>
  );
}