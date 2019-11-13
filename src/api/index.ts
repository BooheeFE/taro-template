/*
 * @Desc: api入口文件
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */


import httpServer from '@/tools/http-server';
import pConfig from '@/pConfig';

import test1 from './test';

const project = {
  test1: {
    baseURL: pConfig.TEST_HOST1
  }
};

const actions = {
  http(opt) {
    const { pName, method, api, data } = opt;
    const { baseURL } = project[pName];
    const url = baseURL + api;
    return httpServer({ method: method, url: url, data: data }).then(res => {
      return res;
    });
  }
};

export default { ...actions, ...test1 };
