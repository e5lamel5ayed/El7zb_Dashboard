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

// import Typography from "@mui/material/Typography";

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
    
      const [openDialog, setOpenDialog] = useState(false);
      const [selectedMember, setSelectedMember] = useState(null);
    
      const [searchFilterName, setSearchFilterName] = useState('');
      const [searchFilterNationalNumber, setSearchFilterNationalNumber] = useState('');
      const [searchFilterMembershipCode, setSearchFilterMembershipCode] = useState('');
      const [searchFilterGovernorate, setSearchFilterGovernorate] = useState('');
      const [searchFilterJob, setSearchFilterJob] = useState('');
    
      const handleInputChange = (e) => {
        setInputData({
          ...inputData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleEditMember = (member) => {
        setSelectedMember(member);
        setInputData(member);
        setOpenDialog(true);
      };
    
      const handleSaveMember = () => {
        const updatedMembers = members.map((m) =>
          m === selectedMember ? inputData : m
        );
        setMembers(updatedMembers);
        setOpenDialog(false);
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
    
      const handleDeleteMember = (member) => {
        const updatedMembers = members.filter((m) => m !== member);
        setMembers(updatedMembers);
      };
    
      const handleSearchFilterChange = () => {
        setSearchFilterName('');
        setSearchFilterNationalNumber('');
        setSearchFilterMembershipCode('');
        setSearchFilterGovernorate('');
        setSearchFilterJob('');
      };
    
      const filteredMembers = members.filter((member) => {
        const nameMatch = searchFilterName ? member.name.toLowerCase().includes(searchFilterName.toLowerCase()) : true;
        const nationalNumberMatch = searchFilterNationalNumber ? member.governorate.toLowerCase().includes(searchFilterNationalNumber.toLowerCase()) : true;
        const membershipCodeMatch = searchFilterMembershipCode ? member.a.toLowerCase().includes(searchFilterMembershipCode.toLowerCase()) : true;
        const governorateMatch = searchFilterGovernorate ? member.c.toLowerCase().includes(searchFilterGovernorate.toLowerCase()) : true;
        const jobMatch = searchFilterJob ? member.d.toLowerCase().includes(searchFilterJob.toLowerCase()) : true;
    
        return nameMatch && nationalNumberMatch && membershipCodeMatch && governorateMatch && jobMatch;
      });
    
      useEffect(() => {
        localStorage.setItem('members', JSON.stringify(members));
      }, [members]);
    
  return (
    <div>
      <div className="bgcolor" >

        <NAvbar />
        <Box height={70} />
        <Box anchor='right'sx={{ display: "flex" }}>

          <Sidenav />
          
          <Box  component="main" sx={{ width:"50%", p: 3 , ml:"auto",mr:"auto",position:"relative" }}>


            <div className='form' style={{ marginTop: "2%"}}>
            <Link to="/about">
              <ArrowBack
              sx={{
                position:"absolute",
                fontSize:" 70px",
                left: "92.5px",
                color:"#fff",
                backgroundColor: "#dc1f27"
              }}
              />
              </Link>
              <Typography className='form-text'>
            تعديل البيانات
              </Typography>
              <TextField
                sx={{ margin: "5px" }}
                label="الاسم"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
              />
              <TextField
              anchor='right'
                color='error'
                sx={{ margin: "5px" }}
                label="الرقم القومي"
                name="governorate"
                value={inputData.governorate}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" كود العضويه"
                name="a"
                value={inputData.a}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" رقم العضويه"
                name="b"
                value={inputData.b}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" المحافظه"
                name="c"
                value={inputData.c}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" جهة الميلاد"
                name="d"
                value={inputData.d}
                onChange={handleInputChange}
              />

              <TextField
                sx={{ margin: "5px" }}
                label="المؤهل الدراسي"
                name="e"
                value={inputData.e}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" الوظيفه"
                name="f"
                value={inputData.f}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" جهةالعمل "
                name="g"
                value={inputData.g}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" عنوان العمل"
                name="h"
                value={inputData.h}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" اسم الحزب"
                name="k"
                value={inputData.k}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" تاريخ الانضمام"
                name="l"
                value={inputData.l}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label=" تاريخ الاستقاله"
                name="m"
                value={inputData.m}
                onChange={handleInputChange}
              />
              <TextField
                color='error'
                sx={{ margin: "5px" }}
                label="  التليفون"
                name="n"
                value={inputData.n}
                onChange={handleInputChange}
              />
            <div 
            style={{
                display: "flex",
                justifyContent:" space-around",
                marginRight:" 31%"
            }}
            >

            <Button sx={{
            }} className='hoverr' variant="contained" onClick={handleEditMember}>حفظ </Button>
            <Button sx={{
            }} className='hoverr' variant="contained" onClick={handleEditMember}> الغاء </Button>
            
            </div>
            </div>


          </Box>
        </Box>
      </div>
    </div>
  )
}










