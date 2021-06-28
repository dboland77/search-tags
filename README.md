# App to retrieve a list of movies and add tag management system

The app retrieves a list of movie names from a mock API and allows users to:
1. Add tags to that movie
1. Remove tags from that movie

The taglist for the movie created by the user will be displayed in the bar after adding tags. 

The app is built with:
1. React - functional with hooks
1. Redux
1. CSS3
1. HTML

# To install and use this app
Clone this repo and cd to the project directory. 

Run "npm install" and allow the packages to install - you will receive some severity warnings please ignore these. 

Run npm start and the app will start to run and launch in your browser at localhost:3000

# Remaining App TODO
1. Add filter functionality to filter by Tag
1. Limit the number of tags by movie to 5
1. Clear the placeholder input field when a user clicks "Add Tag"
1. Persist the app state to local storage
1. Testing with Jest

# Nice to have - possible extensions
1. Typeahead filtering in the search tags bar
1. Suggest tags to the user
1. Limit the characters available in the placeholder for tags