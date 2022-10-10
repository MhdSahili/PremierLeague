import React, { useEffect, useState} from 'react'
import HeaderStats from '../components/HeaderStats';

import WelcomeBanner from "../components/WelcomeBanner";
import SideBar from './SideBar';
import Table100 from '../components/Table/Table100';

export default function Top100() {

  

  return (
    <div className="flex  bg-slate-100">
      <SideBar></SideBar>

      <div className=" bg-slate-200 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div>
       
       <Table100></Table100>
         
  </div>
        </div>
      </div>
    </div>
   
  )
}
