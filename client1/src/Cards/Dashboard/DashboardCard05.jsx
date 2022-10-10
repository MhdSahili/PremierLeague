import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud'
import Animate from 'animate.css-react'

import RealtimeChart from '../../Chartsjs2/RealtimeChart';

// Import utilities
import { tailwindConfig, hexToRGB } from '../Utils';

function DashboardCard05() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/hashtag")
      .then((res) => res.json())
      .then((res) => {
     
        setData(res.hashtag);
      
    
      });
     
  }, []);
  const customRenderer = (tag, size, color) => (
    <span
      key={tag._id}
      className="blinker 3s linear infinite"
      style={{
        animation: "blinker 3s linear infinite",
      animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px dotted ${color}`,
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: `${color}`,
      }}

    >
      {tag._id}
    </span>
  )
  const options = {

    hue: 'blue',
  }
  



  return (
    <div className="flex flex-col col-span-full sm:col-span-7 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Top Hashtags</h2>
        
      </header>
    
    <div  className="w-full h-80 justify-self-center  mt-3 ml-2 ">
    <Animate>
    <TagCloud  className='mt-6' colorOptions={options} tags={data} minSize={2} maxSize={5} renderer={customRenderer} />
    </Animate>
      </div>
      
    </div>
  );
}

export default DashboardCard05;
