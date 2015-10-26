var React = require('react');
var Image = require('./image.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return { 
      data: [
        {
          url: 'http://lorempixel.com/1000/600/nature/1/',
          desc: 'Optional desc...'
        },
        {
          url: 'http://lorempixel.com/1000/600/nature/2/',
          desc: 'Description...'
        },
        {
          url: 'http://lorempixel.com/1000/600/nature/3/',
          desc: 'Description...'
        }
      ]
    }
  },

  render: function() {
    var imageNodes = this.state.data.map( function(image){
        return(
          <li>
            <Image url={image.url} desc={image.desc}>
            </Image>
          </li>
        )
    });
    
    return (
      <ul>{ imageNodes }</ul>
    )    
  }

});