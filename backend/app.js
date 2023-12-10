const express = require('express');
const app = express();

function setupApp() {
    // Your app setup here
    app.get('/', (req, res) => {
        res.send('Hello from the app!');
    });

    // More routes and middleware...

    return app;
}

module.exports = setupApp;
