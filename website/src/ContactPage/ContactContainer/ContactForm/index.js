import './index.css';

// import * as React from 'react';
import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';




function ContactForm() {

    const form = useRef();
    // Set all fields necessary for twilio api
    const [sender, setSender] = React.useState('');
    const [recipient, setRecipient] = React.useState('jacobtaylormoore@gmail.com');
    const [message, setMessage] = React.useState('');
    const [senderName, setSenderName] = React.useState('');
    const [subject, setSubject] = React.useState('Email from my website');
    const [recipientName, setRecipientName] = React.useState('Jake');
    const PUBLIC_KEY = 'TVUYt6vTSjI_CnHFz';
    const SERVICE_ID = 'contact_service';
    const TEMPLATE_ID = 'contact_form';

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            "sender": sender,
            "message": message,
            "senderName": senderName
        };

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify(contact);

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     // body: raw,
        //     redirect: 'follow',
        // };

        // console.log(requestOptions);
        // console.log(raw);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSender("");
        setMessage("");
        setSenderName("");
        alert("Message delivered");


        // fetch("http://localhost:8090/api/contact/email/send_email", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

    }

    return (
        <div id="ContactForm">
            <Box component='form' ref={form} onSubmit={handleSubmit} >
                <div>
                    <TextField
                        id="senderName"
                        name="senderName"
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
                        id="sender"
                        name="sender"
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
                        id="message"
                        name="message"
                        label="Your Message"
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        multiline
                        rows={15}
                    />
                </div>
                <Grid container direction='column' style={{ padding: '1vh' }}>
                    <Box sx={{ width: '85%', maxWidth: 1000 }}>
                        <Button type="submit" variant="contained" >Submit</Button>
                    </Box>
                </Grid>
            </Box>

        </div>
    );
}


export default ContactForm;