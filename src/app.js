import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';

// Creating an instance of the Express application
const app = express();

// Setting up CORS middleware with options to allow requests from specified origins and include credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static("public"))
app.use(cookieParser())
app.use('/', routes)

export { app }; // Exporting the Express application instance

