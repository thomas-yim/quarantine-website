
   
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {CardActionArea} from "@mui/material";
import StickyFooter from "../footer";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Quarantine '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography style={{fontWeight: 1000}} noWrap>
            Quarantine
          </Typography>
        </Toolbar>
      </AppBar>
        {/*<Box*/}
        {/*    style={{alignItems: "left", justifyContent:"left", background:"red"}}*/}
        {/*  sx={{*/}
        {/*    bgcolor: 'background.paper',*/}
        {/*    pt: 8,*/}
        {/*    pb: 6*/}

        {/*  }}*/}
        {/*>*/}
          <div style={{justifyContent:"left", width:"100%", padding:35}}>
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
            >
              Welcome Back
            </Typography>
              <Stack spacing={2}>
                  <Card sx={{ width: 400, height: 150, background:"#40c77d"}}>
                      <CardActionArea sx={{ width: 400, height: 150}} href="/developer">
                      <CardContent>
                          <Typography component="div" style={{fontSize: 22, fontWeight:500}}>
                              I'm a Developer
                              <DoubleArrowIcon/>
                          </Typography>
                      </CardContent>
                      </CardActionArea>
                  </Card>
                  <Card sx={{ width: 400, height: 150, background:"#c75b40", marginTop:150 }}>
                      <CardActionArea sx={{ width: 400, height: 150}} href="/moderator">
                          <CardContent>
                              <Typography component="div" style={{fontSize: 22, fontWeight:500}}>
                                  I'm a Content Moderator
                                  <DoubleArrowIcon/>
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
                  {/*<Link style={{maxWidth: '200px', maxHeight: '120px', minWidth: '200px', minHeight: '120px'}} className="btn btn-primary" to="/developer">Developer</Link>*/}
                  {/*<Link style={{maxWidth: '200px', maxHeight: '120px', minWidth: '200px', minHeight: '120px'}} className="btn btn-primary" to="/moderator">Moderator</Link>*/}
              </Stack>
          </div>
        <StickyFooter/>
    </ThemeProvider>
  );
}