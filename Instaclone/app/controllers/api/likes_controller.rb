class Api::LikesController < ApplicationController

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:id]
    if @like.save
      # @post = @like.post
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = like.find(params[:id])
    @like.destroy
  end

end
