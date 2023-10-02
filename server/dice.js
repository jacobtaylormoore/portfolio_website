const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

/* This function takes in two integers and returns a random number 
between min and max inclusive. It is described on the MDN page here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

/* This function receives two strings - numDiceStr and 
numFacesStr. These are string values representing the number
of dice needed and the number of faces for each die. This function
converts these numbers to int and then produces the correct number 
of dice with a pseudorandom number between 1 and numFaces. */
function diceRoll(numDice, numFaces) {
    /* Return num is actually a string to be sent in JSON format*/
    let returnNum;
    /* Error checking input. Must be numbers. */
    if (isNaN(numDice) || isNaN(numFaces)) {
        returnNum = '-1';
    } else {
        let tempNum = getRandomInt(1, numFaces);
        returnNum = tempNum.toString();
        for (let i = 1; i < numDice; i++) {
            let tempNum = getRandomInt(1, numFaces);
            returnNum += ',' + tempNum.toString();
        }
    }
    return returnNum;
}

app.use(express.json())

/* I am still very confused what the hell cors does. HMU if you're having issues. I finally found this solution here: 
https://expressjs.com/en/resources/middleware/cors.html#configuring-cors */
app.use(cors())

app.post('/dice', (req, res) => {


    const { numDice } = req.body;
    const { numFaces } = req.body;

    /* If no numbers are sent, there is an error */
    if (!numDice) {
        res.status(418).send({ message: 'No numbers sent.' })
    }

    let returnNum = diceRoll(numDice, numFaces);

    /* Error if input was not int */
    if (returnNum == "-1") {
        res.status(418).send({ message: 'Input must be integers.' })
    }

    /* Return value is JSON format, a string of random int values as one string
    separated by commas and no spaces eg {"numbers": "13,2,4"}*/
    res.send({
        numbers: `${returnNum}`
    });

});

app.listen(
    PORT,
    () => console.log(`server on http://localhost:${PORT}`)
)