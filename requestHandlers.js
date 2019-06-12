/*
* @Author: win7
* @Date:   2019-04-23 16:27:53
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 14:39:15
*/

// 处理url请求
var fs = require('fs');
var webshot = require('webshot');
var router = require('./router');
var md5 = require('md5-node');
var webshotService = require('./webshot');

/*
    [
        'screen_width' => 750,
        'screen_height' => 1334,
        'shot_width' => 750,
        'shot_height' => 'all', //all 高度按照所有尺寸 //body 按照body高度 //window 单页
        'delay' => 0,
        'type' => 'jpeg',
        'quality' => 75,
        'white' => true
    ]
*/

function image(res, req) {
    req.params().then( params => {
        var filePath = __dirname + '/images/'+ md5(JSON.stringify(params)) + '.' + params.type;

        fs.exists(filePath, function(exists){
            if(exists) return res.sendStream(filePath);

            var options = webshotService.optionResource.call(params);

            webshot(params.url, filePath, options, function(err) {
                if(err){
                    res.sendError(10001, '图片生成失败, 地址可能无效');
                }else{
                    res.sendStream(filePath);
                }
            });
        })
    })
}

exports.image = image;