# karma-inline-template-preprocessor

[inline-template](http://github.com/ajoslin/inline-template) in a karma plugin. 

Best used with grunt-inline-template for distribution (coming soon).

## Installation

The easiest way is to keep `karma-inline-template-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-inline-template-preprocessor": "~0.1"
  }
}
```

You can simply do it by:
```bash
npm install karma-inline-template-preprocessor --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['inlineTemplate']
    },

    inlineTemplatePreprocessor: {
      base: '.', // base folder to read templates from, defaults to '.'
      doubleQuote: false //whether to escape double quotes. Defaults to escaping single quotes.
    }
  });
};
```

----

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com
