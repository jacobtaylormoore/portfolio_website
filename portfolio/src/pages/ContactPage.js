// React
import * as React from 'react';
// Pages and components
import Navigation from '../components/Navigation';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function ContactPage() {
    const [value, setValue] = React.useState('Controlled');

    const handleClick = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Navigation />
            <Grid container direction='column' alignItems='center' style={{ paddingTop: '10vh' }}>
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant='h2' >
                        Contact Me
                    </Typography>
                </Box>
            </Grid>
            <Box
                onSubmit={handleClick}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '24ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Your Name"
                        placeholder="John Smith"
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Your Email"
                        placeholder="John@email.com"
                        multiline
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Your Message"
                        placeholder="Hello..."
                        multiline
                        rows={12}
                    />
                </div>
                <Button onClick={handleClick} variant="contained">Submit</Button>

            </Box>
        </>
    );
}

export default ContactPage;