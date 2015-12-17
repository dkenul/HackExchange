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

  has_many :answers

  scope :by_community_id, -> (id) { where("community_id = ?", id) }
  scope :having_title, -> (title) { where title: title }

  def self.all_by_popularity
    Question
      .select('questions.*, COUNT(answers.id) as answers_count')
      .joins('left outer join answers on answers.question_id = questions.id')
      .group('questions.id')
      .order('answers_count DESC')
  end

  def times_answered
    self.answers.size
  end

end
