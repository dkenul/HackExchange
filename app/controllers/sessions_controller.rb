class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login(user)
      render 'api/communities/index'
    else
      render json: {errors: ["Nope"]}, status: 401
      render 'api/communities/index'
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
