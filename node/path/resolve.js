/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-09-16 15:52:13
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-09-16 15:57:02
 * @FilePath: /blog-code/node/resolve.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

console.log(path.resolve('/a/b', 'c/d'));