// import React from 'react'
import Sidenav from "../../../components/Sidenav";
import Box from "@mui/material/Box";
import NAvbar from "../../../components/Navbar";
import BasicData from "./BasicData";
import PartyData from "./PartyData";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


export default function Settings() {


  const [members] = useState(JSON.parse(localStorage.getItem("members")) || []);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const [toggled, setToggled] = useState();

  return (
    <div>
      <div className="bgcolor">
        <NAvbar />
        <Box height={70} />
        <Box anchor="right" sx={{ display: "flex" }}>
          <Sidenav />
          <Box className="Box-style" component="main">
            <div className="d-flex borderr">
              <button className="tab1" onClick={() => setToggled(2)}>
                {" "}
                بيانات اساسيه
              </button>
              <button onClick={() => setToggled(1)} className="tab2">
                {" "}
                بيانات حزبيه
              </button>

              <button className="btn back btn-block ">
                <Link className="link-edit" to="/Members">
                  رجوع
                </Link>
              </button>
            </div>

            {toggled === 1 ? (
             <PartyData/>
            ) : (
             <BasicData/>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
}
