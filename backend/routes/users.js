var express = require('express');
var router = express.Router();
var pool = require('../database/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW() as now', (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.send(result.rows[0])
    }
  })
});

module.exports = router;
