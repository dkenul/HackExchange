class Api::CommunitiesController < ApplicationController


  def index
    @communities = Community.all

    render json: @communities
  end

end
