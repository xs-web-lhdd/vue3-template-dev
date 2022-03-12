/**
 * @description API统一管理
 * @author 凉风有信、
 */

import request from './../utils/request'
export default {
  /**
   * @param {*} params 就是传进去的参数，url 是请求的路径（相当于根路径而言），methods 请求方法，mock 是局部mock，针对这个url的请求而言的（相当于水龙头的小阀门）
   */
   login(params) {
     return request({
      url: '/users/login',
      method: 'post',
      data: params
      // mock: true
     })
   }
 }