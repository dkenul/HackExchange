json.extract! user, :id, :username

json.communities do
  json.array!(user.communities) do |community|
    json.partial! 'api/communities/community', community: community, show_questions: false
  end
end

if show_full_data
  json.questions do
    json.array!(user.questions) do |question|
      json.partial! 'api/questions/question', question: question, show_full_data: false
    end
  end

  json.answers do
    json.array!(user.answers) do |answer|
      json.extract! answer, :id, :question_id, :description
    end
  end

  # json.comments do
  #   json.array!(user.comments) do |comment|
  #     json.extract! comment, :id, :description
  #   end
  # end
end

# idea for a refactor: pass "activity" as pre-sorted

# if show_full_data
#   json.activity do
#
#     json.array!(User.select('*').joins(:questions, :answers, :comments).where('users.id = ?', user.id)) do |item|
#       json.extract! item, :id
#     end
#
#   end
# end
