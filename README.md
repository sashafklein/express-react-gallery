# Node/Express/React Gallery

A simple Express app which uses React components to build a gallery populated from the FreeImages API, and which can grab new categories of images without a page refresh. 

This was an exploration of a series of technologies with which I have very little experience, so there are definitely some things I'd want to work on/change. Mostly:

- Figure out a working environment variable solution to mask the API key (although FreeImages is, well, free, so it doesn't much matter here), probably by routing the API call through the server-side code.
- Add CoffeeScript compilation to the gulp pipeline, so that I can update and write future React files (and dependencies) in CoffeeScript (or `.jsx.coffee`).

## To get up and running

Clone, and then:

```
npm install
npm start
```

This app uses `gulp` to compile the React `.jsx` files in `public/javascripts/src` into `public/javascript/build/app.js`. If you want to edit those files, install gulp (I suggest globally), and run it in a separate tab, where it will watch for and update changes:

```
npm install -g gulp 
gulp
```