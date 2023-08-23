Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root to: 'cvs#index'
  root to: 'pages#index'
  resources :cvs, only: [:index]
  resources :pages, only: [:index]

end
