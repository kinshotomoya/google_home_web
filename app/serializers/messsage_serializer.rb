class MesssageSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :user_id

  belongs_to :user

  def created_at
    object.created_at.strftime('%m/%d %H:%M')
  end
end
