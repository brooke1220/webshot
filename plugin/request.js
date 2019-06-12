/*
* @Author: win7
* @Date:   2019-06-12 10:46:27
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 14:22:27
*/
var querystring = require('querystring');

function params(){
    return new Promise(resolve => {
        let bufferArray = []  // 用于存储data事件获取的Buffer数据。
        this.on('data', (buffer) => {
            bufferArray.push(buffer)  // 将Buffer数据存储在数组中。
        })

        this.on('end', () => {
            var buffer = Buffer.concat(bufferArray)
            var post = querystring.parse(buffer.toString())

            resolve(post);
        })
    });
}

function install(request, response)
{
    request.params = params
}

module.exports = install