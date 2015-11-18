class Api::CommunitiesController < ApplicationController


  def index
    @communities = Community.all_by_popularity

    render json: @communities
  end

end
