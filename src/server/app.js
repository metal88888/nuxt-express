import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

/*===================================================================
 * Create app.
 *==================================================================*/
const app = express();


/*===================================================================
 * Setup plugins.
 *==================================================================*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: "lyn@m is awesome !",
    cookie: { maxAge: 60000 },
}));


/*===================================================================
 * Export app for others use
 *==================================================================*/
export default app;