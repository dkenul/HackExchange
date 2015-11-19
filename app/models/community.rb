class Community < ActiveRecord::Base

  has_many :memberships

  has_many(
    :members,
    through: :memberships,
    source: :member
  )

  has_many(
    :questions,
    through: :memberships,
    source: :questions
  )

  def self.all_by_popularity
    Community
      .select('communities.*, COUNT(memberships.id) as memberships_count')
      .joins(:memberships)
      .group('communities.id')
      .order('memberships_count DESC')
  end

  def self.all_by_name
    Community
      .select('*')
      .order('communities.name')
  end
end
