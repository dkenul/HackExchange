class Api::QuestionsController < ApplicationController

  def show

    @question = Question.all

    render 'show'
  end

  def index
    @questions = Question.page(params[:page])

    render 'index'
  end

  def create

  end
end
