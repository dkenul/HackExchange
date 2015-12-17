class Api::MembershipsController < ApplicationController

  def show
    @membership = Membership.find_by_id(params[:id])

    render 'show'
  end

  def create
    @membership = Membership.new(
      member_id: params[:membership][:user_id],
      community_id: params[:membership][:community_id]
    )

    if @membership.save
      render 'show'
    end

  end

end
