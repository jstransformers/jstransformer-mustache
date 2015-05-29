# jstransformer-mustache

[Mustache](https://github.com/janl/mustache.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mustache/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mustache)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-mustache/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-mustache?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-mustache.svg)](https://www.npmjs.org/package/jstransformer-mustache)

## Installation

    npm install jstransformer-mustache

## API

```js
var mustache = require('jstransformer')(require('jstransformer-mustache'))

var locals = {
	name: "World"
};

foo.render('Hello, {{name}}!</h1>').body
//=> 'Hello, World!'
```

## License

MIT
