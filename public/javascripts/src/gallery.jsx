var React = require('react');
var Image = require('./image.jsx');
var FreeImages = require('../freeImages')

module.exports = React.createClass({

  getInitialState: function() {
    return { data: [] }
  },

  componentDidMount: function() {
    var component = this;

    new FreeImages('nature').fetch( function(images) {
      component.setState({ data: images })
    });
  },

  render: function() {
    var imageNodes = this.state.data.map( function(image){
        return(
          <li>
            <Image url={image.url} desc={image.description}>
            </Image>
          </li>
        )
    });
    
    return (
      <ul>{ imageNodes }</ul>
    )    
  }

});