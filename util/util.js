module.exports = {
	jsonWrite : function(res,ret){
		if (ret === 'undefined') {
		res.json({
			code : '1',
			msg : 'deed fail',
			data :{}
			});
		}else{
			res.json(ret);
		}
	}
}
