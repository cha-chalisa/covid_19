const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'chalisa13_13',
    port: '5432',

})

async function getdata(){
    const sql = `select "Country/Region" as country , "Province/State" as province,"3/23/20" as death
    from covid19_confirmed_csv`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}

module.exports={
    getdata}