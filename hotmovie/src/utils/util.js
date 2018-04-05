export function getQueryStr(url,params) {
    return url + '?' + Object.keys(params).map(key=>`${key}=${params[key]}`).join('&');
}
