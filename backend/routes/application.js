const express = require('express');
const url = require('url');
const router = express.Router();
const connection = require('../database/database');


router.get('/', function(req, res, next) {
  const query = url.parse(req.url, true).query;
  const email = query.email;
  // pool.query('SELECT * FROM applications WHERE email = $1', [email], (err, result) => {
  //   if (err) {
  //     console.log(err.stack)
  //   } else {
  //     res.send(result.rows);
  //   }
  // })
  connection.then(conn => {
    conn.getRepository('applications').find({
      where: {
        email: email
      }
    }).then(result => {
      res.send(result);
    }).catch(err => {
      next(err);
    })
  })
});

router.post('/', (req, res, next) => {
  const { title, company, location, link, status, email } = req.body;
  const appDetails = {
    title,
    company,
    location,
    link, 
    status,
    email,
    creation_date: new Date()
  }
  connection.then(async (conn) => {
    const result = await conn.getRepository('applications').save(appDetails);

    res.send(result);
  });
})

module.exports = router;
