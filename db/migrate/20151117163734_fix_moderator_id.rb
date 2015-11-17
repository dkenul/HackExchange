class FixModeratorId < ActiveRecord::Migration
  def change
    remove_column :communities, :moderator_id
    add_column :communities, :moderator_id, :integer
  end
end
