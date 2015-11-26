json.array!(@answers) do |answer|
  json.extract! answer, :id, :author, :question_id, :description
end
