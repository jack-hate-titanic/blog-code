/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-08-19 19:40:08
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-08-20 19:22:22
 * @FilePath: /websocket/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });
wss.on('connection', (ws) => {
  console.log('链接成功');
  ws.on('message', (msg) => { 
    console.log(msg);
    ws.send(msg);
  })
})