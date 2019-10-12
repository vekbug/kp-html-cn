/**
 * common util
 */
var Util = Util || {};

Util.getQueryString = function (url) {
    if (url.split('?').length <= 1) {
        return {};
    }
    var queryString = url.split('?')[1];
    if (!queryString) return {};
    queryString = queryString.split('&');
    var queries = {};
    for (var i = 0, len = queryString.length; i < len; i++) {
        var tmp = queryString[i].split('=');
        queries['' + tmp[0]] = tmp[1];
    }
    return queries;
}