class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  def index
    # @user = current_user
    # @posts = @user.posts
    @posts = Post.all
  end

  private
  def post_params
    params.require(:post).permit(:img_url, :location, :caption)
  end
end
