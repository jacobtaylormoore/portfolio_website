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

import '../App.css';
import e from 'cors';

// This page accepts input and automatically sends an email to me
function ContactPage() {
    // Set all fields necessary for twilio api
    const [sender, setSender] = React.useState('');
    const [recipient, setRecipient] = React.useState('jacobtaylormoore@gmail.com');
    const [message, setMessage] = React.useState('');
    const [senderName, setSenderName] = React.useState('');
    const [subject, setSubject] = React.useState('Email from my website');
    const [recipientName, setRecipientName] = React.useState('Ted');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { sender, recipient, message, senderName, subject, recipientName };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(contact);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch("http://localhost:8090/api/contact/email/send_email", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <Navigation />
            <Grid container direction='column' alignItems='center' textAlign={'center'} style={{ padding: '1vh' }}>
                <Box sx={{ width: '100%', maxWidth: 10000 }} id="contact">
                    <Typography variant='h2' >
                        Contact Me
                    </Typography>
                </Box>
            </Grid>
            <Grid container direction='column' alignItems='center' style={{ padding: '1vh' }}>
                <Box sx={{ width: '85%', maxWidth: 1300 }}>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <TextField
                                id="outlined-textarea"
                                label="Your Name"
                                fullWidth
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                multiline
                            />
                        </div>
                        <Box padding='.5em'></Box>
                        <div>
                            <TextField
                                id="outlined-textarea"
                                label="Your Email"
                                fullWidth
                                value={sender}
                                onChange={(e) => setSender(e.target.value)}
                                multiline
                            />
                        </div>
                        <Box padding='.5em'></Box>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Your Message"
                                fullWidth
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                                rows={15}
                            />
                        </div>
                        <Grid container direction='column' alignItems='center' style={{ padding: '1vh' }}>
                            <Box sx={{ width: '85%', maxWidth: 1000 }}>
                                <Button type="submit" variant="contained" alignItems='center'>Submit</Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>

        </>
    );
}

export default ContactPage;