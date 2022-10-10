
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend,Tooltip } from 'recharts';

import { tailwindConfig } from '../Users/Utils';

function DashboardCard06() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/dashboard")
      .then((res) => res.json())
      .then((res) => {
     
        setData(res.devices);
      
    
      });
     
  }, []);


  return (
    <div className="flex flex-col col-span-full sm:col-span-2 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Source Devices</h2>
      </header>
   
      <PieChart className='ml-20'  width={400} height={400}>
        <Pie
          data={data}
       
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
          nameKey={"_id"}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
       <Legend></Legend>
      </PieChart>
    </div>
  );
}

export default DashboardCard06;
