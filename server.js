/*
* @Author: win7
* @Date:   2019-04-23 16:28:01
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 13:55:15
*/

var http = require('http');
var url = require('url');
var config = require('./config');
var installPlugin = require('./plugin/index');

// 创建http server
function start(route, handle) {
    // 处理request请求
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;

        installPlugin(req, res)

        route(handle, pathname, res, req);
    }

    var { host, port } = config.build

    http.createServer(onRequest).listen(port, host);
    console.log('Server has started and listening on ' + host + ':' + port);
}

exports.start = start;