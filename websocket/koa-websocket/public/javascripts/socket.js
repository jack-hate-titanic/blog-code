/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-08-20 18:23:03
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-08-20 18:38:58
 * @FilePath: /koa-websocket/public/javascripts/socket.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Socket {
  /**
   * @description: 初始化实例属性，保存参数
   * 
   */
  constructor(options) {
      this.url = options.url;
      this.callback = options.received;
      this.name = options.name || 'default';
      this.ws = null;
      this.status = null;
      this.pingInterval = null;
      // 心跳检测频率
      this._timeout = 3000;
      this.isHeart = options.isHeart;
      this.isReconnection = options.isReconnection;
  }
  connect(data) {
      this.ws = new WebSocket(this.url);
      // 建立连接
      this.ws.onopen = (e) => {
          this.status = 'open';
          console.log("连接成功", e)
          if(this.isHeart) {
              // 心跳
              this._heartCheck()
          }
          // 给后台发送数据
        if (data !== undefined) {
          return this.ws.send(JSON.stringify({type: 'init'}))
        }
      }
      // 接受服务器返回的信息
      this.ws.onmessage = (e) => {
          if(typeof this.callback === 'function'){
              return this.callback(e.data)
          }else{
              console.log('参数的类型必须为函数')
          }
      }
      // 关闭连接
      this.ws.onclose = (e) => {
          console.log('onclose',e)
          this._closeSocket(e)
      }
      // 报错
      this.onerror = (e) => {
          console.log('onerror',e)
          this._closeSocket(e)
      }
  }
  sendMsg(data) {
      let msg = JSON.stringify(data)
      return this.ws.send(msg)
  }
  _resetHeart() {
      clearInterval(this.pingInterval)
      return this
  }
  _heartCheck() {
      this.pingInterval = setInterval(() => {
          if(this.ws.readyState === 1) {
              this.ws.send(JSON.stringify({type: 'ping'}))
          }
      },this._timeout)
  }
  _closeSocket(e) {
      this._resetHeart()
      if(this.status !== 'close') {
          console.log('断开，重连', e)
          if(this.isReconnection){
              // 重连
              this.connect()
          }
      }else{
          console.log('手动关闭了', e)
      }
  }
  close() {
      this.status = 'close'
      this._resetHeart()
      return this.ws.close();
  }
}

