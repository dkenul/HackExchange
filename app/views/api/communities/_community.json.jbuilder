json.extract! community, :id, :name, :description, :owner_id, :popularity

if show_questions
  json.questions do
    json.array!(community.questions) do |question|
      json.partial! 'api/questions/question', question: question
    end
  end
end
