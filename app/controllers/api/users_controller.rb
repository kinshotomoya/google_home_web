class Api::UsersController < ApplicationController

  def index
    @user = User.find_by(line_id: params[:line_id])
    render json: @user
  end
end
