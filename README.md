# HackExchange

HackExchange is a web application inspired by [Stack Exchange][selink] built using Ruby on Rails
and React.js.

[Heroku link][heroku]
[heroku]: http://hackexchange.herokuapp.com/
[selink]: http://stackexchange.com/

## Currently Implemented Features

- [ ] Guest Sign In
- [ ] Sign In
- [ ] Sign Up - still need to port from rails. Awaiting OAuth lecture :)
- [ ] Community Index Page: Click "All Communities" from the homepage, or Logo dropdown
- [ ] Community Show Page: Navigate from the Community index or Logo dropdown
- [ ] Questions displayed for the communities in which they are asked. 
- [ ] Some CSS styling.

## In the Works

- [ ] Questions link to the question display page.
- [ ] User can post questions, answers, and comments.
- [ ] User can upvote / downvote questions and answers as well as vote comments helpful
- [ ] User Profile & Reputation 
- [ ] Search Bar
- [ ] Pagination 

## Stretch Goals

- [ ] Tags - Tag a question, search by tags
- [ ] Favorite a question
- [ ] Option to upload a community image in lieu of text. 
- [ ] Code markdown in text field. 

## Super Stretch Goals (for the future)

- [ ] Community owner can customize background, header, font, etc
- [ ] Badges
- [ ] Meta sites (for discussing the current community's community)
- [ ] Staging area for new Communities

## Tech Specs

* Ruby on Rails (backend)
* React / Flux (frontend)
* Javascript
* jQuery
* HTML
* CSS

## Plugins

* Isotope

## Known Bugs or Poor Implementation

* Sign in link in nav doesn't go anywhere. 
* Mail link in nav doesn't go anywhere. Thumbnail doesn't fit and needs to be updated.
* Logo dropdown and sign in dropdown don't close on many clicks one might want them to. Need to refactor.
* Community show header nav options don't link anywhere. 
* Community header shoud link to the community show page (will be more useful when question show is implemented)


