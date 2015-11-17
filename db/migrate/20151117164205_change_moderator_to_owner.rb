class ChangeModeratorToOwner < ActiveRecord::Migration
  def change
    remove_column :communities, :moderator_id
    add_column :communities, :owner_id, :integer
  end
end
