/*
 * @Desc: test 相关api接口
 * @Author: simbawu
 * @Date: 2019-11-13 17:07:51
 * @LastEditors: simbawu
 */


export default {
  getHotFoodList(params) {
    return this.http({
      pName: 'test1',
      method: 'GET',
      api: 'api/v2/eatings/hot.json',
      data: params
    }).then(res => {
      return res;
    });
  }
};
