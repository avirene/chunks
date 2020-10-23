Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#my_entries", as: :authenticated_root
  end
  get 'welcome/index'

  # resources :entries

  root 'welcome#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :entries, only: [:index, :show, :create, :update, :destroy]
    end
  end  
end
