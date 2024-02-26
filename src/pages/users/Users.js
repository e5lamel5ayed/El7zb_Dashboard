import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Eddit from "../Edit";

export default function MemberForm() {
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
      <div style={{ display: "flex" }}>
        <h1>بيانات الاعضاء</h1>
      </div>
      <Link to='../messges'>
        <Button sx={{
          backgroundColor: "#dc1f27",
          color: "#fff",
          height: "48px",
          width: "10%",
          fontSize: "20px",
          fontWeight: "800",
          margin: "12px",
          display:"flex",
        }} className='addMember' variant="contained" >اضافه عضو</Button>
      </Link>

      <div style={{ marginBottom: "2%" }}>
        <TextField color='error' sx={{ml:"1%"}} label="البحث بالاسم" value={searchFilterName} onChange={(e) => setSearchFilterName(e.target.value)} />
        <TextField color='error'  sx={{ml:"1%"}} label="البحث بالرقم القومي" value={searchFilterNationalNumber} onChange={(e) => setSearchFilterNationalNumber(e.target.value)} />
        <TextField color='error'  sx={{ml:"1%"}} label="البحث بكود العضويه" value={searchFilterMembershipCode} onChange={(e) => setSearchFilterMembershipCode(e.target.value)} />
        <TextField  color='error' sx={{ml:"1%"}} label="البحث بالمحافظه" value={searchFilterGovernorate} onChange={(e) => setSearchFilterGovernorate(e.target.value)} />
        <TextField color='error'  sx={{ml:"1%"}} label="البحث بالوظيفه" value={searchFilterJob} onChange={(e) => setSearchFilterJob(e.target.value)} />
      </div>

      <TableContainer component={Paper} sx={{ marginBottom: "2%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#dc1f27" }}>
              <TableCell sx={{ color: "#fff" }}>اسم العضو</TableCell>
              <TableCell sx={{ color: "#fff" }}>الرقم القومي</TableCell>
              <TableCell sx={{ color: "#fff" }}>كود العضويه</TableCell>
              <TableCell sx={{ color: "#fff" }}>رقم العضويه</TableCell>
              <TableCell sx={{ color: "#fff" }}>المحافظه</TableCell>
              <TableCell sx={{ color: "#fff" }}>جهة الميلاد</TableCell>
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
                <TableCell>{member.b}</TableCell>
                <TableCell>{member.c}</TableCell>
                <TableCell>{member.d}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteMember(member)}><Delete sx={{ color: "#f00609" }} /></Button>
                </TableCell>
                <TableCell>



                {/* <Link to={{ pathname: '/edit', state: { jsonObject } }}>Edit JSON Object</Link> */}
                  
                  
                  <Link to ="/edit">
                  <Button onClick={() => handleEditMember(member)}><Edit sx={{ color: "#f00609" }} /></Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ marginBottom: "2%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#dc1f27" }}>
              <TableCell sx={{ color: "#fff" }}>المؤهل الدراسي</TableCell>
              <TableCell sx={{ color: "#fff" }}> الوظيفه</TableCell>
              <TableCell sx={{ color: "#fff" }}> جهة العمل</TableCell>
              <TableCell sx={{ color: "#fff" }}>عنوان العمل </TableCell>
              <TableCell sx={{ color: "#fff" }}>اسم الحزب</TableCell>
              <TableCell sx={{ color: "#fff" }}>تاريخ الانضمام</TableCell>
              <TableCell sx={{ color: "#fff" }}>تاريخ الاستقاله</TableCell>
              <TableCell sx={{ color: "#fff" }}>التليفون</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.e}</TableCell>
                <TableCell>{member.f}</TableCell>
                <TableCell>{member.g}</TableCell>
                <TableCell>{member.h}</TableCell>
                <TableCell>{member.k}</TableCell>
                <TableCell>{member.l}</TableCell>
                <TableCell>{member.m}</TableCell>
                <TableCell>{member.n}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>تعديل البيانات</DialogTitle>
        <DialogContent>
          {selectedMember && (
            <>
              <TextField
                sx={{ margin: "5px" }}
                label="الاسم"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
              />
              <TextField
                sx={{ margin: "5px" }}
                label="الرقم القومي"
                name="governorate"
                value={inputData.governorate}
                onChange={handleInputChange}
              />
              <TextField
                sx={{ margin: "5px" }}
                label=" كود العضويه"
                name="a"
                value={inputData.a}
                onChange={handleInputChange}
              />
              <TextField
                sx={{ margin: "5px" }}
                label=" رقم العضويه"
                name="b"
                value={inputData.b}
                onChange={handleInputChange}
              />
              <TextField
                sx={{ margin: "5px" }}
                label=" المحافظه"
                name="c"
                value={inputData.c}
                onChange={handleInputChange}
              />
              <TextField
                sx={{ margin: "5px" }}
                label=" الوظيفه"
                name="d"
                value={inputData.d}
                onChange={handleInputChange}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>الغاء</Button>
          <Button onClick={handleSaveMember}>حفظ</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
