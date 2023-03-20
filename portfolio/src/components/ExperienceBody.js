import * as React from 'react';
import '../index.css';
import '../App.css';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// This is the main body of the experience page which lists professional experience
function ExperienceBody() {
    return (
        <>
            <Grid container direction='column' alignItems='center' >
                <Box sx={{ width: '100%', maxWidth: '85%' }}>
                    <Typography variant='h2' textAlign='center' alignItems='center' padding='.5em'>
                        <u>Software Development</u>
                    </Typography>
                    <Typography variant='body1' textAlign='center' alignItems='center' padding='.5em'>
                        Analytical, collaborative
                        professional with a diverse background spanning software development, project management, data analysis, and
                        production planning. Eager to leverage hands-on experience and computer science education to manage complex
                        development and analytical projects, craft high-quality code, and aid in the development of disruptive
                        technology solutions. Excel at conducting in-depth data and requirements analysis with expertise in a variety of
                        technical and programming tools, data structures, and algorithms.
                    </Typography>
                    <Typography variant='body2' textAlign='center' alignItems='center'>
                        Software Development Lifecycle ■ Project Management ■ Bug Fixing ■ Application Development ■ Data Analysis ■ Database Design ■ Quality Assurance ■ Coding Standards ■ Data Science ■ Data Parsing ■ Data Structures
                    </Typography>
                    <Typography variant='h2' textAlign='center' alignItems='center' padding='.5em'>
                        <u>Professional Experience</u>
                    </Typography>
                    <Typography variant='h5' textAlign='left' alignItems='center' padding='.5em'>
                        <b>Software Development & Computer Science </b>| Oregon State University | Austin, TX | April 2020-Present
                    </Typography>
                    <Typography variant='subtitle2' textAlign='left' alignItems='center' padding='.5em'>
                        Pursuing higher education to
                        advance software development, project management, and data science expertise.
                    </Typography>
                    <List >
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Database Design -</b> Demonstrated a deep understanding of database design, normalization, and implementation as
                                well as CRUD operations by launching a website connecting to an example database of users for a
                                fictional audio streaming service.
                            </p>
                        </ListItem>
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Computer Networking -</b> Produced a client and server socket which established a connection to each
                                other to send and receive TCP packets, emulating a simple chat client. As a result, highlighted a
                                solid grasp of socket programming and computer networking.
                            </p>
                        </ListItem>
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Object Oriented Programming -</b> Executed a project to develop a game of Janggi (Korean Chess) highlighting a solid
                                understanding of class composition and inheritance, recursion, data structures, and more.
                            </p>
                        </ListItem>
                    </List>
                    <Typography variant='h5' textAlign='left' alignItems='center' padding='.5em'>
                        <b>Producer & Development Manager </b>| Arts + Labor | Austin, TX | May 2019-April 2020
                    </Typography>
                    <Typography variant='subtitle2' textAlign='left' alignItems='center' padding='.5em'>
                        Planned, coordinated, and managed complex
                        production projects for diverse commercial and film initiatives. Built, coached, and led a
                        cross-functional project team. Oversaw budgets, resources, timelines, risk, and change management.
                        Expanded business development and company positioning by creating new content to pitch to high-profile
                        networks.
                    </Typography>
                    <List >
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Recognized as a Top Producer and
                                    Project Manager on a variety of production projects </b>including <i>Lover, Beloved </i> a SXSW-premier
                                feature film written by and starring Suzanne Vega, <i>John Goodenough: Changing the World
                                </i> documentary short, <i>Hot Science Cool Talks </i>web series, Indeed’s Resume TV spot, UT Austin
                                Anthem TV spot, and <i>Sing That One to Me </i>music video by Ben Dickey.
                            </p>
                        </ListItem>
                    </List>
                    <Typography variant='h5' textAlign='left' alignItems='center' padding='.5em'>
                        <b>Production Intern </b>| Detour Film Production | Austin, TX | January 2019-April 2019
                    </Typography>
                    <Typography variant='subtitle2' textAlign='left' alignItems='center' padding='.5em'>
                        Selected into a coveted internship, managing
                        diverse projects for the production company of Richard Linklater.
                    </Typography>
                    <List >
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Gained expertise in script writing,
                                </b> reviewed screenplays sent from agencies, and coordinated 20-year anniversary Q&amp;A of Mike Judge’s
                                <i> Office Space</i>.
                            </p>
                        </ListItem>
                    </List>
                    <Typography variant='h5' textAlign='left' alignItems='center' padding='.5em'>
                        <b>Freelance Producer </b>| Jacob Moore Productions | Austin, TX | May 2018-December 2018
                    </Typography>
                    <Typography variant='subtitle2' textAlign='left' alignItems='center' padding='.5em'>
                        Captured, managed, and executed a variety of
                        diverse production projects, roles, and initiatives.
                    </Typography>
                    <List >
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Served as Producer</b> for EthicsDaily.com web short and <i>My Dinner With Werner </i> which has
                                screened at 50+ film festivals which included four Oscar-Qualifying festivals with 40 nominations
                                and 30 awards.
                            </p>
                        </ListItem>
                        <ListItem sx={{ fontSize: 12 }}>
                            <p>
                                <b>• Selected as Production Assistant</b> for <i>The Confession Killer </i> Netflix Series.
                            </p>
                        </ListItem>
                    </List>
                </Box>
            </Grid>
        </>
    );
}

export default ExperienceBody;