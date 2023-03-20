// React
import * as React from 'react';

// Pages
import Navigation from '../components/Navigation';
import ExperienceHeader from '../components/ExperienceHeader';
import ExperienceBody from '../components/ExperienceBody';
import ExperienceFooter from '../components/ExperienceFooter';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

// This experience page is broken into the navigation component and three experience
// components that make up what is essentially a mirror of my resume
function ExperiencePage() {
    return (
        <>
            <Navigation />
            <Box>
                <ExperienceHeader />
                <ExperienceBody />
                <ExperienceFooter />
            </Box>
        </>
    );
}

export default ExperiencePage;