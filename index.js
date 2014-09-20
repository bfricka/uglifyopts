var deepMerge = require(__dirname + '/deepMerge');

var opts = {
  defaults: {
    spidermonkey : false, // Defaults to build-in AST
    outSourceMap : null,  // Sourcemap filename
    inSourceMap  : null,  // Sourcemap filename
    sourceRoot   : null,  // Path files in sourcemaps should be considered relative to
    fromString   : false, // Defaults to filename
    warnings     : false, // Whether to output console warnings
    mangle       : {},    // Can be falsey to avoid mangling
    output       : {      // Can be an object describing output transformations
      indent_start     : 0,
      indent_level     : 4,
      quote_keys       : false,
      space_colon      : true,
      ascii_only       : false,
      unescape_regexps : false,
      inline_script    : false,
      width            : 80,
      max_line_len     : 32000,
      beautify         : false,
      source_map       : null,
      bracketize       : false,
      semicolons       : true,
      comments         : false,
      preserve_line    : false,
      screw_ie8        : false,
      preamble         : null
    },
    compress     : {      // Can be falsey to avoid compression
      sequences     : true,
      properties    : true,
      dead_code     : true,
      drop_debugger : true,
      unsafe        : false,
      unsafe_comps  : false,
      conditionals  : true,
      comparisons   : true,
      evaluate      : true,
      booleans      : true,
      loops         : true,
      unused        : true,
      hoist_funs    : true,
      keep_fargs    : false,
      hoist_vars    : false,
      if_return     : true,
      join_vars     : true,
      cascade       : true,
      side_effects  : true,
      pure_getters  : false,
      pure_funcs    : null,
      negate_iife   : true,
      screw_ie8     : false,
      drop_console  : false,
      angular       : false,

      warnings      : true,
      global_defs   : {}
    }
  },

  beautify: {
    mangle: false,
    compress: false,
    output: {
      indent_start     : 0,
      indent_level     : 4,
      quote_keys       : false,
      space_colon      : true,
      ascii_only       : false,
      unescape_regexps : false,
      inline_script    : false,
      width            : 100,
      max_line_len     : 32000,
      beautify         : true,
      source_map       : null,
      bracketize       : true,
      semicolons       : true,
      comments         : true,
      preserve_line    : true,
      screw_ie8        : false,
      preamble         : null
    }
  },

  brutalize: {
    compress: {
      sequences     : true,
      properties    : true,
      dead_code     : true,
      drop_debugger : true,
      unsafe        : true,
      unsafe_comps  : true,
      conditionals  : true,
      comparisons   : true,
      evaluate      : true,
      booleans      : true,
      loops         : true,
      unused        : true,
      hoist_funs    : true,
      keep_fargs    : false,
      hoist_vars    : false,
      if_return     : true,
      join_vars     : true,
      cascade       : true,
      side_effects  : true,
      pure_getters  : true,
      pure_funcs    : null,
      negate_iife   : true,
      screw_ie8     : true,
      drop_console  : true,
      angular       : false,

      warnings      : true,
      global_defs   : {}
    }
  }
};

function getGetter(extender) {
  return function() {
    return function(locals) {
      return deepMerge({}, opts.defaults, extender, locals || {});
    };
  };
}

Object.defineProperties(exports, {
  defaults: {
    get: getGetter({}),
    enumerable: true
  },

  beautify: {
    get: getGetter(opts.beautify),
    enumerable: true
  },

  brutalize: {
    get: getGetter(opts.brutalize),
    enumerable: true
  }
});
