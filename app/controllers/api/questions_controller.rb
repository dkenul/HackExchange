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

  end
end
