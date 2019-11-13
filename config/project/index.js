/*
 * @Desc: 项目环境配置入口文件
 * @Author: simbawu
 * @Date: 2019-11-13 15:10:37
 * @LastEditors: simbawu
 */

let _config;

switch (NODE_ENV) {
  case 'production':
    _config = require('./production');
    break;
  case 'qa':
    _config = require('./qa');
    break;
  default:
    _config = require('./qa');
    break;
}

const config = _config;

export default config;
