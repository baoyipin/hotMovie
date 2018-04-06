export function getQueryStr(url,params) {
    return url + '?' + Object.keys(params).map(key=>`${key}=${params[key]}`).join('&');
}

export function formatTimeString(timeStamp) {
    let t = new Date(timeStamp);
    return `${t.getFullYear()}${t.getMonth()+1}${t.getDate()}${t.getHours()}${t.getMinutes()}`;
}
//hello world