/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2024-04-13 11:11:51
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2024-04-13 11:11:58
 * @FilePath: /blog-code/node/eventLoop/setTimeout和setImmediate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});