/* */ 
System.register(["oribella-framework"], function (_export) {
  var RETURN_FLAG, GESTURE_STARTED, Point, _classCallCheck, _createClass, Pinch;

  return {
    setters: [function (_oribellaFramework) {
      RETURN_FLAG = _oribellaFramework.RETURN_FLAG;
      GESTURE_STARTED = _oribellaFramework.GESTURE_STARTED;
      Point = _oribellaFramework.Point;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Pinch = (function () {
        function Pinch(subscriber, element) {
          _classCallCheck(this, Pinch);

          this.subscriber = subscriber;
          this.element = element;
          this.result = undefined;
          this.startPoint1 = undefined;
          this.startPoint2 = undefined;
          this.currentPoint1 = undefined;
          this.currentPoint2 = undefined;
          this.centerPoint = new Point(0, 0);
          this.startDistance = undefined;
          this.currentDistance = undefined;
          this.distance = undefined;
        }

        _createClass(Pinch, [{
          key: "start",
          value: function start(e, data) {
            this.startPoint1 = data.pagePoints[0];
            this.startPoint2 = data.pagePoints[1]; //Could be undefined
          }
        }, {
          key: "update",
          value: function update(e, data) {
            if (!this.startPoint2) {
              this.startPoint2 = data.pagePoints[1];
            }

            this.currentPoint1 = data.pagePoints[0];
            this.currentPoint2 = data.pagePoints[1];

            this.startDistance = this.startPoint2.distanceTo(this.startPoint1);
            this.currentDistance = this.currentPoint2.distanceTo(this.currentPoint1);
            this.distance = Math.abs(this.startDistance - this.currentDistance);
            this.centerPoint.x = (this.currentPoint1.x + this.currentPoint2.x) / 2;
            this.centerPoint.y = (this.currentPoint1.y + this.currentPoint2.y) / 2;

            data.distance = this.distance;
            data.scale = this.currentDistance / this.startDistance;
            data.delta = this.currentDistance - this.startDistance;
            data.centerPoint = this.centerPoint;

            if (Math.abs(this.distance) < this.subscriber.options.pinchThreshold) {
              return;
            }

            if (!this[GESTURE_STARTED]) {
              this.result = this.subscriber.start(e, data);
              return RETURN_FLAG.map(this.result) + RETURN_FLAG.STARTED + RETURN_FLAG.REMOVE_OTHER_TYPES;
            } else {
              this.result = this.subscriber.update(e, data);
              return RETURN_FLAG.map(this.result);
            }
          }
        }, {
          key: "end",
          value: function end(e, data) {
            this.result = this.subscriber.end(e, data);
            return RETURN_FLAG.map(this.result);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.subscriber.cancel();
          }
        }], [{
          key: "defaultOptions",
          value: function defaultOptions() {
            return {
              pinchThreshold: 10,
              touches: 2,
              prio: 100
            };
          }
        }]);

        return Pinch;
      })();

      _export("Pinch", Pinch);
    }
  };
});
/*eslint consistent-return: 0*/