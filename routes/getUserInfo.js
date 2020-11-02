var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('sample');
// });

/* GET users listing. */
router.get('/getUserInfo', function(req, res, next) {
    res.send('CALLED GET USER INFO SUCCESS');
  });


module.exports = router;
