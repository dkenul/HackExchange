json.extract! question, :id, :title, :membership, :times_answered

show_full_data ||= false

if show_full_data
  json.extract! question, :description, :author
end
