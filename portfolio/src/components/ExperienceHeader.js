import * as React from 'react';
import '../index.css';
import '../App.css';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// This is the beginning of the experience page which mirrors my resume 
function ExperienceHeader() {
    return (
        <>
            <Box classname="experience" id="expHeader">
                <Typography
                    variant="h1"
                    component="div"
                    sx={{ textAlign: 'center', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Jacob Moore
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ textAlign: 'center', flexGrow: 1 }}
                >
                    210-643-3035 • Austin, TX • JacobTaylorMoore@gmail.com
                </Typography>
            </Box>
        </>
    );
}

export default ExperienceHeader;