Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'quotes/index'
      post 'quotes/create'
      get '/show/:id', to: 'quotes#show'
      delete '/destroy/:id', to: 'quotes#destroy'
    end
  end
  root 'roma_pages#roma'
  get '/*path' => 'roma_pages#roma'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
