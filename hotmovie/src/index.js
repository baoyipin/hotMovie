import React, {Component} from "react";
import ReactDOM, {render} from "react-dom";
import './baseStyle/reset.less';

import {getHotMovieInfo} from "./service/movieService";

getHotMovieInfo({locationId:290,t:new Date().getTime()})

render(<div>hello world</div>, window.root);