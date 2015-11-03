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
      success: function(result) {
        var images = _.map(result.hits, function(r, i) { return { url: r.webformatURL, key: i }; });
        return callback(images);
      },
      error: function(result) {
        alert('Something went wrong fetching images. Please refresh.');
        return false;
      }
    });
  };

  FreeImages.prototype._dataUrl = function() {
    return "//pixabay.com/api/?username=" + 'sashafklein' + "&key=" + '31d30cd2461570421156' + "&q=" + this.search;
  };

  return FreeImages;

})();

module.exports = FreeImages;