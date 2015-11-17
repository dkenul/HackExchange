class FixMembershipsIdsDatatypes < ActiveRecord::Migration
  def change
    remove_column :memberships, :member_id
    remove_column :memberships, :community_id
    add_column :memberships, :member_id, :integer
    add_column :memberships, :community_id, :integer
    add_index :memberships, :member_id
    add_index :memberships, :community_id
  end
end
