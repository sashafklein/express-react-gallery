var React = require('react');
var ImagesAPI = require('../imagesAPI')
var GallerySearch = require('./gallerySearch.jsx')
var Gallery = require('./gallery.jsx')

module.exports = React.createClass({

  getInitialState: function() {
    return { value: 'nature', images: [], count: 0 }
  },
  loadImages: function(searchTerm) {
    var component = this;
    component.setState({ images: [], count: 0 });

    new ImagesAPI( searchTerm ).fetch( function(images) {
      component.setState({ images: images, count: images.length });
    });
  },
  render: function() {
    return (
      <div className='gallery-containing-div'>
        <Gallery images={ this.state.images } >
          
          <GallerySearch 
            value='nature' 
            loadImages={ this.loadImages } 
            className={ this.state.count ? '' : 'hidden' } />

        </Gallery>
      </div>
    );  
  }

});