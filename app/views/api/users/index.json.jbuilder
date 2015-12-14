json.array!(@users) do |user|
  json.partial!('user', user: user, show_full_data: false)
end
