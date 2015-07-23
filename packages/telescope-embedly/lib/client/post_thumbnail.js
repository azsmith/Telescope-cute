Template.post_thumbnail.onCreated(function () {
  var instance = this;
  instance.showVideo = new ReactiveVar(false);
});

Template.post_thumbnail.helpers({
  postLink: function () {
    return Posts.getLink(this);
  },
  target: function () {
    return !!this.url? "_blank" : "";
  },
  playVideoClass: function () {
    return !!this.media ? 'post-thumbnail-has-video': '';
  },
  showVideo: function () {
    return Template.instance().showVideo.get();
  },
  imageLink: function () {
    return getCloudthumb(this);
  },

});

getCloudthumb = function (post) {
//this gets the full url
var url = post.image;
console.log(url);
fileName_Index = url.lastIndexOf("/") + 1,
fileName = url.substr(fileName_Index);
return $.cloudinary.url(fileName, {width: 500, crop: "scale"});
}

Posts.getDefaultStatus = function (user) {
  var hasAdminRights = typeof user === 'undefined' ? false : Users.is.admin(user);
  if (hasAdminRights || !Settings.get('requirePostsApproval', false)) {
    // if user is admin, or else post approval is not required
    return Posts.config.STATUS_APPROVED
  } else {
    // else
    return Posts.config.STATUS_PENDING
  }
};

Template.post_thumbnail.events({
  'click .post-thumbnail-has-video': function (e, instance) {

    e.preventDefault();
    instance.showVideo.set(true);

    // use Meteor.defer to make sure the elements are rendered by Blaze
    Meteor.defer(function () {
      $('body').addClass('showing-lightbox');
      $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');
      $(".js-video").fitVids();
    });

  },
  'click .post-video-lightbox-hide, click .post-video-lightbox': function (e, instance) {

    e.preventDefault();
    $(e.target).parents('.post').find('.post-video-lightbox').fadeOut('fast');
    $('body').removeClass('showing-lightbox');

    Meteor.defer(function () {
      instance.showVideo.set(false);
    });

    }
});
