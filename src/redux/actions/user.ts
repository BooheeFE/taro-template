/*
 * @Desc: user redux action
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */

import { createActions } from 'redux-actions';
import { USER_TOKEN } from '../actionTypes';

export default createActions({
  [USER_TOKEN]: state => {
    return state;
  }
});
