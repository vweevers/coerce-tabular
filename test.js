var test      = require('tape')
  , through2  = require('through2')
  , coerce    = require('./')
  , list      = require('list-stream')

test('numbers', function(t){
  var c = coerce()

  c.pipe(list.obj(function(err, data){
    t.deepEqual(data, [{a: 1, b: 0.2, c: 338}, {a: 1.2, b: 1.2, c: 0.01}])
    t.end()
  }))

  c.write({a: '1', b: '.2', c: '338'})
  c.end({a: '1.2', b: '1,2', c: '1e-2'})
})

test('uses keys of first object', function(t){
  var c = coerce()

  c.pipe(list.obj(function(err, data){
    t.deepEqual(data, [{a: 1, b: 0.2}, {a: 1.2, c: '1e-2'}])
    t.end()
  }))

  c.write({a: '1', b: '.2'})
  c.end({a: '1.2', c: '1e-2'})
})

test('does not touch non-strings', function(t){
  var c = coerce(), date = new Date

  c.pipe(list.obj(function(err, data){
    t.deepEqual(data, [{a: 1, b: 2, c: date}])
    t.end()
  }))

  c.end({a: '1', b: 2, c: date})
})

test('does not touch non-numbers', function(t){
  var c = coerce(), date = new Date

  c.pipe(list.obj(function(err, data){
    t.deepEqual(data, [{a: '3-2', b: 'a1', c: '2a'}])
    t.end()
  }))

  c.end({a: '3-2', b: 'a1', c: '2a'})
})
