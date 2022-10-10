import React, { useEffect, useState} from 'react'

import HeaderStats from '../components/HeaderStats';
import DashboardCard06 from "../Cards/Dashboard/DashboardCard06";
import DashboardCard07 from "../Cards/Dashboard/DashboardCard07";
import WelcomeBanner from "../components/WelcomeBanner";
import SideBar from './SideBar';
import Months from '../Cards/Tweets/Months';
import Hours from '../Cards/Tweets/Hours';
import Score from '../Cards/Tweets/Score';
import TopHashtags from '../Cards/Tweets/TopHashtags';
import CoHashtags from '../Cards/Tweets/CoHashtags';

export default function Tweets() {

  

  return (
    <div className="flex  bg-slate-100">
      <SideBar></SideBar>

      <div className=" bg-slate-200 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div>
        
          <HeaderStats></HeaderStats>
          <div className='grid grid-cols-12 gap-6'>
     
        <Score></Score>
        <TopHashtags></TopHashtags>
        <Hours></Hours>
        <CoHashtags></CoHashtags>
       
    {/* Table (Top Channels) */}
  
    </div>

  </div>
        </div>
      </div>
    </div>
   
  )
}
