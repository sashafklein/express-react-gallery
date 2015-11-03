var $, FreeImages, _;

$ = require('jquery');
_ = require('lodash');

FreeImages = (function() {
  function FreeImages(search) {
    this.search = search;
  }

  FreeImages.prototype.fetch = function(callback) {
    return $.ajax({
      crossDomain: true,
      type: 'GET',
      url: this._dataUrl(),
      dataType: 'jsonp',
      jsonpCallback: 'jsonCallback',
      success: function(result) {
        var images;
        images = _.reduce(result.sources, (function(array, source) {
          return array.concat(source.result);
        }), []);
        return callback(images);
      },
      error: function(result) {
        alert('Something went wrong fetching images. Please refresh.');
        return false;
      }
    });
  };

  FreeImages.prototype._dataUrl = function() {
    return "//freeimages.pictures/api/user/" + 7419704496394844 + "/?keyword=" + this.search + "&format=jsonp";
  };

  return FreeImages;

})();

module.exports = FreeImages;