class Api::CommunitiesController < ApplicationController


  def index
    @communities = Community.all_by_popularity

    render 'index'
  end

  def show
    @community = Community.find_by_id(params[:id])

    render 'show'
  end
end
