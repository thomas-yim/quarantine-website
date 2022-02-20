import React, { Component } from 'react';
import {
    CssBaseline, 
    ListItemButton,
    Box,
    Toolbar,
    Typography,
    Container,
    Grid,
    Paper,
    AppBar,
    ListItem,
    ListItemText
    } from '@mui/material';
import {FixedSizeList} from 'react-window';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Quarantine'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function MyAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4">Quarantine</Typography>
                <Typography style={{marginLeft:"auto"}} variant="h4">sign out</Typography>
            </Toolbar>
        </AppBar>
    );
}

function approve() {
    console.log("y")
}

function disapprove() {
    console.log("n")
}

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode == 121) {
        approve()
    } else if (e.keyCode == 110) {
        disapprove()
    }
};

class Moderator extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentText: {
              body: "test",
              content: "Make an easy 500 dollars in 15 minutes. Click on the link bit.ly/scam to earn your credits!"
          },
          queuedText: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5", "Example 6", "Example 7", "Example 8", "Example 9", "Example 10"]
        }
      }
    
    renderRow = () => {
        return (
        <ListItem key={0} component="div" disablePadding>
            <ListItemButton>
            <ListItemText primary={`${this.state.queuedText[0]}`} />
            </ListItemButton>
        </ListItem>
        );
    }
    
    render(){
    return (
        <div>
            <MyAppBar/>
            <Box sx={{ display: 'flex' }}>
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
                    <Grid container spacing={4} xs={12}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h3">Moderator Dashboard</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '71vh'
                            }}
                            >
                                <Typography variant="h5" gutterBottom style={{fontWeight: 600}}>Flagged Content Queue</Typography>
                                <FixedSizeList
                                    height={500}
                                    width={300}
                                    itemSize={46}
                                    itemCount={15}
                                    overscanCount={5}
                                >
                                    {this.renderRow}
                                </FixedSizeList>
                            </Paper>
                        </Grid>
                        <Grid container={'true'} item xs={8} spacing={1}>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '50vh',
                                        padding:"0px 20px"

                                    }}
                                    >
                                    <br/>
                                    <Typography align="center" variant="h5" style={{fontWeight: 600}} gutterBottom>Content Text</Typography>
                                    <Typography align="left" variant="h5">{this.state.currentText["content"]}</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sx={{display: "grid", placeContent: "center"}}>
                                <img onClick={this.disapprove} style={{height:"20vh", width:"20vh", alignItems:"right"}} src="https://upload.wikimedia.org/wikipedia/commons/8/83/Eo_circle_red_white_letter-x.svg"></img>
                            </Grid>
                            <Grid item xs={6} sx={{display: "grid", placeContent: "center"}}>
                                <img onClick={this.approve} style={{height:"20vh", width:"20vh", alignItems:"center"}} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" onclick="console.log('here')"></img>
                            </Grid>
                            </Grid>
                        
                    </Grid>
                    
                </Container>
                </Box>
            </Box>
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
        </div>
    );
                            }
}

export default function Dashboard() {
  return <Moderator />;
}