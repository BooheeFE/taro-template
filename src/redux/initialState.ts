/*
 * @Desc: reudx intial state
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */

import { getQueryString } from '@/utils';

const getToken = () => {
  let token: string | null = '';
  token = getQueryString('token');
  if (process.env.NODE_ENV === 'development') {
    token = token || 'bUofnVD979pZXYJbZmB47BdLagznEyiN';
  }

  return token;
};


const userIntitalState = {
  token: getToken()
};

export { userIntitalState }; 
