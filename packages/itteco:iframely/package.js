Package.describe({
  name: 'itteco:iframely',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.addFiles('itteco:iframely.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('itteco:iframely');
  api.addFiles('itteco:iframely-tests.js');
});
