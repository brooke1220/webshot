/*
* @Author: win7
* @Date:   2019-04-23 16:27:57
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 14:22:17
*/
//文件缓存列表
var cache = {};
//配置开启缓存
var cache_config = false;

function route(handle, pathname, res, req) {
    console.log('About to route a request for ' + pathname);

    var filePath = false;
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res, req);
    } else {
        res.serveStatic(cache, req.url);
    }
}

exports.route = route;