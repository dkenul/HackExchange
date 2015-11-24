class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    end
  end

  protected

  def user_params
    self.params.require(:user).permit(:username, :email, :password)
  end

end
