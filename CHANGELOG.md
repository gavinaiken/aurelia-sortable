<a name="0.5.3"></a>
## [0.5.3](https://github.com/oribella/aurelia-sortable/compare/v0.5.2...v0.5.3) (2015-12-13)


### Bug Fixes

* **dist:** update `dist` ([c0d8e31](https://github.com/oribella/aurelia-sortable/commit/c0d8e31))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/oribella/aurelia-sortable/compare/v0.5.1...v0.5.2) (2015-12-10)


### Bug Fixes

* **dist:** update dist to correct format ([a9699b8](https://github.com/oribella/aurelia-sortable/commit/a9699b8))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/oribella/aurelia-sortable/compare/v0.5.0...v0.5.1) (2015-12-10)


### Bug Fixes

* **sortable:** set correct `STRATEGY_FLAG` ([8a6cb83](https://github.com/oribella/aurelia-sortable/commit/8a6cb83))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/oribella/aurelia-sortable/compare/v0.4.1...v0.5.0) (2015-12-10)




<a name="0.4.1"></a>
## [0.4.1](https://github.com/oribella/aurelia-sortable/compare/v0.4.0...v0.4.1) (2015-12-08)




<a name="0.4.0"></a>
# [0.4.0](https://github.com/oribella/aurelia-sortable/compare/v0.3.3...v0.4.0) (2015-12-07)


### Bug Fixes

* **auto-scroll:** dont auto scroll if bottom is reached ([a386ed5](https://github.com/oribella/aurelia-sortable/commit/a386ed5))

### Features

* **placeholder:** simplify placeholder ([dd55d4d](https://github.com/oribella/aurelia-sortable/commit/dd55d4d))

### Performance Improvements

* **sortable:** throttle `tryMove` ([a1407bb](https://github.com/oribella/aurelia-sortable/commit/a1407bb))


### BREAKING CHANGES

* placeholder: remove the verbose `placeholder` binding and replace with a simple `placeholderClass` binding. Instead of manually defining the placeholder just clone the dragging view-model item and add the `placeholderClass`.



<a name="0.3.3"></a>
## [0.3.3](https://github.com/oribella/aurelia-sortable/compare/v0.3.2...v0.3.3) (2015-11-18)


### Bug Fixes

* **sortable:** use `overrideCtx` ([b9ab4da](https://github.com/oribella/aurelia-sortable/commit/b9ab4da))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/oribella/aurelia-sortable/compare/v0.3.1...v0.3.2) (2015-11-18)




<a name="0.3.1"></a>
## [0.3.1](https://github.com/oribella/aurelia-sortable/compare/v0.3.0...v0.3.1) (2015-11-11)


### Bug Fixes

* **sortable:** update to get the correct view model for a `sortable-item` ([df68c1d](https://github.com/oribella/aurelia-sortable/commit/df68c1d))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/oribella/aurelia-sortable/compare/v0.2.2...v0.3.0) (2015-11-11)


### Bug Fixes

* decorate Drag, AutoScroll as transient ([0d366f4](https://github.com/oribella/aurelia-sortable/commit/0d366f4))
* use the new PAL from Aurelia ([a40992c](https://github.com/oribella/aurelia-sortable/commit/a40992c))
* **scroll:** make sure to remove all event listeners ([6f6fc91](https://github.com/oribella/aurelia-sortable/commit/6f6fc91))
* **sortable:** use DOM.Element instead of Element ([d8a2fbd](https://github.com/oribella/aurelia-sortable/commit/d8a2fbd))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/oribella/aurelia-sortable/compare/v0.2.1...v0.2.2) (2015-10-15)


### Bug Fixes

* **sortable:** add `options.strategy` ([ac0ca0a](https://github.com/oribella/aurelia-sortable/commit/ac0ca0a))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/oribella/aurelia-sortable/compare/v0.2.0...v0.2.1) (2015-08-18)


### Bug Fixes

* **sortable:** reset drag elements style left and top ([c4a0a29](https://github.com/oribella/aurelia-sortable/commit/c4a0a29)), closes [#3](https://github.com/oribella/aurelia-sortable/issues/3)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/oribella/aurelia-sortable/compare/0.1.0...v0.2.0) (2015-08-16)


### Bug Fixes

* fixed  dependency and updated accordingly ([fc110c4](https://github.com/oribella/aurelia-sortable/commit/fc110c4))
* **index:** change globalizeResources -> globalResources since BREAKING CHANGE in Aurelia ([0985f32](https://github.com/oribella/aurelia-sortable/commit/0985f32))
* **index:** Move allow drag to  action. Make sure to call event.preventDefault to disable fi ([dcdcadc](https://github.com/oribella/aurelia-sortable/commit/dcdcadc))
* **sortable:** only align position if the offsetParent element is the same as the scroll elemen ([e20e377](https://github.com/oribella/aurelia-sortable/commit/e20e377))
* **sortable.js:** align drag element when auto scrolling ([55a9b04](https://github.com/oribella/aurelia-sortable/commit/55a9b04))
* **sortable.js:** make sure autoscroll don't crashes ([197b823](https://github.com/oribella/aurelia-sortable/commit/197b823))
* **sortable.js:** make sure to to set back original style attributes on the dragging element ([adef959](https://github.com/oribella/aurelia-sortable/commit/adef959))
* **sortable.js:** validate that element !== null in the closest function ([7b43aa4](https://github.com/oribella/aurelia-sortable/commit/7b43aa4))

### Features

* **sortable:** add support for binding scroll selector and expose ,  functions ([0b05852](https://github.com/oribella/aurelia-sortable/commit/0b05852))
* **sortable.js:** add bindable dragZIndex ([854fa0e](https://github.com/oribella/aurelia-sortable/commit/854fa0e))
* **sortable.js:** add the native event as first parameter to the allowDrag function. This could be ([0ecaf9c](https://github.com/oribella/aurelia-sortable/commit/0ecaf9c))
* **sortable.js:** moved, allowDrag, allowMove are now all using the eventArgs object as only param ([3b4b9c3](https://github.com/oribella/aurelia-sortable/commit/3b4b9c3))



<a name="0.1.0"></a>
# 0.1.0 (2015-07-11)




