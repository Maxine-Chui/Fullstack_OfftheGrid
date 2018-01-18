Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :destroy, :index, :show] do
      resource :likes, only: [:create, :destroy]
      resources :comments, only: [:index]
      resource :bookmarks, only: [:create, :destroy]
    end
    resources :comments, only: [:index, :create, :update, :destroy, :show]
    resources :users do
      resources :posts, only: [:index]
      resources :follows, only: [] do
        get "followers", on: :collection
        get "followees", on: :collection
      end
      resources :bookmarks, only: [:index]
    end
    resource :follows, only: [:create, :destroy, :show, :index]
  end
  root to: "static_pages#root"
end
