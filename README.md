[![Build Status](https://travis-ci.org/heynickc/gameOn.svg?branch=master)](https://travis-ci.org/heynickc/gameOn)

## Game On ##

App for scheduling pickup games

### Server ###
Uses Node.js with Express.js for REST service and for serving static resources that are built by Yeoman in the client project.  MongoDB is used for persistence and the url is set as an ENV variable.  It uses dotenv for testing.

### Client ###
Client is built with Backbone.js.  It uses all of the Grunt plugins that come with the official Yeoman Backbone Generator generator-backbone.  It does all the minification and processing that the generator provides into the client folder, which is used by the Server project Express.js views.