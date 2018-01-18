class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new
    @bookmark.user_id = current_user.id
    @bookmark.post_id = params[:post_id]
    if @bookmark.save
      @post = @bookmark.post
      render 'api/posts/show'
    else
      render json: @bookmark.errors.full_messages, states: 422
    end
  end

  def index
    @bookmarks = Bookmark.find_by(user_id: current_user.id)
    render 'api/bookmarks/index'
  end

  def destroy
    @bookmark = Bookmark.find_by({post_id: params[:post_id], user_id: current_user.id})
    @post = @bookmark.post
    @bookmark.destroy
    render 'api/posts/show'
  end

end
