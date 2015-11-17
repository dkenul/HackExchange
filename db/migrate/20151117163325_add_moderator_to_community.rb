class AddModeratorToCommunity < ActiveRecord::Migration
  def change
    add_column :communities, :moderator_id, :string
    add_index :communities, :moderator_id
  end
end
