class Answer < ActiveRecord::Base

  include Commentable

  validates :author_id, :question_id, :description, presence: true

  belongs_to :question

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )

  scope :having_question_id, -> (id) { where("question_id = ?", id).order(:id) }
end
