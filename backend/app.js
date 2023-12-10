const app = require('express')();
const { v4 } = require('uuid');


const setupApp = () => {

    app.get('/', (req, res) => {
        res.end('Hello World');
    });

    app.get('/api', (req, res) => {
        const path = `/api/item/${v4()}`;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
    });


    app.get('/api/item/:slug', (req, res) => {
        const { slug } = req.params;
        res.end(`Item: ${slug}`);
    });

    app.get('/api/author', (req, res) => {
        res.json({
            name: 'John Doe'
        });
    });

    return app;
}

module.exports = setupApp;