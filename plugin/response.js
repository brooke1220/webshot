/*
* @Author: win7
* @Date:   2019-06-12 10:50:39
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 14:29:16
*/
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var root = path.join(__dirname + '/../');

function sendError(error_code, error_msg){
    this.writeHead(200, {'Content-Type': 'application/json'});
    this.end(JSON.stringify({ error_code, error_msg }));
}

function sendStream(filepath){
    this.writeHead(200, {'Contet-Type': mime.getType(path.basename(filepath))});
    var stream = fs.readFileSync(filepath);
    this.end(stream);
}

//404错误处理
function send404(){
    this.writeHead(404, {'Content-Type': 'text/plain'});
    this.write('Error 404: Resource not found');
    this.end();
}

//文件数据服务
function sendFile(filePath, fileContents){
    this.writeHead(200, {'Contet-Type': mime.getType(path.basename(filePath))});
    this.end(fileContents || fs.readFileSync(filepath));
}

//静态文件服务
function serveStatic(cache, absPath){
    if(cache[absPath] && cache_config){
        this.sendFile(root + absPath, cache[absPath]);
    }else{
        fs.exists(root + absPath, (exists) => {
            if(exists){
                fs.readFile(root + absPath, (err, data) => {
                    if(err){
                        this.send404();
                    }else{
                        cache[absPath] = data;
                        this.sendFile(root + absPath, data);
                    }
                });
            }else{
                this.send404();
            }
        });
    }
}

function install(request, response)
{
    response.sendError = sendError

    response.sendStream = sendStream

    response.send404 = send404

    response.sendFile = sendFile

    response.serveStatic = serveStatic
}

module.exports = install