var express = require('express');
var router = express.Router();

var $weiXin = require('../weixin/weixinApi');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/getMenuList',function (req,res,next) {
  $weiXin.getMenuList(req,res,next);
});

router.post('/createMenu',function (req,res,next) {
  $weiXin.menuCreate(req,res,next);
});



module.exports = router;
