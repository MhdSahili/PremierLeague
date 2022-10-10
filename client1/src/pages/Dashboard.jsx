import React from 'react'
import DashboardCard04 from "../Cards/Dashboard/DashboardCard04";
import DashboardCard05 from "../Cards/Dashboard/DashboardCard05";
import DashboardCard06 from "../Cards/Dashboard/DashboardCard06";
import DashboardCard07 from "../Cards/Dashboard/DashboardCard07";
import DashboardCard10 from "../Cards/Dashboard/DashboardCard10";
import DashboardCard11 from "../Cards/Dashboard/DashboardCard11";
import HeaderStats from '../components/HeaderStats';

import WelcomeBanner from "../components/WelcomeBanner";
import SideBar from './SideBar';

export default function Dashboard() {
  return (
    <div className="flex  bg-slate-100">
      <SideBar></SideBar>

      <div className=" bg-slate-200 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div>
         <WelcomeBanner></WelcomeBanner>
          <HeaderStats></HeaderStats>
    <div className="grid grid-cols-11 gap-6">
    {/* Bar chart (Direct vs Indirect) */}
    <DashboardCard05 />
    <DashboardCard06 />

    
  

   

  </div>
  </div>
        </div>
      </div>
    </div>
   
  )
}
