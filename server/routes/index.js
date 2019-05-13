import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'server/react/app';
import template from 'server/views/template';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const appString = renderToString(<App/>);

    res.send(template({
        body: appString,
        title: 'SSR Hello World',
        id : 1
    }));
});

module.exports = router;
