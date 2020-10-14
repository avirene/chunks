Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#my_entries", as: :authenticated_root
  end
  get 'welcome/index'

  resources :entries

  root 'welcome#index'
end
