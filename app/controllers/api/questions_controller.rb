class Api::QuestionsController < ApplicationController

  def show
    @question = Question.find_by_id(params[:id])

    render 'show'
  end

  def index
    @questions = Question.all_by_popularity.page(params[:page])

    render 'index'
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render 'show'
    end

  end

  def question_params
    params.require(:question).permit(:membership_id, :title, :description)
  end
end
