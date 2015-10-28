var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return ({
      url: '',
      desc: '',
      getClassName: function() { return ''; }
    });     
  },
  render: function() {
    return (
      <img 
        src={this.props.url} 
        title={this.props.desc} 
        className={ this.props.getClassName( this.props.index ) }>
      </img>
    );    
  }
});