/*
* @Author: win7
* @Date:   2019-06-12 10:44:44
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 14:12:48
*/
var fs = require('fs');
var path = require('path');
var root = path.join(__dirname);
var plugins = fs.readdirSync(root).filter(function(plugin){
    return plugin != 'index.js'
});

function install(req, res){
    for (var i in plugins) {
        const installPlugin = require(`./${plugins[i]}`);
        installPlugin(req, res);
    }
}

module.exports = install