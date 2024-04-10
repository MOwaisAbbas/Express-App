import express from 'express'; 
import cookieParser from 'cookie-parser';
import cors from 'cors'; 

// Creating an instance of the Express application
const app = express(); 

// Setting up CORS middleware with options to allow requests from specified origins and include credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

export {app}; // Exporting the Express application instance
