class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.having_question_id(params[:question_id])

    render 'index'
  end


end
