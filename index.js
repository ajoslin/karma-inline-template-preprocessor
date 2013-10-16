
var inlineTemplate = require('inline-template');
module.exports = {
  'preprocessor:inlineTemplate': ['factory', inlineTemplatePreprocessor]
};

function inlineTemplatePreprocessor(options, logger) {
  var log = logger.create('preprocessor.inlineTemplate');
  log.debug('Creating preprocessor with options: base="%s", doubleQuote="%s"', options.base, options.doubleQuote);
  return function(content, file, done) {
    log.debug('Processing file: "%s".', file.originalPath);
    var compiled = inlineTemplate.process(content, options);
    done(compiled);
  };
}
inlineTemplatePreprocessor.$inject = ['config.inlineTemplatePreprocessor', 'logger'];
