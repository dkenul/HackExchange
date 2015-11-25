json.array!(@communities) do |community|
  json.partial!('community', community: community, show_questions: false)
end
