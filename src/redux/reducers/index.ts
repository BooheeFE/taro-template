/*
 * @Desc: reudx reducer combine
 * @Author: simbawu
 * @LastEditors: simbawu
 * @Date: 2019-04-09 17:30:25
 * @LastEditTime: 2019-11-13 20:32:11
 */

import { combineReducers } from 'redux';
import user from './user';

const combinedReducer = combineReducers({
  user
});

export default combinedReducer;
