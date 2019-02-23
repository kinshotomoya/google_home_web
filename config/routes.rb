Rails.application.routes.draw do
  root to: 'homes#index'  # エントリポイント

  namespace :api do
    resources :messages, only: %w[index]
    resources :users, only: %w[index]
  end
end
