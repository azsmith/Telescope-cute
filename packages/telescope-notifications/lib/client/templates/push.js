//When messages opens the app:
Push.addListener('startup', function(n) {
console.log(n);
  if(n.payload.pushType === 'emailNewPost'){
    Router.go('post_page', {
      _id: n.payload.itemId
    });
  }
  if(n.payload.pushType === 'emailNewPendingPost'){
    Router.go('post_page', {
      _id: n.payload.itemId
    });
  }
  if(n.payload.pushType === 'emailPostApproved'){
    Router.go('post_page', {
      _id: n.payload.itemId
    });
  }
  if(n.payload.pushType === 'emailNewComment'){
    Router.go('post_page', {
      _id: n.payload.itemId
    });
  }
  if(n.payload.pushType === 'emailNewReply'){
    Router.go('post_page', {
      _id: n.payload.itemId
    });
  }
  if(n.payload.pushType === 'notification_new_comment'){
    Router.go('post_page', {
      _id: n.payload.itemId
    });
  }
  else if(n.payload.pushType === 'interest'){

    alert('not implemented yet');
  }
});
