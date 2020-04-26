# jstransformer-mustache

[Mustache](https://github.com/janl/mustache.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mustache/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mustache)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-mustache/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-mustache)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mustache/master.svg)](http://david-dm.org/jstransformers/jstransformer-mustache)

[![NPM version](https://img.shields.io/npm/v/jstransformer-mustache.svg)](https://www.npmjs.org/package/jstransformer-mustache)

## Installation

    npm install jstransformer-mustache

## API

```js
var mustache = require('jstransformer')(require('jstransformer-mustache'))

var locals = {
	name: "World"
}

mustache.render('Hello, {{name}}!</h1>', locals).body
//=> 'Hello, World!'
```

## License

MIT
