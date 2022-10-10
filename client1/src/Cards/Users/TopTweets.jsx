import React, { useEffect, useState}  from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,

} from 'recharts';

import { tailwindConfig } from './Utils';

function TopTweets() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((res) => {
  
        setData(res.topUsers);
      
    
      });
     
  }, []);

  const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#6ad3e6', ];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Users with Most Tweets</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
 
      <ResponsiveContainer className={"ml-10"} width="90%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          nameKey={"_id.name"}
          margin={{
            top: 20,
    
            bottom: 20,
            left: 60,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="_id.name" type="category" scale="band" />
          <Tooltip />
          <Legend />
        
          <Bar dataKey="tweets" barSize={20} fill="#413ea0" />
        
        </ComposedChart>
      </ResponsiveContainer>

       </div>
  );
}

export default TopTweets;


