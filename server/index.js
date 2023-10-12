const express = require('express');
const app = express();
// serve up production assets
app.use(express.static('../website/build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'website', 'build', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5001;
console.log('server started on port:', PORT);
app.listen(PORT);