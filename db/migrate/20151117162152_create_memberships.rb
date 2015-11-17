class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.string :member_id, null: false
      t.string :community_id, null: false

      t.timestamps null: false
    end

    add_index :memberships, :member_id
    add_index :memberships, :community_id
  end
end
