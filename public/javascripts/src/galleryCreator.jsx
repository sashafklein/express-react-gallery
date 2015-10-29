var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return { value: 'nature' }
  },
  componentDidMount: function() {
    this.props.loadImages( this.state.value );
  },
  handleChange: function(event) {
    this.setState({ value: event.target.value });
  },
  resetImages: function() {
    this.props.loadImages( this.state.value );
    this.setState({ value: '' });
  },
  render: function() {
    return (
      <div className='gallery-creator'>
        <input 
          type='text' 
          value={ this.state.value } 
          placeholder='Keyword Search'
          onChange={ this.handleChange }></input>

        <button 
          onClick={ this.resetImages } 
          className='button-primary'>
          View Gallery
        </button>
      </div>
    );  
  }

});