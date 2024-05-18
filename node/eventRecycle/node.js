/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-09-19 21:15:03
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-09-19 21:19:32
 * @FilePath: /blog-code/node/eventRecycle/node.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
setTimeout(() => { // 新的事件循环的起点
    console.log('1'); 
}, 0);
setImmediate( () => {
    console.log('setImmediate 1');
});
/// 将会在 poll 阶段执行
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log('read file success');
});
/// 该部分将会在首次事件循环中执行
Promise.resolve().then(()=>{
    console.log('poll callback');
});
// 首次事件循环执行
console.log('2');

