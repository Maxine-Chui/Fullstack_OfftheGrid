Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :destroy, :index, :show] do
      resource :likes, only: [:create, :destroy]
      resource :comments, only: [:create, :update, :destroy, :show]
    end
    resources :users do
      resources :posts, only: [:index]
    end
  end
  root to: "static_pages#root"
end
