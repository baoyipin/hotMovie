import {Query} from '../Entities/Query/Query';

// 首页
let movieQuery =  new Query('Service/callback.mi/Showtime');

// 热门电影
/**
 *
 * @param params locationId:位置，不传默认290，即北京；t时间：传时间戳
 * @returns {*}
 */
export const getHotMovieInfo = (params)=>{
    let {locationId,t} = params;
    locationId = locationId || 290;// 290代表北京;
    t = new Date(t);
    t = `${t.getFullYear()}${t.getMonth()+1}${t.getDate()}${t.getHours()}${t.getMinutes()}`

    return movieQuery.get('LocationMovies.api',{locationId,t});
}
