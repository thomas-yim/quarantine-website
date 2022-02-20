import React from "react"
import {AppBar, Box, CardActionArea, Container, CssBaseline, Grid, Paper, Toolbar, Typography} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {FixedSizeList} from "react-window";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import StickyFooter from "../footer";
import howworks from "./howworks.png"
import {Code, CopyBlock} from "react-code-blocks";
import logo from "./quarantine-logo.png";

function MyAppBar() {
    return (
        <a href="/home"><AppBar>
            <Toolbar>
                <img src={logo} style={{width:70, padding:5}}/>
                <Typography style={{marginLeft:"auto"}} variant="h6">sign out <LogoutIcon/></Typography>
            </Toolbar>
        </AppBar>
        </a>

    );
}
export default function Developer(props) {
    return (
        <div>
            <MyAppBar/>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <br/>


                    <Container>
                        <Grid style={{marginTop:30, marginBottom:20}} container spacing={4} xs={12}>
                            <Grid item xs={12}>
                                <Container>
                                    <a href="/home"><Typography style={{fontSize:17, fontWeight:400, marginLeft:-20}} align="left" href={"/home"} display={"inline"}>Home </Typography></a><Typography style={{fontSize:17, fontWeight:400}} align="left" display={"inline"}>/ Developer</Typography>
                                </Container>
                            </Grid>
                        </Grid>
                        <Grid style={{width:650}}>
                        <Typography variant="h5">Developer Instructions</Typography>
                            <Typography>Adding Quarantine to your doesn't require you to add a single line of code! Simply change the endpoint of POST requests that submit user content.</Typography>

                        </Grid>
                        <br/>
                        <Typography variant="h6">How it works</Typography>
                        <img src={howworks} style={{width:600}}/>
                        <Typography style={{width:650}}>Requests from the client are routed through Quarantine servers. If our models flag the request's contents, the request is "quarantined" until a moderator either allows or blocks. Based off moderator labeling, our system fine tunes itself to meet the requirements of your specific application.</Typography>


                        <br/>

                        <Typography variant="h6">Code Example: JavaScript</Typography>
                        <Typography>Original request</Typography>
                        <Code
                            text={`const userAction = async () => {
  const response = await fetch('http://example.com/movies.json', {
    method: 'POST',
    body: myBody, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
}`}
                            theme={"monokai"}
                            language="js"
                        />
                        <Typography>With Quarentine</Typography>
                        <Code
                            text={`const userAction = async () => {
  const response = await fetch('https://quarantine-19d7d.uc.r.appspot.com/https://http://example.com/movies.json', {
    method: 'POST',
    body: myBody, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
}`}
                            theme={"monokai"}
                            language="js"
                        />

                        <br/>
                        <br/>





                    </Container>
                    <div style={{padding:"1rem", backgroundColor:"#ededed", bottom:0, width:"100%"}}>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            color="text.secondary"
                            component="p"
                        >
                            TreeHacks 2022 | <a href="/home">Quarantine</a>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            align="center"
                            color="text.secondary"
                            component="p"
                        >
                            Thomas Yim & Daniel Longo
                        </Typography>

                    </div>
            </Box>

        </div>
    )
}