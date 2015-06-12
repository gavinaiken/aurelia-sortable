/* */ 
System.register(["oribella-framework"], function (_export) {
  var RETURN_FLAG, _classCallCheck, _createClass, Doubletap;

  return {
    setters: [function (_oribellaFramework) {
      RETURN_FLAG = _oribellaFramework.RETURN_FLAG;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Doubletap = (function () {
        function Doubletap(subscriber, element) {
          _classCallCheck(this, Doubletap);

          this.subscriber = subscriber;
          this.element = element;
          this.removeTap = undefined;
          this.timeoutId = undefined;
          this.count = 0;
        }

        _createClass(Doubletap, [{
          key: "bind",
          value: function bind(on, element, remove) {
            this.removeTap = on(element, "tap", {
              selector: this.subscriber.selector,
              options: this.subscriber.options,
              end: this.tapend.bind(this)
            });
            this.remove = remove;
          }
        }, {
          key: "unbind",
          value: function unbind() {
            if (this.count > 0 && this.count !== 1) {
              this.removeTap();
              return true;
            }
            return false;
          }
        }, {
          key: "tapend",
          value: function tapend(e, data) {
            ++this.count;
            if (this.count === 1) {
              this.timeoutId = setTimeout((function () {
                this.remove();
                this.removeTap();
              }).bind(this), this.subscriber.options.timeThreshold);
            } else if (this.count === 2) {
              clearTimeout(this.timeoutId);
              this.result = this.subscriber.end(e, data);
              return RETURN_FLAG.map(this.result) + RETURN_FLAG.REMOVE_OTHER_TYPES;
            }
          }
        }], [{
          key: "defaultOptions",
          value: function defaultOptions() {
            return {
              touches: 1,
              prio: 90,
              which: 1,
              timeThreshold: 250
            };
          }
        }]);

        return Doubletap;
      })();

      _export("Doubletap", Doubletap);
    }
  };
});