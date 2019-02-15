class Api::MessagesController < ApplicationController
  def index
    @messages = Messsage.all
    # TODO: serializerを使う
    render json: @messages
  end
end
