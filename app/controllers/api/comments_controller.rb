class Api::CommentsController < ApplicationController
  def index
    @comments = params[:commentable_type].constantize.find_by_id(params[:commentable_id]).comments

    render 'index'
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'show'
    end

  end


  private

  def comment_params
    params.require(:comment).permit(:author_id, :commentable_id, :commentable_type, :description)
  end
end
