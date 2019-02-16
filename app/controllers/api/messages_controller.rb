class Api::MessagesController < ApplicationController
  def index
    @messages = Messsage.all
    render json: @messages
  end
end
