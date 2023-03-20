// React
import * as React from 'react';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
// Image
import Image from './headshot.jpg';

function Headshot() {
    return (
        <Box
            component="img"
            sx={{
                height: '20vh',
                width: '20vw'
            }}
            alt="Headshot of me."
            src={Image}
        />
    );
}

export default Headshot;