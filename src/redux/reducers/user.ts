/*
 * @Desc: user redux reducer
 * @Author: simbawu
 * @LastEditors: simbawu
 * @Date: 2019-04-09 17:30:25
 * @LastEditTime: 2019-11-13 20:28:52
 */

import { handleActions } from 'redux-actions';
import { USER_TOKEN } from '../actionTypes';
import { userIntitalState } from '../initialState';

export default handleActions(
  {
    [USER_TOKEN]: (state, action) => {
      return {
        ...state,
        token: action.payload
      };
    }
  },
  userIntitalState
);
