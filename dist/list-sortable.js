System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, ListSortable;

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

      ListSortable = (function () {
        function ListSortable(http) {
          _classCallCheck(this, _ListSortable);

          this.items = [];
          this.items1 = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        var _ListSortable = ListSortable;

        _createClass(_ListSortable, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url).then(function (response) {
              _this.items = response.content.items;
            });
          }
        }, {
          key: 'moved',
          value: function moved() {}
        }]);

        ListSortable = inject(HttpClient)(ListSortable) || ListSortable;
        return ListSortable;
      })();

      _export('ListSortable', ListSortable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc29ydGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswQkFJYSxZQUFZOzs7Ozs7OztpQ0FKakIsTUFBTTs7c0NBQ04sVUFBVTs7Ozs7QUFHTCxrQkFBWTtBQUtaLGlCQUxBLFlBQVksQ0FLWCxJQUFJLEVBQUM7OztlQUpqQixLQUFLLEdBQUcsRUFBRTtlQUNWLE1BQU0sR0FBRyxFQUFFO2VBQ1gsR0FBRyxHQUFHLDhGQUE4Rjs7QUFHbEcsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7OzRCQVBVLFlBQVk7Ozs7aUJBU2Ysb0JBQUU7OztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEQsb0JBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3JDLENBQUMsQ0FBQztXQUNKOzs7aUJBRUksaUJBQUcsRUFDUDs7O0FBaEJVLG9CQUFZLEdBRHhCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVk7Ozs4QkFBWixZQUFZIiwiZmlsZSI6Imxpc3Qtc29ydGFibGUuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9