// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.cutenado.app',
  name: 'Cutenado',
  description: 'All the cute in one place',
  author: 'Cutenado',
  email: 'info@cutenado.com',
  website: 'http://cutenado.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone': 'icons/ios/icon-60.png',
  'iphone_2x': 'icons/ios/icon-60@2x.png',
  'iphone_3x': 'icons/ios/icon-60@3x.png',
  'ipad': 'icons/ios/icon-76.png',
  'ipad_2x': 'icons/ios/icon-76@2x.png',



  // ... more screen sizes and platforms ...
});

App.launchScreens({
  'iphone': 'splash/Default~iphone.png',
  'iphone_2x': 'splash/Default@2x~iphone.png',
  'iphone6': 'splash/Default-667h@2x~iphone.png',
  'iphone6p_portrait': 'splash/Default-Portrait-736h@3x.png',
  'ipad_portrait': 'splash/Default-Portrait~ipad.png',
  'ipad_portrait_2x': 'splash/Default-Portrait@2x~ipad.png',


  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#2C53AE');

App.accessRule('*');
// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//  APP_ID: '1234567890',
//  API_KEY: 'supersecretapikey'
//});
