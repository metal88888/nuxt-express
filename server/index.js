require('dotenv').config();
import express from 'express';
import { Nuxt, Builder } from 'nuxt';
import bodyParser from 'body-parser';
import session from 'express-session';
import User from './api/users/model';

import api from './api';

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: '@23123@#214352435ASDSA@3fff@',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


app.use('/api', api);


let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');


const nuxt = new Nuxt(config);


if (config.dev)
  new Builder(nuxt).build();


const startApp = async () => {

    session.Session.prototype.info = {
        siteName: 'My Awesome Site',
        siteDescription: 'My Description on the site',
    };

    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host, ()=>{
        console.info('> Server listening on ' + host + ':' + port);
    });
};

startApp();
