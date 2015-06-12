/* */ 
System.register(["oribella-framework"], function (_export) {
  var RETURN_FLAG, _classCallCheck, _createClass, Longtap;

  return {
    setters: [function (_oribellaFramework) {
      RETURN_FLAG = _oribellaFramework.RETURN_FLAG;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Longtap = (function () {
        function Longtap(subscriber, element) {
          _classCallCheck(this, Longtap);

          this.subscriber = subscriber;
          this.element = element;
          this.startPoint = undefined;
          this.result = undefined;
          this.timeoutId = undefined;
          this.valid = false;

          //timeEnd only used in longtap
          if (typeof this.subscriber.timeEnd === "undefined") {
            this.subscriber.timeEnd = function () {};
          }
        }

        _createClass(Longtap, [{
          key: "start",
          value: function start(e, data) {
            var _this = this;

            this.startPoint = data.pagePoints[0];
            this.timeoutId = setTimeout(function () {
              _this.valid = true;
              _this.subscriber.timeEnd(_this.startPoint);
            }, this.subscriber.options.timeThreshold);
            this.result = this.subscriber.start(e, data);
            return RETURN_FLAG.map(this.result) + RETURN_FLAG.STARTED;
          }
        }, {
          key: "update",
          value: function update(e, data) {
            if (data.pagePoints[0].distanceTo(this.startPoint) > this.subscriber.options.radiusThreshold) {
              return RETURN_FLAG.REMOVE;
            }
          }
        }, {
          key: "end",
          value: function end(e, data) {
            clearTimeout(this.timeoutId);
            if (!this.valid) {
              return RETURN_FLAG.REMOVE;
            }
            this.result = this.subscriber.end(e, data);
            return RETURN_FLAG.map(this.result) + RETURN_FLAG.REMOVE_OTHER_TYPES;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            clearTimeout(this.timeoutId);
            this.subscriber.cancel();
          }
        }], [{
          key: "defaultOptions",
          value: function defaultOptions() {
            return {
              radiusThreshold: 2,
              touches: 1,
              prio: 90,
              which: 1,
              timeThreshold: 500
            };
          }
        }]);

        return Longtap;
      })();

      _export("Longtap", Longtap);
    }
  };
});