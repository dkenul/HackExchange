json.extract! user, :id, :username

json.communities do
  json.array!(user.communities) do |community|
    json.partial! 'api/communities/community', community: community, show_questions: false
  end
end
