var express = require('express');
var router = express.Router();
var pg = require('pg');
var cors = require('cors');

router.use(cors());

const client = new pg.Client('postgresql://localhost:5432/giffy_jane');
client.connect();
client.on('error', err => console.error(err));


router.post('/add', function(req, res){
  client.query(`
    INSERT INTO gif (strain_id, giphy_id, downsized_large_url) VALUES($1, $2, $3)`, [req.query.strain_id, req.query.giphy_id, req.query.downsized_large_url]
  )
    .then(() => res.sendStatus(200))
    .catch(console.error);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  client.query('SELECT * FROM strain;')
    // .then(console.log)
    .then(results => res.json({
      data: results.rows
    }))
    .catch(console.error);
});

module.exports = router;


// strain_id | giphy_id | downsized_large_url