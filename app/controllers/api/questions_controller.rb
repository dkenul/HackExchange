class Api::QuestionsController < ApplicationController

  def show
    @question = Question.all

    render 'show'
  end

  def index
    @questions = Question.all

    render 'index'
  end

  def create

  end
end
