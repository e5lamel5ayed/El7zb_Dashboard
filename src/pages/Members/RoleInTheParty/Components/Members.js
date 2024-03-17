import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MemberForm() {

  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem('members')) || []
  );

  const [searchFilterName, setSearchFilterName] = useState('');
  const [searchFilterNationalNumber, setSearchFilterNationalNumber] = useState('');
  const [searchFilterMembershipCode, setSearchFilterMembershipCode] = useState('');
  const [searchFilterGovernorate, setSearchFilterGovernorate] = useState('');
  const [searchFilterJob, setSearchFilterJob] = useState('');



  const handleDeleteMember = (member) => {
    const updatedMembers = members.filter((m) => m !== member);
    setMembers(updatedMembers);
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
      <div style={{
        justifyContent: "center",
        marginTop: "15px",
        display: "flex"
      }}>
        <h1> اضافه دور ف الحزب </h1>      </div>
      <div style={{ width: "fit-content" }}>
        <Link style={{ textDecoration: "none" }} to='../AddRole'>
          <Button sx={{
            backgroundColor: "#dc1f27",
            color: "#fff",
            height: "48px",
            width: "fit-content",
            fontSize: "20px",
            fontWeight: "800",
            margin: "12px",
            display: "block",
            marginBottom: "25px",
          }} className='addMember' variant="contained" >اضافه دور </Button>
        </Link>
      </div>


      <div style={{ marginBottom: "2%", display: "flex", justifyContent: "space-between" }}>
        <div className='d-flex'>


          <input class="col-md-3 mr-sm-2 search-edit" type="search" placeholder=" الاسم" aria-label="Search" />
          <input class="col-md-3 mr-sm-2 search-edit" type="search" placeholder="كود العضويه" aria-label="Search" />
          <input class="col-md-3 mr-sm-2 search-edit" type="search" placeholder="رقم العضويه" aria-label="Search" />
          <input class="col-md-3 mr-sm-2 search-edit" type="search" placeholder="التاريخ" aria-label="Search" />
        </div>

        <div>


          <Button sx={{
            backgroundColor: "#dc1f27",
            color: "#fff",
            height: "48px",
            // width: "fit-content",
            fontSize: "20px",
            fontWeight: "800",
            // margin: "12px",
            display: "block",

          }} className='addMember col-md-2 mr-sm-2' variant="contained" >مسح </Button>
        </div>


      </div>
      

      <TableContainer component={Paper} sx={{ marginBottom: "2%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#dc1f27" }}>
              <TableCell sx={{ color: "#fff" }}>اسم العضو</TableCell>
              <TableCell sx={{ color: "#fff" }}>رقم العضويه</TableCell>
              <TableCell sx={{ color: "#fff" }}> الصفه الحزبيه</TableCell>
              <TableCell sx={{ color: "#fff" }}>رقم اللجنه</TableCell>
              <TableCell sx={{ color: "#fff" }}>التاريخ</TableCell>
              <TableCell sx={{ color: "#fff" }}> الصفه داخل اللجنه</TableCell>
              <TableCell sx={{ color: "#fff" }}>حذف</TableCell>
              <TableCell sx={{ color: "#fff" }}> تعديل</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.governorate}</TableCell>
                <TableCell>{member.a}</TableCell>
                <TableCell>{member.a}</TableCell>
                <TableCell>{member.b}</TableCell>
                <TableCell>{member.c}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteMember(member)}><Delete sx={{ color: "#f00609" }} /></Button>
                </TableCell>
                <TableCell>


                  <Link to="/edit">
                    <Button ><Edit sx={{ color: "#f00609" }} /></Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  );
}






