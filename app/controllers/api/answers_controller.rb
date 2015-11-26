class Api::AnswersController < ApplicationController



  def index
    @answers = Answer.having_question_id(params[:question_id])

    render 'index'
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render 'show'
    end

  end


  private

  def answer_params
    params.require(:answer).permit(:author_id, :question_id, :description)
  end

end
