Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'my-custom-package'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
  //  'lib/client/templates/hello.html',
  //  'lib/client/templates/hello.js',
    'lib/client/templates/custom_post_title.html',
    'lib/client/stylesheets/custom.scss',
    'lib/client/custom_templates.js',
    'lib/custom_icons.js',
    'lib/client/templates/custom_post_vote.html',
    'lib/client/templates/custom_post_domain.html',
    'lib/client/templates/custom_post_share.html'
//    'lib/client/templates/hello.html',




  ], ['client']);

  // server


  api.addFiles([
    'lib/server/templates/custom_emailPostItem.handlebars',
      'lib/server/templates/custom_emailDigest.handlebars',
        'lib/server/templates/custom_emailDigestConfirmation.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
