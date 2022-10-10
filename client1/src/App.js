import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tweets from "./pages/Tweets";
import Top100 from "./pages/Top100";
import Users from "./pages/Users";
import Maps from "./pages/Maps";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Tweets" element={<Tweets />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/top100" element={<Top100 />} />
        <Route path="/Maps" element={<Maps />} />
      </Routes>
    </div>
  );
}
