class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(
      member_id: params[:membership][:user_id],
      community_id: params[:membership][:community_id]
    )

    if @membership.save
      render json: @membership
    end

  end

end
