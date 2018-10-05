## Requirements

Weather App Using Js Framework

You can use your preferred new generation Js Framework, like VueJs, Aurelia, AngularJS


Use weather.php as your data source. This script mirrors data from MetaWether.com. It has two commands. Inspect the script to understand what it does. Then scan MW website for necessary documentation regarding the icons, the response format. Do not use any other weather API or a pre-existing weather package.


You should be making http requests against MetaWeather and displaying the results in your app. The app will have 3 routes:


Home:

/#/

This is the default page and we should see this when we first load the app.

The home page should display the weather for today in these 6 cities:


Istanbul, Berlin, London, Helsinki, Dublin, Vancouver


The “weather” custom component:

When displaying the weather, use a custom component called <weather></weather> and pass in necessary data using bindings. You are free to choose in what form you will pass data. You can also make additional data loading using component’s lifecycle hooks as well, but this is entirely optional. Reuse this custom component across the entire application.


This component should display:

* the city name

* the temperature

* the maximum temperature

* the minimum temperature

* and the corresponding weather icon (it’s also provided by metaweather.)


When we click the weather component, we should go to /#/weather/:woeid to see more details about the weather in that location.


Search:

/#/search/:keyword


On home page, there should also be a search field and a search button.

When the search is run, the user should be sent to this URI.

For instance, if one searches for “Dublin,” they go to /#/search/dublin


If the search yields results, display the weather for today in matching cities (using the <weather> custom component). If there are no results, say “No results were found. Try changing the keyword!”


We should be able to change our keyword (and see the current keyword) and search again without having to go back to the home page.


Weather Details Page:

/#/weather/:woeid


This page loads the weather for the given “woeid” parameter, and displays the same information as the weather custom component, but displays all of the days inside consolidated_weather instead of just today.


Bonus points: display the day name for the applicable date, like, Monday, Tuesday, etc.


RESULT

A new git repository should be created for the project and all changes should be committed progressively. We should be able to easily see the parts you coded and differentiate it from framework code. Please use Github or Bitbucket private repository to deploy your code, provide a read permission to our account ( username is gitesoftcom for both platforms) and add the repository url to your reply. 


In comment to that task provide summary of your work in English. Please, write it in formal way as if you're talking with client



## Instructions

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

Note: Please change .env file to specify the API base URL
