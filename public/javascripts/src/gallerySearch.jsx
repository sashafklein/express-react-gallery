var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return { value: 'nature', loaded: false }
  },
  componentDidMount: function() {
    this.resetImages();
  },
  handleChange: function(event) {
    this.setState({ value: event.target.value });
  },
  resetImages: function() {
    this.props.loadImages( this.state.value );
    this.setState({ value: null, loaded: true });
  },
  render: function() {
    return (
      <div className='gallery-search container'>
        <input 
          className='u-full-width'
          type='text' 
          value={ this.state.value } 
          placeholder='Fetch new images by category'
          onChange={ this.handleChange }></input>

        <button 
          onClick={ this.resetImages } 
          className='button-primary'
          disabled={!this.state.value}>
          Update Gallery
        </button>
      </div>
    );  
  }

});