
   
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
import StickyFooter from "../footer";
import logo from "./quarantine-logo.png"
import LogoutIcon from "@mui/icons-material/Logout";
import share from "./share.png"
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

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <a href="/"><AppBar position="static">
            <Toolbar>
                <img src={logo} style={{width:70, padding:5}}/>
            </Toolbar>
        </AppBar>
        </a>

        <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} xs={12}>
                <Grid item xs={6}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="#1876d2"
                        fontWeight="600"
                        gutterBottom
                    >
                    Quarantine
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph color="black">
                        Human in the Loop Content Moderation
                    </Typography>
                    <Typography variant="h6" align="left" color="text.secondary" paragraph color="black">
                        Add content moderation to your app without adding a single line of code.
                    </Typography>
                    <Typography variant="h6" align="left" color="text.secondary" paragraph color="black">
                         Flags text content for human moderator using AI. Our pretrained models keeps learning based off your moderator's labels improving with use.
                    </Typography>

                    <Typography variant="h6" align="left" color="text.secondary" paragraph color="black">
                        Simple and easy content moderator portal. Just sign up with your work email and automatically access your sites flagged content.
                    </Typography>
                    <a href="/developer" ><Typography variant="h7">How it works</Typography></a>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="left"
                    >
                    <Link className="btn btn-primary"  to="/signup">Sign Up</Link>
                    <Link className="btn btn-primary" to="/signin">Sign In</Link>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <img style={{height:450 }} src={share}></img>
                </Grid>
          </Grid>
          </Container>
        </Box>
      </main>
     <StickyFooter/>
    </ThemeProvider>
  );
}