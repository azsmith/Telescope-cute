Platform = {
  isIOS: function () {
    return (!!navigator.userAgent.match(/iPad/i) || !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i))
           || Session.get('platformOverride') === 'iOS';
  },

  isAndroid: function () {
    return navigator.userAgent.indexOf('Android') > 0
           || Session.get('platformOverride') === 'Android';
  },
  isCordova: function () {
    return (Meteor.isCordova);

  }

};


Template.registerHelper('isCordova', function () {
  return Platform.isCordova();

});

Template.registerHelper('isIOS', function () {
  return Platform.isIOS();
});

Template.registerHelper('isAndroid', function () {
  return Platform.isAndroid();
});

Template.registerHelper(
  'platformClasses', function () {
    var classes = ['grade-a'];

    if (Meteor.isCordova) {
      classes.push('platform-cordova');
    }
    if (Meteor.isClient) {
      classes.push('platform-web');
    }
    if ((Meteor.isCordova && Platform.isIOS()) || Session.get('platformOverride') === 'iOS') {
      classes.push('platform-ios');
    }
    if ((Meteor.isCordova && Platform.isAndroid()) || Session.get('platformOverride') === 'Android') {
      classes.push('platform-android');
    }

    return classes.join(' ');
  });
