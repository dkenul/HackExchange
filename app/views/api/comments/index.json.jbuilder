json.array!(@comments) do |comment|
  json.extract! comment, :id, :author, :description
end
