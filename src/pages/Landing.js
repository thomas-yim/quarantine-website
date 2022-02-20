
   
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
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            Quarantine
          </Typography>
        </Toolbar>
      </AppBar>
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
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Stop Bad Content.
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Join us in simplifying the moderation of user-generated content. Using a hybrid Artificial Intelligence and
                        Human Intelligence moderation process, the Quarantine API helps to isolate negative user content.
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                    <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                    <Link className="btn btn-primary" to="/signin">Sign In</Link>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <img style={{height:400, width:600 }} src="content-moderation.jpeg"></img>
                </Grid>
          </Grid>
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            Thomas Yim '25 and Daniel Longo '25
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          TreeHacks 2022
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}