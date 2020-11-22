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

function loadscript(src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function () { return resolve(script); };
        script.onerror = function () { return reject(new Error(src + " fail to load")); };
        document.head.appendChild(script);
    });
}

function thsplite(number, seperator) {
    if (seperator === void 0) { seperator = ','; }
    var value = number;
    if (typeof value === 'number') {
        value = String(value);
    }
    // [0] origin value [1] +/- [2] int [3] .decimal [4] decimal value
    var cells = value.match(/^(-?)(\d*)(\.(\d+))?$/);
    if (!cells || value === '-') {
        return value;
    }
    var negative = cells[1];
    var int = cells[2] || '0';
    var decimal = cells[4] || '';
    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
    if (decimal === '') {
        return "" + negative + int;
    }
    return "" + negative + int + "." + decimal;
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

export { excopy, geuuid, loadscript, thsplite };
