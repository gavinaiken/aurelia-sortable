System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, Flickr;

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

      Flickr = (function () {
        function Flickr(http) {
          _classCallCheck(this, _Flickr);

          this.heading = 'Flickr';
          this.images = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        var _Flickr = Flickr;

        _createClass(_Flickr, [{
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

        Flickr = inject(HttpClient)(Flickr) || Flickr;
        return Flickr;
      })();

      _export('Flickr', Flickr);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzBCQUlhLE1BQU07Ozs7Ozs7O2lDQUpYLE1BQU07O3NDQUNOLFVBQVU7Ozs7O0FBR0wsWUFBTTtBQUtOLGlCQUxBLE1BQU0sQ0FLTCxJQUFJLEVBQUM7OztlQUpqQixPQUFPLEdBQUcsUUFBUTtlQUNsQixNQUFNLEdBQUcsRUFBRTtlQUNYLEdBQUcsR0FBRyw4RkFBOEY7O0FBR2xHLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztzQkFQVSxNQUFNOzs7O2lCQVNULG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hELG9CQUFLLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUN0QyxDQUFDLENBQUM7V0FDSjs7O2lCQUNJLGlCQUFHLEVBQ1A7OztBQWZVLGNBQU0sR0FEbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiZmxpY2tyLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==