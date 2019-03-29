const data = require('@core/data');
const dic = require(`@core/storage/lang_${ data.get('lang') }`);

module.exports = translate;

function translate (...keys) {
    var result = '';

    keys.forEach(function (key) {
        result += (dic[key] === undefined)
            ? key : dic[key];
    });

    return result;
}

translate.array = function (...keys) {
    var result = [];
    keys.forEach(key => result.push(this(key)) );
    return result;
}

translate.split = function (separator) {
    var self = this;
    
    return function (...keys) {
        return self.array(...keys).join(separator);
    };
}