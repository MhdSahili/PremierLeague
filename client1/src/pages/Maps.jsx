import React, { useEffect, useState} from 'react'
import HeaderStats from '../components/HeaderStats';
import DashboardCard06 from "../Cards/Dashboard/DashboardCard06";
import DashboardCard07 from "../Cards/Dashboard/DashboardCard07";
import WelcomeBanner from "../components/WelcomeBanner";
import SideBar from './SideBar';
import Months from '../Cards/Tweets/Months';
import Hours from '../Cards/Tweets/Hours';
import Score from '../Cards/Tweets/Score';
import WorldMap from '../Cards/Maps/WorldMap';
import { ComposableMap, Geographies, Geography,  Marker } from "react-simple-maps";
import WorldMapCard from '../Cards/Maps/WorldMapCard';
import GlobeCard from '../Cards/Maps/GlobeCard';

export default function Maps() {

    const markers = [
        {
          markerOffset: -15,
          name: "Buenos Aires",
          coordinates: [-58.3816, -34.6037]
        },
        { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
        { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
        { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
        { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
        { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
        { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
        { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
        { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
        { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
        { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
        {   coordinates: [-77.0428, -12.0464] }
      ];

  return (
    <div className="flex  bg-slate-100">
      <SideBar></SideBar>

      <div className=" bg-slate-200 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div>
    
          <HeaderStats></HeaderStats>
          <div className=' grid-cols-8 gap-6'>
   
   
        <WorldMapCard></WorldMapCard>
      
 
        <div>
        <GlobeCard></GlobeCard>
  </div>
       
    {/* Table (Top Channels) */}
  
    </div>

  </div>
        </div>
      </div>
    </div>
   
  )
}
