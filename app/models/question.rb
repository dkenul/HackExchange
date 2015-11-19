class Question < ActiveRecord::Base

  include Commentable

  belongs_to :membership

  has_one(
    :author,
    through: :membership,
    source: :member
  )

  has_one(
    :community,
    through: :membership,
    source: :community
  )

  scope :by_community_id, -> (id) { where("community_id = ?", id) }
  scope :having_title, -> (title) { where title: title }
end
