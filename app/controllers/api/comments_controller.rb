class Api::CommentsController < ApplicationController
  def index
    byebug
    @comment = Comment.all

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
