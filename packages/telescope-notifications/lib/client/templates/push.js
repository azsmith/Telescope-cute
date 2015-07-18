//When messages opens the app:
Push.addListener('startup', function(notification) {

  if(notification.payload.pushType === 'emailNewPost'){
    Router.go('posts', {
      _id: notification.payload.itemId
    });
  }
  if(notification.payload.pushType === 'emailNewPendingPost'){
    Router.go('posts', {
      _id: notification.payload.itemId
    });
  }
  if(notification.payload.pushType === 'emailPostApproved'){
    Router.go('posts', {
      _id: notification.payload.itemId
    });
  }
  if(notification.payload.pushType === 'emailNewComment'){
    Router.go('posts', {
      _id: notification.payload.itemId
    });
  }
  if(notification.payload.pushType === 'emailNewReply'){
    Router.go('posts', {
      _id: notification.payload.itemId
    });
  }
  if(notification.payload.pushType === 'notification_new_comment'){
    Router.go('posts', {
      _id: notification.payload.itemId
    });
  }
  else if(notification.payload.pushType === 'interest'){

    alert('not implemented yet');
  }
});
