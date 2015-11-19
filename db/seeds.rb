# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do |i|
  User.create(username: "User#{i}", password: "hello6", email: "User#{i}@gmail")
  Community.create(name: "Community#{i}", description: "This is a community for #{i}", owner_id: i)
  Membership.create(member_id: i, community_id: i);
end

50.times do
  Membership.create(member_id: User.all.sample.id, community_id: Community.all.sample.id)
end
