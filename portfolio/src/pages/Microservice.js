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


function Microservice() {
    const [numDice, setNumDice] = React.useState('3');
    const [numFaces, setNumFaces] = React.useState('20');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nums = { numDice, numFaces };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(nums);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/dice", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <Navigation />
            <Grid container direction='column' alignItems='center' style={{ paddingTop: '10vh' }}>
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant='h2' >
                        Microservice Test
                    </Typography>
                </Box>
            </Grid>
            <div className="microservice">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Number of Dice</label>
                        <input
                            type="text"
                            required
                            value={numDice}
                            onChange={(e) => setNumDice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Number of Faces</label>
                        <input
                            type="text"
                            required
                            value={numFaces}
                            onChange={(e) => setNumFaces(e.target.value)}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Microservice;