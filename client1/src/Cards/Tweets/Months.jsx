import React, { useEffect, useState}  from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

function Months() {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        fetch("/users")
          .then((res) => res.json())
          .then((data) => {
            setData(data.created);


        
        
          });
    
       
      }, []);
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Users Registeration Year</h2>
      </header>
     
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto ml-40">
        <BarChart
      width={850}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="rgb(163 178 242)"  />
      
    </BarChart>
          

        </div>
      </div>
    </div>
  );
}

export default Months;
