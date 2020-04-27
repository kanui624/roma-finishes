Rails.application.routes.draw do
  root 'roma_pages#roma'
  namespace :api do
    namespace :v1 do
      resources :quotes, only: [:index, :create, :show, :destroy]
    end
  end
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html