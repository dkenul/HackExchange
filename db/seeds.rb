# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

communities = [
  "Javascript",
  "Mathematics",
  "Biology",
  "Physics",
  "Ruby",
  "Rails",
  "Matlab",
  "Chemistry",
  "C++",
  "HTML",
  "CSS",
  "ReactJs",
  "Economics",
  "jQuery",
  "Fortran",
  "Lolcode",
  "Java",
  "Python",
  "Perl",
  "SQL",
  "Game Design",
  "Clojure",
  "Julia",
  "Haskell",
  "Scala",
  "Erlang",
  "Ada",
  "Image Processing",
  "Engineering",
  "Data Analysis"
]

descriptions = [
  "This is a community for",
  "We all really love",
  "Let's talk about",
  "Everything you need to know about",
  "Q&A for students, and teachers of",
  "Experts in the field of"
]

questions = [
  "Can anyone figure out this bug in my code?",
  "My callback just won't work.",
  "Rails missing template",
  "How to add user input to array one element at a time in kind of a weird setup",
  "Facebook conversion pixel and google tag manager",
  "JSON not parsing properly",
  "Generate area plot for time series",
  "What does opening a file actually do?",
  "Floating point rounding error",
  "Why is the Big-O complexity of this algorithm O(n^2)?",
  "Runtime is really bad on this",
  "Can anyone help me optimize this code?",
  "While loop with empty body checking volatile ints - what does this mean?",
  "Several select count(*) in a single query",
  "mysqli_fetch_object returns nothing",
  "Recursive to Iterative method for Binary Search Tree",
  "How could I use Batch Normalization in tensorflow?",
  "Transformation of observable byte array to objects",
  "specify default value of std::function",
  "Reverse the order of bits in a bit array",
  "Array.Initialize - Why does this method exist?",
  "How to check if a string contains all of the characters of a word",
  "Which sorting algorithm",
  "How can I use SUM for bit columns?",
  "Splitting a string with a number in the end",
  "Partial differential equation, Finite difference Method",
  "Heat transportation equation",
  "Manipulation linear systems of equations",
  "Numerical Integration w/parameter",
  "Laplace Inversion Algorithm",
  "Difference between `StringJoin` and `StringExpression`",
  "Is it possible to project a 3D contour plot onto two dimensional space?",
  "Need help in writing loop to assign value and calculate the called function",
  "Is there a connection between primitive elements (for field extensions) and cyclic vectors (in linear algebra)",
  "How to prove measurability",
  "Proving ∑n+ak=a(−1)k−a∗kb∗(nk−a)==0∀a,b,n>0andb<n",
  "Find f(n)f(n) , f(n)=12n+12n+2(n+12)+12n+4(n+34)+12n+6(n+56)+⋯",
  "DH parameters and Kinematic Decoupling",
  "How can I reduce a motor's maximum current draw?",
  "Effects of long term mineral oil saturation acrylic monomer coating",
  "alkene different reactivity with acids depending on concentration and temperature",
  "Deuterated solvents vs. regular solvents",
  "Is boundary well defined if variation of metric don't vanish on the boundary?",
  "Perturbative series for bosons",
  "Cooling of atomic clocks",
  "Show that the system x¨+xx˙+x=0x¨+xx˙+x=0 is reversible",
  "A function with a property f(x+y)=f(x)f(y)",
  "Examples where R/I≅RR/I≅R?",
  "Coordinate of S(s,t)S(s,t) for Which Area of Quadrilateral is Maximum.",
  "If H≤GH≤G of index pp in GG and p∣|G|p∣|G| then H⊴G",
  "Can the matrix product ABA−1ABA−1 be reduced or simplified?",
  "Limits of tanh−1(xa)tanh−1⁡(xa) and loga−xx+alog⁡a−xx+a at −∞",
  "prove that n(n+1)n(n+1) is even using induction",
  "It is the power set of RR a topology of RR?"
]

usernames = [
  "HotForMath",
  "itsFORTRAN",
  "Sennacy",
  "Anonymous",
  "FioraMaster",
  "Spambot",
  "Friend",
  "ThatGuy",
  "BasementDweller",
  "FalloutFan",
  "CeleneDion",
  "VaultDweller",
  "CodeNewbie",
  "SelfProclaimedExpert"
]


30.times do |i|
  User.create(username: "#{usernames.sample}#{i+1}", password: "hello6", email: "User#{i+1}@gmail")
  Community.create(name: communities[i], description: "#{descriptions.sample} #{communities[i]}", owner_id: i+1)
  Membership.create(member_id: i+1, community_id: i+1);
end

50.times do
  Membership.create(member_id: User.all.sample.id, community_id: Community.all.sample.id)
end

800.times do
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

100.times do
  Answer.create(
    question_id: Question.all.sample.id,
    description: "The answer to this question is clearly not what the user above me said.",
    author_id: User.all.sample.id
  )
end

User.create(username: "Guest", email: "Guest@appacademy.io", password: "hello6")
