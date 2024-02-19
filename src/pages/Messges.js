
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

          <Box component="main" sx={{
            width: "75%",
            position: "relative",
            mr: "5%", mt: "5%", mb: "5%",
            backgroundColor: "#fff",
            p: "5%"
          }}>
            <form style={{ direction: "rtl", }}>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputEmail4" className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >الاسم</label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>

                <div class="form-group col-md-4">
                  <label className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >الشهره</label>
                  <input type="text" class="form-control" id="inputPassword4" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-8">
                  <label className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >الرقم القومي</label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="form-group col-md-4">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >جهة الاصدار</label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>

              </div>

              <div className='form-row'>
                <div className='col-md-2 d-flex'>
                  <h4>جهة الميلاد :</h4>
                </div>
                <div class="form-group col-md-2">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >محافظه</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <div class="form-group col-md-2">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >قسم/مركز</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>

                <div className='form-check col-md-6'>
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >النوع:</label>
                  <div className='col-md-4 form-group'>

                    <div>
                      <label class="form-check-label"

                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        ذكر
                      </label>
                      <input class="form-check-input" type="radio" name='النوع' value='ذكر' id="gridCheck" />
                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        انثى
                      </label>
                      <input class="form-check-input" type="radio" name='النوع' value='أثنثي' id="gridCheck" />
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-row">
                <div class="form-group col-md-6">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >المؤهل الدرسي</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >التخصص</label>
                  <input type="text" class="form-control" id="inputCity" />

                </div>

                <div class="form-group col-md-2">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >سنة</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > الدراسات العليا</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >التخصص</label>
                  <input type="text" class="form-control" id="inputCity" />

                </div>

                <div class="form-group col-md-2">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >سنة</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-8">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > الوظيفه</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >جهةالعمل</label>
                  <input type="text" class="form-control" id="inputCity" />

                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > عنوان الاقامه وفقا لبطاقة الرقم القومي</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > عنوان الاقامه العفلي تفصيليا</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
              </div>

              <div className='form-row form-check-ex'>

              <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > عنوان المراسلات:</label>
                
                <div className='col-md-4 form-group'>
                  <div>
                    <label class="form-check-label"

                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}
                    >
                      محل الاقامة
                    </label>
                    <input class="form-check-input" type="radio" name='عنوان المراسلات' value='محل الاقامة' id="gridCheck" />
                  </div>
                  <div>
                    <label class="form-check-label"
                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}>
                      محل العمل
                    </label>
                    <input class="form-check-input" type="radio" name='عنوان المراسلات' value='محل العمل' id="gridCheck" />
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > عنوان الاقامه العفلي تفصيليا</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
              </div>

              <div className='form-row'>
                <div className='col-md-2 d-flex'>
                  <h4>التليفون :</h4>
                </div>
                <div class="form-group col-md-5">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >منزل</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <div class="form-group col-md-4">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >محمول</label>
                  <input type="tel" class="form-control" id="inputAddress2" />
                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >الايميل</label>
                  <input type="email" class="form-control" id="inputCity" />
                </div>
              </div>

              <div className='form-row form-check-ex'>
                <div className='title'>
                  <h4>هل انت عضو باحد النقابات:</h4>
                </div>
                <div className='col-md-4 form-group'>

                  <div>
                    <label class="form-check-label"

                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}
                    >
                      نعم
                    </label>
                    <input class="form-check-input" type="radio" name='عضوية النقابة' value='نعم' id="gridCheck" />
                  </div>
                  <div>
                    <label class="form-check-label"
                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}>
                      لا
                    </label>
                    <input class="form-check-input" type="radio" name='عضوية النقابة' value='لا' id="gridCheck" />
                  </div>
                </div>
              </div>

              <div>

              </div>


              <div class="form-row">
                <div class="form-group col-md-6">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > فرع النقابة التابع له محافظة</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >رقم العضويه</label>
                  <input type="text" class="form-control" id="inputCity" />

                </div>

                <div class="form-group col-md-2">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >تريخ الانضمام</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>

              </div>


              <div className='form-row form-check-ex'>
                <div className='title col-md-4'>
                  <h4>هل كنت عضوا في الحزب من قبل:</h4>
                </div>
                <div className='col-md-4 form-group'>

                  <div>
                    <label class="form-check-label"

                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}
                    >
                      نعم
                    </label>
                    <input class="form-check-input" type="radio" name='عضوية الحزب' value='نعم' id="gridCheck" />
                  </div>
                  <div>
                    <label class="form-check-label"
                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}>
                      لا
                    </label>
                    <input class="form-check-input" type="radio" name='عضوية الحزب' value='لا' id="gridCheck" />
                  </div>
                </div>
              </div>


              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > سبب الاستقاله</label>
                  <textarea type="text" class="form-control" id="inputCity" />
                </div>
              </div>


              <div className='form-row form-check-ex'>
                <div className='title col-md-4'>
                  <h4>هل سبق لك الترشح في انتخابات سابقه:</h4>
                </div>
                <div className='col-md-4 form-group'>

                  <div>
                    <label class="form-check-label"

                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}
                    >
                      نعم
                    </label>
                    <input class="form-check-input" type="radio" name='الترشح في الإنتخابات' value='نعم' id="gridCheck" />
                  </div>
                  <div>
                    <label class="form-check-label"
                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}>
                      لا
                    </label>
                    <input class="form-check-input" type="radio" name='الترشح في الإنتخابات' value='لا' id="gridCheck" />
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > تاريخ الترشح </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
              </div>


              <div className='form-row form-check-ex'>
                <div className='title col-md-4'>
                  <h4> هل درست برنامج الحزب:</h4>
                </div>
                <div className='col-md-4 form-group'>

                  <div>
                    <label class="form-check-label"

                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}
                    >
                      نعم
                    </label>
                    <input class="form-check-input" type="radio" name='دراسة برنامج الحزب' value='نعم' id="gridCheck" />
                  </div>
                  <div>
                    <label class="form-check-label"
                      style={{
                        fontSize: "25px",
                        fontWeight: "600"
                      }}>
                      لا
                    </label>
                    <input class="form-check-input" type="radio" name='دراسة برنامج الحزب' value='لا' id="gridCheck" />
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >ما سبب طلبك اإلنضمام لحزب العدل</label>
                  <textarea type="text" class="form-control" id="inputCity" />
                </div>
              </div>


              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >ما المجال التخصصى الذي ٌمكنك فيه مساعدة الحزب</label>
                  <textarea type="text" class="form-control" id="inputCity" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >ما هي وسيلة التواصل المناسبة لك</label>
                  <textarea type="text" class="form-control" id="inputCity" />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >

                <button type="submit" className='save'>حفظ</button>
              </div>
            </form>
          </Box>
        </Box>
      </div>
    </div>
  )
}


