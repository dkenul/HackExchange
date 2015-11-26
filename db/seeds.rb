# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

communities = %w{
  Javascript
  Math
  Biology
  Physics
  Ruby
  Rails
  Matlab
  Chemistry
  C++
  HTML
  CSS
  ReactJs
  Economics
  JQuery
  Fortran
  Lolcode
  Java
  Python
  Perl
  SQL
}

descriptions = [
  "This is a community for",
  "We all really love",
  "Let's talk about",
  "Everything you need to know about"
]

questions = [
  "Can anyone figure out this problem I'm having",
  "My code just won't work",
  "What is actually going on right here",
  "???"
]


20.times do |i|
  User.create(username: "User#{i+1}", password: "hello6", email: "User#{i+1}@gmail")
  Community.create(name: communities[i], description: "#{descriptions.sample} #{communities[i+1]}", owner_id: i+1)
  Membership.create(member_id: i+1, community_id: i+1);
end

50.times do
  Membership.create(member_id: User.all.sample.id, community_id: Community.all.sample.id)
end

1000.times do
  Question.create(
    membership_id: Membership.all.sample.id,
    title: questions.sample,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  )
end

Question.all.each do |question|
  Answer.create(
    question_id: question.id,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    author_id: User.all.sample.id
  )
end

200.times do
  Answer.create(
    question_id: Question.all.sample.id,
    description: "The answer to this question is clearly not what the user above me said.",
    author_id: User.all.sample.id
  )
end

User.create(username: "Guest", email: "Guest@appacademy.io", password: "hello6")
