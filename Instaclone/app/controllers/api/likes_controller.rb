class Api::LikesController < ApplicationController

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:post_id]
    if @like.save
      @post = @like.post
      # puts(@like.post.location)
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by({post_id: params[:post_id], user_id: current_user.id})
    # puts ("----------------------------")
    # puts params
    @post = @like.post
    @like.destroy
    render 'api/posts/show'
  end


end
