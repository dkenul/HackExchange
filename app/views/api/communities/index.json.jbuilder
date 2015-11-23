json.partial! 'api/communities/community', collection: @communities, as: :community

# json.communities @communities do |community|
#   json.id community.id
#   json.name community.name
#   json.description community.description
#   json.owner_id community.ownder_id
#   json.questions community.questions
# end
