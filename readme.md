# coerce-tabular

**An object stream that coerces tabular data to numbers. Assumes that all incoming objects have the same set of keys and does not fill in missing values. Supports comma and dot notation (1,23 and 1.23).**

[![npm status](http://img.shields.io/npm/v/coerce-tabular.svg?style=flat-square)](https://www.npmjs.org/package/coerce-tabular) [![Travis build status](https://img.shields.io/travis/vweevers/coerce-tabular.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/coerce-tabular) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/coerce-tabular.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/coerce-tabular) [![Dependency status](https://img.shields.io/david/vweevers/coerce-tabular.svg?style=flat-square)](https://david-dm.org/vweevers/coerce-tabular)

## example

`npm i detect-tabular coerce-tabular jsonstream`

```js
var detect = require('detect-tabular')
  , coerce = require('coerce-tabular')
  , fs     = require('fs')
  , json   = require('jsonstream')

fs.createReadStream('air_pollution_nl.xlsx')
  .pipe( detect() )
  .pipe( coerce() )
  .pipe( json.stringify() )
  .pipe( process.stdout )
```

## api

### `coerce()`

Returns a transform stream. Give it objects in the form of `{ name: "Alice", nr: "1e-2" }` and get back `{ name: "Alice", nr: 0.01 }`.

## install

With [npm](https://npmjs.org) do:

```
npm install coerce-tabular
```

## license

[MIT](http://opensource.org/licenses/MIT) © [Vincent Weevers](http://vincentweevers.nl)
