import React, { useEffect, useState}  from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,

  } from 'recharts';

function Score() {
  
     

      const [data2, setData] = useState([]);
   
      useEffect(() => {
          fetch("/tweets")
            .then((res) => res.json())
            .then((data) => {
              setData(data.top10);
  
  
          
          
            });
      
         
        }, []);
      
      
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Tweets Score</h2>
      </header>
     
      <div className="p-3">

        {/* Table */}
     
   
        <ComposedChart
   width={800}
   height={500}
          data={data2}
          
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="userName" label={{ value: 'Tweet', position: 'insideBottomRight', offset: 1 }} scale="band" />
          <YAxis label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="retweets" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="likes" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="reply" stroke="#ff7300" />
        </ComposedChart>

          

      
      </div>
    </div>
  );
}

export default Score;
