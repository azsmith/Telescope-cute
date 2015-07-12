Package.describe({
  name: 'webbroi:telescope-theme-iris',
  version: '0.1.4',
  summary: 'Telescope Iris theme package inpired by Crater.io.',
  git: 'https://github.com/WebbROI/telescope-themes.git'
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    // core dependencies
   'telescope:core@0.21.1',
    'telescope:lib@0.21.1',
    'telescope:theme-base@0.21.1',
   'telescope:theme-hubble@0.21.1'
  ]);

//  api.use([
    // bootstrap 3
//    'twbs:bootstrap@3.3.4'
//    ], ['client']
//  );

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

//  api.addFiles([
//    'lib/iris_colors.js'
//  ], ['client', 'server']);

  api.addFiles(
    [
    // template overrides
    'lib/client/templates/iris_layout.html',
    'lib/client/templates/iris_header.html',
  'lib/client/templates/iris_header.js',
   'lib/client/templates/iris_sub_header.html',
  //  'lib/client/templates/iris_categories_menu.html',
    //'lib/client/templates/iris_side_nav.html',
    //'lib/client/templates/iris_side_nav.js',
   //'lib/client/templates/iris_bottom_nav.html',
  //  'lib/client/templates/iris_tabs.html',
//'lib/client/templates/iris_nav.html',
    //'lib/client/templates/iris_user_menu.html',
  //  'lib/client/templates/iris_notifications_menu.html',
  //'lib/client/templates/iris_post_avatars.html',
//  'lib/client/templates/iris_submit_button.html',
//    'lib/client/templates/iris_footer.html',
  //  'lib/client/templates/iris_post_thumbnail.html',
//    'lib/client/templates/iris_post_title.html',
//    'lib/client/templates/iris_post_domain.html',
//    'lib/client/templates/iris_post_domain.js',
  //  'lib/client/templates/iris_post_thumbnail.js',
  //  'lib/client/templates/iris_icons.js',
  //  'lib/client/templates/iris_post_comments_link.html',




    // customizations
   'lib/client/custom_templates.js',

  // images
  'lib/client/img/logo-cutenado.png',
  'lib/client/img/logo-cutenado-blank.png',
  'lib/client/img/logo-cutenado-mobile.png'

  // custom styles


    ], ['client']
  );

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);



});
