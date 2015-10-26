var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return ({
      url: '',
      desc: ''
    });     
  },
  render: function() {
    return (
      <img src={this.props.url} title={this.props.desc}></img>
    );    
  }
});