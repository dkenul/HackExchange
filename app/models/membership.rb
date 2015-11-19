class Membership < ActiveRecord::Base

  belongs_to(
    :member,
    class_name: "User",
    foreign_key: :member_id
  )

  belongs_to :community
  has_many :questions

  scope :having_member_id, -> (id) { where member_id: id }
  scope :having_community_id, -> (id) { where community_id: id }
end
