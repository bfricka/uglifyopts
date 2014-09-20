# Uglify Options

Uglify has a lot of options. This simply gives access to them all via 3 sensible defaults:

## Usage

- `uglifyopts.defaults([locals])`: Default values that UglifyJS currently accepts
- `uglifyopts.beautify([locals])`: Default values, but with sensible items to beautify instead of uglify JS.
- `uglifyopts.brutalize([locals])`: Strongest level of compression. Sets `screw_ie` option, along with `pure_getters`, and `unsafe` transformations.

All functions are getters that also accept overrides.

Example:

```js
var uglifyopts = require('uglifyopts').beautify({
  output: {
    pure_getters: false
  }
});
```

## License
MIT
