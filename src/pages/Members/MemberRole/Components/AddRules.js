// import React from 'react'
import Sidenav from "../../../../components/Sidenav";
import Box from "@mui/material/Box";
import NAvbar from "../../../../components/Navbar";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function AddRules() {
  const [members] = useState(JSON.parse(localStorage.getItem("members")) || []);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  return (
    <div>
      <div className="bgcolor">
        <NAvbar />
        <Box height={70} />
        <Box anchor="right" sx={{ display: "flex" }}>
          <Sidenav />
          <Box className="Box-style" component="main">
            <div className=" borderr">


              <div className="d-flex borderr">
                <h3 className="tab3">القوانين المصدره من العضو  </h3>

                <button className="btn back btn-block ">
                  <Link className="link-edit" to="/ViewRules">
                    رجوع
                  </Link>
                </button>
              </div>

              <div>

                <form className="form-edit" action="">
                  <div class="form-row ">
                    <div className=" col-sm-12 ">
                      <div class="form-row mb-3 col-sm-12">
                        <div class="form-group col-md-6">
                          <label
                            className="d-flex"
                            style={{
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                          >
                            اسم العضو{" "}
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="memberName"
                            name="memberName"
                          />
                        </div>
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

                      </div>
                    </div>
                  </div>

                  <div class="form-row mb-3 col-sm-12">
                    <div class="form-group col-md-4">
                      <label
                        className="d-flex"
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        بند القانون
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="LawClause"
                        name="LawClause"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label
                        className="d-flex"
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        تاريخ التقديم
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="Date"
                        name="Date"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label
                        className="d-flex"
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        الحاله{" "}
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Situation"
                        name="Situation"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button name="save" type="submit" className="save">
                      حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
