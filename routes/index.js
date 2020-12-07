var express = require('express');
var router = express.Router();
const db = require('../database/database')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const result = await db.getdata();
  // console.log(result.rows);
  res.render('index', { resultData: result.rows });
});

module.exports = router;
