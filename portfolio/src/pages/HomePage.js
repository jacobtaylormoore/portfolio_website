// React
import * as React from 'react';
// Components
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';
import Headshot from '../components/Image';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
// import photo
import Photo from '../components/headshot.jpg';





function HomePage() {
    return (
        <>
            <Grid>
                <Navigation classname="navigation" />
                <Box >
                    <Welcome />
                    <ExperiencePage />
                    <ContactPage />
                </Box>
            </Grid>
        </>
    );
}

export default HomePage;