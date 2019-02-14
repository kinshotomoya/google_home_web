class MessagesController < ApplicationController
  def index
    @messages = Messsage.all
  end
end
