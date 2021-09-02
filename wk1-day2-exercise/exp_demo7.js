var express = require('express');
var app = express();

// Simple request time logger


// This function call tells that more processing is
// required for the current request and is in the next middleware
//function/route handler.
app.use(function (req, res, next) {
    console.log(`a new request received at ${Date.now()}`);

    next();
})

app.get('/home', (req, res) => {
    console.log("Homie!");

    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);


