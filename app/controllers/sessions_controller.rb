class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login(user)
      render 'api/users/user'
    else
      render json: {errors: ["Nope"]}, status: 401
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
