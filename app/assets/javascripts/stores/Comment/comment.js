(function(root){

  var _comments = [];
  var CHANGE_EVENT = 'change';
  root.CommentStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _comments.slice(0);
    },

    havingId: function(id) {
      for (var i = 0; i < _comments.length; i++) {
        if (_comments[i].id === id) {
          return _comments[i];
        }
      }

      return null;
    },

    resetComments: function(comments) {
      _comments = comments;
    },

    resetComment: function(comment) {
      var switched = false;
      _comments.forEach(function(c) {
        if (c.id === comment.id) {
          _comments[_comments.indexOf(c)] = comment;
          switched = true;
        }
      });
      if (!switched) {_comments.push(comment);}
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case CommentConstants.COMMENTS_RECEIVED:
          CommentStore.resetComments(payload.comments);
          CommentStore.emit(CHANGE_EVENT);
          break;
        case CommentConstants.COMMENT_RECEIVED:
          CommentStore.resetComment(payload.comment);
          CommentStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
