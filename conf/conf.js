//msql configument
module.exports = {
	mysql : {
		host : '192.168.10.181',
		user : 'root',
		password : '123456',
		port : 3306,
		database : 'p2p0308'
	},
	weixin : {
		appID : 'wxfac18bf2f1109f69',
		appSecret : '92b417c7669a588ee10aa82aad7864e0',
		tokenURL : 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential',
		menuGetURL : 'https://api.weixin.qq.com/cgi-bin/menu/get?access_token=',
		menuCreateURL : 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token='
	}
};
