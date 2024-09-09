// const express = require('express'); This is used in CommonJS
import express from 'express';
import bcrypt, { hash } from 'bcrypt';
import { pool } from './db/db.js';
import cors from 'cors'; // allows cross-origin requests

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' })); //enabling CORS for FE-BE ommunication
app.use(express.json()); // Parse incoming JSON data

// Basic route for the root URL
app.get('/', (req, res) => {
    res.send('This is my nodejs server');
})

//start the server 
app.listen(PORT, () => {
    console.log('server is running on 3000');
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
   
    // hash the password 
    try {
        const saltRounds = 10;
        // bcrypt.hash() is a async function that hashes the password. 
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const query = `
        INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *
        `; // parameterized queries, RETURNING * clause makes sure inserted user data is returned.
        const values = [name, email, hashedPassword];
        const result = await pool.query(query, values);

        res.status(201).json({
            message: 'User registered successfully',
            user: result.rows[0], // return user data without id
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

})