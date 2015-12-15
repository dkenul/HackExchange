json.extract! question, :id, :title, :membership, :times_answered

json.community do
  json.extract! question.community, :id, :name
end

show_full_data ||= false

if show_full_data
  json.extract! question, :description, :author
end
