class Community < ActiveRecord::Base

  has_many :memberships

  has_many(
    :members,
    through: :memberships,
    source: :member
  )

  def user_count

    # REFACTOR INTO ACTIVERECORD SYNTAX

    # result = db.execute(<<-SQL)
    #   SELECT
    #     communities.*, COUNT(memberships.id) AS memberships_count
    #   FROM
    #     communities
    #   JOIN
    #     memberships on communities.id = memberships.community_id
    #   GROUP BY
    #     communities.id
    #   ORDER BY
    #     memberships_count
    # SQL
    #
    # result
  end
end
