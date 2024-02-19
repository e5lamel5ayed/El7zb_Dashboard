import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Messges from './pages/Messges';
import Edit from './pages/Edit';
import Governorates from './pages/Governorates';
// import Maseggs from './pages/Maseggs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
        <Route path="/messges" exact element={<Messges/>}></Route>
        <Route path="/governorates" exact element={<Governorates/>}></Route>
        <Route path="/edit" exact element={<Edit/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
