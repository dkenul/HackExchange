json.extract! question, :id, :title, :membership, :times_answered, :created_at

json.community do
  json.extract! question.community, :id, :name
end

show_full_data ||= false

if show_full_data
  json.extract! question, :description, :author
else
  json.author question.author, :id, :username
end
