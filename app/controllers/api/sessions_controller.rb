class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      login(@user)
      render 'api/communities/index'
    else
      render json: {errors: ["Nope"]}, status: 401
      render 'api/communities/index'
    end
  end

  def destroy
    logout
    render 'api/communities/index'
  end

end
