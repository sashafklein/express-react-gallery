var $ = require('jquery')
var React = require('react');
var Image = require('./image.jsx');
var FreeImages = require("../freeImages.js");

module.exports = React.createClass({

  getInitialState: function() {
    return { images: [], currentImage: 0, count: 0 }
  },
  componentDidMount: function() {
    var component = this;
    new FreeImages('nature').fetch( function(images) {
      component.setState({ images: images, count: images.length });
    });
  },
  placeholderClass: function () {
    if ( this.state.count == 0 ) {
      return 'placeholder';
    } else {
      return 'hidden';
    }
  },
  nextImage: function() {
    this.selectImage( this.state.currentImage + 1);
  },
  lastImage: function() {
    this.selectImage( this.state.currentImage - 1 );
  },
  selectImage: function(imageIndex) {
    if (imageIndex == this.state.count ) {
      this.setState({ currentImage: 0 })
    } else if (imageIndex < 0) {
      this.setState({ currentImage: this.state.count - 1})
    } else {
      this.setState({ currentImage: imageIndex });
    }
  },
  imageClass: function(index) {
    if (this.state.currentImage == index) {
      return ''
    } else {
      return 'hidden'
    };
  },
  render: function() {
    var component = this;
    var imageNodes = this.state.images.map( function(image, index){
        return(
          <li className='image-container'>
            <Image 
              url={image.url} 
              desc={image.description} 
              getClassName={ component.imageClass } 
              index={index}>
            </Image>
          </li>
        )
    });
    
    return (
      <ul className='gallery'>
        { imageNodes }
        <li className={ this.state.count ? 'hidden' : 'placeholder' }>
          <i className='fa fa-spinner fa-spin'></i>
        </li>
        <li className={ this.state.count ? 'controller' : 'hidden' }>
          <i onClick={ this.lastImage } className='fa fa-chevron-circle-left' ></i>
          <span class>{ this.state.currentImage + 1 }/{this.state.count}</span>
          <i onClick={ this.nextImage } className='fa fa-chevron-circle-right'></i>
        </li>
      </ul>
    );  
  }

});