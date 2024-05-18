/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2024-04-23 22:29:38
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2024-04-23 23:59:35
 * @FilePath: /blog-code/node/excel/handle.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//引入node-xlsx库文件
const xlsx = require('node-xlsx');

//读取Excel文件
const list = xlsx.parse("大表.xlsx");
const report = list[0].data
let  reportColumn, reportArr=[];
 
for (var i = 0; i < report.length; i++){
  for (var j = 0; j < report[i].length; j++){
    if (report[i][j] === 'Part No.') {

      reportColumn = j;
      break;
    }
  }
  if (reportColumn) {
    const currentColumnValue = report[i][reportColumn];
    if (currentColumnValue && !currentColumnValue.startsWith('Part') && !currentColumnValue.includes('查验') && !currentColumnValue.includes('植检')) {
      if (currentColumnValue.length > 11) {
        let arr = currentColumnValue.split('\n');
        reportArr = reportArr.concat(arr);
      } else {
        reportArr.push(currentColumnValue);
      }
      
    }
    
  }
}

const cp = xlsx.parse("2.xlsx");

let cpDataArr = [];
for (var z = 0; z < cp.length; z++){
  const cpData = cp[z].data;
  let cpDataColumn;
  for (var i = 0; i < cpData.length; i++){
    for (var j = 0; j < cpData[i].length; j++){
      if (cpData[i][j] === 'Container Number') {
        cpDataColumn = j;
        break;
      }
    }
  
    if (cpDataColumn) {
      const currentColumnValue = cpData[i][cpDataColumn];
      if (currentColumnValue && !currentColumnValue.includes('Container Number')) {
        cpDataArr.push(currentColumnValue);
      }
      
    }
  }
}
console.log(cpDataArr);

let select = [], notSelected = [];
cpDataArr.forEach(element => {
  if (reportArr.includes(element)) {
    select.push(element);
  } else {
    notSelected.push(element);
  }
});

console.log(select, notSelected);


