import React, { useEffect, useState}  from 'react';

function TopInfluencers() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((res) => {

        setData(res.topInfluencers);
     
    
      });
      
  }, []);
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Influencers</h2>
      </header>
     
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">User</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">likes</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Retweets</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Replies</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Score</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {data.map((data, index) => (
              <tr data-index={index}>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3 rounded-full

" width="36" height="36" viewBox="0 0 36 36">
                   
<image className=' rounded-full

' xlinkHref={data.image}></image>
                    </svg>
                    <div className="text-slate-800">{data._id}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-yellow-500">{data.likes}</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">{data.retweets}</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-orange-500">{data.reply}</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">{data.score}</div>
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

export default TopInfluencers;
