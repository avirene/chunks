Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "entries#index", as: :authenticated_root
  end
  get 'welcome/index'

  resources :entries

  # root 'welcome#index'

  root "entries#practice_words"
  get 'entries/practice_words'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :entries, only: [:index, :show, :create, :update, :destroy]
    end
  end
  get "entries/practice_words"
end
