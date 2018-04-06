import {Query} from '../Entities/Query/Query';
import {formatTimeString} from "../utils/util";

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
    t = formatTimeString(t);

    return movieQuery.get('LocationMovies.api',{locationId,t});
}

// 详情页
let detailQuery = new Query('Service/callback.mi/movie');
export const getMovieDetailInfo = (params)=>{
    let {movieId,locationId,t} = params;
    t = formatTimeString(t);
    locationId = locationId || 290;

    return detailQuery.get('Detail.api',{movieId,locationId,t});
};

// 时光top100榜单
let billboardQuery = new Query('Service/callback.mi/TopList');
export const getTop100Info = (params)=>{
    let {t,pageIndex} = params;
    t = formatTimeString(t);
    let type =1,
        topListId = 2065,
        pageSubAreaId = 2065;
    return billboardQuery.get('TopListDetailsByRecommend.api',{t,pageIndex,type,topListId,pageSubAreaId});
};
