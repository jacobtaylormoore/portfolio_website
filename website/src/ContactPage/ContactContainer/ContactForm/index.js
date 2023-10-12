import './index.css';

// import * as React from 'react';
import React, { useState } from 'react';
import { Form } from "react-router-dom";

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

function ContactForm() {

    // Set all fields necessary for twilio api
    const [sender, setSender] = React.useState('');
    const [recipient, setRecipient] = React.useState('jacobtaylormoore@gmail.com');
    const [message, setMessage] = React.useState('');
    const [senderName, setSenderName] = React.useState('');
    const [subject, setSubject] = React.useState('Email from my website');
    const [recipientName, setRecipientName] = React.useState('Jake');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { sender, recipient, message, senderName, subject, recipientName };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(contact);

        var requestOptions = {
            method: 'GET',
            mode: 'no-cors',
            headers: myHeaders,
            redirect: 'follow',
        };

        const link = `https://formsubmit.co/el/caxona/?name=` + JSON.stringify(contact.senderName) + `&?email=` + JSON.stringify(contact.sender) + `&?message=` + JSON.stringify(contact.message)

        // console.log(requestOptions);
        // console.log(raw);
        // console.log('Hello');

        fetch(link, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (
        <div id="ContactForm">

            <Box component='form' onSubmit={handleSubmit}>
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
                        <Button type="submit" variant="contained" alignItems='center' onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Grid>
            </Box>

        </div>
    );
}


export default ContactForm;