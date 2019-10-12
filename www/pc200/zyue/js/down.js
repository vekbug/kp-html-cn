function down(url) {

    window.location.replace(url);
}

var browser = {
    versions: function() {
        var u = navigator.userAgent.toLowerCase(),
            app = navigator.appVersion;
        return {
            trident: u.indexOf('trident') > -1,
            presto: u.indexOf('presto') > -1,
            webKit: u.indexOf('applewebkit') > -1,
            gecko: u.indexOf('gecko') > -1 && u.indexOf('html') == -1,
            mobile: !!u.match(/applewebkit.*mobile.*/) || !!u.match(/applewebkit/),
            ios: !!u.match(/\(i[^;]+;( U;)? cpu.+mac os x/),
            android: u.indexOf('android') > -1 || u.indexOf('linux') > -1,
            iPhone: u.indexOf('iphone') > -1 || u.indexOf('mac') > -1,
            iPad: u.indexOf('ipad') > -1,
            symbian: u.indexOf('symbian') > -1 || u.indexOf('Symbian') > -1,
            webApp: u.indexOf('safari') == -1
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    //alert("ios");
    //window.location.href=iosUrl;
} else if (browser.versions.android) {

} else if (browser.versions.symbian) {
    window.location.href = javaUrl;
}