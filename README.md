#Initial Setup
  * `npm install`
  * `bower install`
  
Make sure all the dependencies are installed!

## Server

To start server do command: 'node bin/www' , 'grunt', 'nodemon bin/www' from the root directory

    --> Listening on localhost port 3000

  workflow is as follows

  express server --> sets up link to front end (angular/bootstrap)
   
        |--> linked to view of angular ('./app') through routes(./routes)
                |-->'scripts' contain constructors and basic setup, init is in ./app/scripts/app.js
                |-->view holds the page templates

   The first initialization of the home page might be a little slow.
   
   
##Database
`mongod --dbpath data/db/`
