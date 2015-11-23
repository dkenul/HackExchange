(function(root){

  var _questions = [];
  var CHANGE_EVENT = 'change';
  root.QuestionStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _questions.slice(0);
    },

    havingId: function(id) {
      for (var i = 0; i < _questions.length; i++) {
        if (_questions[i].id === id) {
          return _questions[i];
        }
      }

      return null
    },

    resetQuestions: function(questions) {
      _questions = questions;
    },

    resetQuestion: function(question) {
      var switched = false;
      _questions.forEach(function(c) {
        if (c.id === question.id) {
          _questions[_questions.indexOf(c)] = question;
          switched = true;
        }
      });
      if (!switched) {_questions.push(question);}
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){

      switch (payload.actionType) {
        case CommunityConstants.COMMUNITIES_RECEIVED:
          CommunityStore.resetCommunities(payload.communities);
          CommunityStore.emit(CHANGE_EVENT);
          break;
        case CommunityConstants.COMMUNITY_RECEIVED:
          CommunityStore.resetCommunity(payload.community);
          CommunityStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
