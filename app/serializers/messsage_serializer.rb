class MesssageSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :user_name, :user_id

  def created_at
    object.created_at.strftime('%m/%d %H:%M')
  end

  def user_name
    return nil if object.user.blank?
    object.user.name
  end
end
