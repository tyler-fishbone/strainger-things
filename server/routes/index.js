var express = require('express');
var router = express.Router();
var pg = require('pg');
var cors = require('cors');

router.use(cors());
const client = new pg.Client('postgresql://localhost:5432/giffy_jane');
client.connect();
client.on('error', err => console.error(err));

/* GET Specific Strain */
router.get('/strainDetail/:id', function(req, res) {
  client.query('SELECT * FROM strain WHERE strain_id=$1', [req.params.id])
    .then(results => res.json({
      data: results.rows[0]
    }))
    .catch(console.error);
});

/* GET Gifs Tagged to Specific Strain */
router.get('/taggedGifs/:id', function(req, res) {
  client.query('SELECT * FROM gif WHERE strain_id=$1', [req.params.id])
    .then(results => res.json({
      data: results.rows
    }))
    .catch(console.error);
});

/* POST New Gif To Strain */ 
router.post('/add', function(req, res){
  client.query(`
    INSERT INTO gif (strain_id, giphy_id, downsized_large_url, search_tag) VALUES($1, $2, $3, $4)`, [req.body.strain_id, req.body.giphy_id, req.body.downsized_large_url, req.body.search_tag])
    .then(() => res.sendStatus(200))
    .catch(console.error);
});

/* GET Home Page. */
router.get('/', function(req, res) {
  client.query('SELECT * FROM strain;')
    .then(results => res.json({
      data: results.rows
    }))
    .catch(console.error);
});

module.exports = router;


// strain_id | giphy_id | downsized_large_url



// router.post('/add', function(req, res){
//   client.query(`
//     INSERT INTO gif (strain_id, giphy_id, downsized_large_url) VALUES($1, $2, $3)`, [req.query.strain_id, req.query.giphy_id, req.query.downsized_large_url]
//   )
//     .then(() => res.sendStatus(200))
//     .catch(console.error);
// });