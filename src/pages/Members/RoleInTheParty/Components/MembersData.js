// import React from 'react'
import Sidenav from "../../../../components/Sidenav";
import Box from "@mui/material/Box";
import NAvbar from "../../../../components/Navbar";

import { Link } from "react-router-dom";


export default function Settings() {


  return (
    <div>
      <div className="bgcolor">
        <NAvbar />
        <Box height={70} />
        <Box anchor="right" sx={{ display: "flex" }}>
          <Sidenav />
          <Box className="Box-style" component="main">
            <div className="d-flex borderr">
              <h3 className="tab3">اضافه دور ف الحزب</h3>

              <button className="btn back btn-block ">
                <Link className="link-edit" to="/MemberPerformance">
                  رجوع
                </Link>
              </button>
            </div>

            <form className="form-edit">



                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                       اسم العضو
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      رقم العضوية
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                </div>

                <div class="form-row mb-3">
                <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      الصفه
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "48%",
                        padding: "6px",
                      }}
                    >
                      <optgroup>
                        <option>حزبي  </option>
                        <option>مستقل</option>
                      </optgroup>
                    </select>
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      اسم اللجنة  المنظم  اليها  
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                </div>

                <div class="form-group col-md-6 ml-auto mr-auto">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      الصفه داخل اللجنه
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>



                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button type="submit" className="save">
                    حفظ
                  </button>
                </div>
              </form>
          </Box>
        </Box>
      </div>
    </div>
  );
}
