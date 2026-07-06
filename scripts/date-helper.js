'use strict';

hexo.extend.helper.register('chinese_date', function(date) {
  var chineseNums = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var monthNames = ['', '孟春', '仲春', '季春', '孟夏', '仲夏', '季夏', '孟秋', '仲秋', '季秋', '孟冬', '仲冬', '季冬'];
  
  var year = date.year();
  var month = date.month() + 1; // month() 返回 0-11
  
  // 将年份转为中文数字
  var yearStr = String(year);
  var chineseYear = yearStr.split('').map(function(d) { return chineseNums[parseInt(d)]; }).join('');
  
  return chineseYear + '年' + monthNames[month];
});
