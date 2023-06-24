/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-06-03 10:10:33
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-06-03 10:18:01
 * @FilePath: /blog-code/react/stack-heap-location/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import './App.css';

function App() {
  const a = {};
  console.log(a.b.c);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
