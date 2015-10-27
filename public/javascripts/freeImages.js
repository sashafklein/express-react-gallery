var $, FreeImages, _;

$ = require('jquery');
_ = require('lodash');

FreeImages = (function() {
  function FreeImages(search) {
    this.search = search;
  }

  FreeImages.prototype.fetch = function(callback) {
    $.ajax({
      crossDomain: true,
      type: "GET",
      url: this._dataUrl(),
      dataType: "jsonp",
      jsonpCallback: 'jsonCallback',
      success: function(result) {
        var images = _.reduce(result.sources, function(array, source) {
          return array.concat( source.result );
        }, [])
        
        return callback( images );
      },
      error: function(result) {
        return false;
      }
    });
    return true;
  };

  FreeImages.prototype._dataUrl = function() {
    return "http://freeimages.pictures/api/user/" + process.env.FREE_IMAGES_API_KEY + "/?keyword=" + this.search + "&format=jsonp";
  };

  return FreeImages;

})();

module.exports = FreeImages;