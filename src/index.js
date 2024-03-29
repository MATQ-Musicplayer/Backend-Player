import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDb } from './service/db.service.js';


// Lade Umgebungsvariablen (engl. enviroment variables) aus der .env Datei
dotenv.config();
// Initialisiere express
const app = express();
// Middleware fuer das body-Parsing
app.use(express.json());
// Middleware fuer CROSS-ORIGIN-REQUEST
app.use(cors());

/* -------------ROUTES--------------- */



await connectToDb();
/* ------------------------------------ */

app.listen(process.env.API_PORT, () => {
    console.log(`Server running on http://localhost:${process.env.API_PORT}`);
})