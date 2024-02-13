
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

export default function MemberForm() {
  const [inputData, setInputData] = useState({
    name: '',
    governorate: '',
    a :'',
    b :'',
    c :'',
    d :'',
    // Add other member data fields here
  });

  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem('members')) || []
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

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
      a :'',
      b :'',
      c :'',
      d :'',
      // Reset other member data fields
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
      a :'',
      b :'',
      c :'',
      d :'',
      // Reset other member data fields
    });
  };

  const handleDeleteMember = (member) => {
    const updatedMembers = members.filter((m) => m !== member);
    setMembers(updatedMembers);
  };

  const handleSearchFilterChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (member.id && member.id.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  return (
    <div style={{direction:"rtl"}}>


      <h1>بيانات الاعضاء</h1>
     

      <div style={{marginBottom:"2%"}}>
        <TextField
        color='error'
          label="البحث بالاسم"
          value={searchFilter}
          onChange={handleSearchFilterChange}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{backgroundColor:"#b39952"}}>
              <TableCell sx={{color:"#fff"}}>اسم العضو</TableCell>
              <TableCell sx={{color:"#fff"}}>الرقم القومي</TableCell>
              <TableCell sx={{color:"#fff"}}>كود العضويه</TableCell>
              <TableCell sx={{color:"#fff"}}>رقم العضويه</TableCell>
              <TableCell sx={{color:"#fff"}}>المحافظه</TableCell>
              <TableCell sx={{color:"#fff"}}>الوظيفه</TableCell>
              {/* Add other table headers for member data fields */}
              <TableCell sx={{color:"#fff"}}>حذف</TableCell>
              <TableCell sx={{color:"#fff"}}> تعديل</TableCell>
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
                {/* Render other member data fields */}
                <TableCell>
                  <Button onClick={() => handleDeleteMember(member)}><Delete sx={{color:"#b39952"}}/></Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditMember(member)}><Edit sx={{color:"#b39952"}}/></Button>
                </TableCell>
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
                sx={{margin:"5px"}}
                label="الاسم"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
              />
              <TextField
              sx={{margin:"5px"}}
                label="الرقم القومي"
                name="governorate"
                value={inputData.governorate}
                onChange={handleInputChange}
              />
              <TextField
              sx={{margin:"5px"}}
                label=" كود العضويه"
                name="a"
                value={inputData.a}
                onChange={handleInputChange}
              />
              <TextField
              sx={{margin:"5px"}}
                label=" رقم العضويه"
                name="b"
                value={inputData.b}
                onChange={handleInputChange}
              />
              <TextField
              sx={{margin:"5px"}}
                label=" المحافظه"
                name="c"
                value={inputData.c}
                onChange={handleInputChange}
              />
              <TextField
              sx={{margin:"5px"}}
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


       <div style={{marginTop:"2%", display:"flex" , justifyContent:"space-between"}}>
        <TextField
         color='error'
         sx={{ml:"5px"}}
          label="اسم العضو"
          name="name"
          value={inputData.name}
          onChange={handleInputChange}
        />
        <TextField
        color='error'
        sx={{ml:"5px"}}
          label="الرقم القومي"
          name="governorate"
          value={inputData.governorate}
          onChange={handleInputChange}
        />
        <TextField
        color='error'
        sx={{ml:"5px"}}
          label=" كود العضويه"
          name="a"
          value={inputData.a}
          onChange={handleInputChange}
        />
        <TextField
        color='error'
        sx={{ml:"5px"}}
          label=" رقم العضويه"
          name="b"
          value={inputData.b}
          onChange={handleInputChange}
        />
        <TextField
        color='error'
        sx={{ml:"5px"}}
          label=" المحافظه"
          name="c"
          value={inputData.c}
          onChange={handleInputChange}
        />
        <TextField
        color='error'
        sx={{ml:"5px"}}
          label=" الوظيفه"
          name="d"
          value={inputData.d}
          onChange={handleInputChange}
        />

      

      </div>
        <Button sx={{
              backgroundColor: "#b39952",
              color: "#fff",
              height: "48px",
              width: "10%",
              fontSize: "20px",
              fontWeight: "800",
              margin: "12px",
              
        }} className='hoverr' variant="contained" onClick={handleAddMember}>اضافه عضو</Button>
      
    </div>
  );
}