import React, { useEffect, useState}  from 'react'

import HeaderStats from '../components/HeaderStats';

import DashboardCard07 from "../Cards/Dashboard/DashboardCard07";

import SideBar from './SideBar';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

import UsersVerified from '../Cards/Users/UsersVerified';
import TopInfluencers from '../Cards/Users/TopInfluencers';
import TopUsers from '../Cards/Users/TopUsers';
import UsersAge from '../Cards/Users/UsersAge';
import TopTweets from '../Cards/Users/TopTweets';
export default function Users() {
    const [data, setData] = useState([]);
    const [topInf, setInf] = useState([{}]);
    useEffect(() => {
        fetch("/users")
          .then((res) => res.json())
          .then((data) => {
            setData(data.created);

            setInf(data.topInfluencers);
        
        
          });
    
       
      }, []);


  return (
    <div className="flex  bg-slate-100">
      <SideBar></SideBar>

      <div className=" bg-slate-200 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div>
   
          <HeaderStats></HeaderStats>
          <div className='grid grid-cols-12 gap-6'>

     
      <TopInfluencers></TopInfluencers>
      <UsersVerified/>
     
 <TopTweets></TopTweets>
      <UsersAge></UsersAge>
   

    </div>
  </div>
  
        </div>
      </div>
    </div>
   
  )
}
