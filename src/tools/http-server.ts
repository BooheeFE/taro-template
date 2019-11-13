/*
 * @Desc: 网络请求封装
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */

import Taro from '@tarojs/taro';
import { store } from '../redux/store';

const { token } = store.getState().user;

const DEFAULT_REQUEST_OPTIONS = {
  url: '',
  data: {},
  header: {
    'Content-Type': 'application/json',
    token: token,
    Client: 'mina'
  },
  method: 'GET',
  dataType: 'json'
};

interface IOptions {
  url: string;
  data: Object;
  header: Object;
  method:
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT';
  dataType: string;
}

const httpServer = opt => {
  let options: IOptions = { ...DEFAULT_REQUEST_OPTIONS, ...opt };
  const { url, data, header, method, dataType } = options;
  let timer: any = null;
  timer = setTimeout(() => {
    Taro.showLoading({
      title: 'loading'
    });
  }, 500);

  return Taro.request({
    url,
    data,
    header,
    method,
    dataType,
    complete: () => {
      Taro.hideLoading();
    }
  })
    .then(res => {
      clearTimeout(timer);
      return res.data;
    })
    .catch(err => {
      clearTimeout(timer);
      console.log(err);
    });
};

export default httpServer;
