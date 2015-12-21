# HackExchange

HackExchange is a web application inspired by [Stack Exchange][selink] built using Ruby on Rails
and React.js.

[Heroku link][heroku]
[heroku]: http://hackexchange.herokuapp.com/
[selink]: http://stackexchange.com/

## Currently Implemented Features

- [x] Guest Sign In
- [x] Sign In / Sign Up
- [x] Community Index Page: Click "All Communities" from the homepage, or Logo dropdown
- [x] Community Show Page: Navigate from the Community index or Logo dropdown
- [x] Questions displayed for the communities in which they are asked. 
- [x] Questions can be organized by popularity, most recent, and unanswered
- [x] Questions link to the question display page.
- [x] User can post questions, answers, and comments.
- [x] Pagination 

## In the Works

- [ ] User can create new communities
- [ ] User can upvote / downvote questions and answers as well as vote comments helpful
- [ ] User Profile & Reputation 
- [ ] Search Bar
- [ ] Error Messages

## Stretch Goals

- [ ] Tags - Tag a question, search by tags
- [ ] Favorite a question
- [ ] Option to upload a community image in lieu of text. 
- [ ] Code markdown in text field. 
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

## Known Bugs

* All Communities page sometimes doesn't load properly the first time. I suspect this is either because I am trying to use jQuery and React on the same elements OR because the data is not being fully loaded before rendering (though receiving new data should trigger a re-render so this is the less likely option)



