class MesssageSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :user_name

  def user_name
    return nil if object.user.blank?
    object.user.name
  end
end