const express = require('express');
const app = express();

function setupApp() {
    // Your app setup here
    app.get('/api', (req, res) => {
        res.send('Hello from the app!');
    });

    app.get('/api/v1', (req, res) => {
        res.send('api path is working!');
    });


    return app;
}

module.exports = setupApp;
