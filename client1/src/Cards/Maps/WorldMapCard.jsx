import React, { useEffect, useState}  from 'react';
import WorldMap from './WorldMap';


function WorldMapCard() {
    
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Users Registeration Year</h2>
      </header>
     
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto mr-80 ml-40">
       
          <WorldMap></WorldMap>

        </div>
      </div>
    </div>
  );
}

export default WorldMapCard;
