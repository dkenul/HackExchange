(function(root){

  var _answers = [];
  var CHANGE_EVENT = 'change';
  root.AnswerStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _answers.slice(0);
    },

    havingId: function(id) {
      for (var i = 0; i < _answers.length; i++) {
        if (_answers[i].id === id) {
          return _answers[i];
        }
      }

      return null;
    },

    resetAnswers: function(answers) {
      _answers = answers;
    },

    resetAnswer: function(answer) {
      var switched = false;
      _answers.forEach(function(c) {
        if (c.id === answer.id) {
          _answers[_answers.indexOf(c)] = answer;
          switched = true;
        }
      });
      if (!switched) {_answers.push(answer);}
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case AnswerConstants.ANSWERS_RECEIVED:
          AnswerStore.resetAnswers(payload.answers);
          AnswerStore.emit(CHANGE_EVENT);
          break;
        case AnswerConstants.ANSWER_RECEIVED:
          AnswerStore.resetAnswer(payload.answer);
          AnswerStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
