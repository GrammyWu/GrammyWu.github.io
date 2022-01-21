/*
 * @Author: your name
 * @Date: 2022-01-21 19:49:51
 * @LastEditTime: 2022-01-21 23:20:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /wu/music/utils.js
 */

const log = console.log.bind(console)
// dom 选择器
const e = (sel) => {
  return document.querySelector(sel)
};

// 
// const obj = {
//   key1: 123,
//   key2: 456,
// }

// let key1 = obj.key1
// let key2 = obj.key2
// // 等价于上面写法
// const {key1, key2} = obj