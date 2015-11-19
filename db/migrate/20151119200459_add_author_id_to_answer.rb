class AddAuthorIdToAnswer < ActiveRecord::Migration
  def change
    add_column :answers, :author_id, :integer
    add_index :answers, :author_id
  end
end
