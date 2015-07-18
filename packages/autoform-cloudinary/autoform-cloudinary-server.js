var cloudinary = Npm.require('cloudinary');

Meteor.methods({
  afCloudinarySign: function (params) {
    check(params, Match.Optional(Object));

    params = params || {};
    params.timestamp = (new Date).getTime();

    return cloudinary.utils.sign_request(params, {
      api_key: apiKey(),
      api_secret: apiSecret()
    });
  }
});

cloudName = function () {
  if (! Meteor.settings ||
      ! Meteor.settings.public ||
      ! Meteor.settings.public.CLOUDINARY_CLOUD_NAME) {
    throw new Error('Meteor.settings.public.CLOUDINARY_CLOUD_NAME is undefined');
  }

  return Meteor.settings.public.CLOUDINARY_CLOUD_NAME;
};
apiKey = function () {
  if (! Meteor.settings ||
      ! Meteor.settings.public ||
      ! Meteor.settings.public.CLOUDINARY_API_KEY) {
    throw new Error('Meteor.settings.public.CLOUDINARY_API_KEY is undefined');
  }

  return Meteor.settings.public.CLOUDINARY_API_KEY;
};

apiSecret = function () {
  if (! Meteor.settings ||
      ! Meteor.settings.CLOUDINARY_API_SECRET) {
    throw new Error('Meteor.settings.CLOUDINARY_API_SECRET is undefined');
  }

  return Meteor.settings.CLOUDINARY_API_SECRET;
};

cloudinary.config({
  cloud_name: cloudName(),
  api_key: apiKey(),
  api_secret: apiSecret()
});

getCloudthumb = function (post) {
//this gets the full url
var url = post.image;
// console.log(url);
fileName_Index = url.lastIndexOf("/") + 1,
fileName = url.substr(fileName_Index);
return cloudinary.url(fileName, {secure: false, width: 500, height: 500, crop: "limit"});
}

function addImageAfterSubmit (post) {
  var set = {};
//  console.log(post);
  if(post.image){
    var url = getCloudthumb(post);
  //  console.log(url);
    if (!!url) {
        post.thumbnailUrl = url;
        set.thumbnailUrl = url;
      }

    }
    // make sure set object is not empty (Embedly call could have failed)
    if(!_.isEmpty(set)) {
      Posts.update(post._id, {$set: set});
    }

  return post;
};
Telescope.callbacks.add("postSubmitAsync", addImageAfterSubmit);
