/*
* @Author: win7
* @Date:   2019-04-23 16:23:58
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 09:42:50
*/
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

// 保存url处理方法
var handle = {};

handle['/image'] = requestHandlers.image;

// 启动http server
server.start(router.route, handle);