'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// copy content to clipboard
function excopy(data, callback) {
    if (document.execCommand('copy')) {
        try {
            var input = document.createElement('input');
            input.setAttribute('value', String(data));
            document.body.appendChild(input);
            input.select();
            var c = document.execCommand('copy');
            input.remove();
            if (c) {
                console.log('copy successed');
                callback && callback();
            }
            else {
                console.error('copy failed');
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

function geuuid() {
    try {
        var d_1 = Number(new Date());
        if (window.performance && typeof window.performance.now === 'function') {
            d_1 += performance.now();
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d_1 + Math.random() * 16) % 16 | 0;
            d_1 = Math.floor(d_1 / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
    catch (error) {
        throw new Error(error);
    }
}

exports.excopy = excopy;
exports.geuuid = geuuid;
