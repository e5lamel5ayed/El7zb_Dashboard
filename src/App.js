import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Members from './pages/Members/AddMembers/MembersShow';
import Settings from './pages/Settengs/Settings';
import Home from './pages/Home/Home';
import AddMembers from './pages/Members/AddMembers/Components/AddMembers';
import EditMembers from './pages/Members/AddMembers/EditMembers';
import MemberPerformance from './pages/Members/MemberPerformance/MembersShow';
import MemberPerformanceData from './pages/Members/MemberPerformance/Components/MembersData';
import AddRules from './pages/Members/MemberRole/Components/AddRules';
import ViewRules from './pages/Members/MemberRole/ViewRules';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Members" exact element={<Members/>}></Route>
        <Route path="/AddMembers" exact element={<AddMembers/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
        <Route path="/MemberPerformanceData" exact element={<MemberPerformanceData/>}></Route>
        <Route path="/MemberPerformance" exact element={<MemberPerformance/>}></Route>
        <Route path="/AddRules" exact element={<AddRules/>}></Route>
        <Route path="/ViewRules" exact element={<ViewRules/>}></Route>
        <Route path="/edit" exact element={<EditMembers/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
