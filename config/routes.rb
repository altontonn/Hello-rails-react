Rails.application.routes.draw do
  root 'root#index'
  
  resources :messages, only: [:index]
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
