# Node/Express/React Gallery

A simple Express app which uses React components to build a gallery populated from the Pixabay API, and which can grab new categories of images without a page refresh. 

This was an exploration of a series of technologies with which I have very little experience, so there are definitely some things I'd want to work on/change. Mostly:

- Figure out a working environment variable solution to mask the API key (although Pixabay is free, so it doesn't much matter here), probably by routing the API call through the server-side code.
- Add CoffeeScript compilation to the gulp pipeline, so that I can update and write future React files (and dependencies) in CoffeeScript (or `.cjsx`).
- Add (optional) image navigation -- where users can view (a subset of) the whole gallery, in miniature, and click on a specific thumbnail to move to that image.
- Move the **Gallery** component into its own separate project/repo/package/file, so that it can be simply included in any future React projects (and this one, as an external dependency).


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


## How it works

Basically, this app is a combination of three components:

- A **Gallery** component, designed to be simple and self-standing. It takes an array of images (each with a **url** attribute, and an optional and non-necesssary **desc** attribute), and turns them into a simple gallery, by nesting each under the Gallery component as an **Image** component, aware of its location and conditionally visible.
- A **GalleryLoader** component, wrapping the Gallery component, interacting with the Pixabay API, and passing its images to the Gallery component once loaded. 
- A **GallerySearch** component, nested within the GalleryLoader and "transcluded" (to use AngularJS terminology) within the Gallery. It's passed a function from the GallerySearch component to call when a user enters a new search term, at which point GalleryLoader will refresh the images and empty the search. 

The idea was to make Gallery a freestanding component, which could be used in any context with any number of APIs, and to lightly wrap it with components which increased its functionality.