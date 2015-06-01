var through2 = require('through2').obj

module.exports = function() {
  var keys = null;

  return through2(function(obj, _, next){
    if (typeof obj !== 'object') return next()
    if (keys === null) keys = Object.keys(obj)

    for (var i = keys.length - 1; i >= 0; i--) {
      var k = keys[i]

      if (typeof obj[k] === 'string') {
        // Support european format
        var num = obj[k].replace(',', '.')
        if (!isNaN(num)) obj[k] = +num
      }
    }

    next(null, obj)
  })
}
