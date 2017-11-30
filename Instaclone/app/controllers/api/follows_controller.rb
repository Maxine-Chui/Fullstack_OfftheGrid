class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new
    @follow.followee_id = params[:user_id]
    @follow.follower_id = current_user.id
    if @follow.save
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    if params[:follower_id] == current_user.id
      @follow = Follow.find(params[:id])
      @follow.destroy
      render 'api/users/show'
    else
      render json: ['Permission denied'], status: 424
    end
  end

  def show
    @follow = Follow.find(params[:id])
    render 'api/follows/show'
  end

  # def index
  #   if params[:user_id] == current_user.id
  #     @follows = Follow.where(followee_id: params[:user_id])
  #     render 'api/follows/index'
  #   else
  #     @follows = Follow.all
  #   end
  # end

  def followers
    @follows = Follow.where(followee_id: params[:user_id])
    render 'api/follows/index'
  end

  def followees
    @follows = Follow.where({follower_id: params[:user_id]})
    render 'api/follows/index'
  end

end
