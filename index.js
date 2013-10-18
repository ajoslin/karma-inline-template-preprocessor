
var inlineTemplate = require('inline-template');
var chokidar = require('chokidar');
var path = require('path');
var fs = require('fs');

module.exports = {
  'preprocessor:inlineTemplate': ['factory', inlineTemplatePreprocessor]
};

function inlineTemplatePreprocessor(options, logger, fileList) {
  var log = logger.create('preprocessor.inlineTemplate');
  log.debug('Creating preprocessor with options: base="%s", doubleQuote="%s"', options.base, options.doubleQuote);
  return function(content, file, done) {
    log.debug('Processing file: "%s".', file.originalPath);
    var data = inlineTemplate.process(content, options);
    log.debug('Processed! Templates inlined: ["%s"]', data.templateUrls.join(', '));

    //For each templateUrl included in the js file, when that templateUrl changes update the js file
    //so it gets re-processed
    if (data.templateUrls.length) {
      chokidar.watch(data.templateUrls)
        .on('change', function(path, stats) {
          log.debug('inlineTemplate "%s" changed, updating "%s"', path, file.originalPath);
          fileList.changeFile(file.originalPath);
        });
    }
    
    done(data.content);
  };
}
inlineTemplatePreprocessor.$inject = ['config.inlineTemplatePreprocessor', 'logger', 'fileList'];
