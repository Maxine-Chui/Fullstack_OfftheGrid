class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end

##Song model
# def self.top_five_results(query_param)
#   oaram = '%' + query_param.downcase + '%'
#   Song.where('lower(title) LIKE ?', param).limit(5)
# end


## MusicSearchController
#
# def index
#   @artists = Artist.top_five_results(search_params[query])
#   etc etc
#   render :index
# end
#
# def search_params
#   params.require(:search).permit(:query, :artist_id, :album_id)
# end


##index.json.jbuilder
#
# @artists.each do |artist|
#   json.set! artist.id do
#     json.set! :type, 'artist'
#     json.partial! 'api/artist/artist', artist: artist
#   end
# end

## custom routes
