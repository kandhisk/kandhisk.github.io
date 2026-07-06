'use strict';

var fs = require('fs');
var path = require('path');

hexo.extend.helper.register('bg_images', function() {
  var imgDir = path.join(hexo.source_dir, 'img', 'mikamikami');
  var files = [];
  try {
    files = fs.readdirSync(imgDir).filter(function(f) {
      return /\.(png|jpg|jpeg|gif|webp)$/i.test(f);
    });
  } catch(e) {
    // directory not found
  }
  return JSON.stringify(files);
});
