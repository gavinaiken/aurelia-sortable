System.register(["oribella"], function (_export) {
  var oribella;

  _export("configure", configure);

  function configure(aurelia) {
    aurelia.container.registerInstance("oribella", oribella);
    aurelia.use.standardConfiguration().developmentLogging().plugin("oribella/aurelia-sortable");

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_oribella) {
      oribella = _oribella.oribella;
    }],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1QkFFZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELFdBQU8sQ0FBQyxHQUFHLENBQ1IscUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FFcEIsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7O0FBRXZDLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtLQUFBLENBQUMsQ0FBQztHQUN4Qzs7OzsyQkFYTyxRQUFRIiwiZmlsZSI6ImFuaW1hdGlvbi1tYWluLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==