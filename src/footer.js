import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <div style={{marginTop:"1rem", padding:"1rem", backgroundColor:"#ededed", position:"fixed", bottom:0, width:"100%"}}>
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
    );
}