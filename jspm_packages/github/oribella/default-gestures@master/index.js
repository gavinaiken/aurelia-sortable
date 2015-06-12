/* */ 
System.register(["oribella-framework", "oribella-tap", "oribella-doubletap", "oribella-longtap", "oribella-swipe", "oribella-longtap-swipe", "oribella-pinch", "oribella-rotate"], function (_export) {
  "use strict";

  var Oribella, Tap, Doubletap, Longtap, Swipe, LongtapSwipe, Pinch, Rotate, oribella;
  return {
    setters: [function (_oribellaFramework) {
      Oribella = _oribellaFramework.Oribella;
    }, function (_oribellaTap) {
      Tap = _oribellaTap.Tap;
    }, function (_oribellaDoubletap) {
      Doubletap = _oribellaDoubletap.Doubletap;
    }, function (_oribellaLongtap) {
      Longtap = _oribellaLongtap.Longtap;
    }, function (_oribellaSwipe) {
      Swipe = _oribellaSwipe.Swipe;
    }, function (_oribellaLongtapSwipe) {
      LongtapSwipe = _oribellaLongtapSwipe.LongtapSwipe;
    }, function (_oribellaPinch) {
      Pinch = _oribellaPinch.Pinch;
    }, function (_oribellaRotate) {
      Rotate = _oribellaRotate.Rotate;
    }],
    execute: function () {
      oribella = new Oribella();

      _export("oribella", oribella);

      oribella.withDefaultFlowStrategy().registerGesture("tap", Tap).registerGesture("doubletap", Doubletap).registerGesture("longtap", Longtap).registerGesture("swipe", Swipe).registerGesture("longtapswipe", LongtapSwipe).registerGesture("pinch", Pinch).registerGesture("rotate", Rotate).activate();
    }
  };
});