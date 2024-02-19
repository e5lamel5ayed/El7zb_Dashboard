
// import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from "@mui/material/Box";
import NAvbar from '../components/Navbar'
// import Chat from './Chat';
import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,

} from '@mui/material';
import { ArrowBack, Label } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Settings() {
  const [inputData, setInputData] = useState({
    name: '',
    governorate: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',
    k: '',
    l: '',
    m: '',
    n: '',
  });

  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem('members')) || []
  );


  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMember = () => {

    setMembers([...members, inputData]);
    setInputData({
      name: '',
      governorate: '',
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      k: '',
      l: '',
      m: '',
      n: '',
    });
  };
  return (
    <div>
      <div className="bgcolor" >

        <NAvbar />
        <Box height={70} />
        <Box anchor='right' sx={{ display: "flex" }}>

          <Sidenav />

          <Box component="main" sx={{ width: "70%", position: "relative",mr:"5%",mt:"5%" }}>

            <form style={{direction:"rtl"}}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip"/>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
          </Box>
        </Box>
      </div>
    </div>
  )
}


