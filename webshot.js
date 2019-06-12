/*
* @Author: win7
* @Date:   2019-06-12 09:43:46
* @Last Modified by:   win7
* @Last Modified time: 2019-06-12 09:44:50
*/
function optionResource(){
    var options = {
        screenSize: {
            width: this.screen_width || 375,
            height: this.screen_height || 667
        },
        shotSize: {
            width: this.shot_width || 375,
            height: this.shot_height || 'all'
        },
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g',
        defaultWhiteBackground: this.white || true,
        renderDelay: this.delay || 0,
        streamType: this.type || 'jpeg',
        quality: this.quality || 75
    }

    options.defaultWhiteBackground = parseInt(options.defaultWhiteBackground) ? true : false;
    options.takeShotOnCallback = parseInt(options.takeShotOnCallback) ? true : false;

    return options;
}

exports.optionResource = optionResource