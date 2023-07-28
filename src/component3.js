import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart className='PieChart'
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Econ 305' },
            { id: 1, value: 15, label: 'Econ 307' },
            { id: 2, value: 20, label: 'Math 202' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}