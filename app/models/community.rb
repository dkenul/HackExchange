class Community < ActiveRecord::Base

  has_many :memberships

  has_many(
    :members,
    through: :memberships,
    source: :member
  )

  def user_count
    communities = Community.all
    communities.sort_by


    # REFACTOR THIS INTO A SQL QUERY
    # result = <<-SQL
    #   SELECT
    #     *
    #   FROM
    #     communities
    #   JOIN
    #     memberships on communities.id = memberships.community_id
    #   GROUP BY
    #     memberships.id
    #   ORDER BY
    #     COUNT(memberships)
    # SQL
  end
end
