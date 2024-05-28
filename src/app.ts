import express, { Express , Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

// Create an Express application
const app: Express = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init database

// init routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        "message": "Hello world"
    });
})

// handling error

export default app;