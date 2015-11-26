AnswerApiActions = {
  receiveAll: function(answers){
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },

  receiveSingleAnswer: function (answer) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECEIVED,
      answer: answer
    });
  }
};
