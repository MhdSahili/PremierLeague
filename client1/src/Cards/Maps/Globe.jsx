import React, {useEffect, useState} from 'react'
import ReactGlobe from 'react-globe';
export default function Globe() {
    const [markers2, setData] = useState([]);
   
    useEffect(() => {
        fetch("/globe")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
  
  
        
        
          });
    
       
      }, []);
    

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
    <header className="px-5 py-4 border-b border-slate-100">
      <h2 className="font-semibold text-slate-800">Globe</h2>
    </header>
   
    <div className="p-3     ml-20 ">

      {/* Table */}
      <div className="overflow-x-auto mr-80">
     
      <ReactGlobe     options={{
    enableMarkerGlow: false,
    markerRadiusScaleRange: [0.2, 0.5],
    markerType: 'bar',
 
  }}
   markers={markers2}  initialCoordinates={markers2.coordinates} width={700} height={700} />

      </div>
    </div>
  </div>
     )
}
