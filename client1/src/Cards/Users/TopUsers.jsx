import React from 'react';
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts';
import  BarChart  from  '../../Chartsjs2/BarChart01';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

  
function TopUsers() {

  const data = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]
  


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
   <ResponsiveContainer className={ "w-full h-full"}>
   <RadialBarChart 

  cy={270}
  cx={250}
  innerRadius="10%" 
  outerRadius="100%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#2b2969', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
   </ResponsiveContainer>
   
    </div>
  );
}

export default TopUsers;


