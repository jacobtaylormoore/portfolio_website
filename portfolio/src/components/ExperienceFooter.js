import * as React from 'react';
import '../index.css';
import '../App.css';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// This will act as the bottom of the Experience Page. Highlights Education and Credentials 
function ExperienceFooter() {
    return (
        <>
            <Grid container direction='column' alignItems='center' >
                <Box sx={{ width: '100%', maxWidth: '85%' }}>
                    <Typography variant='h2' textAlign='center' alignItems='center' padding='.5em'>
                        <u>Education & Credentials</u>
                    </Typography>
                    <Typography variant='h5' textAlign='center' alignItems='center' padding='.5em'>
                        <b>Bachelor of Science in Computer Science</b> | OREGON STATE UNIVERSITY | Expected: 2023
                    </Typography>
                    <Typography variant='h5' textAlign='center' alignItems='center' padding='.5em'>
                        <b>Bachelor of Arts in Film and Digital Media</b> | BAYLOR UNIVERSITY | 2018
                    </Typography>
                    <Typography variant='h5' textAlign='center' alignItems='center' padding='.5em' paddingBottom='4em'>
                        <i>Technology: </i>Python |
                        C++ | HTML | CSS | JavaScript | Git | GitHub | X86 Assembly/MASM | SQL MySQL | MariaDB | MongoDB | Flask |
                        Jinja2 | Microsoft Suite | Adobe Suite
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default ExperienceFooter;