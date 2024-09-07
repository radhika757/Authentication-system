// const express = require('express'); This is used in CommonJS
import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from './db/db.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

// Basic route for the root URL
app.get('/', (req, res) => {
    res.send('This is my nodejs server');
})

//start the server 
app.listen(PORT, () => {
    console.log('server is running on 3000');
})