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
              <h3 className="tab3"> المصروفات  </h3>

              <button className="btn back btn-block ">
                <Link className="link-edit" to="/ViewExpenses">
                  رجوع
                </Link>
              </button>
            </div>

            <form className="form-edit">
              <div class="form-row mb-3">
                <div class="form-group col-md-12">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    اسم المسؤل
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                
              </div>

              <div class="form-row mb-3">
                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    نوع السداد
                  </label>
                  <select
                    style={{
                      width: "100%",
                      height: "48%",
                      padding: "6px",
                    }}
                  >
                    <optgroup>
                      <option>نقدي </option>
                      <option>كاش</option>
                    </optgroup>
                  </select>
                </div>
                
                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    رقم الايصال
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                
                
                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    اسم البند 
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                

              </div>

              <div class="form-row mb-3">

              <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    نوع البند
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                

                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    القيمه
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    تاريخ التسديد 
                  </label>
                  <input type="date" class="form-control" id="inputCity" />
                </div>
              </div>

              <div class="form-row mb-3">

              <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    اسم المنصرف اليه
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                

                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    الخزنه
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                     البيان
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
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
