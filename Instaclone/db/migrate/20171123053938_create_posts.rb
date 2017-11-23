class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :img_url, null: false, unique: true
      t.integer :author_id, null: false
      t.string :location
      t.string :caption

      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :location
  end
end
