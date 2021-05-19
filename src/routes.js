const express = require('express');
const routes = express.Router();

routes.get('/teste', (req, res) => {
    console.log(req);
    res.send("oi");
});

module.exports = routes;