Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "entries#index", as: :authenticated_root
  end
  get 'welcome/index'

  resources :entries

  # root 'welcome#index'

  root 'entries#practice_words'
  get '/practice_words', to: "entries#practice_words"
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :entries, only: [:index, :show, :create, :update, :destroy]
    end
  end

  root 'entries#practice_chunks'
  get '/practice_chunks', to: "entries#practice_chunks"
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :entries, only: [:index, :show, :create, :update, :destroy]
    end
  end
  
end
