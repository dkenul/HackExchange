class CreateCommunities < ActiveRecord::Migration
  def change
    create_table :communities do |t|
      t.string :name, null: false
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :communities, :name, unique: true
  end
end
