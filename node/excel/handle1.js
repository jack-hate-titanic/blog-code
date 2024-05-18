//读取Excel文件
// const list = xlsx.parse("大表.xlsx");
// const report = list[0].data
// let  reportColumn, reportArr=[];
 
// for (var i = 0; i < report.length; i++){
//   for (var j = 0; j < report[i].length; j++){
//     if (report[i][j] === 'Part No.') {

//       reportColumn = j;
//       break;
//     }
//   }
//   if (reportColumn) {
//     const currentColumnValue = report[i][reportColumn];
//     if (currentColumnValue && !currentColumnValue.startsWith('Part') && !currentColumnValue.includes('查验') && !currentColumnValue.includes('植检')) {
//       if (currentColumnValue.length > 11) {
//         let arr = currentColumnValue.split('\n');
//         reportArr = reportArr.concat(arr);
//       } else {
//         reportArr.push(currentColumnValue);
//       }
      
//     }
    
//   }
// }