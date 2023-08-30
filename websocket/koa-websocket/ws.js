/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-08-20 17:57:01
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-08-21 21:54:52
 * @FilePath: /koa-websocket/ws.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const WebSocket = require('ws');

class Ws {
  constructor() {
    this.online = 0;
    this.wss = WebSocket.Server //默认实例
    this.ws = {};
  }
  
  // 监听客户端消息
  onMessage = (message) => {
    console.info('接收客户端消息');
    
    this.ws.send(message.toString());
  }

  
  onClose=()=> {
  }

 
  onError=(err)=> {
    console.log('[WebSocket] error: ' + err);
  };

  init(server) {
      // 创建实例
    this.wss = new WebSocket.Server({ server }); 
    this.wss.on('connection', (ws, req) => {
      this.ws = ws;
      ws.on('message', this.onMessage);
      ws.on('close', this.onClose);
      ws.on('error', this.onError);
    })
  } 

  

}


module.exports = Ws;
