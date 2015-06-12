/* */ 
System.register(["oribella-framework", "./swipe-data"], function (_export) {
  var RETURN_FLAG, GESTURE_STARTED, SwipeData, _classCallCheck, _createClass, Swipe;

  return {
    setters: [function (_oribellaFramework) {
      RETURN_FLAG = _oribellaFramework.RETURN_FLAG;
      GESTURE_STARTED = _oribellaFramework.GESTURE_STARTED;
    }, function (_swipeData) {
      SwipeData = _swipeData.SwipeData;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Swipe = (function () {
        function Swipe(subscriber, element) {
          _classCallCheck(this, Swipe);

          this.subscriber = subscriber;
          this.element = element;
          this.startPoint = undefined;
          this.result = undefined;
          this.swipeData = new SwipeData(5);
        }

        _createClass(Swipe, [{
          key: "start",
          value: function start(e, data) {
            this.startPoint = data.pagePoints[0];
            this.swipeData.addObservation(data.pagePoints[0]);
            data.swipe = this.swipeData;
            this.subscriber.down(e, data, this.element);
          }
        }, {
          key: "update",
          value: function update(e, data) {
            if (data.pagePoints[0].distanceTo(this.startPoint) < this.subscriber.options.radiusThreshold) {
              return;
            }
            this.swipeData.addObservation(data.pagePoints[0]);
            if (!this[GESTURE_STARTED]) {
              this.result = this.subscriber.start(e, data, this.element);
              return RETURN_FLAG.map(this.result) + RETURN_FLAG.STARTED + RETURN_FLAG.REMOVE_OTHER_TYPES;
            } else {
              this.result = this.subscriber.update(e, data, this.element);
              return RETURN_FLAG.map(this.result);
            }
          }
        }, {
          key: "end",
          value: function end(e, data) {
            this.swipeData.addObservation(data.pagePoints[0]);
            this.result = this.subscriber.end(e, data, this.element);
            return RETURN_FLAG.map(this.result);
          }
        }, {
          key: "cancel",
          value: function cancel(e, data) {
            this.subscriber.cancel(e, data, this.element);
          }
        }], [{
          key: "defaultOptions",
          value: function defaultOptions() {
            return {
              radiusThreshold: 2,
              touches: 1,
              prio: 100,
              which: 1 };
          }
        }]);

        return Swipe;
      })();

      _export("Swipe", Swipe);
    }
  };
});