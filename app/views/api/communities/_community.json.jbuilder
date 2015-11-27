json.extract! community, :id, :name, :description, :owner_id, :popularity

if show_questions
  json.questions do
    json.array!(community.questions.all_by_popularity) do |question|
      json.partial! 'api/questions/question', question: question
    end
  end
end
