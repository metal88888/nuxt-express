import { Nuxt, Builder } from 'nuxt';
import app from './app';
import api from './api';
import db from './db';


/*===================================================================
 * Config host & port
 *==================================================================*/
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);
app.set('host', host);



/*===================================================================
 * Try connecting to database
 *==================================================================*/
db
.authenticate()
.then(() => {
  console.log('Database connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
  process.exit(1);
});



/*===================================================================
 * Setup API
 *==================================================================*/
app.use('/api', api);



/*===================================================================
 * Setup NUXT
 *==================================================================*/
let config = require('../../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');
config.srcDir = "src/";
const nuxt = new Nuxt(config);

if (config.dev)
  new Builder(nuxt).build();

app.use(nuxt.render);



/*===================================================================
 * Start App
 *==================================================================*/
app.listen(port, host, () => {
  console.log('> Server listening on ' + host + ':' + port);
});
