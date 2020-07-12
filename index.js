const { Pool } = require("pg"); 
require('dotenv').config();

const pool = new Pool();

(async ()=>{
    const result = await pool.query('SELECT name from names');
    for (const row of result.rows) {
        console.log(row.name)
    }
})();