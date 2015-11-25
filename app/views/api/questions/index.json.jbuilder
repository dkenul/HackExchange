json.array!(@questions) do |question|
  json.partial!('question', question: question, show_full_data: false)
end
