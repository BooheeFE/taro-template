/*
 * @Desc: 小工具集合
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */

import Taro from '@tarojs/taro';

/**
 * 获取URL参数值
 * @method getQueryString
 * @param name 参数名.
 * @param url 当前页面URL.
 * @return {string} 返回参数值.
 */
export const getQueryString = (name: string, url?: string): string | null => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

/**
 * 格式化时间
 * @method dateFormat
 * @param date 需格式化的时间.
 * @param fmt 指定格式化的格式.
 * @return 返回格式化后的时间.
 */
export const dateFormat = (date: Date, fmt: string): string => {
  /**
   * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   * 例子：
   * dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss.S') ==> 2018-07-02 08:09:04.423
   * dateFormat(new Date(), 'yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
   */
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

/**
 * 四舍五入数字精度处理（最后一位小数不会返回0）
 * @method numberToFixed
 * @param number 需处理的数字.
 * @param digits 保留小数位数.
 * @return 返回处理后的数字.
 */
export const numberToFixed = (number: number, digits: number = 0): number => {
  const digit = Math.pow(10, digits);
  const fixedNumber = Math.round(number * digit) / digit;
  return fixedNumber;
};

/**
 * 跳转WebView页面
 * @method gotoWebView
 */
export const gotoWebView = (webViewUrl: string) => {
  if (process.env.TARO_ENV === 'h5') {
    window.location.href = webViewUrl;
  } else {
    webViewUrl = encodeURIComponent(webViewUrl);
    Taro.navigateTo({
      url: `/webview?url=${webViewUrl}`
    });
  }
};
