class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.post_id = params[:post_id]
    if @comment.save
      render 'api/posts/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(post_id: params[:post_id])
    @post = @comment.post
    render 'api/comments/show'
  end

  def index
    if params[:post_id]
      @comments = Comment.where({post_id: params[:post_id]})
      # puts @comments
      render '/api/comments/index'
    end
  end

  def update
  end

  def destroy
    @comment = Comment.find_by({post_id: params[:post_id], user_id: current_user.id})
    @post = @comment.post
    @comment.destroy
    render 'api/posts/show'
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :post_id, :author_id)
  end

end
