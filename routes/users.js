var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');




/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/:userID',function(req,res,next){
		userDao.query(req,res,next);
});



module.exports = router;
