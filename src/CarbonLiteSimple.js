import CarbonLite from "./CarbonLite";

const cl = new CarbonLite();
const script = document.currentScript;

if (script) {
    let UrlConfig = {};

    let params = [
        'message',
        'timeout',
        'backgroundColour',
        'messageTimeout',
        'messageColour',
        'messageColourHover',
        'messageBorderColour',
        'messageDropShadowColour',
        'styles',
        'debug'
    ];

    const url = new URL(script.src)
    if (url) {
        params.forEach(param => {
            if (url.searchParams.get(param)) {
                UrlConfig[param] = url.searchParams.get(param);
            }
        });
    }

    cl.init(UrlConfig);
} else {
    cl.init();
}