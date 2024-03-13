import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Members from './pages/Members/MembersShow';
import Settings from './pages/Settengs/Settings';
import Home from './pages/Home/Home';
import AddMembers from './pages/Members/Add_members/AddMembers';
import EditMembers from './pages/Members/Edit_members/EditMembers';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Members" exact element={<Members/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
        <Route path="/AddMembers" exact element={<AddMembers/>}></Route>
        <Route path="/edit" exact element={<EditMembers/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
