/* */ 
System.register([], function (_export) {
  var _classCallCheck, _createClass, LongtapSwipe;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      LongtapSwipe = (function () {
        function LongtapSwipe(subscriber, element) {
          _classCallCheck(this, LongtapSwipe);

          this.subscriber = subscriber;
          this.element = element;
          this.remove = undefined;
          this.removeLongtap = undefined;
          this.removeSwipe = undefined;
          this.allowSwipe = false;
        }

        _createClass(LongtapSwipe, [{
          key: "bind",
          value: function bind(oribella, element, remove) {
            var lts = this;
            this.removeLongtap = oribella(element).longtap({
              selector: this.subscriber.selector,
              options: this.subscriber.options,
              start: function start() {
                lts.allowSwipe = false;
              },
              timeEnd: function timeEnd() {
                lts.allowSwipe = true;
              }
            });
            this.removeSwipe = oribella(element).swipe({
              selector: this.subscriber.selector,
              options: this.subscriber.options,
              start: this.swipestart.bind(this),
              update: this.swipeupdate.bind(this),
              end: this.swipeend.bind(this),
              cancel: this.swipecancel.bind(this)
            });
            this.remove = remove;
          }
        }, {
          key: "unbind",
          value: function unbind() {
            this.removeLongtap();
            this.removeSwipe();
          }
        }, {
          key: "swipestart",
          value: function swipestart(e, data) {
            if (!this.allowSwipe) {
              this.remove();
              return false;
            }
            this.subscriber.start(e, data);
            return true;
          }
        }, {
          key: "swipeupdate",
          value: function swipeupdate(e, data) {
            this.subscriber.update(e, data);
          }
        }, {
          key: "swipeend",
          value: function swipeend(e, data) {
            this.subscriber.end(e, data);
          }
        }, {
          key: "swipecancel",
          value: function swipecancel() {
            this.subscriber.cancel();
          }
        }], [{
          key: "defaultOptions",
          value: function defaultOptions() {
            return {
              radiusThreshold: 2,
              touches: 1,
              prio: 100,
              which: 1,
              timeThreshold: 500
            };
          }
        }]);

        return LongtapSwipe;
      })();

      _export("LongtapSwipe", LongtapSwipe);
    }
  };
});