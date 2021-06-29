# App to retrieve a list of movies and add tag management system

The app retrieves a list of movie names from a mock API and allows users to:
1. Add tags to that movie
1. Remove tags from that movie
1. Filter tags through typeahead search component

The taglist for the movie created by the user will be displayed in the bar after adding tags. 

The filter functionality will leave the movie list unchanged and filter
the tags themselves. So only tags beginning with "f" will be displayed if you type "f" but the movie list will remain unchanged.

The tags cannot be added or removed while the list is filtered - please "unfilter" the list by clearing the search bar to add and remove tags. 

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
1. ~~Add filter functionality to filter by Tag~~
1. ~~Limit the number of tags by movie to 5~~
1. ~~Clear the placeholder input field when a user clicks "Add Tag"~~
1. Persist the app state to local storage (I would implement this with redux-persist)
1. ~~Add Date to movie name~~
1. ~~Typeahead filtering in the search tags bar~~

# Nice to have - possible extensions
1. Debounce the search component
1. Suggest tags to the user
1. Limit the characters available in the placeholder for tags
1. Add media breakpoints to improve responsive behaviour
1. Test (Jest / react-testing-library or Cypress)
1. Check for duplicate tags
1. Allow tags to be added or removed while filtered
1. Collapse the movie list to show only those with filtered tags
1. Convert to Typescript