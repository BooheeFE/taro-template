/*
 * @Desc: reudx middlewares
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */

import { applyMiddleware } from 'redux';

let middleWare: any = [];
if (process.env.NODE_ENV !== 'production') {
  middleWare.push(require('redux-logger').createLogger());
}

export default applyMiddleware(...middleWare);
