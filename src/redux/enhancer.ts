/*
 * @Desc: redux enhancer
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */


import { compose } from 'redux';

import middleWares from './middlewares';

let composeEnhancers;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
} else {
  composeEnhancers = compose;
}

export default composeEnhancers(middleWares);
