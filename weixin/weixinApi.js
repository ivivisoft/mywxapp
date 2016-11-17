var request = require('request');
var $conf = require('../conf/conf');




module.exports = {
    refreshToken : function(){
        request($conf.weixin.tokenURL+'&appid='+$conf.weixin.appID+'&secret='+$conf.weixin.appSecret,function(err,res,body){
            if(!err && res.statusCode == 200){
                console.log('Before get token,the token\'s value is '+token);
                var data = JSON.parse(body);
                token = data.access_token;
                console.log('After get token,the token\'s value changes to '+token);
            }
        });
    },
    getMenuList : function (req,resp,next) {
        request($conf.weixin.menuGetURL+token,function (err,res,body) {
            if(!err && res.statusCode == 200){
                var data = JSON.parse(body);
                console.log(data.menu)
                resp.render('menuAdmin',{data : data.menu});
            }
        });
    },
    menuCreate : function (req,resp,next) {
        var param = req.body.content;
        //param = JSON.parse(param);
        console.log(param);
        request.post({url :$conf.weixin.menuCreateURL+token,formData: param},function (err,res,body) {
            if(!err && res.statusCode == 200){
                console.log(body);
                //resp.render('menuAdmin',{result : 'success'});
            }
        });
    }

}