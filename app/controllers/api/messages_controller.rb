class Api::MessagesController < ApplicationController
  def index
    @messages = Messsage.all.order('created_at desc')
    render json: @messages
  end
end
