class Api::SessionsController < ApplicationController

  def show
    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render 'api/users/show'
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: {errors: ["Nope"]}, status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end

end
