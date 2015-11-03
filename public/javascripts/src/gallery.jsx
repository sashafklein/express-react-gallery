var $ = require('jquery')
var React = require('react');
var Image = require('./image.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return { images: [], currentImage: 0, count: 0, acceptKeyPress: true }
  },
  componentWillReceiveProps: function (props) {
    this.setState({
      images: props.images,
      count: props.images.length,
      currentImage: 0
    });
  },
  componentWillMount: function() {
    if (this.state.acceptKeyPress) {
      document.addEventListener("keydown", this.handleKeyPress, false);
    }
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
  previousImage: function() {
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
  handleKeyPress: function(e) {
    if ( this.state.count ) {
      if ( e.keyCode == 39 ) { // Right Arrow Key
        this.nextImage();
      } else if (e.keyCode == 37) { // Left Arrow Key
        this.previousImage();
      }
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
      <div className='full-gallery' onKeyDown={ this.handleKeyDown }>

        <ul className='gallery'>

          { this.props.children }

          { imageNodes }
          
          <li className={ this.state.count ? 'hidden' : 'placeholder' }>
            <i className='fa fa-spinner fa-spin'></i>
          </li>

          <li className={ this.state.count ? 'controller' : 'hidden' }>
            <i onClick={ this.previousImage } className='fa fa-chevron-circle-left' ></i>
            <span>{ this.state.currentImage + 1 }/{this.state.count}</span>
            <i onClick={ this.nextImage } className='fa fa-chevron-circle-right'></i>
          </li>
        </ul>
      </div>
    );  
  }

});