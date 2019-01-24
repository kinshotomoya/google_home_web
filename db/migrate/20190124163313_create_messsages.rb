class CreateMesssages < ActiveRecord::Migration[5.2]
  def change
    create_table :messsages do |t|
      t.references :user, foreign_key: true
      t.string :text
      t.timestamps
    end
  end
end
