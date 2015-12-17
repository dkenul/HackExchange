json.extract! @membership, :id

json.user do
  json.partial! 'api/users/user', user: @membership.member, show_full_data: false;
end
