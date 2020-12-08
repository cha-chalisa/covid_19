var express = require('express');
var router = express.Router();
const db = require('../database/database')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('index', { resultData: result.rows });
});

router.get('/country',async function(req, res, next) {
  const result = await db.getall();
  console.log(result.rows);
  res.render('country', { resultData: result.rows });
});

router.get('/home',async function(req, res, next) {
  const result = await db.getall();
  console.log(result.rows);
  res.render('home', { resultData: result.rows });
});

router.get('/world',async function(req, res, next) {
  const result = await db.getworld();
  console.log(result.rows);
  res.render('world', { resultData: result.rows });
});





module.exports = router;
