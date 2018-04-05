import {reqUrl,CONTENT_TYPE} from "../../StaticStrings/constValue";
import {getQueryStr} from "../../utils/util";

const header = new Headers();
header.append('Content-type',CONTENT_TYPE);

export class Query {
    constructor(prefix, baseUrl = ''){
        this.prefix = prefix;
        if(!prefix.endsWith('/')){
            this.prefix = prefix + '/';
        }
        if(prefix.startsWith('/')){
            this.prefix = prefix.slice(1);
        }

        if(typeof baseUrl !== 'string'){
            throw new Error('invalid baseUrl');
        }

        this.baseUrl = baseUrl;
        if(!this.baseUrl.endsWith('/')){
            this.baseUrl += '/';
        }
    }

    _urlGenerator(method) {
        return this.baseUrl + this.prefix + method;
    }

    get(api, data){
        let url = this._urlGenerator(api);
        url = getQueryStr(url,data);

        return this._requestHandler('GET',url,{});
    }

    post(api, data) {
        let url = this._urlGenerator(api);
        let body = Object.keys(data).map(key=>`${key}=${data[key]}`).join('&');

        this._requestHandler('POST',url,{body:body});
    }

    _requestHandler(method,url,body) {
        return fetch(url,{
            method,
            // headers: header,
            ...body,
        }).then(this._responseFilter).catch(e=>{
            console.log(e);
        })
    }

    _responseFilter = res =>{
        if(res.status !== 200){
            return Promise.reject(res);
        }
        return res.json().then(data=>{
            console.log(data);
            return data;
        })
    }

}