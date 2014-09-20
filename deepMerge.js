function isObj(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]';
}

function deepMerge(toObj) {
  var copyObjs = [].slice.call(arguments, 1);

  for (var i = 0, len = copyObjs.length; i < len; i++) {
    var obj = copyObjs[i];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        toObj[key] = isObj(val) ? deepMerge(toObj[key] || {}, val) : val;
      }
    }
  }

  return toObj;
}

module.exports = deepMerge;
