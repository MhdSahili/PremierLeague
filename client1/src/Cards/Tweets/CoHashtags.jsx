import React, { useEffect, useState}  from 'react';

function CoHashtags() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/tweets")
      .then((res) => res.json())
      .then((res) => {

        setData(res.coHashtags);
     
    
      });
      
  }, []);
  return (
    <div className="col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Co-occurrence Hashtags</h2>
      </header>
     
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Hashtag</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Count</div>
                </th>
              
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {data.map((data, index) => (
              <tr data-index={index}>
                <td className="p-2">
                  <div className="flex items-center max-w-sm">
                   
                    <div className="text-slate-800">[{data._id}]</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-blue-800">{data.count}</div>
                </td>
                
              </tr>
            ))}
                
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default CoHashtags;
