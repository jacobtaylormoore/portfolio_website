import * as React from 'react';
import '../index.css';
import '../App.css';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

function Welcome() {
    return (
        <>
            <Box classname="welcome">
                <Typography
                    variant="h1"
                    component="div"
                    sx={{ textAlign: 'center', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Welcome!
                </Typography>
            </Box>
            <Grid container direction='column' alignItems='center' style={{ paddingTop: '5vh' }}>
                <Box sx={{ width: '100%', maxWidth: '85%' }}>
                    <Typography variant='h6' textAlign='center' alignItems='center' padding='2em'>
                        I am an analytical professional currently pursuing my Bachelor’s degree in Computer Science at Oregon State University and offering exceptional knowledge in designing and developing websites and applications.
                    </Typography>
                    <Typography variant='h6' textAlign='center' alignItems='center' padding='2em'>
                        I have knowledge in software development methodologies, numerous coding languages, and I am passionate about working with cross-functional agile teams to develop and test diverse products, tools, and software solutions.
                    </Typography>
                    <Typography variant='h6' textAlign='center' alignItems='center' padding='2em'>
                        I am skilled at implementing software development processes, tools, automation, and best practices to optimize the software development lifecycle and deliver exceptional user experiences. I am also talented at managing software development projects, developing new features, and recommending data-driven architectural enhancements to optimize performance.
                    </Typography>
                    <Typography variant='h6' textAlign='center' alignItems='center' padding='2em'>
                        As an analytical professional, I excel at conducting in-depth data and requirements analysis with expertise in a variety of technical and programming tools, data structures, and algorithms.
                    </Typography>
                    <Typography variant='h6' textAlign='center' alignItems='center' padding='2em'>
                        SELECT TECHNOLOGY & SKILLS:
                    </Typography>
                    <Typography variant='h6' textAlign='center' alignItems='center' padding='1em'>
                        Python | C++ | HTML | CSS | JavaScript | Jinja2 | Flask | SQL | MySQL | MongoDB | MariaDB | Git | GitHub | X86 Assembly/MASM | Database Normalization | Software Development Lifecycle | Project Management | Bug Fixing | Application Development | Data Analysis | Machine Learning | Quality Assurance | Coding Standards | Data Science | Data Parsing | Data Structures
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Welcome;