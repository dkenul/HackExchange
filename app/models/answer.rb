class Answer < ActiveRecord::Base

  include Commentable

  belongs_to :question

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )
end
