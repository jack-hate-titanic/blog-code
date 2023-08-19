/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-07-16 17:02:50
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-07-16 17:04:50
 * @FilePath: /jest/src/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const notifyMessage = (params) => {
  console.log(params);
}


export const getMessage = () => {
  setTimeout(() => {
    const a = {
      b: 10
    };
    notifyMessage(a);
  }, 1000);
}