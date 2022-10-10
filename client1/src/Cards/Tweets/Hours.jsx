import React, { useEffect, useState}  from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    AreaChart
  } from "recharts";

function Hours() {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        fetch("/tweets")
          .then((res) => res.json())
          .then((data) => {
            setData(data.hours);
        
          });
    
       
      }, []);
  return (
    <div className="col-span-full  xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Tweets Per Hours</h2>
      </header>
     
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto ">
        
<AreaChart width={900} height={400} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="_id" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>
          

        </div>
      </div>
    </div>
  );
}

export default Hours;


