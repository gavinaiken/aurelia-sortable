System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, FlickrSortable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      FlickrSortable = (function () {
        function FlickrSortable(http) {
          _classCallCheck(this, _FlickrSortable);

          this.heading = 'Flickr';
          this.images = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        var _FlickrSortable = FlickrSortable;

        _createClass(_FlickrSortable, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }, {
          key: 'moved',
          value: function moved() {}
        }]);

        FlickrSortable = inject(HttpClient)(FlickrSortable) || FlickrSortable;
        return FlickrSortable;
      })();

      _export('FlickrSortable', FlickrSortable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci1zb3J0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzBCQUlhLGNBQWM7Ozs7Ozs7O2lDQUpuQixNQUFNOztzQ0FDTixVQUFVOzs7OztBQUdMLG9CQUFjO0FBS2QsaUJBTEEsY0FBYyxDQUtiLElBQUksRUFBQzs7O2VBSmpCLE9BQU8sR0FBRyxRQUFRO2VBQ2xCLE1BQU0sR0FBRyxFQUFFO2VBQ1gsR0FBRyxHQUFHLDhGQUE4Rjs7QUFHbEcsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7OzhCQVBVLGNBQWM7Ozs7aUJBU2pCLG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hELG9CQUFLLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUN0QyxDQUFDLENBQUM7V0FDSjs7O2lCQUVJLGlCQUFHLEVBQ1A7OztBQWhCVSxzQkFBYyxHQUQxQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjOzs7Z0NBQWQsY0FBYyIsImZpbGUiOiJmbGlja3Itc29ydGFibGUuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9