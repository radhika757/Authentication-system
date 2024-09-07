// password - password 
// db to listen 5432 

import pkg from 'pg'; // Import entire pg package
const { Pool } = pkg; // Destruct Pool from package

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'authsystem',
    password: 'password',
    port: '5432',
});

//check the db connection 
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error connecting to the database:', err.stack);
    }
    console.log('Connected to the database');
    release(); // release the client back to the pool
})