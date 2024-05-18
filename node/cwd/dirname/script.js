/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2024-04-14 16:15:53
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2024-04-21 20:08:02
 * @FilePath: /blog-code/node/cwd/dirname/script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
console.log(process.cwd())
// C:\Project
console.log(__dirname)
// C:\Project
console.log(__dirname === process.cwd())
// true