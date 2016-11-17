var mysql = require('mysql');
var $conf = require('../conf/conf');
var $sql = require('./userSqlMapping');
var $util = require('../util/util')

var pool = mysql.createPool($conf.mysql);


module.exports = {
	query : function(req,res,next){
		pool.getConnection(function(err,conn){
			var param = req.query || req.params;
			conn.query($sql.queryById,[req.params.userID],function(err,ret){
				if(ret){
					res.render('user',{result :ret[0]});
					conn.release();
				}
			});
		});
	}

}
