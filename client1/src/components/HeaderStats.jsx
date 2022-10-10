import React, {useEffect, useState}from "react";
import CardStats from "./CardStats";


// components


export default function HeaderStats() {

  const [markers2, setData] = useState([]);
   
  useEffect(() => {
      fetch("/maps")
        .then((res) => res.json())
        .then((data) => {
          setData(data);


      
      
        });
  
     
    }, []);
  
  return (
    <>
      {/* Header */}
      
      <div className="relative bg-lightBlue-600 md:pt-12 pb-10 pt-2">
        <div className="  w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 pr-4">
                <CardStats
                  statSubtitle="Number of Tweets"
                  statTitle="100,000"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="On span of 1 Year"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="Number of Users"
                  statTitle="4,794"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="From 50 Country"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-">
                <CardStats
                  statSubtitle="Number of Retweets"
                  statTitle="17,000"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="From 40,000 User"
                  statIconName="fas fa-users"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 pl-4">
                <CardStats
                  statSubtitle="Number of Likes"
                  statTitle="807,347"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
