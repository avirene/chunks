Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'

  resources :entries

  root 'welcome#index'
end
