import React from 'react';

// Components
import Sidenav from '../../components/Sidenav';
import Navbar from '../../components/Navbar';



// Charts
import { BarChart } from '../Home/charts/Barchart';
import { GeoChart } from '../Home/charts/Geochart';
import { ComboChart } from '../Home/charts/ComboChart';

// Material-UI Components
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Stack } from '@mui/material';


import "../../dash.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box className="bgcolor" component="main" sx={{ flexGrow: 1, pt: 3, pl: 3 }}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={10}>

                <Stack sx={{ pt: 3, mr: 3 }}>
                  <Card>
                    <CardActions>
                      <ComboChart />
                    </CardActions>
                  </Card>
                </Stack>
                <Stack sx={{ pt: 3, mr: 3 }}>
                  <Card>
                    <CardActions>
                      <GeoChart />

                    </CardActions>
                  </Card>
                </Stack>
              </Grid>
              <Grid item md={4} xs={0} sx={{ width: 90 + "%" }} >
                <Stack sx={{ pt: 3, mr: 3 }}>
                  <Card>
                    <CardActions>
                      <BarChart/>
                      
                    </CardActions>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            <Box height={20} />

          </Box>
        </Box>
      </div>
    </div>
  )
}
