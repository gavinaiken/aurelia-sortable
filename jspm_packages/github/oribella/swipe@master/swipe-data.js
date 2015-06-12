/* */ 
System.register([], function (_export) {
  var _classCallCheck, _createClass, SwipeData;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      SwipeData = (function () {
        function SwipeData(maxObservations) {
          _classCallCheck(this, SwipeData);

          this.maxObservations = maxObservations;
          this.timeSeries = [];
        }

        _createClass(SwipeData, [{
          key: "addObservation",
          value: function addObservation(p) {
            if (this.timeSeries.length === this.maxObservations) {
              this.timeSeries.shift();
            }
            this.timeSeries.push({
              timeStamp: +new Date(),
              point: p
            });
          }
        }, {
          key: "getVelocity",
          value: function getVelocity(velocity) {
            var o1, o2, dist, elapsed, v;

            if (this.timeSeries.length < 2) {
              return 0;
            }
            o1 = this.timeSeries[this.timeSeries.length - 1];
            o2 = this.timeSeries[0];
            dist = o1.point.distanceTo(o2.point);
            elapsed = o1.timeStamp - o2.timeStamp;
            v = 1000 * dist / (1 + elapsed); //pixels per second
            return 0.8 * v + 0.2 * velocity;
          }
        }, {
          key: "getDelta",
          value: function getDelta() {
            var o1, o2, dx, dy;

            if (this.timeSeries.length < 2) {
              return [0, 0];
            }
            o1 = this.timeSeries[this.timeSeries.length - 1];
            o2 = this.timeSeries[this.timeSeries.length - 2];
            dx = o1.point.x - o2.point.x;
            dy = o1.point.y - o2.point.y;

            return [dx, dy];
          }
        }]);

        return SwipeData;
      })();

      _export("SwipeData", SwipeData);
    }
  };
});