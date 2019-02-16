class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @messages = @user.messsages.order('created_at DESC')
  end
end
