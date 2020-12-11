(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "+Gz/":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverMode = void 0;
var HoverMode;

(function (HoverMode) {
  HoverMode["attract"] = "attract";
  HoverMode["bounce"] = "bounce";
  HoverMode["bubble"] = "bubble";
  HoverMode["connect"] = "connect";
  HoverMode["grab"] = "grab";
  HoverMode["light"] = "light";
  HoverMode["repulse"] = "repulse";
  HoverMode["slow"] = "slow";
  HoverMode["trail"] = "trail";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));

/***/ }),

/***/ "+HUL":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ShapeType.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShapeType = void 0;
var ShapeType;

(function (ShapeType) {
  ShapeType["char"] = "char";
  ShapeType["character"] = "character";
  ShapeType["circle"] = "circle";
  ShapeType["edge"] = "edge";
  ShapeType["image"] = "image";
  ShapeType["images"] = "images";
  ShapeType["line"] = "line";
  ShapeType["polygon"] = "polygon";
  ShapeType["square"] = "square";
  ShapeType["star"] = "star";
  ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));

/***/ }),

/***/ "+IuE":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./RecursivePartial */ "7RQj"), exports);

__exportStar(__webpack_require__(/*! ./ShapeData */ "4jJ9"), exports);

__exportStar(__webpack_require__(/*! ./ShapeDrawerFunctions */ "OtcP"), exports);

__exportStar(__webpack_require__(/*! ./SingleOrMultiple */ "dLKv"), exports);

/***/ }),

/***/ "+UjZ":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collisions = void 0;

var Enums_1 = __webpack_require__(/*! ../../../Enums */ "ZlLd");

var Bounce_1 = __webpack_require__(/*! ./Bounce/Bounce */ "za7v");

var Collisions = /*#__PURE__*/function () {
  function Collisions() {
    _classCallCheck(this, Collisions);

    this.bounce = new Bounce_1.Bounce();
    this.enable = false;
    this.mode = Enums_1.CollisionMode.bounce;
  }

  _createClass(Collisions, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.bounce.load(data.bounce);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }]);

  return Collisions;
}();

exports.Collisions = Collisions;

/***/ }),

/***/ "/6af":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Range.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = void 0;

var Range = function Range(x, y) {
  _classCallCheck(this, Range);

  this.position = {
    x: x,
    y: y
  };
};

exports.Range = Range;

/***/ }),

/***/ "/KHN":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Light.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Light = void 0;

var LightArea_1 = __webpack_require__(/*! ./LightArea */ "vuZh");

var LightShadow_1 = __webpack_require__(/*! ./LightShadow */ "FsTW");

var Light = /*#__PURE__*/function () {
  function Light() {
    _classCallCheck(this, Light);

    this.area = new LightArea_1.LightArea();
    this.shadow = new LightShadow_1.LightShadow();
  }

  _createClass(Light, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.area.load(data.area);
      this.shadow.load(data.shadow);
    }
  }]);

  return Light;
}();

exports.Light = Light;

/***/ }),

/***/ "/o70":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/OutModes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutModes = void 0;

var Modes_1 = __webpack_require__(/*! ../../../../Enums/Modes */ "ubkD");

var OutModes = /*#__PURE__*/function () {
  function OutModes() {
    _classCallCheck(this, OutModes);

    this.default = Modes_1.OutMode.out;
  }

  _createClass(OutModes, [{
    key: "load",
    value: function load(data) {
      var _a, _b, _c, _d;

      if (!data) {
        return;
      }

      if (data.default !== undefined) {
        this.default = data.default;
      }

      this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
      this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
      this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
      this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
    }
  }]);

  return OutModes;
}();

exports.OutModes = OutModes;

/***/ }),

/***/ "01Bu":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonDrawer = void 0;

var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "gYxR");

var PolygonDrawer = /*#__PURE__*/function (_PolygonDrawerBase_1$) {
  _inherits(PolygonDrawer, _PolygonDrawerBase_1$);

  var _super = _createSuper(PolygonDrawer);

  function PolygonDrawer() {
    _classCallCheck(this, PolygonDrawer);

    return _super.apply(this, arguments);
  }

  _createClass(PolygonDrawer, [{
    key: "getSidesData",
    value: function getSidesData(particle, radius) {
      var _a, _b;

      var polygon = particle.shapeData;
      var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
      return {
        count: {
          denominator: 1,
          numerator: sides
        },
        length: radius * 2.66 / (sides / 3)
      };
    }
  }, {
    key: "getCenter",
    value: function getCenter(particle, radius) {
      var sides = this.getSidesCount(particle);
      return {
        x: -radius / (sides / 3.5),
        y: -radius / (2.66 / 3.5)
      };
    }
  }]);

  return PolygonDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase);

exports.PolygonDrawer = PolygonDrawer;

/***/ }),

/***/ "0pRb":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particles.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particles = void 0;

var Particle_1 = __webpack_require__(/*! ./Particle */ "slsB");

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var InteractionManager_1 = __webpack_require__(/*! ./Particle/InteractionManager */ "1WdJ");

var Particles = /*#__PURE__*/function () {
  function Particles(container) {
    _classCallCheck(this, Particles);

    this.container = container;
    this.nextId = 0;
    this.array = [];
    this.limit = 0;
    this.linksFreq = new Map();
    this.trianglesFreq = new Map();
    this.interactionManager = new InteractionManager_1.InteractionManager(container);
    var canvasSize = this.container.canvas.size;
    this.linksColors = new Map();
    this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
  }

  _createClass(Particles, [{
    key: "init",
    value: function init() {
      var container = this.container;
      var options = container.options;
      this.linksFreq = new Map();
      this.trianglesFreq = new Map();
      var handled = false;

      var _iterator = _createForOfIteratorHelper(options.manualParticles),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;
          var pos = particle.position ? {
            x: particle.position.x * container.canvas.size.width / 100,
            y: particle.position.y * container.canvas.size.height / 100
          } : undefined;
          this.addParticle(pos, particle.options);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(container.plugins),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ref3 = _step2.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var plugin = _ref2[1];

          if (plugin.particlesInitialization !== undefined) {
            handled = plugin.particlesInitialization();
          }

          if (handled) {
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (!handled) {
        for (var i = this.count; i < options.particles.number.value; i++) {
          this.addParticle();
        }
      }

      if (options.infection.enable) {
        for (var _i = 0; _i < options.infection.infections; _i++) {
          var notInfected = this.array.filter(function (p) {
            return p.infecter.infectionStage === undefined;
          });
          var infected = Utils_1.Utils.itemFromArray(notInfected);
          infected.infecter.startInfection(0);
        }
      }

      this.interactionManager.init();
      container.noise.init();
    }
  }, {
    key: "redraw",
    value: function redraw() {
      this.clear();
      this.init();
      this.draw({
        value: 0,
        factor: 0
      });
    }
  }, {
    key: "removeAt",
    value: function removeAt(index, quantity) {
      if (index >= 0 && index <= this.count) {
        var _iterator3 = _createForOfIteratorHelper(this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1)),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var particle = _step3.value;
            particle.destroy();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  }, {
    key: "remove",
    value: function remove(particle) {
      this.removeAt(this.array.indexOf(particle));
    }
  }, {
    key: "update",
    value: function update(delta) {
      var container = this.container;
      var particlesToDelete = [];
      container.noise.update();

      var _iterator4 = _createForOfIteratorHelper(this.array),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _particle = _step4.value;

          _particle.move(delta);

          if (_particle.destroyed) {
            particlesToDelete.push(_particle);
            continue;
          }

          this.quadTree.insert(new Utils_1.Point(_particle.getPosition(), _particle));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      for (var _i2 = 0, _particlesToDelete = particlesToDelete; _i2 < _particlesToDelete.length; _i2++) {
        var particle = _particlesToDelete[_i2];
        this.remove(particle);
      }

      this.interactionManager.externalInteract(delta);

      var _iterator5 = _createForOfIteratorHelper(this.container.particles.array),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _particle2 = _step5.value;

          _particle2.update(delta);

          if (!_particle2.destroyed && !_particle2.spawning) {
            this.interactionManager.particlesInteract(_particle2, delta);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "draw",
    value: function draw(delta) {
      var container = this.container;
      container.canvas.clear();
      var canvasSize = this.container.canvas.size;
      this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
      this.update(delta);

      var _iterator6 = _createForOfIteratorHelper(container.plugins),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ref6 = _step6.value;

          var _ref5 = _slicedToArray(_ref6, 2);

          var plugin = _ref5[1];
          container.canvas.drawPlugin(plugin, delta);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var _iterator7 = _createForOfIteratorHelper(this.array),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var p = _step7.value;
          p.draw(delta);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.array = [];
    }
  }, {
    key: "push",
    value: function push(nb, mouse, overrideOptions) {
      var container = this.container;
      var options = container.options;
      var limit = options.particles.number.limit * container.density;
      this.pushing = true;

      if (limit > 0) {
        var countToRemove = this.count + nb - limit;

        if (countToRemove > 0) {
          this.removeQuantity(countToRemove);
        }
      }

      for (var i = 0; i < nb; i++) {
        this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions);
      }

      this.pushing = false;
    }
  }, {
    key: "addParticle",
    value: function addParticle(position, overrideOptions) {
      try {
        var particle = new Particle_1.Particle(this.nextId, this.container, position, overrideOptions);
        this.array.push(particle);
        this.nextId++;
        return particle;
      } catch (_a) {
        console.warn("error adding particle");
        return;
      }
    }
  }, {
    key: "removeQuantity",
    value: function removeQuantity(quantity) {
      this.removeAt(0, quantity);
    }
  }, {
    key: "getLinkFrequency",
    value: function getLinkFrequency(p1, p2) {
      var key = "".concat(Math.min(p1.id, p2.id), "_").concat(Math.max(p1.id, p2.id));
      var res = this.linksFreq.get(key);

      if (res === undefined) {
        res = Math.random();
        this.linksFreq.set(key, res);
      }

      return res;
    }
  }, {
    key: "getTriangleFrequency",
    value: function getTriangleFrequency(p1, p2, p3) {
      var _ref7 = [p1.id, p2.id, p3.id],
          id1 = _ref7[0],
          id2 = _ref7[1],
          id3 = _ref7[2];

      if (id1 > id2) {
        var _ref8 = [id1, id2];
        id2 = _ref8[0];
        id1 = _ref8[1];
      }

      if (id2 > id3) {
        var _ref9 = [id2, id3];
        id3 = _ref9[0];
        id2 = _ref9[1];
      }

      if (id1 > id3) {
        var _ref10 = [id1, id3];
        id3 = _ref10[0];
        id1 = _ref10[1];
      }

      var key = "".concat(id1, "_").concat(id2, "_").concat(id3);
      var res = this.trianglesFreq.get(key);

      if (res === undefined) {
        res = Math.random();
        this.trianglesFreq.set(key, res);
      }

      return res;
    }
  }, {
    key: "setDensity",
    value: function setDensity() {
      var options = this.container.options;
      this.applyDensity(options.particles);
    }
  }, {
    key: "applyDensity",
    value: function applyDensity(options) {
      var _a;

      if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
        return;
      }

      var numberOptions = options.number;
      var densityFactor = this.initDensityFactor(numberOptions.density);
      var optParticlesNumber = numberOptions.value;
      var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
      var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor;
      var particlesCount = this.count;
      this.limit = numberOptions.limit * densityFactor;

      if (particlesCount < particlesNumber) {
        this.push(Math.abs(particlesNumber - particlesCount), undefined, options);
      } else if (particlesCount > particlesNumber) {
        this.removeQuantity(particlesCount - particlesNumber);
      }
    }
  }, {
    key: "initDensityFactor",
    value: function initDensityFactor(densityOptions) {
      var container = this.container;

      if (!container.canvas.element || !densityOptions.enable) {
        return 1;
      }

      var canvas = container.canvas.element;
      var pxRatio = container.retina.pixelRatio;
      return canvas.width * canvas.height / (densityOptions.factor * pxRatio * pxRatio * densityOptions.area);
    }
  }, {
    key: "count",
    get: function get() {
      return this.array.length;
    }
  }]);

  return Particles;
}();

exports.Particles = Particles;

/***/ }),

/***/ "1WdJ":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractionManager = void 0;

var Grabber_1 = __webpack_require__(/*! ../../Interactions/External/Grabber */ "lp8f");

var Repulser_1 = __webpack_require__(/*! ../../Interactions/External/Repulser */ "hNh6");

var Bubbler_1 = __webpack_require__(/*! ../../Interactions/External/Bubbler */ "W21g");

var Connector_1 = __webpack_require__(/*! ../../Interactions/External/Connector */ "IJxr");

var Linker_1 = __webpack_require__(/*! ../../Interactions/Particles/Linker */ "Yjw3");

var Attractor_1 = __webpack_require__(/*! ../../Interactions/Particles/Attractor */ "gpyY");

var Collider_1 = __webpack_require__(/*! ../../Interactions/Particles/Collider */ "AJiq");

var Infecter_1 = __webpack_require__(/*! ../../Interactions/Particles/Infecter */ "C+1W");

var TrailMaker_1 = __webpack_require__(/*! ../../Interactions/External/TrailMaker */ "FQ7a");

var Attractor_2 = __webpack_require__(/*! ../../Interactions/External/Attractor */ "Rgnc");

var Lighter_1 = __webpack_require__(/*! ../../Interactions/Particles/Lighter */ "FUZa");

var Lighter_2 = __webpack_require__(/*! ../../Interactions/External/Lighter */ "ZJwF");

var Bouncer_1 = __webpack_require__(/*! ../../Interactions/External/Bouncer */ "Aife");

var InteractionManager = /*#__PURE__*/function () {
  function InteractionManager(container) {
    _classCallCheck(this, InteractionManager);

    this.container = container;
    this.externalInteractors = [new Bouncer_1.Bouncer(container), new Bubbler_1.Bubbler(container), new Connector_1.Connector(container), new Grabber_1.Grabber(container), new Lighter_2.Lighter(container), new Attractor_2.Attractor(container), new Repulser_1.Repulser(container), new TrailMaker_1.TrailMaker(container)];
    this.particleInteractors = [new Attractor_1.Attractor(container), new Lighter_1.Lighter(container), new Collider_1.Collider(container), new Infecter_1.Infecter(container), new Linker_1.Linker(container)];
  }

  _createClass(InteractionManager, [{
    key: "init",
    value: function init() {}
  }, {
    key: "externalInteract",
    value: function externalInteract(delta) {
      var _iterator = _createForOfIteratorHelper(this.externalInteractors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var interactor = _step.value;

          if (interactor.isEnabled()) {
            interactor.interact(delta);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "particlesInteract",
    value: function particlesInteract(particle, delta) {
      var _iterator2 = _createForOfIteratorHelper(this.externalInteractors),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var interactor = _step2.value;
          interactor.reset(particle);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(this.particleInteractors),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _interactor = _step3.value;

          if (_interactor.isEnabled(particle)) {
            _interactor.interact(particle, delta);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return InteractionManager;
}();

exports.InteractionManager = InteractionManager;

/***/ }),

/***/ "1X1F":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shadow = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "vRcM");

var Shadow = /*#__PURE__*/function () {
  function Shadow() {
    _classCallCheck(this, Shadow);

    this.blur = 0;
    this.color = new OptionsColor_1.OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000000";
  }

  _createClass(Shadow, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.blur !== undefined) {
        this.blur = data.blur;
      }

      this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.offset === undefined) {
        return;
      }

      if (data.offset.x !== undefined) {
        this.offset.x = data.offset.x;
      }

      if (data.offset.y !== undefined) {
        this.offset.y = data.offset.y;
      }
    }
  }]);

  return Shadow;
}();

exports.Shadow = Shadow;

/***/ }),

/***/ "1mUk":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/ManualParticle.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManualParticle = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var ManualParticle = /*#__PURE__*/function () {
  function ManualParticle() {
    _classCallCheck(this, ManualParticle);
  }

  _createClass(ManualParticle, [{
    key: "load",
    value: function load(data) {
      var _a, _b;

      if (!data) {
        return;
      }

      if (data.position !== undefined) {
        this.position = {
          x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
          y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50
        };
      }

      if (data.options !== undefined) {
        this.options = Utils_1.Utils.deepExtend({}, data.options);
      }
    }
  }]);

  return ManualParticle;
}();

exports.ManualParticle = ManualParticle;

/***/ }),

/***/ "2JtW":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Noise/NoiseDelay.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoiseDelay = void 0;

var ValueWithRandom_1 = __webpack_require__(/*! ../../../ValueWithRandom */ "9P/A");

var NoiseDelay = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(NoiseDelay, _ValueWithRandom_1$Va);

  var _super = _createSuper(NoiseDelay);

  function NoiseDelay() {
    _classCallCheck(this, NoiseDelay);

    return _super.call(this);
  }

  return NoiseDelay;
}(ValueWithRandom_1.ValueWithRandom);

exports.NoiseDelay = NoiseDelay;

/***/ }),

/***/ "2MUX":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "h875");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "2kAo":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/EventListeners.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventListeners = void 0;

var Enums_1 = __webpack_require__(/*! ../Enums */ "ZlLd");

var Constants_1 = __webpack_require__(/*! ./Constants */ "ZRNA");

function manageListener(element, event, handler, add, options) {
  if (add) {
    var addOptions = {
      passive: true
    };

    if (typeof options === "boolean") {
      addOptions.capture = options;
    } else if (options !== undefined) {
      addOptions = options;
    }

    element.addEventListener(event, handler, addOptions);
  } else {
    var removeOptions = options;
    element.removeEventListener(event, handler, removeOptions);
  }
}

var EventListeners = /*#__PURE__*/function () {
  function EventListeners(container) {
    var _this = this;

    _classCallCheck(this, EventListeners);

    this.container = container;
    this.canPush = true;

    this.mouseMoveHandler = function (e) {
      return _this.mouseTouchMove(e);
    };

    this.touchStartHandler = function (e) {
      return _this.mouseTouchMove(e);
    };

    this.touchMoveHandler = function (e) {
      return _this.mouseTouchMove(e);
    };

    this.touchEndHandler = function () {
      return _this.mouseTouchFinish();
    };

    this.mouseLeaveHandler = function () {
      return _this.mouseTouchFinish();
    };

    this.touchCancelHandler = function () {
      return _this.mouseTouchFinish();
    };

    this.touchEndClickHandler = function (e) {
      return _this.mouseTouchClick(e);
    };

    this.mouseUpHandler = function (e) {
      return _this.mouseTouchClick(e);
    };

    this.mouseDownHandler = function () {
      return _this.mouseDown();
    };

    this.visibilityChangeHandler = function () {
      return _this.handleVisibilityChange();
    };

    this.resizeHandler = function () {
      return _this.handleWindowResize();
    };
  }

  _createClass(EventListeners, [{
    key: "addListeners",
    value: function addListeners() {
      this.manageListeners(true);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      this.manageListeners(false);
    }
  }, {
    key: "manageListeners",
    value: function manageListeners(add) {
      var _a;

      var container = this.container;
      var options = container.options;
      var detectType = options.interactivity.detectsOn;
      var mouseLeaveEvent = Constants_1.Constants.mouseLeaveEvent;

      if (detectType === Enums_1.InteractivityDetect.window) {
        container.interactivity.element = window;
        mouseLeaveEvent = Constants_1.Constants.mouseOutEvent;
      } else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
        var canvasEl = container.canvas.element;
        container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
      } else {
        container.interactivity.element = container.canvas.element;
      }

      var interactivityEl = container.interactivity.element;

      if (!interactivityEl) {
        return;
      }

      var html = interactivityEl;

      if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
        manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
        manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);

        if (!options.interactivity.events.onClick.enable) {
          manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
        } else {
          manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
          manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
          manageListener(interactivityEl, Constants_1.Constants.mouseDownEvent, this.mouseDownHandler, add);
        }

        manageListener(interactivityEl, mouseLeaveEvent, this.mouseLeaveHandler, add);
        manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
      }

      if (container.canvas.element) {
        container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
      }

      if (options.interactivity.events.resize) {
        manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
      }

      if (document) {
        manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
      }
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      var _a;

      (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      var container = this.container;
      var options = container.options;
      this.mouseTouchFinish();

      if (!options.pauseOnBlur) {
        return;
      }

      if (document === null || document === void 0 ? void 0 : document.hidden) {
        container.pageHidden = true;
        container.pause();
      } else {
        container.pageHidden = false;

        if (container.getAnimationStatus()) {
          container.play(true);
        } else {
          container.draw();
        }
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown() {
      var interactivity = this.container.interactivity;

      if (interactivity) {
        var mouse = interactivity.mouse;
        mouse.clicking = true;
        mouse.downPosition = mouse.position;
      }
    }
  }, {
    key: "mouseTouchMove",
    value: function mouseTouchMove(e) {
      var _a, _b, _c, _d, _e, _f, _g;

      var container = this.container;
      var options = container.options;

      if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
        return;
      }

      container.interactivity.mouse.inside = true;
      var pos;
      var canvas = container.canvas.element;

      if (e.type.startsWith("mouse")) {
        this.canPush = true;
        var mouseEvent = e;

        if (container.interactivity.element === window) {
          if (canvas) {
            var clientRect = canvas.getBoundingClientRect();
            pos = {
              x: mouseEvent.clientX - clientRect.left,
              y: mouseEvent.clientY - clientRect.top
            };
          }
        } else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
          var source = mouseEvent.target;
          var target = mouseEvent.currentTarget;
          var canvasEl = container.canvas.element;

          if (source && target && canvasEl) {
            var sourceRect = source.getBoundingClientRect();
            var targetRect = target.getBoundingClientRect();
            var canvasRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
              y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
            };
          } else {
            pos = {
              x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
              y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY
            };
          }
        } else {
          if (mouseEvent.target === container.canvas.element) {
            pos = {
              x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
              y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY
            };
          }
        }
      } else {
        this.canPush = e.type !== "touchmove";
        var touchEvent = e;
        var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];

        var _canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();

        pos = {
          x: lastTouch.clientX - ((_f = _canvasRect === null || _canvasRect === void 0 ? void 0 : _canvasRect.left) !== null && _f !== void 0 ? _f : 0),
          y: lastTouch.clientY - ((_g = _canvasRect === null || _canvasRect === void 0 ? void 0 : _canvasRect.top) !== null && _g !== void 0 ? _g : 0)
        };
      }

      var pxRatio = container.retina.pixelRatio;

      if (pos) {
        pos.x *= pxRatio;
        pos.y *= pxRatio;
      }

      container.interactivity.mouse.position = pos;
      container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    }
  }, {
    key: "mouseTouchFinish",
    value: function mouseTouchFinish() {
      var interactivity = this.container.interactivity;

      if (interactivity === undefined) {
        return;
      }

      var mouse = interactivity.mouse;
      delete mouse.position;
      delete mouse.clickPosition;
      delete mouse.downPosition;
      interactivity.status = Constants_1.Constants.mouseLeaveEvent;
      mouse.inside = false;
      mouse.clicking = false;
    }
  }, {
    key: "mouseTouchClick",
    value: function mouseTouchClick(e) {
      var container = this.container;
      var options = container.options;
      var mouse = container.interactivity.mouse;
      mouse.inside = true;
      var handled = false;
      var mousePosition = mouse.position;

      if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
        return;
      }

      var _iterator = _createForOfIteratorHelper(container.plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ref3 = _step.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var plugin = _ref2[1];

          if (plugin.clickPositionValid !== undefined) {
            handled = plugin.clickPositionValid(mousePosition);

            if (handled) {
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!handled) {
        this.doMouseTouchClick(e);
      }

      mouse.clicking = false;
    }
  }, {
    key: "doMouseTouchClick",
    value: function doMouseTouchClick(e) {
      var _this2 = this;

      var container = this.container;
      var options = container.options;

      if (this.canPush) {
        var mousePos = container.interactivity.mouse.position;

        if (mousePos) {
          container.interactivity.mouse.clickPosition = {
            x: mousePos.x,
            y: mousePos.y
          };
        } else {
          return;
        }

        container.interactivity.mouse.clickTime = new Date().getTime();
        var onClick = options.interactivity.events.onClick;

        if (onClick.mode instanceof Array) {
          var _iterator2 = _createForOfIteratorHelper(onClick.mode),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var mode = _step2.value;
              this.handleClickMode(mode);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          this.handleClickMode(onClick.mode);
        }
      }

      if (e.type === "touchend") {
        setTimeout(function () {
          return _this2.mouseTouchFinish();
        }, 500);
      }
    }
  }, {
    key: "handleClickMode",
    value: function handleClickMode(mode) {
      var container = this.container;
      var options = container.options;
      var pushNb = options.interactivity.modes.push.quantity;
      var removeNb = options.interactivity.modes.remove.quantity;

      switch (mode) {
        case Enums_1.ClickMode.push:
          {
            if (pushNb > 0) {
              container.particles.push(pushNb, container.interactivity.mouse);
            }

            break;
          }

        case Enums_1.ClickMode.remove:
          container.particles.removeQuantity(removeNb);
          break;

        case Enums_1.ClickMode.bubble:
          container.bubble.clicking = true;
          break;

        case Enums_1.ClickMode.repulse:
          container.repulse.clicking = true;
          container.repulse.count = 0;

          var _iterator3 = _createForOfIteratorHelper(container.repulse.particles),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var particle = _step3.value;
              particle.velocity.horizontal = particle.initialVelocity.horizontal;
              particle.velocity.vertical = particle.initialVelocity.vertical;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          container.repulse.particles = [];
          container.repulse.finish = false;
          setTimeout(function () {
            if (!container.destroyed) {
              container.repulse.clicking = false;
            }
          }, options.interactivity.modes.repulse.duration * 1000);
          break;

        case Enums_1.ClickMode.attract:
          container.attract.clicking = true;
          container.attract.count = 0;

          var _iterator4 = _createForOfIteratorHelper(container.attract.particles),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _particle = _step4.value;
              _particle.velocity.horizontal = _particle.initialVelocity.horizontal;
              _particle.velocity.vertical = _particle.initialVelocity.vertical;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          container.attract.particles = [];
          container.attract.finish = false;
          setTimeout(function () {
            if (!container.destroyed) {
              container.attract.clicking = false;
            }
          }, options.interactivity.modes.attract.duration * 1000);
          break;

        case Enums_1.ClickMode.pause:
          if (container.getAnimationStatus()) {
            container.pause();
          } else {
            container.play();
          }

          break;
      }

      var _iterator5 = _createForOfIteratorHelper(container.plugins),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _ref6 = _step5.value;

          var _ref5 = _slicedToArray(_ref6, 2);

          var plugin = _ref5[1];

          if (plugin.handleClickMode) {
            plugin.handleClickMode(mode);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);

  return EventListeners;
}();

exports.EventListeners = EventListeners;

/***/ }),

/***/ "3R7e":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opacity = void 0;

var OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "NiW4");

var ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "9P/A");

var Opacity = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(Opacity, _ValueWithRandom_1$Va);

  var _super = _createSuper(Opacity);

  function Opacity() {
    var _this;

    _classCallCheck(this, Opacity);

    _this = _super.call(this);
    _this.animation = new OpacityAnimation_1.OpacityAnimation();
    _this.random.minimumValue = 0.1;
    _this.value = 1;
    return _this;
  }

  _createClass(Opacity, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (!data) {
        return;
      }

      _get(_getPrototypeOf(Opacity.prototype), "load", this).call(this, data);

      this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
    }
  }, {
    key: "anim",
    get: function get() {
      return this.animation;
    },
    set: function set(value) {
      this.animation = value;
    }
  }]);

  return Opacity;
}(ValueWithRandom_1.ValueWithRandom);

exports.Opacity = Opacity;

/***/ }),

/***/ "4jJ9":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/ShapeData.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ "4tm2":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Push = void 0;

var Push = /*#__PURE__*/function () {
  function Push() {
    _classCallCheck(this, Push);

    this.quantity = 4;
  }

  _createClass(Push, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data === undefined) {
        return;
      }

      var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

      if (quantity !== undefined) {
        this.quantity = quantity;
      }
    }
  }, {
    key: "particles_nb",
    get: function get() {
      return this.quantity;
    },
    set: function set(value) {
      this.quantity = value;
    }
  }]);

  return Push;
}();

exports.Push = Push;

/***/ }),

/***/ "56Cg":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfectionStage = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "vRcM");

var InfectionStage = /*#__PURE__*/function () {
  function InfectionStage() {
    _classCallCheck(this, InfectionStage);

    this.color = new OptionsColor_1.OptionsColor();
    this.color.value = "#ff0000";
    this.radius = 0;
    this.rate = 1;
  }

  _createClass(InfectionStage, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      this.duration = data.duration;
      this.infectedStage = data.infectedStage;

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }

      if (data.rate !== undefined) {
        this.rate = data.rate;
      }
    }
  }]);

  return InfectionStage;
}();

exports.InfectionStage = InfectionStage;

/***/ }),

/***/ "5h2M":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "67oe":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Mover.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mover = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

var Mover = /*#__PURE__*/function () {
  function Mover(container, particle) {
    _classCallCheck(this, Mover);

    this.container = container;
    this.particle = particle;
  }

  _createClass(Mover, [{
    key: "move",
    value: function move(delta) {
      var particle = this.particle;
      particle.bubble.inRange = false;
      particle.links = [];

      var _iterator = _createForOfIteratorHelper(this.container.plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ref3 = _step.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var plugin = _ref2[1];

          if (particle.destroyed) {
            break;
          }

          if (plugin.particleUpdate) {
            plugin.particleUpdate(particle, delta);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (particle.destroyed) {
        return;
      }

      this.moveParticle(delta);
      this.moveParallax();
    }
  }, {
    key: "moveParticle",
    value: function moveParticle(delta) {
      var _a, _b;

      var particle = this.particle;
      var particlesOptions = particle.particlesOptions;

      if (!particlesOptions.move.enable) {
        return;
      }

      var container = this.container;
      var slowFactor = this.getProximitySpeedFactor();
      var baseSpeed = ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed) * container.retina.reduceFactor;
      var maxSize = (_b = particle.sizeValue) !== null && _b !== void 0 ? _b : container.retina.sizeValue;
      var sizeFactor = particlesOptions.move.size ? particle.getRadius() / maxSize : 1;
      var moveSpeed = baseSpeed / 2 * sizeFactor * slowFactor * delta.factor;
      this.applyNoise(delta);
      var gravityOptions = particlesOptions.move.gravity;

      if (gravityOptions.enable) {
        particle.velocity.vertical += gravityOptions.acceleration * delta.factor / (60 * moveSpeed);
      }

      var velocity = {
        horizontal: particle.velocity.horizontal * moveSpeed,
        vertical: particle.velocity.vertical * moveSpeed
      };

      if (gravityOptions.enable && velocity.vertical >= gravityOptions.maxSpeed && gravityOptions.maxSpeed > 0) {
        velocity.vertical = gravityOptions.maxSpeed;
        particle.velocity.vertical = velocity.vertical / moveSpeed;
      }

      particle.position.x += velocity.horizontal;
      particle.position.y += velocity.vertical;

      if (particlesOptions.move.vibrate) {
        particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
        particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
      }

      var initialPosition = particle.initialPosition;
      var initialDistance = Utils_1.NumberUtils.getDistance(initialPosition, particle.position);

      if (particle.maxDistance) {
        if (initialDistance >= particle.maxDistance && !particle.misplaced) {
          particle.misplaced = initialDistance > particle.maxDistance;
          particle.velocity.horizontal = particle.velocity.vertical / 2 - particle.velocity.horizontal;
          particle.velocity.vertical = particle.velocity.horizontal / 2 - particle.velocity.vertical;
        } else if (initialDistance < particle.maxDistance && particle.misplaced) {
          particle.misplaced = false;
        } else if (particle.misplaced) {
          if (particle.position.x < initialPosition.x && particle.velocity.horizontal < 0 || particle.position.x > initialPosition.x && particle.velocity.horizontal > 0) {
            particle.velocity.horizontal *= -Math.random();
          }

          if (particle.position.y < initialPosition.y && particle.velocity.vertical < 0 || particle.position.y > initialPosition.y && particle.velocity.vertical > 0) {
            particle.velocity.vertical *= -Math.random();
          }
        }
      }
    }
  }, {
    key: "applyNoise",
    value: function applyNoise(delta) {
      var particle = this.particle;
      var particlesOptions = particle.particlesOptions;
      var noiseOptions = particlesOptions.move.noise;
      var noiseEnabled = noiseOptions.enable;

      if (!noiseEnabled) {
        return;
      }

      var container = this.container;

      if (particle.lastNoiseTime <= particle.noiseDelay) {
        particle.lastNoiseTime += delta.value;
        return;
      }

      var noise = container.noise.generate(particle);
      particle.velocity.horizontal += Math.cos(noise.angle) * noise.length;
      particle.velocity.horizontal = Utils_1.NumberUtils.clamp(particle.velocity.horizontal, -1, 1);
      particle.velocity.vertical += Math.sin(noise.angle) * noise.length;
      particle.velocity.vertical = Utils_1.NumberUtils.clamp(particle.velocity.vertical, -1, 1);
      particle.lastNoiseTime -= particle.noiseDelay;
    }
  }, {
    key: "moveParallax",
    value: function moveParallax() {
      var container = this.container;
      var options = container.options;

      if (Utils_1.Utils.isSsr() || !options.interactivity.events.onHover.parallax.enable) {
        return;
      }

      var particle = this.particle;
      var parallaxForce = options.interactivity.events.onHover.parallax.force;
      var mousePos = container.interactivity.mouse.position;

      if (!mousePos) {
        return;
      }

      var canvasCenter = {
        x: container.canvas.size.width / 2,
        y: container.canvas.size.height / 2
      };
      var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
      var factor = particle.getRadius() / parallaxForce;
      var tmp = {
        x: (mousePos.x - canvasCenter.x) * factor,
        y: (mousePos.y - canvasCenter.y) * factor
      };
      particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
      particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    }
  }, {
    key: "getProximitySpeedFactor",
    value: function getProximitySpeedFactor() {
      var container = this.container;
      var options = container.options;
      var active = Utils_1.Utils.isInArray(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);

      if (!active) {
        return 1;
      }

      var mousePos = this.container.interactivity.mouse.position;

      if (!mousePos) {
        return 1;
      }

      var particlePos = this.particle.getPosition();
      var dist = Utils_1.NumberUtils.getDistance(mousePos, particlePos);
      var radius = container.retina.slowModeRadius;

      if (dist > radius) {
        return 1;
      }

      var proximityFactor = dist / radius || 0;
      var slowFactor = options.interactivity.modes.slow.factor;
      return proximityFactor / slowFactor;
    }
  }]);

  return Mover;
}();

exports.Mover = Mover;

/***/ }),

/***/ "6a9T":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskPlugin = void 0;

var PolygonMaskInstance_1 = __webpack_require__(/*! ./PolygonMaskInstance */ "ehru");

var PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "vGWO");

var Enums_1 = __webpack_require__(/*! ./Enums */ "qtyS");

var PolygonMaskPlugin = /*#__PURE__*/function () {
  function PolygonMaskPlugin() {
    _classCallCheck(this, PolygonMaskPlugin);

    this.id = "polygonMask";
  }

  _createClass(PolygonMaskPlugin, [{
    key: "getPlugin",
    value: function getPlugin(container) {
      return new PolygonMaskInstance_1.PolygonMaskInstance(container);
    }
  }, {
    key: "needsPlugin",
    value: function needsPlugin(options) {
      var _a, _b, _c;

      return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : ((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none;
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(options, source) {
      if (!this.needsPlugin(source)) {
        return;
      }

      var optionsCast = options;
      var polygonOptions = optionsCast.polygon;

      if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === undefined) {
        optionsCast.polygon = polygonOptions = new PolygonMask_1.PolygonMask();
      }

      polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
    }
  }]);

  return PolygonMaskPlugin;
}();

var plugin = new PolygonMaskPlugin();
exports.PolygonMaskPlugin = plugin;

__exportStar(__webpack_require__(/*! ./Enums */ "qtyS"), exports);

/***/ }),

/***/ "6hcf":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Move.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = void 0;

var Attract_1 = __webpack_require__(/*! ./Attract */ "w1c1");

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var Trail_1 = __webpack_require__(/*! ./Trail */ "gp12");

var Noise_1 = __webpack_require__(/*! ./Noise/Noise */ "K2J4");

var MoveAngle_1 = __webpack_require__(/*! ./MoveAngle */ "CElG");

var MoveGravity_1 = __webpack_require__(/*! ./MoveGravity */ "TZGI");

var OutModes_1 = __webpack_require__(/*! ./OutModes */ "/o70");

var Move = /*#__PURE__*/function () {
  function Move() {
    _classCallCheck(this, Move);

    this.angle = new MoveAngle_1.MoveAngle();
    this.attract = new Attract_1.Attract();
    this.direction = Enums_1.MoveDirection.none;
    this.distance = 0;
    this.enable = false;
    this.gravity = new MoveGravity_1.MoveGravity();
    this.noise = new Noise_1.Noise();
    this.outModes = new OutModes_1.OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.straight = false;
    this.trail = new Trail_1.Trail();
    this.vibrate = false;
    this.warp = false;
  }

  _createClass(Move, [{
    key: "load",
    value: function load(data) {
      var _a, _b;

      if (data === undefined) {
        return;
      }

      if (data.angle !== undefined) {
        if (typeof data.angle === "number") {
          this.angle.value = data.angle;
        } else {
          this.angle.load(data.angle);
        }
      }

      this.attract.load(data.attract);

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      this.gravity.load(data.gravity);
      this.noise.load(data.noise);
      var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;

      if (data.outModes !== undefined || outMode !== undefined) {
        if (typeof data.outModes === "string" || data.outModes === undefined && outMode !== undefined) {
          this.outModes.load({
            default: (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode
          });
        } else {
          this.outModes.load(data.outModes);
        }
      }

      if (data.random !== undefined) {
        this.random = data.random;
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.straight !== undefined) {
        this.straight = data.straight;
      }

      this.trail.load(data.trail);

      if (data.vibrate !== undefined) {
        this.vibrate = data.vibrate;
      }

      if (data.warp !== undefined) {
        this.warp = data.warp;
      }
    }
  }, {
    key: "collisions",
    get: function get() {
      return false;
    },
    set: function set(value) {}
  }, {
    key: "bounce",
    get: function get() {
      return this.collisions;
    },
    set: function set(value) {
      this.collisions = value;
    }
  }, {
    key: "out_mode",
    get: function get() {
      return this.outMode;
    },
    set: function set(value) {
      this.outMode = value;
    }
  }, {
    key: "outMode",
    get: function get() {
      return this.outModes.default;
    },
    set: function set(value) {
      this.outModes.default = value;
    }
  }]);

  return Move;
}();

exports.Move = Move;

/***/ }),

/***/ "7Ohm":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmitterLife = void 0;

var EmitterLife = /*#__PURE__*/function () {
  function EmitterLife() {
    _classCallCheck(this, EmitterLife);
  }

  _createClass(EmitterLife, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.count !== undefined) {
        this.count = data.count;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }
    }
  }]);

  return EmitterLife;
}();

exports.EmitterLife = EmitterLife;

/***/ }),

/***/ "7RQj":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/RecursivePartial.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ "7UW+":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeMode = void 0;
var SizeMode;

(function (SizeMode) {
  SizeMode["precise"] = "precise";
  SizeMode["percent"] = "percent";
})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));

/***/ }),

/***/ "7puq":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;

var ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "Ckc7");

var DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "G7pQ");

var HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "W13A");

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.onClick = new ClickEvent_1.ClickEvent();
    this.onDiv = new DivEvent_1.DivEvent();
    this.onHover = new HoverEvent_1.HoverEvent();
    this.resize = true;
  }

  _createClass(Events, [{
    key: "load",
    value: function load(data) {
      var _a, _b, _c;

      if (data === undefined) {
        return;
      }

      this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
      var onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;

      if (onDiv !== undefined) {
        if (onDiv instanceof Array) {
          this.onDiv = onDiv.map(function (div) {
            var tmp = new DivEvent_1.DivEvent();
            tmp.load(div);
            return tmp;
          });
        } else {
          this.onDiv = new DivEvent_1.DivEvent();
          this.onDiv.load(onDiv);
        }
      }

      this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);

      if (data.resize !== undefined) {
        this.resize = data.resize;
      }
    }
  }, {
    key: "onclick",
    get: function get() {
      return this.onClick;
    },
    set: function set(value) {
      this.onClick = value;
    }
  }, {
    key: "ondiv",
    get: function get() {
      return this.onDiv;
    },
    set: function set(value) {
      this.onDiv = value;
    }
  }, {
    key: "onhover",
    get: function get() {
      return this.onHover;
    },
    set: function set(value) {
      this.onHover = value;
    }
  }]);

  return Events;
}();

exports.Events = Events;

/***/ }),

/***/ "7twc":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/MoveDirection.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./Directions */ "wSea"), exports);

/***/ }),

/***/ "887v":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inline = void 0;

var Enums_1 = __webpack_require__(/*! ../../Enums */ "qtyS");

var Inline = /*#__PURE__*/function () {
  function Inline() {
    _classCallCheck(this, Inline);

    this.arrangement = Enums_1.InlineArrangement.onePerPoint;
  }

  _createClass(Inline, [{
    key: "load",
    value: function load(data) {
      if (data !== undefined) {
        if (data.arrangement !== undefined) {
          this.arrangement = data.arrangement;
        }
      }
    }
  }]);

  return Inline;
}();

exports.Inline = Inline;

/***/ }),

/***/ "89Jo":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractivityDetect = void 0;
var InteractivityDetect;

(function (InteractivityDetect) {
  InteractivityDetect["canvas"] = "canvas";
  InteractivityDetect["parent"] = "parent";
  InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));

/***/ }),

/***/ "8ZP2":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskMoveType = void 0;

var Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "qtyS");

Object.defineProperty(exports, "PolygonMaskMoveType", {
  enumerable: true,
  get: function get() {
    return Enums_1.MoveType;
  }
});

/***/ }),

/***/ "8v5O":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "GXtI");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "9+kD":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/cjs/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
  for (var r in t) {
    e[r] = t[r];
  }
}(exports, function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      r.d(n, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 1);
}([function (e, t) {
  e.exports = __webpack_require__(/*! react */ "q1tI");
}, function (e, t, r) {
  "use strict";

  var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
    void 0 === n && (n = r), Object.defineProperty(e, n, {
      enumerable: !0,
      get: function get() {
        return t[r];
      }
    });
  } : function (e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
  }),
      i = this && this.__exportStar || function (e, t) {
    for (var r in e) {
      "default" === r || t.hasOwnProperty(r) || n(t, e, r);
    }
  },
      o = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Particles = void 0;
  var a = o(r(2));
  t.Particles = a.default, i(r(10), t), i(r(11), t), i(r(12), t), i(r(13), t), i(r(14), t), i(r(15), t), i(r(16), t), i(r(17), t), i(r(18), t), i(r(19), t), i(r(20), t), i(r(21), t), t.default = a.default;
}, function (e, t, r) {
  "use strict";

  function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }

  function i(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function o(e, t, r) {
    return (o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, r) {
      var n = function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e));) {
          ;
        }

        return e;
      }(e, t);

      if (n) {
        var i = Object.getOwnPropertyDescriptor(n, t);
        return i.get ? i.get.call(r) : i.value;
      }
    })(e, t, r || e);
  }

  function a(e, t) {
    return (a = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function s(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var r,
          n = l(e);

      if (t) {
        var i = l(this).constructor;
        r = Reflect.construct(n, arguments, i);
      } else r = n.apply(this, arguments);

      return u(this, r);
    };
  }

  function u(e, t) {
    return !t || "object" !== n(t) && "function" != typeof t ? c(e) : t;
  }

  function c(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  var f = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
    void 0 === n && (n = r), Object.defineProperty(e, n, {
      enumerable: !0,
      get: function get() {
        return t[r];
      }
    });
  } : function (e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
  }),
      p = this && this.__setModuleDefault || (Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e.default = t;
  }),
      d = this && this.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) {
      "default" !== r && Object.hasOwnProperty.call(e, r) && f(t, e, r);
    }
    return p(t, e), t;
  },
      y = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var v = d(r(0)),
      b = r(0),
      h = y(r(3)),
      m = r(4),
      g = r(5),
      P = r(6),
      O = r(9),
      _ = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && a(e, t);
    }(f, e);
    var t,
        r,
        n,
        u = s(f);

    function f(e) {
      var t;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, f), (t = u.call(this, e)).state = {
        canvas: void 0,
        library: void 0
      }, t.loadCanvas = t.loadCanvas.bind(c(t)), t;
    }

    return t = f, (r = [{
      key: "buildParticlesLibrary",
      value: function value(e, t) {
        try {
          if (void 0 === window) return null;
        } catch (e) {
          return null;
        }

        O.tsParticles.init();
        var r = new m.Options();
        r.load(P.defaultParams), r.load(t);
        var n = new g.Container(e, r);
        return this.props.particlesRef && (this.props.particlesRef.current = n), n;
      }
    }, {
      key: "refresh",
      value: function value(e) {
        var t = this,
            r = this.state.canvas;
        r && (this.destroy(), this.setState({
          library: this.buildParticlesLibrary(e.id, e.params)
        }, function () {
          t.loadCanvas(r);
        }));
      }
    }, {
      key: "destroy",
      value: function value() {
        this.state.library && this.state.library.destroy();
      }
    }, {
      key: "loadCanvas",
      value: function value(e) {
        var t = this;
        e && this.setState({
          canvas: e
        }, function () {
          var r = t.state.library;
          r && (r.canvas.loadCanvas(e), r.start());
        });
      }
    }, {
      key: "shouldComponentUpdate",
      value: function value(e) {
        return !h.default(e, this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function value() {
        this.refresh(this.props);
      }
    }, {
      key: "forceUpdate",
      value: function value() {
        this.refresh(this.props), o(l(f.prototype), "forceUpdate", this).call(this);
      }
    }, {
      key: "componentDidMount",
      value: function value() {
        this.setState({
          library: this.buildParticlesLibrary(this.props.id, this.props.params)
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function value() {
        this.destroy(), this.setState({
          library: void 0
        });
      }
    }, {
      key: "render",
      value: function value() {
        var e = this.props,
            t = e.width,
            r = e.height,
            n = e.className,
            i = e.canvasClassName,
            o = e.id;
        return v.createElement("div", {
          className: n,
          id: o
        }, v.createElement("canvas", {
          ref: this.loadCanvas,
          className: i,
          style: Object.assign(Object.assign({}, this.props.style), {
            width: t,
            height: r
          })
        }));
      }
    }]) && i(t.prototype, r), n && i(t, n), f;
  }(b.Component);

  t.default = _, _.defaultProps = {
    width: "100%",
    height: "100%",
    params: P.defaultParams,
    style: {},
    id: "tsparticles"
  };
}, function (e, t) {
  e.exports = __webpack_require__(/*! lodash/isEqual */ "Y+p1");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Options/Classes/Options */ "Vmap");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Core/Container */ "Tx5y");
}, function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.defaultParams = void 0;
  var n = r(7),
      i = r(8);
  t.defaultParams = {
    particles: {
      number: {
        value: 40,
        max: -1,
        density: {
          enable: !1,
          area: 1200
        }
      },
      color: {
        value: "#FFF"
      },
      shape: {
        type: n.ShapeType.circle,
        polygon: {
          sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      stroke: {
        width: 0,
        color: "#000000"
      },
      opacity: {
        value: .5,
        random: !1,
        anim: {
          enable: !0,
          speed: 1,
          minimumValue: .1,
          sync: !1
        }
      },
      size: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 40,
          minimumValue: 0,
          sync: !1
        }
      },
      links: {
        enable: !0,
        distance: 150,
        color: "#FFF",
        opacity: .6,
        width: 1,
        shadow: {
          enable: !1,
          blur: 5,
          color: "lime"
        }
      },
      move: {
        enable: !0,
        speed: 3,
        direction: n.MoveDirection.none,
        random: !1,
        straight: !1,
        outMode: n.OutMode.bounce,
        bounce: !0,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      }
    },
    interactivity: {
      detectsOn: n.InteractivityDetect.canvas,
      events: {
        onHover: {
          enable: !1,
          mode: n.HoverMode.grab
        },
        onClick: {
          enable: !1,
          mode: n.ClickMode.repulse
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: .35
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 100,
          duration: 5
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        }
      }
    },
    detectRetina: !0,
    fpsLimit: 999,
    polygon: {
      enable: !1,
      scale: 1,
      type: i.Type.inline,
      inline: {
        arrangement: i.InlineArrangement.onePerPoint
      },
      draw: {
        enable: !1,
        stroke: {
          width: .5,
          color: "rgba(255, 255, 255, .1)"
        }
      },
      move: {
        radius: 10,
        type: i.MoveType.path
      },
      url: ""
    }
  };
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums */ "ZlLd");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin */ "6a9T");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles */ "OGap");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/InteractivityDetect */ "89Jo");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/MoveDirection */ "7twc");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/OutMode */ "pmYn");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskInlineArrangement */ "Sp1a");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskMoveType */ "8ZP2");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskType */ "9uou");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/ProcessBubbleType */ "NhLh");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/RotateDirection */ "stJM");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/ShapeType */ "j1O7");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/Modes/ClickMode */ "e0sz");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/Modes/DivMode */ "QENi");
}, function (e, t) {
  e.exports = __webpack_require__(/*! tsparticles/dist/Enums/Modes/HoverMode */ "+Gz/");
}]));

/***/ }),

/***/ "9P/A":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueWithRandom = void 0;

var Random_1 = __webpack_require__(/*! ./Random */ "Lgoq");

var ValueWithRandom = /*#__PURE__*/function () {
  function ValueWithRandom() {
    _classCallCheck(this, ValueWithRandom);

    this.random = new Random_1.Random();
    this.value = 0;
  }

  _createClass(ValueWithRandom, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (typeof data.random === "boolean") {
        this.random.enable = data.random;
      } else {
        this.random.load(data.random);
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }]);

  return ValueWithRandom;
}();

exports.ValueWithRandom = ValueWithRandom;

/***/ }),

/***/ "9XT8":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepulseDiv = void 0;

var RepulseBase_1 = __webpack_require__(/*! ./RepulseBase */ "Tdtd");

var RepulseDiv = /*#__PURE__*/function (_RepulseBase_1$Repuls) {
  _inherits(RepulseDiv, _RepulseBase_1$Repuls);

  var _super = _createSuper(RepulseDiv);

  function RepulseDiv() {
    var _this;

    _classCallCheck(this, RepulseDiv);

    _this = _super.call(this);
    _this.selectors = [];
    return _this;
  }

  _createClass(RepulseDiv, [{
    key: "load",
    value: function load(data) {
      _get(_getPrototypeOf(RepulseDiv.prototype), "load", this).call(this, data);

      if (data === undefined) {
        return;
      }

      if (data.ids !== undefined) {
        this.ids = data.ids;
      }

      if (data.selectors !== undefined) {
        this.selectors = data.selectors;
      }
    }
  }, {
    key: "ids",
    get: function get() {
      if (this.selectors instanceof Array) {
        return this.selectors.map(function (t) {
          return t.replace("#", "");
        });
      } else {
        return this.selectors.replace("#", "");
      }
    },
    set: function set(value) {
      if (value instanceof Array) {
        this.selectors = value.map(function () {
          return "#".concat(value);
        });
      } else {
        this.selectors = "#".concat(value);
      }
    }
  }]);

  return RepulseDiv;
}(RepulseBase_1.RepulseBase);

exports.RepulseDiv = RepulseDiv;

/***/ }),

/***/ "9uou":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskType.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskType = void 0;

var Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "qtyS");

Object.defineProperty(exports, "PolygonMaskType", {
  enumerable: true,
  get: function get() {
    return Enums_1.Type;
  }
});

/***/ }),

/***/ "AJiq":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Collider.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collider = void 0;

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

function bounce(p1, p2) {
  Utils_1.Utils.circleBounce(Utils_1.Utils.circleBounceDataFromParticle(p1), Utils_1.Utils.circleBounceDataFromParticle(p2));
}

function destroy(p1, p2) {
  if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
    p1.destroy();
  } else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
    p2.destroy();
  } else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
    if (p1.getRadius() >= p2.getRadius()) {
      p2.destroy();
    } else {
      p1.destroy();
    }
  }
}

var Collider = /*#__PURE__*/function () {
  function Collider(container) {
    _classCallCheck(this, Collider);

    this.container = container;
  }

  _createClass(Collider, [{
    key: "isEnabled",
    value: function isEnabled(particle) {
      return particle.particlesOptions.collisions.enable;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact(p1) {
      var container = this.container;
      var pos1 = p1.getPosition();
      var query = container.particles.quadTree.queryCircle(pos1, p1.getRadius() * 2);

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p2 = _step.value;

          if (p1 === p2 || !p2.particlesOptions.collisions.enable || p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode || p2.destroyed || p2.spawning) {
            continue;
          }

          var pos2 = p2.getPosition();
          var dist = Utils_1.NumberUtils.getDistance(pos1, pos2);
          var radius1 = p1.getRadius();
          var radius2 = p2.getRadius();
          var distP = radius1 + radius2;

          if (dist <= distP) {
            this.resolveCollision(p1, p2);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "resolveCollision",
    value: function resolveCollision(p1, p2) {
      switch (p1.particlesOptions.collisions.mode) {
        case Enums_1.CollisionMode.absorb:
          {
            this.absorb(p1, p2);
            break;
          }

        case Enums_1.CollisionMode.bounce:
          {
            bounce(p1, p2);
            break;
          }

        case Enums_1.CollisionMode.destroy:
          {
            destroy(p1, p2);
            break;
          }
      }
    }
  }, {
    key: "absorb",
    value: function absorb(p1, p2) {
      var container = this.container;
      var fps = container.options.fpsLimit / 1000;

      if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
        p1.destroy();
      } else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
        p2.destroy();
      } else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        if (p1.getRadius() >= p2.getRadius()) {
          var factor = Utils_1.NumberUtils.clamp(p1.getRadius() / p2.getRadius(), 0, p2.getRadius()) * fps;
          p1.size.value += factor;
          p2.size.value -= factor;

          if (p2.getRadius() <= container.retina.pixelRatio) {
            p2.size.value = 0;
            p2.destroy();
          }
        } else {
          var _factor = Utils_1.NumberUtils.clamp(p2.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;

          p1.size.value -= _factor;
          p2.size.value += _factor;

          if (p1.getRadius() <= container.retina.pixelRatio) {
            p1.size.value = 0;
            p1.destroy();
          }
        }
      }
    }
  }]);

  return Collider;
}();

exports.Collider = Collider;

/***/ }),

/***/ "Aife":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Bouncer.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bouncer = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var Utils_2 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_2 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var Types_1 = __webpack_require__(/*! ../../Enums/Types */ "muAV");

var Bouncer = /*#__PURE__*/function () {
  function Bouncer(container) {
    _classCallCheck(this, Bouncer);

    this.container = container;
  }

  _createClass(Bouncer, [{
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var options = container.options;
      var mouse = container.interactivity.mouse;
      var events = options.interactivity.events;
      var divs = events.onDiv;
      return mouse.position && events.onHover.enable && Utils_2.Utils.isInArray(Modes_1.HoverMode.bounce, events.onHover.mode) || Utils_2.Utils.isDivModeEnabled(Modes_2.DivMode.bounce, divs);
    }
  }, {
    key: "interact",
    value: function interact() {
      var _this = this;

      var container = this.container;
      var options = container.options;
      var events = options.interactivity.events;
      var mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
      var hoverEnabled = events.onHover.enable;
      var hoverMode = events.onHover.mode;
      var divs = events.onDiv;

      if (mouseMoveStatus && hoverEnabled && Utils_2.Utils.isInArray(Modes_1.HoverMode.bounce, hoverMode)) {
        this.processMouseBounce();
      } else {
        Utils_2.Utils.divModeExecute(Modes_2.DivMode.bounce, divs, function (selector, div) {
          return _this.singleSelectorBounce(selector, div);
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "processMouseBounce",
    value: function processMouseBounce() {
      var container = this.container;
      var pxRatio = container.retina.pixelRatio;
      var tolerance = 10 * pxRatio;
      var mousePos = container.interactivity.mouse.position;
      var radius = container.retina.bounceModeDistance;

      if (mousePos) {
        this.processBounce(mousePos, radius, new Utils_2.Circle(mousePos.x, mousePos.y, radius + tolerance));
      }
    }
  }, {
    key: "singleSelectorBounce",
    value: function singleSelectorBounce(selector, div) {
      var _this2 = this;

      var container = this.container;
      var query = document.querySelectorAll(selector);

      if (!query.length) {
        return;
      }

      query.forEach(function (item) {
        var elem = item;
        var pxRatio = container.retina.pixelRatio;
        var pos = {
          x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
        };
        var radius = elem.offsetWidth / 2 * pxRatio;
        var tolerance = 10 * pxRatio;
        var area = div.type === Types_1.DivType.circle ? new Utils_2.Circle(pos.x, pos.y, radius + tolerance) : new Utils_2.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);

        _this2.processBounce(pos, radius, area);
      });
    }
  }, {
    key: "processBounce",
    value: function processBounce(position, radius, area) {
      var query = this.container.particles.quadTree.query(area);

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;

          if (area instanceof Utils_2.Circle) {
            Utils_2.Utils.circleBounce(Utils_2.Utils.circleBounceDataFromParticle(particle), {
              position: position,
              radius: radius,
              velocity: {
                horizontal: 0,
                vertical: 0
              },
              factor: {
                horizontal: 0,
                vertical: 0
              }
            });
          } else if (area instanceof Utils_2.Rectangle) {
            Utils_2.Utils.rectBounce(particle, Utils_2.Utils.calculateBounds(position, radius));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Bouncer;
}();

exports.Bouncer = Bouncer;

/***/ }),

/***/ "BAgM":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/NumberUtils.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberUtils = void 0;

var Directions_1 = __webpack_require__(/*! ../Enums/Directions */ "wSea");

var NumberUtils = /*#__PURE__*/function () {
  function NumberUtils() {
    _classCallCheck(this, NumberUtils);
  }

  _createClass(NumberUtils, null, [{
    key: "clamp",
    value: function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
  }, {
    key: "mix",
    value: function mix(comp1, comp2, weight1, weight2) {
      return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    }
  }, {
    key: "randomInRange",
    value: function randomInRange(r1, r2) {
      var max = Math.max(r1, r2),
          min = Math.min(r1, r2);
      return Math.random() * (max - min) + min;
    }
  }, {
    key: "getValue",
    value: function getValue(options) {
      var random = options.random;

      var _ref = typeof random === "boolean" ? {
        enable: random,
        minimumValue: 0
      } : random,
          enable = _ref.enable,
          minimumValue = _ref.minimumValue;

      return enable ? NumberUtils.randomInRange(minimumValue, options.value) : options.value;
    }
  }, {
    key: "getDistances",
    value: function getDistances(pointA, pointB) {
      var dx = pointA.x - pointB.x;
      var dy = pointA.y - pointB.y;
      return {
        dx: dx,
        dy: dy,
        distance: Math.sqrt(dx * dx + dy * dy)
      };
    }
  }, {
    key: "getDistance",
    value: function getDistance(pointA, pointB) {
      return NumberUtils.getDistances(pointA, pointB).distance;
    }
  }, {
    key: "getParticleBaseVelocity",
    value: function getParticleBaseVelocity(particle) {
      var velocityBase;

      switch (particle.direction) {
        case Directions_1.MoveDirection.top:
          velocityBase = {
            x: 0,
            y: -1
          };
          break;

        case Directions_1.MoveDirection.topRight:
          velocityBase = {
            x: 0.5,
            y: -0.5
          };
          break;

        case Directions_1.MoveDirection.right:
          velocityBase = {
            x: 1,
            y: -0
          };
          break;

        case Directions_1.MoveDirection.bottomRight:
          velocityBase = {
            x: 0.5,
            y: 0.5
          };
          break;

        case Directions_1.MoveDirection.bottom:
          velocityBase = {
            x: 0,
            y: 1
          };
          break;

        case Directions_1.MoveDirection.bottomLeft:
          velocityBase = {
            x: -0.5,
            y: 1
          };
          break;

        case Directions_1.MoveDirection.left:
          velocityBase = {
            x: -1,
            y: 0
          };
          break;

        case Directions_1.MoveDirection.topLeft:
          velocityBase = {
            x: -0.5,
            y: -0.5
          };
          break;

        default:
          velocityBase = {
            x: 0,
            y: 0
          };
          break;
      }

      return velocityBase;
    }
  }, {
    key: "rotateVelocity",
    value: function rotateVelocity(velocity, angle) {
      return {
        horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
        vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle)
      };
    }
  }, {
    key: "collisionVelocity",
    value: function collisionVelocity(v1, v2, m1, m2) {
      return {
        horizontal: v1.horizontal * (m1 - m2) / (m1 + m2) + v2.horizontal * 2 * m2 / (m1 + m2),
        vertical: v1.vertical
      };
    }
  }]);

  return NumberUtils;
}();

exports.NumberUtils = NumberUtils;

/***/ }),

/***/ "BikP":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Motion/Motion.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Motion = void 0;

var MotionReduce_1 = __webpack_require__(/*! ./MotionReduce */ "Ucb3");

var Motion = /*#__PURE__*/function () {
  function Motion() {
    _classCallCheck(this, Motion);

    this.disable = false;
    this.reduce = new MotionReduce_1.MotionReduce();
  }

  _createClass(Motion, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (data.disable !== undefined) {
        this.disable = data.disable;
      }

      this.reduce.load(data.reduce);
    }
  }]);

  return Motion;
}();

exports.Motion = Motion;

/***/ }),

/***/ "C+1W":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Infecter.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Infecter = void 0;

var Infecter = /*#__PURE__*/function () {
  function Infecter(container) {
    _classCallCheck(this, Infecter);

    this.container = container;
  }

  _createClass(Infecter, [{
    key: "isEnabled",
    value: function isEnabled() {
      return this.container.options.infection.enable;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact(p1, delta) {
      var _a, _b;

      var infecter1 = p1.infecter;
      infecter1.updateInfection(delta.value);

      if (infecter1.infectionStage === undefined) {
        return;
      }

      var container = this.container;
      var options = container.options;
      var infectionOptions = options.infection;

      if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
        return;
      }

      var infectionStage1 = infectionOptions.stages[infecter1.infectionStage];
      var pxRatio = container.retina.pixelRatio;
      var radius = p1.getRadius() * 2 + infectionStage1.radius * pxRatio;
      var pos = p1.getPosition();
      var infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : infecter1.infectionStage;
      var query = container.particles.quadTree.queryCircle(pos, radius);
      var infections = infectionStage1.rate;
      var neighbors = query.length;

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p2 = _step.value;

          if (p2 === p1 || p2.destroyed || p2.spawning || !(p2.infecter.infectionStage === undefined || p2.infecter.infectionStage !== infecter1.infectionStage)) {
            continue;
          }

          var infecter2 = p2.infecter;

          if (Math.random() < infections / neighbors) {
            if (infecter2.infectionStage === undefined) {
              infecter2.startInfection(infectedStage1);
            } else if (infecter2.infectionStage < infecter1.infectionStage) {
              infecter2.updateInfectionStage(infectedStage1);
            } else if (infecter2.infectionStage > infecter1.infectionStage) {
              var infectionStage2 = infectionOptions.stages[infecter2.infectionStage];
              var infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : infecter2.infectionStage;
              infecter1.updateInfectionStage(infectedStage2);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Infecter;
}();

exports.Infecter = Infecter;

/***/ }),

/***/ "C6n9":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/ColorUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorUtils = void 0;

var Utils_1 = __webpack_require__(/*! ./Utils */ "lPaE");

var Constants_1 = __webpack_require__(/*! ./Constants */ "ZRNA");

var NumberUtils_1 = __webpack_require__(/*! ./NumberUtils */ "BAgM");

function hue2rgb(p, q, t) {
  var tCalc = t;

  if (tCalc < 0) {
    tCalc += 1;
  }

  if (tCalc > 1) {
    tCalc -= 1;
  }

  if (tCalc < 1 / 6) {
    return p + (q - p) * 6 * tCalc;
  }

  if (tCalc < 1 / 2) {
    return q;
  }

  if (tCalc < 2 / 3) {
    return p + (q - p) * (2 / 3 - tCalc) * 6;
  }

  return p;
}

function stringToRgba(input) {
  if (input.startsWith("rgb")) {
    var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
    var result = regex.exec(input);
    return result ? {
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      b: parseInt(result[3], 10),
      g: parseInt(result[2], 10),
      r: parseInt(result[1], 10)
    } : undefined;
  } else if (input.startsWith("hsl")) {
    var _regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;

    var _result = _regex.exec(input);

    return _result ? ColorUtils.hslaToRgba({
      a: _result.length > 4 ? parseFloat(_result[5]) : 1,
      h: parseInt(_result[1], 10),
      l: parseInt(_result[3], 10),
      s: parseInt(_result[2], 10)
    }) : undefined;
  } else if (input.startsWith("hsv")) {
    var _regex2 = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;

    var _result2 = _regex2.exec(input);

    return _result2 ? ColorUtils.hsvaToRgba({
      a: _result2.length > 4 ? parseFloat(_result2[5]) : 1,
      h: parseInt(_result2[1], 10),
      s: parseInt(_result2[2], 10),
      v: parseInt(_result2[3], 10)
    }) : undefined;
  } else {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
    var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
      return r + r + g + g + b + b + (a !== undefined ? a + a : "");
    });
    var _regex3 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

    var _result3 = _regex3.exec(hexFixed);

    return _result3 ? {
      a: _result3[4] !== undefined ? parseInt(_result3[4], 16) / 0xff : 1,
      b: parseInt(_result3[3], 16),
      g: parseInt(_result3[2], 16),
      r: parseInt(_result3[1], 16)
    } : undefined;
  }
}

var ColorUtils = /*#__PURE__*/function () {
  function ColorUtils() {
    _classCallCheck(this, ColorUtils);
  }

  _createClass(ColorUtils, null, [{
    key: "colorToRgb",
    value: function colorToRgb(input, index) {
      var useIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _a, _b, _c;

      if (input === undefined) {
        return;
      }

      var color = typeof input === "string" ? {
        value: input
      } : input;
      var res;

      if (typeof color.value === "string") {
        if (color.value === Constants_1.Constants.randomColorValue) {
          res = ColorUtils.getRandomRgbColor();
        } else {
          res = ColorUtils.stringToRgb(color.value);
        }
      } else {
        if (color.value instanceof Array) {
          var colorSelected = Utils_1.Utils.itemFromArray(color.value, index, useIndex);
          res = ColorUtils.colorToRgb({
            value: colorSelected
          });
        } else {
          var colorValue = color.value;
          var rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;

          if (rgbColor.r !== undefined) {
            res = rgbColor;
          } else {
            var hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;

            if (hslColor.h !== undefined && hslColor.l !== undefined) {
              res = ColorUtils.hslToRgb(hslColor);
            } else {
              var hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;

              if (hsvColor.h !== undefined && hsvColor.v !== undefined) {
                res = ColorUtils.hsvToRgb(hsvColor);
              }
            }
          }
        }
      }

      return res;
    }
  }, {
    key: "colorToHsl",
    value: function colorToHsl(color, index) {
      var useIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var rgb = ColorUtils.colorToRgb(color, index, useIndex);
      return rgb !== undefined ? ColorUtils.rgbToHsl(rgb) : undefined;
    }
  }, {
    key: "rgbToHsl",
    value: function rgbToHsl(color) {
      var r1 = color.r / 255;
      var g1 = color.g / 255;
      var b1 = color.b / 255;
      var max = Math.max(r1, g1, b1);
      var min = Math.min(r1, g1, b1);
      var res = {
        h: 0,
        l: (max + min) / 2,
        s: 0
      };

      if (max != min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2.0 + (b1 - r1) / (max - min) : 4.0 + (r1 - g1) / (max - min);
      }

      res.l *= 100;
      res.s *= 100;
      res.h *= 60;

      if (res.h < 0) {
        res.h += 360;
      }

      return res;
    }
  }, {
    key: "stringToAlpha",
    value: function stringToAlpha(input) {
      var _a;

      return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    }
  }, {
    key: "stringToRgb",
    value: function stringToRgb(input) {
      return stringToRgba(input);
    }
  }, {
    key: "hslToRgb",
    value: function hslToRgb(hsl) {
      var result = {
        b: 0,
        g: 0,
        r: 0
      };
      var hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100
      };

      if (hslPercent.s === 0) {
        result.b = hslPercent.l;
        result.g = hslPercent.l;
        result.r = hslPercent.l;
      } else {
        var q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
        var p = 2 * hslPercent.l - q;
        result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb(p, q, hslPercent.h);
        result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
      }

      result.r = Math.floor(result.r * 255);
      result.g = Math.floor(result.g * 255);
      result.b = Math.floor(result.b * 255);
      return result;
    }
  }, {
    key: "hslaToRgba",
    value: function hslaToRgba(hsla) {
      var rgbResult = ColorUtils.hslToRgb(hsla);
      return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
      };
    }
  }, {
    key: "hslToHsv",
    value: function hslToHsv(hsl) {
      var l = hsl.l / 100,
          sl = hsl.s / 100;
      var v = l + sl * Math.min(l, 1 - l),
          sv = !v ? 0 : 2 * (1 - l / v);
      return {
        h: hsl.h,
        s: sv * 100,
        v: v * 100
      };
    }
  }, {
    key: "hslaToHsva",
    value: function hslaToHsva(hsla) {
      var hsvResult = ColorUtils.hslToHsv(hsla);
      return {
        a: hsla.a,
        h: hsvResult.h,
        s: hsvResult.s,
        v: hsvResult.v
      };
    }
  }, {
    key: "hsvToHsl",
    value: function hsvToHsl(hsv) {
      var v = hsv.v / 100,
          sv = hsv.s / 100;
      var l = v * (1 - sv / 2),
          sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
      return {
        h: hsv.h,
        l: l * 100,
        s: sl * 100
      };
    }
  }, {
    key: "hsvaToHsla",
    value: function hsvaToHsla(hsva) {
      var hslResult = ColorUtils.hsvToHsl(hsva);
      return {
        a: hsva.a,
        h: hslResult.h,
        l: hslResult.l,
        s: hslResult.s
      };
    }
  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var result = {
        b: 0,
        g: 0,
        r: 0
      };
      var hsvPercent = {
        h: hsv.h / 60,
        s: hsv.s / 100,
        v: hsv.v / 100
      };
      var c = hsvPercent.v * hsvPercent.s,
          x = c * (1 - Math.abs(hsvPercent.h % 2 - 1));
      var tempRgb;

      if (hsvPercent.h >= 0 && hsvPercent.h <= 1) {
        tempRgb = {
          r: c,
          g: x,
          b: 0
        };
      } else if (hsvPercent.h > 1 && hsvPercent.h <= 2) {
        tempRgb = {
          r: x,
          g: c,
          b: 0
        };
      } else if (hsvPercent.h > 2 && hsvPercent.h <= 3) {
        tempRgb = {
          r: 0,
          g: c,
          b: x
        };
      } else if (hsvPercent.h > 3 && hsvPercent.h <= 4) {
        tempRgb = {
          r: 0,
          g: x,
          b: c
        };
      } else if (hsvPercent.h > 4 && hsvPercent.h <= 5) {
        tempRgb = {
          r: x,
          g: 0,
          b: c
        };
      } else if (hsvPercent.h > 5 && hsvPercent.h <= 6) {
        tempRgb = {
          r: c,
          g: 0,
          b: x
        };
      }

      if (tempRgb) {
        var m = hsvPercent.v - c;
        result.r = Math.floor((tempRgb.r + m) * 255);
        result.g = Math.floor((tempRgb.g + m) * 255);
        result.b = Math.floor((tempRgb.b + m) * 255);
      }

      return result;
    }
  }, {
    key: "hsvaToRgba",
    value: function hsvaToRgba(hsva) {
      var rgbResult = ColorUtils.hsvToRgb(hsva);
      return {
        a: hsva.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
      };
    }
  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var rgbPercent = {
        r: rgb.r / 255,
        g: rgb.g / 255,
        b: rgb.b / 255
      },
          xMax = Math.max(rgbPercent.r, rgbPercent.g, rgbPercent.b),
          xMin = Math.min(rgbPercent.r, rgbPercent.g, rgbPercent.b),
          v = xMax,
          c = xMax - xMin;
      var h = 0;

      if (v === rgbPercent.r) {
        h = 60 * ((rgbPercent.g - rgbPercent.b) / c);
      } else if (v === rgbPercent.g) {
        h = 60 * (2 + (rgbPercent.b - rgbPercent.r) / c);
      } else if (v === rgbPercent.b) {
        h = 60 * (4 + (rgbPercent.r - rgbPercent.g) / c);
      }

      var s = !v ? 0 : c / v;
      return {
        h: h,
        s: s * 100,
        v: v * 100
      };
    }
  }, {
    key: "rgbaToHsva",
    value: function rgbaToHsva(rgba) {
      var hsvResult = ColorUtils.rgbToHsv(rgba);
      return {
        a: rgba.a,
        h: hsvResult.h,
        s: hsvResult.s,
        v: hsvResult.v
      };
    }
  }, {
    key: "getRandomRgbColor",
    value: function getRandomRgbColor(min) {
      var fixedMin = min !== null && min !== void 0 ? min : 0;
      return {
        b: Math.floor(NumberUtils_1.NumberUtils.randomInRange(fixedMin, 256)),
        g: Math.floor(NumberUtils_1.NumberUtils.randomInRange(fixedMin, 256)),
        r: Math.floor(NumberUtils_1.NumberUtils.randomInRange(fixedMin, 256))
      };
    }
  }, {
    key: "getStyleFromRgb",
    value: function getStyleFromRgb(color, opacity) {
      return "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(opacity !== null && opacity !== void 0 ? opacity : 1, ")");
    }
  }, {
    key: "getStyleFromHsl",
    value: function getStyleFromHsl(color, opacity) {
      return "hsla(".concat(color.h, ", ").concat(color.s, "%, ").concat(color.l, "%, ").concat(opacity !== null && opacity !== void 0 ? opacity : 1, ")");
    }
  }, {
    key: "getStyleFromHsv",
    value: function getStyleFromHsv(color, opacity) {
      return ColorUtils.getStyleFromHsl(ColorUtils.hsvToHsl(color), opacity);
    }
  }, {
    key: "mix",
    value: function mix(color1, color2, size1, size2) {
      var rgb1 = color1;
      var rgb2 = color2;

      if (rgb1.r === undefined) {
        rgb1 = ColorUtils.hslToRgb(color1);
      }

      if (rgb2.r === undefined) {
        rgb2 = ColorUtils.hslToRgb(color2);
      }

      return {
        b: NumberUtils_1.NumberUtils.mix(rgb1.b, rgb2.b, size1, size2),
        g: NumberUtils_1.NumberUtils.mix(rgb1.g, rgb2.g, size1, size2),
        r: NumberUtils_1.NumberUtils.mix(rgb1.r, rgb2.r, size1, size2)
      };
    }
  }, {
    key: "replaceColorSvg",
    value: function replaceColorSvg(image, color, opacity) {
      if (!image.svgData) {
        return "";
      }

      var svgXml = image.svgData;
      var rgbHex = /#([0-9A-F]{3,6})/gi;
      return svgXml.replace(rgbHex, function () {
        return ColorUtils.getStyleFromHsl(color, opacity);
      });
    }
  }, {
    key: "getLinkColor",
    value: function getLinkColor(p1, p2, linkColor) {
      var _a, _b;

      if (linkColor === Constants_1.Constants.randomColorValue) {
        return ColorUtils.getRandomRgbColor();
      } else if (linkColor === "mid") {
        var sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor();
        var destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();

        if (sourceColor && destColor && p2) {
          return ColorUtils.mix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        } else {
          var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;

          if (hslColor) {
            return ColorUtils.hslToRgb(hslColor);
          }
        }
      } else {
        return linkColor;
      }
    }
  }, {
    key: "getLinkRandomColor",
    value: function getLinkRandomColor(optColor, blink, consent) {
      var color = typeof optColor === "string" ? optColor : optColor.value;

      if (color === Constants_1.Constants.randomColorValue) {
        if (consent) {
          return ColorUtils.colorToRgb({
            value: color
          });
        } else if (blink) {
          return Constants_1.Constants.randomColorValue;
        } else {
          return Constants_1.Constants.midColorValue;
        }
      } else {
        return ColorUtils.colorToRgb({
          value: color
        });
      }
    }
  }]);

  return ColorUtils;
}();

exports.ColorUtils = ColorUtils;

/***/ }),

/***/ "C9b5":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./CanvasUtils */ "iiaq"), exports);

__exportStar(__webpack_require__(/*! ./Circle */ "Erz+"), exports);

__exportStar(__webpack_require__(/*! ./CircleWarp */ "EGR3"), exports);

__exportStar(__webpack_require__(/*! ./ColorUtils */ "C6n9"), exports);

__exportStar(__webpack_require__(/*! ./Constants */ "ZRNA"), exports);

__exportStar(__webpack_require__(/*! ./EventListeners */ "2kAo"), exports);

__exportStar(__webpack_require__(/*! ./NumberUtils */ "BAgM"), exports);

__exportStar(__webpack_require__(/*! ./Plugins */ "KIMX"), exports);

__exportStar(__webpack_require__(/*! ./Point */ "J15q"), exports);

__exportStar(__webpack_require__(/*! ./QuadTree */ "ub5Q"), exports);

__exportStar(__webpack_require__(/*! ./Range */ "/6af"), exports);

__exportStar(__webpack_require__(/*! ./Rectangle */ "Xvid"), exports);

__exportStar(__webpack_require__(/*! ./Utils */ "lPaE"), exports);

/***/ }),

/***/ "CElG":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveAngle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveAngle = void 0;

var MoveAngle = /*#__PURE__*/function () {
  function MoveAngle() {
    _classCallCheck(this, MoveAngle);

    this.offset = 45;
    this.value = 90;
  }

  _createClass(MoveAngle, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.offset !== undefined) {
        this.offset = data.offset;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }]);

  return MoveAngle;
}();

exports.MoveAngle = MoveAngle;

/***/ }),

/***/ "CPUN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundMaskCover = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "vRcM");

var BackgroundMaskCover = /*#__PURE__*/function () {
  function BackgroundMaskCover() {
    _classCallCheck(this, BackgroundMaskCover);

    this.color = new OptionsColor_1.OptionsColor();
    this.opacity = 1;
  }

  _createClass(BackgroundMaskCover, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }]);

  return BackgroundMaskCover;
}();

exports.BackgroundMaskCover = BackgroundMaskCover;

/***/ }),

/***/ "CS2o":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "GXtI");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "5h2M");

var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn */ "baxp");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;

/***/ }),

/***/ "CeJ7":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcessBubbleType = void 0;
var ProcessBubbleType;

(function (ProcessBubbleType) {
  ProcessBubbleType["color"] = "color";
  ProcessBubbleType["opacity"] = "opacity";
  ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));

/***/ }),

/***/ "Ckc7":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickEvent = void 0;

var ClickEvent = /*#__PURE__*/function () {
  function ClickEvent() {
    _classCallCheck(this, ClickEvent);

    this.enable = false;
    this.mode = [];
  }

  _createClass(ClickEvent, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }]);

  return ClickEvent;
}();

exports.ClickEvent = ClickEvent;

/***/ }),

/***/ "Cx7u":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Attract.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attract = void 0;

var Attract = /*#__PURE__*/function () {
  function Attract() {
    _classCallCheck(this, Attract);

    this.distance = 200;
    this.duration = 0.4;
    this.speed = 1;
  }

  _createClass(Attract, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }
    }
  }]);

  return Attract;
}();

exports.Attract = Attract;

/***/ }),

/***/ "D98Q":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./EmitterClickMode */ "ZJaX"), exports);

/***/ }),

/***/ "DLAq":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotate = void 0;

var RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "k9Lu");

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "9P/A");

var Rotate = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(Rotate, _ValueWithRandom_1$Va);

  var _super = _createSuper(Rotate);

  function Rotate() {
    var _this;

    _classCallCheck(this, Rotate);

    _this = _super.call(this);
    _this.animation = new RotateAnimation_1.RotateAnimation();
    _this.direction = Enums_1.RotateDirection.clockwise;
    _this.path = false;
    return _this;
  }

  _createClass(Rotate, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      _get(_getPrototypeOf(Rotate.prototype), "load", this).call(this, data);

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      this.animation.load(data.animation);

      if (data.path !== undefined) {
        this.path = data.path;
      }
    }
  }]);

  return Rotate;
}(ValueWithRandom_1.ValueWithRandom);

exports.Rotate = Rotate;

/***/ }),

/***/ "Dp6u":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Links = void 0;

var LinksShadow_1 = __webpack_require__(/*! ./LinksShadow */ "ERyf");

var LinksTriangle_1 = __webpack_require__(/*! ./LinksTriangle */ "cWpP");

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var Links = /*#__PURE__*/function () {
  function Links() {
    _classCallCheck(this, Links);

    this.blink = false;
    this.color = new OptionsColor_1.OptionsColor();
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.frequency = 1;
    this.opacity = 1;
    this.shadow = new LinksShadow_1.LinksShadow();
    this.triangles = new LinksTriangle_1.LinksTriangle();
    this.width = 1;
    this.warp = false;
  }

  _createClass(Links, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.id !== undefined) {
        this.id = data.id;
      }

      if (data.blink !== undefined) {
        this.blink = data.blink;
      }

      this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

      if (data.consent !== undefined) {
        this.consent = data.consent;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.frequency !== undefined) {
        this.frequency = data.frequency;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      this.shadow.load(data.shadow);
      this.triangles.load(data.triangles);

      if (data.width !== undefined) {
        this.width = data.width;
      }

      if (data.warp !== undefined) {
        this.warp = data.warp;
      }
    }
  }]);

  return Links;
}();

exports.Links = Links;

/***/ }),

/***/ "EGR3":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CircleWarp.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleWarp = void 0;

var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "Xvid");

var Circle_1 = __webpack_require__(/*! ./Circle */ "Erz+");

var CircleWarp = /*#__PURE__*/function (_Circle_1$Circle) {
  _inherits(CircleWarp, _Circle_1$Circle);

  var _super = _createSuper(CircleWarp);

  function CircleWarp(x, y, radius, canvasSize) {
    var _this;

    _classCallCheck(this, CircleWarp);

    _this = _super.call(this, x, y, radius);
    _this.canvasSize = canvasSize;
    _this.canvasSize = {
      height: canvasSize.height,
      width: canvasSize.width
    };
    return _this;
  }

  _createClass(CircleWarp, [{
    key: "contains",
    value: function contains(point) {
      if (_get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, point)) {
        return true;
      }

      var posNE = {
        x: point.x - this.canvasSize.width,
        y: point.y
      };

      if (_get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, posNE)) {
        return true;
      }

      var posSE = {
        x: point.x - this.canvasSize.width,
        y: point.y - this.canvasSize.height
      };

      if (_get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, posSE)) {
        return true;
      }

      var posSW = {
        x: point.x,
        y: point.y - this.canvasSize.height
      };
      return _get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, posSW);
    }
  }, {
    key: "intersects",
    value: function intersects(range) {
      if (_get(_getPrototypeOf(CircleWarp.prototype), "intersects", this).call(this, range)) {
        return true;
      }

      var rect = range;
      var circle = range;
      var newPos = {
        x: range.position.x - this.canvasSize.width,
        y: range.position.y - this.canvasSize.height
      };

      if (circle.radius !== undefined) {
        var biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
        return _get(_getPrototypeOf(CircleWarp.prototype), "intersects", this).call(this, biggerCircle);
      } else if (rect.size !== undefined) {
        var rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
        return _get(_getPrototypeOf(CircleWarp.prototype), "intersects", this).call(this, rectSW);
      }

      return false;
    }
  }]);

  return CircleWarp;
}(Circle_1.Circle);

exports.CircleWarp = CircleWarp;

/***/ }),

/***/ "ERyf":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinksShadow = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var LinksShadow = /*#__PURE__*/function () {
  function LinksShadow() {
    _classCallCheck(this, LinksShadow);

    this.blur = 5;
    this.color = new OptionsColor_1.OptionsColor();
    this.enable = false;
    this.color.value = "#00ff00";
  }

  _createClass(LinksShadow, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.blur !== undefined) {
        this.blur = data.blur;
      }

      this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }]);

  return LinksShadow;
}();

exports.LinksShadow = LinksShadow;

/***/ }),

/***/ "EZQt":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Loader.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var Container_1 = __webpack_require__(/*! ./Container */ "Tx5y");

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var tsParticlesDom = [];

function fetchError(statusCode) {
  console.error("Error tsParticles - fetch status: ".concat(statusCode));
  console.error("Error tsParticles - File config not found");
}

var Loader = /*#__PURE__*/function () {
  function Loader() {
    _classCallCheck(this, Loader);
  }

  _createClass(Loader, null, [{
    key: "dom",
    value: function dom() {
      return tsParticlesDom;
    }
  }, {
    key: "domItem",
    value: function domItem(index) {
      var dom = Loader.dom();
      var item = dom[index];

      if (item && !item.destroyed) {
        return item;
      }

      dom.splice(index, 1);
    }
  }, {
    key: "load",
    value: function load(tagId, options, index) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var domContainer;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                domContainer = document.getElementById(tagId);

                if (domContainer) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                return _context.abrupt("return", Loader.set(tagId, domContainer, options, index));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "set",
    value: function set(id, domContainer, options, index) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var currentOptions, dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentOptions = options instanceof Array ? Utils_1.Utils.itemFromArray(options, index) : options;
                dom = Loader.dom();
                oldIndex = dom.findIndex(function (v) {
                  return v.id === id;
                });

                if (oldIndex >= 0) {
                  old = Loader.domItem(oldIndex);

                  if (old && !old.destroyed) {
                    old.destroy();
                    dom.splice(oldIndex, 1);
                  }
                }

                if (domContainer.tagName.toLowerCase() === "canvas") {
                  canvasEl = domContainer;
                  generatedCanvas = false;
                } else {
                  existingCanvases = domContainer.getElementsByTagName("canvas");

                  if (existingCanvases.length) {
                    canvasEl = existingCanvases[0];

                    if (!canvasEl.className) {
                      canvasEl.className = Utils_1.Constants.canvasClass;
                    }

                    generatedCanvas = false;
                  } else {
                    generatedCanvas = true;
                    canvasEl = document.createElement("canvas");
                    canvasEl.className = Utils_1.Constants.canvasClass;
                    canvasEl.style.width = "100%";
                    canvasEl.style.height = "100%";
                    domContainer.appendChild(canvasEl);
                  }
                }

                newItem = new Container_1.Container(id, currentOptions);

                if (oldIndex >= 0) {
                  dom.splice(oldIndex, 0, newItem);
                } else {
                  dom.push(newItem);
                }

                newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                _context2.next = 10;
                return newItem.start();

              case 10:
                return _context2.abrupt("return", newItem);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "loadJSON",
    value: function loadJSON(tagId, jsonUrl, index) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var url, response;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = jsonUrl instanceof Array ? Utils_1.Utils.itemFromArray(jsonUrl, index) : jsonUrl;
                _context3.next = 3;
                return fetch(url);

              case 3:
                response = _context3.sent;

                if (!response.ok) {
                  _context3.next = 13;
                  break;
                }

                _context3.t0 = Loader;
                _context3.t1 = tagId;
                _context3.next = 9;
                return response.json();

              case 9:
                _context3.t2 = _context3.sent;
                return _context3.abrupt("return", _context3.t0.load.call(_context3.t0, _context3.t1, _context3.t2));

              case 13:
                fetchError(response.status);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "setJSON",
    value: function setJSON(id, domContainer, jsonUrl) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var response, options;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch(jsonUrl);

              case 2:
                response = _context4.sent;

                if (!response.ok) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 6;
                return response.json();

              case 6:
                options = _context4.sent;
                return _context4.abrupt("return", Loader.set(id, domContainer, options));

              case 10:
                fetchError(response.status);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }
  }, {
    key: "setOnClickHandler",
    value: function setOnClickHandler(callback) {
      var dom = Loader.dom();

      if (dom.length === 0) {
        throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
      }

      var _iterator = _createForOfIteratorHelper(dom),
          _step;

      try {
        var _loop = function _loop() {
          var domItem = _step.value;
          var el = domItem.interactivity.element;

          if (!el) {
            return "continue";
          }

          var clickOrTouchHandler = function clickOrTouchHandler(e, pos) {
            if (domItem.destroyed) {
              return;
            }

            var pxRatio = domItem.retina.pixelRatio;
            var posRetina = {
              x: pos.x * pxRatio,
              y: pos.y * pxRatio
            };
            var particles = domItem.particles.quadTree.queryCircle(posRetina, domItem.retina.sizeValue);
            callback(e, particles);
          };

          var clickHandler = function clickHandler(e) {
            if (domItem.destroyed) {
              return;
            }

            var mouseEvent = e;
            var pos = {
              x: mouseEvent.offsetX || mouseEvent.clientX,
              y: mouseEvent.offsetY || mouseEvent.clientY
            };
            clickOrTouchHandler(e, pos);
          };

          var touchStartHandler = function touchStartHandler() {
            if (domItem.destroyed) {
              return;
            }

            touched = true;
            touchMoved = false;
          };

          var touchMoveHandler = function touchMoveHandler() {
            if (domItem.destroyed) {
              return;
            }

            touchMoved = true;
          };

          var touchEndHandler = function touchEndHandler(e) {
            var _a, _b, _c;

            if (domItem.destroyed) {
              return;
            }

            if (touched && !touchMoved) {
              var touchEvent = e;
              var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
              var canvasRect = (_a = domItem.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
              var pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
              };
              clickOrTouchHandler(e, pos);
            }

            touched = false;
            touchMoved = false;
          };

          var touchCancelHandler = function touchCancelHandler() {
            if (domItem.destroyed) {
              return;
            }

            touched = false;
            touchMoved = false;
          };

          var touched = false;
          var touchMoved = false;
          el.addEventListener("click", clickHandler);
          el.addEventListener("touchstart", touchStartHandler);
          el.addEventListener("touchmove", touchMoveHandler);
          el.addEventListener("touchend", touchEndHandler);
          el.addEventListener("touchcancel", touchCancelHandler);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Loader;
}();

exports.Loader = Loader;

/***/ }),

/***/ "Ej6A":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbsorberSize = void 0;

var ValueWithRandom_1 = __webpack_require__(/*! ../../../../Options/Classes/ValueWithRandom */ "9P/A");

var AbsorberSize = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(AbsorberSize, _ValueWithRandom_1$Va);

  var _super = _createSuper(AbsorberSize);

  function AbsorberSize() {
    var _this;

    _classCallCheck(this, AbsorberSize);

    _this = _super.call(this);
    _this.density = 5;
    _this.random.minimumValue = 1;
    _this.value = 50;
    return _this;
  }

  _createClass(AbsorberSize, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      _get(_getPrototypeOf(AbsorberSize.prototype), "load", this).call(this, data);

      if (data.density !== undefined) {
        this.density = data.density;
      }

      if (data.limit !== undefined) {
        this.limit = data.limit;
      }

      if (data.limit !== undefined) {
        this.limit = data.limit;
      }
    }
  }]);

  return AbsorberSize;
}(ValueWithRandom_1.ValueWithRandom);

exports.AbsorberSize = AbsorberSize;

/***/ }),

/***/ "Erz+":
/*!*******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Circle.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;

var Range_1 = __webpack_require__(/*! ./Range */ "/6af");

var Circle = /*#__PURE__*/function (_Range_1$Range) {
  _inherits(Circle, _Range_1$Range);

  var _super = _createSuper(Circle);

  function Circle(x, y, radius) {
    var _this;

    _classCallCheck(this, Circle);

    _this = _super.call(this, x, y);
    _this.radius = radius;
    return _this;
  }

  _createClass(Circle, [{
    key: "contains",
    value: function contains(point) {
      var d = Math.pow(point.x - this.position.x, 2) + Math.pow(point.y - this.position.y, 2);
      return d <= this.radius * this.radius;
    }
  }, {
    key: "intersects",
    value: function intersects(range) {
      var rect = range;
      var circle = range;
      var pos1 = this.position;
      var pos2 = range.position;
      var xDist = Math.abs(pos2.x - pos1.x);
      var yDist = Math.abs(pos2.y - pos1.y);
      var r = this.radius;

      if (circle.radius !== undefined) {
        var rSum = r + circle.radius;
        var dist = Math.sqrt(xDist * xDist + yDist + yDist);
        return rSum > dist;
      } else if (rect.size !== undefined) {
        var w = rect.size.width;
        var h = rect.size.height;
        var edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);

        if (xDist > r + w || yDist > r + h) {
          return false;
        }

        if (xDist <= w || yDist <= h) {
          return true;
        }

        return edges <= r * r;
      }

      return false;
    }
  }]);

  return Circle;
}(Range_1.Range);

exports.Circle = Circle;

/***/ }),

/***/ "FQ7a":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/TrailMaker.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrailMaker = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var TrailMaker = /*#__PURE__*/function () {
  function TrailMaker(container) {
    _classCallCheck(this, TrailMaker);

    this.container = container;
    this.delay = 0;
  }

  _createClass(TrailMaker, [{
    key: "interact",
    value: function interact(delta) {
      if (!this.container.retina.reduceFactor) {
        return;
      }

      var container = this.container;
      var options = container.options;
      var trailOptions = options.interactivity.modes.trail;
      var optDelay = trailOptions.delay * 1000 / this.container.retina.reduceFactor;

      if (this.delay < optDelay) {
        this.delay += delta.value;
      }

      if (this.delay >= optDelay) {
        container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
        this.delay -= optDelay;
      }
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var options = container.options;
      var mouse = container.interactivity.mouse;
      var events = options.interactivity.events;
      return mouse.clicking && mouse.inside && !!mouse.position && Utils_1.Utils.isInArray(Modes_1.ClickMode.trail, events.onClick.mode) || mouse.inside && !!mouse.position && Utils_1.Utils.isInArray(Modes_1.HoverMode.trail, events.onHover.mode);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return TrailMaker;
}();

exports.TrailMaker = TrailMaker;

/***/ }),

/***/ "FRgf":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMode/BackgroundMode.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundMode = void 0;

var BackgroundMode = /*#__PURE__*/function () {
  function BackgroundMode() {
    _classCallCheck(this, BackgroundMode);

    this.enable = false;
    this.zIndex = -1;
  }

  _createClass(BackgroundMode, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.zIndex !== undefined) {
        this.zIndex = data.zIndex;
      }
    }
  }]);

  return BackgroundMode;
}();

exports.BackgroundMode = BackgroundMode;

/***/ }),

/***/ "FUZa":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Lighter.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lighter = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var Lighter = /*#__PURE__*/function () {
  function Lighter(container) {
    _classCallCheck(this, Lighter);

    this.container = container;
  }

  _createClass(Lighter, [{
    key: "interact",
    value: function interact(particle) {
      var container = this.container;
      var options = container.options;

      if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
        var mousePos = this.container.interactivity.mouse.position;

        if (mousePos) {
          container.canvas.drawParticleShadow(particle, mousePos);
        }
      }
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var mouse = container.interactivity.mouse;
      var events = container.options.interactivity.events;

      if (!(events.onHover.enable && mouse.position)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      return Utils_1.Utils.isInArray(Modes_1.HoverMode.light, hoverMode);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return Lighter;
}();

exports.Lighter = Lighter;

/***/ }),

/***/ "FsTW":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightShadow.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightShadow = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var LightShadow = /*#__PURE__*/function () {
  function LightShadow() {
    _classCallCheck(this, LightShadow);

    this.color = new OptionsColor_1.OptionsColor();
    this.color.value = "#000000";
    this.length = 2000;
  }

  _createClass(LightShadow, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

      if (data.length !== undefined) {
        this.length = data.length;
      }
    }
  }]);

  return LightShadow;
}();

exports.LightShadow = LightShadow;

/***/ }),

/***/ "FvHc":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./AbsorberClickMode */ "q39K"), exports);

/***/ }),

/***/ "G7pQ":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivEvent = void 0;

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var DivEvent = /*#__PURE__*/function () {
  function DivEvent() {
    _classCallCheck(this, DivEvent);

    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = Enums_1.DivType.circle;
  }

  _createClass(DivEvent, [{
    key: "load",
    value: function load(data) {
      var _a, _b;

      if (data === undefined) {
        return;
      }

      var ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;

      if (ids !== undefined) {
        this.ids = ids;
      }

      if (data.selectors !== undefined) {
        this.selectors = data.selectors;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }
    }
  }, {
    key: "elementId",
    get: function get() {
      return this.ids;
    },
    set: function set(value) {
      this.ids = value;
    }
  }, {
    key: "el",
    get: function get() {
      return this.elementId;
    },
    set: function set(value) {
      this.elementId = value;
    }
  }, {
    key: "ids",
    get: function get() {
      if (this.selectors instanceof Array) {
        return this.selectors.map(function (t) {
          return t.replace("#", "");
        });
      } else {
        return this.selectors.replace("#", "");
      }
    },
    set: function set(value) {
      if (value instanceof Array) {
        this.selectors = value.map(function (t) {
          return "#".concat(t);
        });
      } else {
        this.selectors = "#".concat(value);
      }
    }
  }]);

  return DivEvent;
}();

exports.DivEvent = DivEvent;

/***/ }),

/***/ "GMfk":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interactivity = void 0;

var Enums_1 = __webpack_require__(/*! ../../../Enums */ "ZlLd");

var Events_1 = __webpack_require__(/*! ./Events/Events */ "7puq");

var Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "mwEM");

var Interactivity = /*#__PURE__*/function () {
  function Interactivity() {
    _classCallCheck(this, Interactivity);

    this.detectsOn = Enums_1.InteractivityDetect.canvas;
    this.events = new Events_1.Events();
    this.modes = new Modes_1.Modes();
  }

  _createClass(Interactivity, [{
    key: "load",
    value: function load(data) {
      var _a, _b, _c;

      if (data === undefined) {
        return;
      }

      var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;

      if (detectsOn !== undefined) {
        this.detectsOn = detectsOn;
      }

      this.events.load(data.events);
      this.modes.load(data.modes);

      if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
        if (this.events.onHover.mode instanceof Array) {
          if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) {
            this.events.onHover.mode.push(Enums_1.HoverMode.slow);
          }
        } else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) {
          this.events.onHover.mode = [this.events.onHover.mode, Enums_1.HoverMode.slow];
        }
      }
    }
  }, {
    key: "detect_on",
    get: function get() {
      return this.detectsOn;
    },
    set: function set(value) {
      this.detectsOn = value;
    }
  }]);

  return Interactivity;
}();

exports.Interactivity = Interactivity;

/***/ }),

/***/ "GXtI":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "GbOK":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twinkle = void 0;

var TwinkleValues_1 = __webpack_require__(/*! ./TwinkleValues */ "J8hw");

var Twinkle = /*#__PURE__*/function () {
  function Twinkle() {
    _classCallCheck(this, Twinkle);

    this.lines = new TwinkleValues_1.TwinkleValues();
    this.particles = new TwinkleValues_1.TwinkleValues();
  }

  _createClass(Twinkle, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.lines.load(data.lines);
      this.particles.load(data.particles);
    }
  }]);

  return Twinkle;
}();

exports.Twinkle = Twinkle;

/***/ }),

/***/ "HMt+":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DivType.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivType = void 0;
var DivType;

(function (DivType) {
  DivType["circle"] = "circle";
  DivType["rectangle"] = "rectangle";
})(DivType = exports.DivType || (exports.DivType = {}));

/***/ }),

/***/ "IJxr":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Connector.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connector = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var Connector = /*#__PURE__*/function () {
  function Connector(container) {
    _classCallCheck(this, Connector);

    this.container = container;
  }

  _createClass(Connector, [{
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var mouse = container.interactivity.mouse;
      var events = container.options.interactivity.events;

      if (!(events.onHover.enable && mouse.position)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      return Utils_1.Utils.isInArray(Modes_1.HoverMode.connect, hoverMode);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact() {
      var container = this.container;
      var options = container.options;

      if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
        var mousePos = container.interactivity.mouse.position;

        if (!mousePos) {
          return;
        }

        var distance = Math.abs(container.retina.connectModeRadius);
        var query = container.particles.quadTree.queryCircle(mousePos, distance);
        var i = 0;

        var _iterator = _createForOfIteratorHelper(query),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p1 = _step.value;
            var pos1 = p1.getPosition();

            var _iterator2 = _createForOfIteratorHelper(query.slice(i + 1)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var p2 = _step2.value;
                var pos2 = p2.getPosition();
                var distMax = Math.abs(container.retina.connectModeDistance);
                var xDiff = Math.abs(pos1.x - pos2.x);
                var yDiff = Math.abs(pos1.y - pos2.y);

                if (xDiff < distMax && yDiff < distMax) {
                  container.canvas.drawConnectLine(p1, p2);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            ++i;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);

  return Connector;
}();

exports.Connector = Connector;

/***/ }),

/***/ "Iy9P":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stroke = void 0;

var AnimatableColor_1 = __webpack_require__(/*! ./AnimatableColor */ "W31w");

var Stroke = /*#__PURE__*/function () {
  function Stroke() {
    _classCallCheck(this, Stroke);

    this.width = 0;
  }

  _createClass(Stroke, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }]);

  return Stroke;
}();

exports.Stroke = Stroke;

/***/ }),

/***/ "J15q":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Point.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = void 0;

var Point = function Point(position, particle) {
  _classCallCheck(this, Point);

  this.position = position;
  this.particle = particle;
};

exports.Point = Point;

/***/ }),

/***/ "J8hw":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwinkleValues = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var TwinkleValues = /*#__PURE__*/function () {
  function TwinkleValues() {
    _classCallCheck(this, TwinkleValues);

    this.enable = false;
    this.frequency = 0.05;
    this.opacity = 1;
  }

  _createClass(TwinkleValues, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.frequency !== undefined) {
        this.frequency = data.frequency;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }]);

  return TwinkleValues;
}();

exports.TwinkleValues = TwinkleValues;

/***/ }),

/***/ "K2J4":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Noise/Noise.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Noise = void 0;

var NoiseDelay_1 = __webpack_require__(/*! ./NoiseDelay */ "2JtW");

var Noise = /*#__PURE__*/function () {
  function Noise() {
    _classCallCheck(this, Noise);

    this.delay = new NoiseDelay_1.NoiseDelay();
    this.enable = false;
  }

  _createClass(Noise, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.delay.load(data.delay);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }]);

  return Noise;
}();

exports.Noise = Noise;

/***/ }),

/***/ "KIMX":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Plugins.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugins = void 0;
var plugins = [];
var presets = new Map();
var drawers = new Map();

var Plugins = /*#__PURE__*/function () {
  function Plugins() {
    _classCallCheck(this, Plugins);
  }

  _createClass(Plugins, null, [{
    key: "getPlugin",
    value: function getPlugin(plugin) {
      return plugins.find(function (t) {
        return t.id === plugin;
      });
    }
  }, {
    key: "addPlugin",
    value: function addPlugin(plugin) {
      if (!Plugins.getPlugin(plugin.id)) {
        plugins.push(plugin);
      }
    }
  }, {
    key: "getAvailablePlugins",
    value: function getAvailablePlugins(container) {
      var res = new Map();

      var _iterator = _createForOfIteratorHelper(plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var plugin = _step.value;

          if (!plugin.needsPlugin(container.options)) {
            continue;
          }

          res.set(plugin.id, plugin.getPlugin(container));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return res;
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(options, sourceOptions) {
      var _iterator2 = _createForOfIteratorHelper(plugins),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var plugin = _step2.value;
          plugin.loadOptions(options, sourceOptions);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "getPreset",
    value: function getPreset(preset) {
      return presets.get(preset);
    }
  }, {
    key: "addPreset",
    value: function addPreset(presetKey, options) {
      if (!Plugins.getPreset(presetKey)) {
        presets.set(presetKey, options);
      }
    }
  }, {
    key: "addShapeDrawer",
    value: function addShapeDrawer(type, drawer) {
      if (!Plugins.getShapeDrawer(type)) {
        drawers.set(type, drawer);
      }
    }
  }, {
    key: "getShapeDrawer",
    value: function getShapeDrawer(type) {
      return drawers.get(type);
    }
  }, {
    key: "getSupportedShapes",
    value: function getSupportedShapes() {
      return drawers.keys();
    }
  }]);

  return Plugins;
}();

exports.Plugins = Plugins;

/***/ }),

/***/ "KbmP":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalSvg = void 0;

var LocalSvg = /*#__PURE__*/function () {
  function LocalSvg() {
    _classCallCheck(this, LocalSvg);

    this.path = [];
    this.size = {
      height: 0,
      width: 0
    };
  }

  _createClass(LocalSvg, [{
    key: "load",
    value: function load(data) {
      if (data !== undefined) {
        if (data.path !== undefined) {
          this.path = data.path;
        }

        if (data.size !== undefined) {
          if (data.size.width !== undefined) {
            this.size.width = data.size.width;
          }

          if (data.size.height !== undefined) {
            this.size.height = data.size.height;
          }
        }
      }
    }
  }]);

  return LocalSvg;
}();

exports.LocalSvg = LocalSvg;

/***/ }),

/***/ "KdG0":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmitterRate = void 0;

var EmitterRate = /*#__PURE__*/function () {
  function EmitterRate() {
    _classCallCheck(this, EmitterRate);

    this.quantity = 1;
    this.delay = 0.1;
  }

  _createClass(EmitterRate, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.quantity !== undefined) {
        this.quantity = data.quantity;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }
    }
  }]);

  return EmitterRate;
}();

exports.EmitterRate = EmitterRate;

/***/ }),

/***/ "KttE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectLinks = void 0;

var ConnectLinks = /*#__PURE__*/function () {
  function ConnectLinks() {
    _classCallCheck(this, ConnectLinks);

    this.opacity = 0.5;
  }

  _createClass(ConnectLinks, [{
    key: "load",
    value: function load(data) {
      if (!(data !== undefined && data.opacity !== undefined)) {
        return;
      }

      this.opacity = data.opacity;
    }
  }]);

  return ConnectLinks;
}();

exports.ConnectLinks = ConnectLinks;

/***/ }),

/***/ "LPIU":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Remove = void 0;

var Remove = /*#__PURE__*/function () {
  function Remove() {
    _classCallCheck(this, Remove);

    this.quantity = 2;
  }

  _createClass(Remove, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data === undefined) {
        return;
      }

      var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

      if (quantity !== undefined) {
        this.quantity = quantity;
      }
    }
  }, {
    key: "particles_nb",
    get: function get() {
      return this.quantity;
    },
    set: function set(value) {
      this.quantity = value;
    }
  }]);

  return Remove;
}();

exports.Remove = Remove;

/***/ }),

/***/ "LfGR":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Draw = void 0;

var DrawStroke_1 = __webpack_require__(/*! ./DrawStroke */ "sJdS");

var OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "vRcM");

var Draw = /*#__PURE__*/function () {
  function Draw() {
    _classCallCheck(this, Draw);

    this.enable = false;
    this.stroke = new DrawStroke_1.DrawStroke();
  }

  _createClass(Draw, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data !== undefined) {
        if (data.enable !== undefined) {
          this.enable = data.enable;
        }

        var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
          color: data.lineColor,
          width: data.lineWidth
        };
        this.stroke.load(stroke);
      }
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this.stroke.width;
    },
    set: function set(value) {
      this.stroke.width = value;
    }
  }, {
    key: "lineColor",
    get: function get() {
      return this.stroke.color;
    },
    set: function set(value) {
      this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
    }
  }]);

  return Draw;
}();

exports.Draw = Draw;

/***/ }),

/***/ "Lgoq":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Random.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Random = void 0;

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);

    this.enable = false;
    this.minimumValue = 0;
  }

  _createClass(Random, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }]);

  return Random;
}();

exports.Random = Random;

/***/ }),

/***/ "LpZt":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Size = void 0;

var SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "brjH");

var ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "9P/A");

var Size = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(Size, _ValueWithRandom_1$Va);

  var _super = _createSuper(Size);

  function Size() {
    var _this;

    _classCallCheck(this, Size);

    _this = _super.call(this);
    _this.animation = new SizeAnimation_1.SizeAnimation();
    _this.random.minimumValue = 1;
    _this.value = 3;
    return _this;
  }

  _createClass(Size, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (!data) {
        return;
      }

      _get(_getPrototypeOf(Size.prototype), "load", this).call(this, data);

      var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;

      if (animation !== undefined) {
        this.animation.load(animation);
      }
    }
  }, {
    key: "anim",
    get: function get() {
      return this.animation;
    },
    set: function set(value) {
      this.animation = value;
    }
  }]);

  return Size;
}(ValueWithRandom_1.ValueWithRandom);

exports.Size = Size;

/***/ }),

/***/ "Lut8":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleDrawer = void 0;

var CircleDrawer = /*#__PURE__*/function () {
  function CircleDrawer() {
    _classCallCheck(this, CircleDrawer);
  }

  _createClass(CircleDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount() {
      return 12;
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius) {
      context.arc(0, 0, radius, 0, Math.PI * 2, false);
    }
  }]);

  return CircleDrawer;
}();

exports.CircleDrawer = CircleDrawer;

/***/ }),

/***/ "Lw8S":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "N6qZ":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particles = void 0;

var Links_1 = __webpack_require__(/*! ./Links/Links */ "Dp6u");

var Move_1 = __webpack_require__(/*! ./Move/Move */ "6hcf");

var ParticlesNumber_1 = __webpack_require__(/*! ./Number/ParticlesNumber */ "Zb7y");

var Opacity_1 = __webpack_require__(/*! ./Opacity/Opacity */ "3R7e");

var Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "tNle");

var Size_1 = __webpack_require__(/*! ./Size/Size */ "LpZt");

var Rotate_1 = __webpack_require__(/*! ./Rotate/Rotate */ "DLAq");

var Shadow_1 = __webpack_require__(/*! ./Shadow */ "1X1F");

var Stroke_1 = __webpack_require__(/*! ./Stroke */ "Iy9P");

var Collisions_1 = __webpack_require__(/*! ./Collisions */ "+UjZ");

var Twinkle_1 = __webpack_require__(/*! ./Twinkle/Twinkle */ "GbOK");

var AnimatableColor_1 = __webpack_require__(/*! ./AnimatableColor */ "W31w");

var Life_1 = __webpack_require__(/*! ./Life/Life */ "yCRH");

var Bounce_1 = __webpack_require__(/*! ./Bounce/Bounce */ "za7v");

var Particles = /*#__PURE__*/function () {
  function Particles() {
    _classCallCheck(this, Particles);

    this.bounce = new Bounce_1.Bounce();
    this.collisions = new Collisions_1.Collisions();
    this.color = new AnimatableColor_1.AnimatableColor();
    this.life = new Life_1.Life();
    this.links = new Links_1.Links();
    this.move = new Move_1.Move();
    this.number = new ParticlesNumber_1.ParticlesNumber();
    this.opacity = new Opacity_1.Opacity();
    this.reduceDuplicates = false;
    this.rotate = new Rotate_1.Rotate();
    this.shadow = new Shadow_1.Shadow();
    this.shape = new Shape_1.Shape();
    this.size = new Size_1.Size();
    this.stroke = new Stroke_1.Stroke();
    this.twinkle = new Twinkle_1.Twinkle();
  }

  _createClass(Particles, [{
    key: "load",
    value: function load(data) {
      var _a, _b, _c, _d, _e, _f, _g;

      if (data === undefined) {
        return;
      }

      this.bounce.load(data.bounce);
      this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
      this.life.load(data.life);
      var links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;

      if (links !== undefined) {
        this.links.load(links);
      }

      this.move.load(data.move);
      this.number.load(data.number);
      this.opacity.load(data.opacity);

      if (data.reduceDuplicates !== undefined) {
        this.reduceDuplicates = data.reduceDuplicates;
      }

      this.rotate.load(data.rotate);
      this.shape.load(data.shape);
      this.size.load(data.size);
      this.shadow.load(data.shadow);
      this.twinkle.load(data.twinkle);
      var collisions = (_d = (_c = data.move) === null || _c === void 0 ? void 0 : _c.collisions) !== null && _d !== void 0 ? _d : (_e = data.move) === null || _e === void 0 ? void 0 : _e.bounce;

      if (collisions !== undefined) {
        this.collisions.enable = collisions;
      }

      this.collisions.load(data.collisions);
      var strokeToLoad = (_f = data.stroke) !== null && _f !== void 0 ? _f : (_g = data.shape) === null || _g === void 0 ? void 0 : _g.stroke;

      if (strokeToLoad === undefined) {
        return;
      }

      if (strokeToLoad instanceof Array) {
        this.stroke = strokeToLoad.map(function (s) {
          var tmp = new Stroke_1.Stroke();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.stroke instanceof Array) {
          this.stroke = new Stroke_1.Stroke();
        }

        this.stroke.load(strokeToLoad);
      }
    }
  }, {
    key: "line_linked",
    get: function get() {
      return this.links;
    },
    set: function set(value) {
      this.links = value;
    }
  }, {
    key: "lineLinked",
    get: function get() {
      return this.links;
    },
    set: function set(value) {
      this.links = value;
    }
  }]);

  return Particles;
}();

exports.Particles = Particles;

/***/ }),

/***/ "NhLh":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./Types */ "muAV"), exports);

/***/ }),

/***/ "NiW4":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpacityAnimation = void 0;

var Types_1 = __webpack_require__(/*! ../../../../Enums/Types */ "muAV");

var OpacityAnimation = /*#__PURE__*/function () {
  function OpacityAnimation() {
    _classCallCheck(this, OpacityAnimation);

    this.destroy = Types_1.DestroyType.none;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.startValue = Types_1.StartValueType.random;
    this.sync = false;
  }

  _createClass(OpacityAnimation, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data === undefined) {
        return;
      }

      if (data.destroy !== undefined) {
        this.destroy = data.destroy;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;

      if (minimumValue !== undefined) {
        this.minimumValue = minimumValue;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.startValue !== undefined) {
        this.startValue = data.startValue;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }, {
    key: "opacity_min",
    get: function get() {
      return this.minimumValue;
    },
    set: function set(value) {
      this.minimumValue = value;
    }
  }]);

  return OpacityAnimation;
}();

exports.OpacityAnimation = OpacityAnimation;

/***/ }),

/***/ "OGap":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.Utils = exports.Constants = exports.ColorUtils = exports.CanvasUtils = void 0;

var pjs_1 = __webpack_require__(/*! ./pjs */ "vH5O");

var main_1 = __webpack_require__(/*! ./main */ "z6mI");

var Utils_1 = __webpack_require__(/*! ./Utils */ "C9b5");

Object.defineProperty(exports, "CanvasUtils", {
  enumerable: true,
  get: function get() {
    return Utils_1.CanvasUtils;
  }
});
Object.defineProperty(exports, "ColorUtils", {
  enumerable: true,
  get: function get() {
    return Utils_1.ColorUtils;
  }
});
Object.defineProperty(exports, "Constants", {
  enumerable: true,
  get: function get() {
    return Utils_1.Constants;
  }
});
Object.defineProperty(exports, "Utils", {
  enumerable: true,
  get: function get() {
    return Utils_1.Utils;
  }
});
var tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();

var _pjs_1$initPjs = pjs_1.initPjs(tsParticles),
    particlesJS = _pjs_1$initPjs.particlesJS,
    pJSDom = _pjs_1$initPjs.pJSDom;

exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;

__exportStar(__webpack_require__(/*! ./Core/Container */ "Tx5y"), exports);

__exportStar(__webpack_require__(/*! ./Enums */ "ZlLd"), exports);

__exportStar(__webpack_require__(/*! ./Plugins/Absorbers/Enums */ "FvHc"), exports);

__exportStar(__webpack_require__(/*! ./Plugins/Emitters/Enums */ "D98Q"), exports);

__exportStar(__webpack_require__(/*! ./Plugins/PolygonMask/Enums */ "qtyS"), exports);

__exportStar(__webpack_require__(/*! ./Types */ "+IuE"), exports);

/***/ }),

/***/ "OtcP":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/ShapeDrawerFunctions.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ "P+GZ":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Number/Density.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Density = void 0;

var Density = /*#__PURE__*/function () {
  function Density() {
    _classCallCheck(this, Density);

    this.enable = false;
    this.area = 800;
    this.factor = 1000;
  }

  _createClass(Density, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;

      if (area !== undefined) {
        this.area = area;
      }

      if (data.factor !== undefined) {
        this.factor = data.factor;
      }
    }
  }, {
    key: "value_area",
    get: function get() {
      return this.area;
    },
    set: function set(value) {
      this.area = value;
    }
  }]);

  return Density;
}();

exports.Density = Density;

/***/ }),

/***/ "PFhk":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmitterSize = void 0;

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var EmitterSize = /*#__PURE__*/function () {
  function EmitterSize() {
    _classCallCheck(this, EmitterSize);

    this.mode = Enums_1.SizeMode.percent;
    this.height = 0;
    this.width = 0;
  }

  _createClass(EmitterSize, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      if (data.height !== undefined) {
        this.height = data.height;
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }]);

  return EmitterSize;
}();

exports.EmitterSize = EmitterSize;

/***/ }),

/***/ "PeBj":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slow = void 0;

var Slow = /*#__PURE__*/function () {
  function Slow() {
    _classCallCheck(this, Slow);

    this.factor = 3;
    this.radius = 200;
  }

  _createClass(Slow, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.factor !== undefined) {
        this.factor = data.factor;
      }

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }, {
    key: "active",
    get: function get() {
      return false;
    },
    set: function set(_value) {}
  }]);

  return Slow;
}();

exports.Slow = Slow;

/***/ }),

/***/ "QD5p":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/FrameManager.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameManager = void 0;

var FrameManager = /*#__PURE__*/function () {
  function FrameManager(container) {
    _classCallCheck(this, FrameManager);

    this.container = container;
  }

  _createClass(FrameManager, [{
    key: "nextFrame",
    value: function nextFrame(timestamp) {
      try {
        var container = this.container;

        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / container.fpsLimit) {
          container.draw();
          return;
        }

        var deltaValue = timestamp - container.lastFrameTime;
        var delta = {
          value: deltaValue,
          factor: 60 * deltaValue / 1000
        };
        container.lastFrameTime = timestamp;
        container.particles.draw(delta);

        if (container.getAnimationStatus()) {
          container.draw();
        }
      } catch (e) {
        console.error("tsParticles error in animation loop", e);
      }
    }
  }]);

  return FrameManager;
}();

exports.FrameManager = FrameManager;

/***/ }),

/***/ "QENi":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivMode = void 0;
var DivMode;

(function (DivMode) {
  DivMode["bounce"] = "bounce";
  DivMode["bubble"] = "bubble";
  DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));

/***/ }),

/***/ "Qbha":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextDrawer = void 0;

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ../Enums */ "ZlLd");

var TextDrawer = /*#__PURE__*/function () {
  function TextDrawer() {
    _classCallCheck(this, TextDrawer);
  }

  _createClass(TextDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount() {
      return 12;
    }
  }, {
    key: "init",
    value: function init(container) {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var options, shapeOptions, _iterator, _step, character;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = container.options;

                if (!(Utils_1.Utils.isInArray(Enums_1.ShapeType.char, options.particles.shape.type) || Utils_1.Utils.isInArray(Enums_1.ShapeType.character, options.particles.shape.type))) {
                  _context.next = 26;
                  break;
                }

                shapeOptions = (_a = options.particles.shape.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[Enums_1.ShapeType.char];

                if (!(shapeOptions instanceof Array)) {
                  _context.next = 23;
                  break;
                }

                _iterator = _createForOfIteratorHelper(shapeOptions);
                _context.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context.next = 13;
                  break;
                }

                character = _step.value;
                _context.next = 11;
                return Utils_1.Utils.loadFont(character);

              case 11:
                _context.next = 7;
                break;

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);

                _iterator.e(_context.t0);

              case 18:
                _context.prev = 18;

                _iterator.f();

                return _context.finish(18);

              case 21:
                _context.next = 26;
                break;

              case 23:
                if (!(shapeOptions !== undefined)) {
                  _context.next = 26;
                  break;
                }

                _context.next = 26;
                return Utils_1.Utils.loadFont(shapeOptions);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 15, 18, 21]]);
      }));
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius) {
      var character = particle.shapeData;

      if (character === undefined) {
        return;
      }

      var textData = character.value;

      if (textData === undefined) {
        return;
      }

      var textParticle = particle;

      if (textParticle.text === undefined) {
        textParticle.text = textData instanceof Array ? Utils_1.Utils.itemFromArray(textData, particle.randomIndexData) : textData;
      }

      var text = textParticle.text;
      var style = character.style;
      var weight = character.weight;
      var size = Math.round(radius) * 2;
      var font = character.font;
      var fill = particle.fill;
      var offsetX = text.length * radius / 2;
      context.font = "".concat(style, " ").concat(weight, " ").concat(size, "px \"").concat(font, "\"");
      var pos = {
        x: -offsetX,
        y: radius / 2
      };

      if (fill) {
        context.fillText(text, pos.x, pos.y);
      } else {
        context.strokeText(text, pos.x, pos.y);
      }
    }
  }]);

  return TextDrawer;
}();

exports.TextDrawer = TextDrawer;

/***/ }),

/***/ "QkZH":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Background = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "vRcM");

var Background = /*#__PURE__*/function () {
  function Background() {
    _classCallCheck(this, Background);

    this.color = new OptionsColor_1.OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }

  _createClass(Background, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      if (data.image !== undefined) {
        this.image = data.image;
      }

      if (data.position !== undefined) {
        this.position = data.position;
      }

      if (data.repeat !== undefined) {
        this.repeat = data.repeat;
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }]);

  return Background;
}();

exports.Background = Background;

/***/ }),

/***/ "QyzU":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitters = void 0;

var EmitterInstance_1 = __webpack_require__(/*! ./EmitterInstance */ "URwT");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "nxdw");

var Enums_1 = __webpack_require__(/*! ./Enums */ "D98Q");

var Emitters = /*#__PURE__*/function () {
  function Emitters(container) {
    var _this = this;

    _classCallCheck(this, Emitters);

    this.container = container;
    this.array = [];
    this.emitters = [];
    this.interactivityEmitters = [];
    var overridableContainer = container;

    overridableContainer.addEmitter = function (options, position) {
      return _this.addEmitter(options, position);
    };
  }

  _createClass(Emitters, [{
    key: "init",
    value: function init(options) {
      var _a, _b;

      if (!options) {
        return;
      }

      if (options.emitters) {
        if (options.emitters instanceof Array) {
          this.emitters = options.emitters.map(function (s) {
            var tmp = new Emitter_1.Emitter();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.emitters instanceof Array) {
            this.emitters = new Emitter_1.Emitter();
          }

          this.emitters.load(options.emitters);
        }
      }

      var interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;

      if (interactivityEmitters) {
        if (interactivityEmitters instanceof Array) {
          this.interactivityEmitters = interactivityEmitters.map(function (s) {
            var tmp = new Emitter_1.Emitter();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.interactivityEmitters instanceof Array) {
            this.interactivityEmitters = new Emitter_1.Emitter();
          }

          this.interactivityEmitters.load(interactivityEmitters);
        }
      }

      if (this.emitters instanceof Array) {
        var _iterator = _createForOfIteratorHelper(this.emitters),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var emitterOptions = _step.value;
            this.addEmitter(emitterOptions);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        this.addEmitter(this.emitters);
      }
    }
  }, {
    key: "play",
    value: function play() {
      var _iterator2 = _createForOfIteratorHelper(this.array),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var emitter = _step2.value;
          emitter.play();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var _iterator3 = _createForOfIteratorHelper(this.array),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var emitter = _step3.value;
          emitter.pause();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.array = [];
    }
  }, {
    key: "handleClickMode",
    value: function handleClickMode(mode) {
      var container = this.container;
      var emitterOptions = this.emitters;
      var modeEmitters = this.interactivityEmitters;

      if (mode === Enums_1.EmitterClickMode.emitter) {
        var emitterModeOptions;

        if (modeEmitters instanceof Array) {
          if (modeEmitters.length > 0) {
            emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
          }
        } else {
          emitterModeOptions = modeEmitters;
        }

        var emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : emitterOptions instanceof Array ? Utils_1.Utils.itemFromArray(emitterOptions) : emitterOptions;
        var ePosition = container.interactivity.mouse.clickPosition;
        this.addEmitter(Utils_1.Utils.deepExtend({}, emittersOptions), ePosition);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var _iterator4 = _createForOfIteratorHelper(this.array),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var emitter = _step4.value;
          emitter.resize();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "addEmitter",
    value: function addEmitter(options, position) {
      var emitter = new EmitterInstance_1.EmitterInstance(this, this.container, options, position);
      this.array.push(emitter);
      return emitter;
    }
  }, {
    key: "removeEmitter",
    value: function removeEmitter(emitter) {
      var index = this.array.indexOf(emitter);

      if (index >= 0) {
        this.array.splice(index, 1);
      }
    }
  }]);

  return Emitters;
}();

exports.Emitters = Emitters;

/***/ }),

/***/ "Rgnc":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Attractor.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attractor = void 0;

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Attractor = /*#__PURE__*/function () {
  function Attractor(container) {
    _classCallCheck(this, Attractor);

    this.container = container;
  }

  _createClass(Attractor, [{
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var options = container.options;
      var mouse = container.interactivity.mouse;
      var events = options.interactivity.events;

      if (!(events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      var clickMode = events.onClick.mode;
      return Utils_1.Utils.isInArray(Enums_1.HoverMode.attract, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.attract, clickMode);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact() {
      var container = this.container;
      var options = container.options;
      var mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
      var events = options.interactivity.events;
      var hoverEnabled = events.onHover.enable;
      var hoverMode = events.onHover.mode;
      var clickEnabled = events.onClick.enable;
      var clickMode = events.onClick.mode;

      if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.attract, hoverMode)) {
        this.hoverAttract();
      } else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.attract, clickMode)) {
        this.clickAttract();
      }
    }
  }, {
    key: "hoverAttract",
    value: function hoverAttract() {
      var container = this.container;
      var mousePos = container.interactivity.mouse.position;

      if (!mousePos) {
        return;
      }

      var attractRadius = container.retina.attractModeDistance;
      this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
    }
  }, {
    key: "processAttract",
    value: function processAttract(position, attractRadius, area) {
      var container = this.container;
      var query = container.particles.quadTree.query(area);

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;

          var _Utils_1$NumberUtils$ = Utils_1.NumberUtils.getDistances(particle.position, position),
              dx = _Utils_1$NumberUtils$.dx,
              dy = _Utils_1$NumberUtils$.dy,
              distance = _Utils_1$NumberUtils$.distance;

          var normVec = {
            x: dx / distance,
            y: dy / distance
          };
          var velocity = container.options.interactivity.modes.attract.speed;
          var attractFactor = Utils_1.NumberUtils.clamp((1 - Math.pow(distance / attractRadius, 2)) * velocity, 0, 50);
          particle.position.x = particle.position.x - normVec.x * attractFactor;
          particle.position.y = particle.position.y - normVec.y * attractFactor;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clickAttract",
    value: function clickAttract() {
      var container = this.container;

      if (!container.attract.finish) {
        if (!container.attract.count) {
          container.attract.count = 0;
        }

        container.attract.count++;

        if (container.attract.count === container.particles.count) {
          container.attract.finish = true;
        }
      }

      if (container.attract.clicking) {
        var mousePos = container.interactivity.mouse.clickPosition;

        if (!mousePos) {
          return;
        }

        var attractRadius = container.retina.attractModeDistance;
        this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
      } else if (container.attract.clicking === false) {
        container.attract.particles = [];
      }

      return;
    }
  }]);

  return Attractor;
}();

exports.Attractor = Attractor;

/***/ }),

/***/ "Rmgd":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDuration.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LifeDuration = void 0;

var ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "9P/A");

var LifeDuration = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(LifeDuration, _ValueWithRandom_1$Va);

  var _super = _createSuper(LifeDuration);

  function LifeDuration() {
    var _this;

    _classCallCheck(this, LifeDuration);

    _this = _super.call(this);
    _this.random.minimumValue = 0.0001;
    _this.sync = false;
    return _this;
  }

  _createClass(LifeDuration, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      _get(_getPrototypeOf(LifeDuration.prototype), "load", this).call(this, data);

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }]);

  return LifeDuration;
}(ValueWithRandom_1.ValueWithRandom);

exports.LifeDuration = LifeDuration;

/***/ }),

/***/ "RroA":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Infection = void 0;

var InfectionStage_1 = __webpack_require__(/*! ./InfectionStage */ "56Cg");

var Infection = /*#__PURE__*/function () {
  function Infection() {
    _classCallCheck(this, Infection);

    this.cure = false;
    this.delay = 0;
    this.enable = false;
    this.infections = 0;
    this.stages = [];
  }

  _createClass(Infection, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.cure !== undefined) {
        this.cure = data.cure;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.infections !== undefined) {
        this.infections = data.infections;
      }

      if (data.stages === undefined) {
        return;
      }

      this.stages = data.stages.map(function (t) {
        var s = new InfectionStage_1.InfectionStage();
        s.load(t);
        return s;
      });
    }
  }]);

  return Infection;
}();

exports.Infection = Infection;

/***/ }),

/***/ "Rxhr":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbsorbersPlugin = void 0;

var Absorbers_1 = __webpack_require__(/*! ./Absorbers */ "hQOV");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ./Enums */ "FvHc");

var Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "iot7");

var AbsorbersPlugin = /*#__PURE__*/function () {
  function AbsorbersPlugin() {
    _classCallCheck(this, AbsorbersPlugin);

    this.id = "absorbers";
  }

  _createClass(AbsorbersPlugin, [{
    key: "getPlugin",
    value: function getPlugin(container) {
      return new Absorbers_1.Absorbers(container);
    }
  }, {
    key: "needsPlugin",
    value: function needsPlugin(options) {
      var _a, _b, _c;

      if (options === undefined) {
        return false;
      }

      var absorbers = options.absorbers;
      var loadAbsorbers = false;

      if (absorbers instanceof Array) {
        if (absorbers.length) {
          loadAbsorbers = true;
        }
      } else if (absorbers !== undefined) {
        loadAbsorbers = true;
      } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && Utils_1.Utils.isInArray(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
        loadAbsorbers = true;
      }

      return loadAbsorbers;
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(options, source) {
      var _a, _b;

      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }

      var optionsCast = options;

      if (source === null || source === void 0 ? void 0 : source.absorbers) {
        if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
          optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map(function (s) {
            var tmp = new Absorber_1.Absorber();
            tmp.load(s);
            return tmp;
          });
        } else {
          var absorberOptions = optionsCast.absorbers;

          if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === undefined) {
            optionsCast.absorbers = absorberOptions = new Absorber_1.Absorber();
          }

          absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
        }
      }

      var interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;

      if (interactivityAbsorbers) {
        if (interactivityAbsorbers instanceof Array) {
          optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map(function (s) {
            var tmp = new Absorber_1.Absorber();
            tmp.load(s);
            return tmp;
          });
        } else {
          var _absorberOptions = optionsCast.interactivity.modes.absorbers;

          if ((_absorberOptions === null || _absorberOptions === void 0 ? void 0 : _absorberOptions.load) === undefined) {
            optionsCast.interactivity.modes.absorbers = _absorberOptions = new Absorber_1.Absorber();
          }

          _absorberOptions.load(interactivityAbsorbers);
        }
      }
    }
  }]);

  return AbsorbersPlugin;
}();

var plugin = new AbsorbersPlugin();
exports.AbsorbersPlugin = plugin;

__exportStar(__webpack_require__(/*! ./Enums */ "FvHc"), exports);

/***/ }),

/***/ "Sp1a":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskInlineArrangement = void 0;

var Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "qtyS");

Object.defineProperty(exports, "PolygonMaskInlineArrangement", {
  enumerable: true,
  get: function get() {
    return Enums_1.InlineArrangement;
  }
});

/***/ }),

/***/ "T8G5":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Theme/Theme.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = void 0;

var Utils_1 = __webpack_require__(/*! ../../../Utils */ "C9b5");

var ThemeDefault_1 = __webpack_require__(/*! ./ThemeDefault */ "q7n0");

var Theme = /*#__PURE__*/function () {
  function Theme() {
    _classCallCheck(this, Theme);

    this.name = "";
    this.default = new ThemeDefault_1.ThemeDefault();
  }

  _createClass(Theme, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.name !== undefined) {
        this.name = data.name;
      }

      this.default.load(data.default);

      if (data.options !== undefined) {
        this.options = Utils_1.Utils.deepExtend({}, data.options);
      }
    }
  }]);

  return Theme;
}();

exports.Theme = Theme;

/***/ }),

/***/ "TZGI":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveGravity.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveGravity = void 0;

var MoveGravity = /*#__PURE__*/function () {
  function MoveGravity() {
    _classCallCheck(this, MoveGravity);

    this.acceleration = 9.81;
    this.enable = false;
    this.maxSpeed = 50;
  }

  _createClass(MoveGravity, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (data.acceleration !== undefined) {
        this.acceleration = data.acceleration;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.maxSpeed !== undefined) {
        this.maxSpeed = data.maxSpeed;
      }
    }
  }]);

  return MoveGravity;
}();

exports.MoveGravity = MoveGravity;

/***/ }),

/***/ "Tdtd":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepulseBase = void 0;

var RepulseBase = /*#__PURE__*/function () {
  function RepulseBase() {
    _classCallCheck(this, RepulseBase);

    this.distance = 200;
    this.duration = 0.4;
    this.speed = 1;
  }

  _createClass(RepulseBase, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }
    }
  }]);

  return RepulseBase;
}();

exports.RepulseBase = RepulseBase;

/***/ }),

/***/ "Tx5y":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var Canvas_1 = __webpack_require__(/*! ./Canvas */ "xqYR");

var Particles_1 = __webpack_require__(/*! ./Particles */ "0pRb");

var Retina_1 = __webpack_require__(/*! ./Retina */ "qZoD");

var FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "QD5p");

var Options_1 = __webpack_require__(/*! ../Options/Classes/Options */ "Vmap");

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var Container = /*#__PURE__*/function () {
  function Container(id, sourceOptions) {
    var _this = this;

    _classCallCheck(this, Container);

    this.id = id;
    this.sourceOptions = sourceOptions;
    this.firstStart = true;
    this.started = false;
    this.destroyed = false;
    this.paused = true;
    this.lastFrameTime = 0;
    this.pageHidden = false;
    this.retina = new Retina_1.Retina(this);
    this.canvas = new Canvas_1.Canvas(this);
    this.particles = new Particles_1.Particles(this);
    this.drawer = new FrameManager_1.FrameManager(this);
    this.noise = {
      generate: function generate() {
        return {
          angle: Math.random() * Math.PI * 2,
          length: Math.random()
        };
      },
      init: function init() {},
      update: function update() {}
    };
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.bubble = {};
    this.repulse = {
      particles: []
    };
    this.attract = {
      particles: []
    };
    this.plugins = new Map();
    this.drawers = new Map();
    this.density = 1;
    this.options = new Options_1.Options();

    for (var _len = arguments.length, presets = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      presets[_key - 2] = arguments[_key];
    }

    for (var _i = 0, _presets = presets; _i < _presets.length; _i++) {
      var preset = _presets[_i];
      this.options.load(Utils_1.Plugins.getPreset(preset));
    }

    var shapes = Utils_1.Plugins.getSupportedShapes();

    var _iterator = _createForOfIteratorHelper(shapes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var drawer = Utils_1.Plugins.getShapeDrawer(type);

        if (drawer) {
          this.drawers.set(type, drawer);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (this.sourceOptions) {
      this.options.load(this.sourceOptions);
    }

    this.fpsLimit = this.options.fpsLimit > 0 ? this.options.fpsLimit : 60;
    this.options.setTheme(undefined);
    this.eventListeners = new Utils_1.EventListeners(this);

    if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(function (entries) {
        return _this.intersectionManager(entries);
      });
    }
  }

  _createClass(Container, [{
    key: "play",
    value: function play(force) {
      var needsUpdate = this.paused || force;

      if (this.firstStart && !this.options.autoPlay) {
        this.firstStart = false;
        return;
      }

      if (this.paused) {
        this.paused = false;
      }

      if (needsUpdate) {
        var _iterator2 = _createForOfIteratorHelper(this.plugins),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _ref3 = _step2.value;

            var _ref2 = _slicedToArray(_ref3, 2);

            var plugin = _ref2[1];

            if (plugin.play) {
              plugin.play();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.lastFrameTime = performance.now();
      }

      this.draw();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.drawAnimationFrame !== undefined) {
        Utils_1.Utils.cancelAnimation(this.drawAnimationFrame);
        delete this.drawAnimationFrame;
      }

      if (this.paused) {
        return;
      }

      var _iterator3 = _createForOfIteratorHelper(this.plugins),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ref6 = _step3.value;

          var _ref5 = _slicedToArray(_ref6, 2);

          var plugin = _ref5[1];

          if (plugin.pause) {
            plugin.pause();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (!this.pageHidden) {
        this.paused = true;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this.drawAnimationFrame = Utils_1.Utils.animate(function (timestamp) {
        return _this2.drawer.nextFrame(timestamp);
      });
    }
  }, {
    key: "getAnimationStatus",
    value: function getAnimationStatus() {
      return !this.paused;
    }
  }, {
    key: "setNoise",
    value: function setNoise(noiseOrGenerator, init, update) {
      if (!noiseOrGenerator) {
        return;
      }

      if (typeof noiseOrGenerator === "function") {
        this.noise.generate = noiseOrGenerator;

        if (init) {
          this.noise.init = init;
        }

        if (update) {
          this.noise.update = update;
        }
      } else {
        if (noiseOrGenerator.generate) {
          this.noise.generate = noiseOrGenerator.generate;
        }

        if (noiseOrGenerator.init) {
          this.noise.init = noiseOrGenerator.init;
        }

        if (noiseOrGenerator.update) {
          this.noise.update = noiseOrGenerator.update;
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.canvas.destroy();

      var _iterator4 = _createForOfIteratorHelper(this.drawers),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _ref9 = _step4.value;

          var _ref8 = _slicedToArray(_ref9, 2);

          var drawer = _ref8[1];

          if (drawer.destroy) {
            drawer.destroy(this);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(this.drawers.keys()),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var key = _step5.value;
          this.drawers.delete(key);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this.destroyed = true;
    }
  }, {
    key: "exportImg",
    value: function exportImg(callback) {
      this.exportImage(callback);
    }
  }, {
    key: "exportImage",
    value: function exportImage(callback, type, quality) {
      var _a;

      return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    }
  }, {
    key: "exportConfiguration",
    value: function exportConfiguration() {
      return JSON.stringify(this.options, undefined, 2);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.stop();
                _context.next = 3;
                return this.start();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.started) {
        return;
      }

      this.firstStart = true;
      this.started = false;
      this.eventListeners.removeListeners();
      this.pause();
      this.particles.clear();
      this.canvas.clear();

      if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
        this.intersectionObserver.observe(this.interactivity.element);
      }

      var _iterator6 = _createForOfIteratorHelper(this.plugins),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ref12 = _step6.value;

          var _ref11 = _slicedToArray(_ref12, 2);

          var plugin = _ref11[1];

          if (plugin.stop) {
            plugin.stop();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var _iterator7 = _createForOfIteratorHelper(this.plugins.keys()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var key = _step7.value;
          this.plugins.delete(key);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      this.particles.linksColors = new Map();
      delete this.particles.grabLineColor;
      delete this.particles.linksColor;
    }
  }, {
    key: "loadTheme",
    value: function loadTheme(name) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.options.setTheme(name);
                _context2.next = 3;
                return this.refresh();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "start",
    value: function start() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var _iterator8, _step8, _ref15, _ref14, plugin;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.started) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.init();

              case 4:
                this.started = true;
                this.eventListeners.addListeners();

                if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
                  this.intersectionObserver.observe(this.interactivity.element);
                }

                _iterator8 = _createForOfIteratorHelper(this.plugins);
                _context3.prev = 8;

                _iterator8.s();

              case 10:
                if ((_step8 = _iterator8.n()).done) {
                  _context3.next = 22;
                  break;
                }

                _ref15 = _step8.value;
                _ref14 = _slicedToArray(_ref15, 2);
                plugin = _ref14[1];

                if (!(plugin.startAsync !== undefined)) {
                  _context3.next = 19;
                  break;
                }

                _context3.next = 17;
                return plugin.startAsync();

              case 17:
                _context3.next = 20;
                break;

              case 19:
                if (plugin.start !== undefined) {
                  plugin.start();
                }

              case 20:
                _context3.next = 10;
                break;

              case 22:
                _context3.next = 27;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](8);

                _iterator8.e(_context3.t0);

              case 27:
                _context3.prev = 27;

                _iterator8.f();

                return _context3.finish(27);

              case 30:
                this.play();

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[8, 24, 27, 30]]);
      }));
    }
  }, {
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var availablePlugins, _iterator9, _step9, _ref22, _ref17, id, plugin, _iterator10, _step10, _ref23, _ref19, drawer, _iterator11, _step11, _ref24, _ref21, _plugin;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.retina.init();
                this.canvas.init();
                this.fpsLimit = this.options.fpsLimit > 0 ? this.options.fpsLimit : 60;
                availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
                _iterator9 = _createForOfIteratorHelper(availablePlugins);

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    _ref22 = _step9.value;
                    _ref17 = _slicedToArray(_ref22, 2);
                    id = _ref17[0];
                    plugin = _ref17[1];
                    this.plugins.set(id, plugin);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                _iterator10 = _createForOfIteratorHelper(this.drawers);
                _context4.prev = 7;

                _iterator10.s();

              case 9:
                if ((_step10 = _iterator10.n()).done) {
                  _context4.next = 18;
                  break;
                }

                _ref23 = _step10.value;
                _ref19 = _slicedToArray(_ref23, 2);
                drawer = _ref19[1];

                if (!drawer.init) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 16;
                return drawer.init(this);

              case 16:
                _context4.next = 9;
                break;

              case 18:
                _context4.next = 23;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](7);

                _iterator10.e(_context4.t0);

              case 23:
                _context4.prev = 23;

                _iterator10.f();

                return _context4.finish(23);

              case 26:
                _iterator11 = _createForOfIteratorHelper(this.plugins);
                _context4.prev = 27;

                _iterator11.s();

              case 29:
                if ((_step11 = _iterator11.n()).done) {
                  _context4.next = 42;
                  break;
                }

                _ref24 = _step11.value;
                _ref21 = _slicedToArray(_ref24, 2);
                _plugin = _ref21[1];

                if (!_plugin.init) {
                  _context4.next = 37;
                  break;
                }

                _plugin.init(this.options);

                _context4.next = 40;
                break;

              case 37:
                if (!(_plugin.initAsync !== undefined)) {
                  _context4.next = 40;
                  break;
                }

                _context4.next = 40;
                return _plugin.initAsync(this.options);

              case 40:
                _context4.next = 29;
                break;

              case 42:
                _context4.next = 47;
                break;

              case 44:
                _context4.prev = 44;
                _context4.t1 = _context4["catch"](27);

                _iterator11.e(_context4.t1);

              case 47:
                _context4.prev = 47;

                _iterator11.f();

                return _context4.finish(47);

              case 50:
                this.canvas.initSize();
                this.particles.init();
                this.particles.setDensity();

              case 53:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 20, 23, 26], [27, 44, 47, 50]]);
      }));
    }
  }, {
    key: "intersectionManager",
    value: function intersectionManager(entries) {
      if (!this.options.pauseOnOutsideViewport) {
        return;
      }

      var _iterator12 = _createForOfIteratorHelper(entries),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var entry = _step12.value;

          if (entry.target !== this.interactivity.element) {
            continue;
          }

          if (entry.isIntersecting) {
            this.play();
          } else {
            this.pause();
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }]);

  return Container;
}();

exports.Container = Container;

/***/ }),

/***/ "U/fs":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundMask = void 0;

var BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "CPUN");

var BackgroundMask = /*#__PURE__*/function () {
  function BackgroundMask() {
    _classCallCheck(this, BackgroundMask);

    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
    this.enable = false;
  }

  _createClass(BackgroundMask, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.composite !== undefined) {
        this.composite = data.composite;
      }

      if (data.cover !== undefined) {
        var cover = data.cover;
        var color = typeof data.cover === "string" ? {
          color: data.cover
        } : data.cover;
        this.cover.load(cover.color !== undefined ? cover : {
          color: color
        });
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }]);

  return BackgroundMask;
}();

exports.BackgroundMask = BackgroundMask;

/***/ }),

/***/ "URwT":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmitterInstance = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

var EmitterSize_1 = __webpack_require__(/*! ./Options/Classes/EmitterSize */ "PFhk");

function randomCoordinate(position, offset) {
  return position + offset * (Math.random() - 0.5);
}

function randomPosition(position, offset) {
  return {
    x: randomCoordinate(position.x, offset.x),
    y: randomCoordinate(position.y, offset.y)
  };
}

var EmitterInstance = /*#__PURE__*/function () {
  function EmitterInstance(emitters, container, emitterOptions, position) {
    _classCallCheck(this, EmitterInstance);

    var _a, _b, _c;

    this.emitters = emitters;
    this.container = container;
    this.initialPosition = position;
    this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
    this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
    var particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);

    if (particlesOptions === undefined) {
      particlesOptions = {};
    }

    if (particlesOptions.move === undefined) {
      particlesOptions.move = {};
    }

    if (particlesOptions.move.direction === undefined) {
      particlesOptions.move.direction = this.emitterOptions.direction;
    }

    this.particlesOptions = particlesOptions;
    this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : function () {
      var size = new EmitterSize_1.EmitterSize();
      size.load({
        height: 0,
        mode: Enums_1.SizeMode.percent,
        width: 0
      });
      return size;
    }();
    this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
    this.immortal = this.lifeCount <= 0;
    this.play();
  }

  _createClass(EmitterInstance, [{
    key: "play",
    value: function play() {
      var _this = this;

      if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count)) {
        if (this.startInterval === undefined) {
          var delay = 1000 * this.emitterOptions.rate.delay / this.container.retina.reduceFactor;
          this.startInterval = window.setInterval(function () {
            _this.emit();
          }, delay);
        }

        if (this.lifeCount > 0 || this.immortal) {
          this.prepareToDie();
        }
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var interval = this.startInterval;

      if (interval !== undefined) {
        clearInterval(interval);
        delete this.startInterval;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var initialPosition = this.initialPosition;
      this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
    }
  }, {
    key: "prepareToDie",
    value: function prepareToDie() {
      var _this2 = this;

      var _a;

      var duration = (_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration;

      if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && duration !== undefined && duration > 0) {
        setTimeout(function () {
          var _a;

          _this2.pause();

          if (!_this2.immortal) {
            _this2.lifeCount--;
          }

          if (_this2.lifeCount > 0 || _this2.immortal) {
            _this2.position = _this2.calcPosition();
            setTimeout(function () {
              _this2.play();
            }, ((_a = _this2.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0) * 1000 / _this2.container.retina.reduceFactor);
          } else {
            _this2.destroy();
          }
        }, duration * 1000);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.emitters.removeEmitter(this);
    }
  }, {
    key: "calcPosition",
    value: function calcPosition() {
      var _a, _b;

      var container = this.container;
      var percentPosition = this.emitterOptions.position;
      return {
        x: ((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width,
        y: ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height
      };
    }
  }, {
    key: "emit",
    value: function emit() {
      var container = this.container;
      var position = this.position;
      var offset = {
        x: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.width * this.size.width / 100 : this.size.width,
        y: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.height * this.size.height / 100 : this.size.height
      };

      for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
        container.particles.addParticle(randomPosition(position, offset), this.particlesOptions);
      }
    }
  }]);

  return EmitterInstance;
}();

exports.EmitterInstance = EmitterInstance;

/***/ }),

/***/ "Ucb3":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Motion/MotionReduce.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MotionReduce = void 0;

var MotionReduce = /*#__PURE__*/function () {
  function MotionReduce() {
    _classCallCheck(this, MotionReduce);

    this.factor = 4;
    this.value = false;
  }

  _createClass(MotionReduce, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (data.factor !== undefined) {
        this.factor = data.factor;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }]);

  return MotionReduce;
}();

exports.MotionReduce = MotionReduce;

/***/ }),

/***/ "UfkC":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveDirection = void 0;
var MoveDirection;

(function (MoveDirection) {
  MoveDirection["bottom"] = "bottom";
  MoveDirection["bottomLeft"] = "bottom-left";
  MoveDirection["bottomRight"] = "bottom-right";
  MoveDirection["left"] = "left";
  MoveDirection["none"] = "none";
  MoveDirection["right"] = "right";
  MoveDirection["top"] = "top";
  MoveDirection["topLeft"] = "top-left";
  MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));

/***/ }),

/***/ "VOV1":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bounce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bounce = void 0;

var Bounce = /*#__PURE__*/function () {
  function Bounce() {
    _classCallCheck(this, Bounce);

    this.distance = 200;
  }

  _createClass(Bounce, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }
    }
  }]);

  return Bounce;
}();

exports.Bounce = Bounce;

/***/ }),

/***/ "Vmap":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;

var Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "GMfk");

var Particles_1 = __webpack_require__(/*! ./Particles/Particles */ "N6qZ");

var BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "U/fs");

var Background_1 = __webpack_require__(/*! ./Background/Background */ "QkZH");

var Infection_1 = __webpack_require__(/*! ./Infection/Infection */ "RroA");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Theme_1 = __webpack_require__(/*! ./Theme/Theme */ "T8G5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var BackgroundMode_1 = __webpack_require__(/*! ./BackgroundMode/BackgroundMode */ "FRgf");

var Motion_1 = __webpack_require__(/*! ./Motion/Motion */ "BikP");

var ManualParticle_1 = __webpack_require__(/*! ./ManualParticle */ "1mUk");

var Options = /*#__PURE__*/function () {
  function Options() {
    _classCallCheck(this, Options);

    this.autoPlay = true;
    this.background = new Background_1.Background();
    this.backgroundMask = new BackgroundMask_1.BackgroundMask();
    this.backgroundMode = new BackgroundMode_1.BackgroundMode();
    this.detectRetina = true;
    this.fpsLimit = 30;
    this.infection = new Infection_1.Infection();
    this.interactivity = new Interactivity_1.Interactivity();
    this.manualParticles = [];
    this.motion = new Motion_1.Motion();
    this.particles = new Particles_1.Particles();
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = false;
    this.themes = [];
  }

  _createClass(Options, [{
    key: "load",
    value: function load(data) {
      var _a, _b;

      if (data === undefined) {
        return;
      }

      if (data.preset !== undefined) {
        if (data.preset instanceof Array) {
          var _iterator = _createForOfIteratorHelper(data.preset),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var preset = _step.value;
              this.importPreset(preset);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          this.importPreset(data.preset);
        }
      }

      if (data.autoPlay !== undefined) {
        this.autoPlay = data.autoPlay;
      }

      var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;

      if (detectRetina !== undefined) {
        this.detectRetina = detectRetina;
      }

      var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;

      if (fpsLimit !== undefined) {
        this.fpsLimit = fpsLimit;
      }

      if (data.pauseOnBlur !== undefined) {
        this.pauseOnBlur = data.pauseOnBlur;
      }

      if (data.pauseOnOutsideViewport !== undefined) {
        this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
      }

      this.background.load(data.background);
      this.backgroundMode.load(data.backgroundMode);
      this.backgroundMask.load(data.backgroundMask);
      this.infection.load(data.infection);
      this.interactivity.load(data.interactivity);

      if (data.manualParticles !== undefined) {
        this.manualParticles = data.manualParticles.map(function (t) {
          var tmp = new ManualParticle_1.ManualParticle();
          tmp.load(t);
          return tmp;
        });
      }

      this.motion.load(data.motion);
      this.particles.load(data.particles);
      Utils_1.Plugins.loadOptions(this, data);

      if (data.themes !== undefined) {
        var _iterator2 = _createForOfIteratorHelper(data.themes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var theme = _step2.value;
            var optTheme = new Theme_1.Theme();
            optTheme.load(theme);
            this.themes.push(optTheme);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "setTheme",
    value: function setTheme(name) {
      if (name) {
        var chosenTheme = this.themes.find(function (theme) {
          return theme.name === name;
        });

        if (chosenTheme) {
          this.load(chosenTheme.options);
        }
      } else {
        var clientDarkMode = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
        var defaultTheme = this.themes.find(function (theme) {
          return theme.default.value && (theme.default.mode === Modes_1.ThemeMode.dark && clientDarkMode || theme.default.mode === Modes_1.ThemeMode.light && !clientDarkMode);
        });

        if (!defaultTheme) {
          defaultTheme = this.themes.find(function (theme) {
            return theme.default.value && theme.default.mode === Modes_1.ThemeMode.any;
          });
        }

        if (defaultTheme) {
          this.load(defaultTheme.options);
        }
      }
    }
  }, {
    key: "importPreset",
    value: function importPreset(preset) {
      this.load(Utils_1.Plugins.getPreset(preset));
    }
  }, {
    key: "fps_limit",
    get: function get() {
      return this.fpsLimit;
    },
    set: function set(value) {
      this.fpsLimit = value;
    }
  }, {
    key: "retina_detect",
    get: function get() {
      return this.detectRetina;
    },
    set: function set(value) {
      this.detectRetina = value;
    }
  }]);

  return Options;
}();

exports.Options = Options;

/***/ }),

/***/ "W13A":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverEvent = void 0;

var Parallax_1 = __webpack_require__(/*! ./Parallax */ "aP84");

var HoverEvent = /*#__PURE__*/function () {
  function HoverEvent() {
    _classCallCheck(this, HoverEvent);

    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax_1.Parallax();
  }

  _createClass(HoverEvent, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      this.parallax.load(data.parallax);
    }
  }]);

  return HoverEvent;
}();

exports.HoverEvent = HoverEvent;

/***/ }),

/***/ "W21g":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Bubbler.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bubbler = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
  if (modeValue > optionsValue) {
    var size = particleValue + (modeValue - optionsValue) * ratio;
    return Utils_1.NumberUtils.clamp(size, particleValue, modeValue);
  } else if (modeValue < optionsValue) {
    var _size = particleValue - (optionsValue - modeValue) * ratio;

    return Utils_1.NumberUtils.clamp(_size, modeValue, particleValue);
  }
}

var Bubbler = /*#__PURE__*/function () {
  function Bubbler(container) {
    _classCallCheck(this, Bubbler);

    this.container = container;
  }

  _createClass(Bubbler, [{
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var options = container.options;
      var mouse = container.interactivity.mouse;
      var events = options.interactivity.events;
      var divs = events.onDiv;
      var divBubble = Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.bubble, divs);

      if (!(divBubble || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      var clickMode = events.onClick.mode;
      return Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode) || divBubble;
    }
  }, {
    key: "reset",
    value: function reset(particle, force) {
      if (!particle.bubble.inRange || force) {
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
      }
    }
  }, {
    key: "interact",
    value: function interact() {
      var _this = this;

      var options = this.container.options;
      var events = options.interactivity.events;
      var onHover = events.onHover;
      var onClick = events.onClick;
      var hoverEnabled = onHover.enable;
      var hoverMode = onHover.mode;
      var clickEnabled = onClick.enable;
      var clickMode = onClick.mode;
      var divs = events.onDiv;

      if (hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode)) {
        this.hoverBubble();
      } else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode)) {
        this.clickBubble();
      } else {
        Utils_1.Utils.divModeExecute(Enums_1.DivMode.bubble, divs, function (selector, div) {
          return _this.singleSelectorHover(selector, div);
        });
      }
    }
  }, {
    key: "singleSelectorHover",
    value: function singleSelectorHover(selector, div) {
      var _this2 = this;

      var container = this.container;
      var selectors = document.querySelectorAll(selector);

      if (!selectors.length) {
        return;
      }

      selectors.forEach(function (item) {
        var elem = item;
        var pxRatio = container.retina.pixelRatio;
        var pos = {
          x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
        };
        var repulseRadius = elem.offsetWidth / 2 * pxRatio;
        var area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
        var query = container.particles.quadTree.query(area);

        var _iterator = _createForOfIteratorHelper(query),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var particle = _step.value;

            if (!area.contains(particle.getPosition())) {
              continue;
            }

            particle.bubble.inRange = true;
            var divs = container.options.interactivity.modes.bubble.divs;
            var divBubble = Utils_1.Utils.divMode(divs, elem);

            if (!particle.bubble.div || particle.bubble.div !== elem) {
              _this2.reset(particle, true);

              particle.bubble.div = elem;
            }

            _this2.hoverBubbleSize(particle, 1, divBubble);

            _this2.hoverBubbleOpacity(particle, 1, divBubble);

            _this2.hoverBubbleColor(particle, divBubble);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }, {
    key: "process",
    value: function process(particle, distMouse, timeSpent, data) {
      var container = this.container;
      var bubbleParam = data.bubbleObj.optValue;

      if (bubbleParam === undefined) {
        return;
      }

      var options = container.options;
      var bubbleDuration = options.interactivity.modes.bubble.duration;
      var bubbleDistance = container.retina.bubbleModeDistance;
      var particlesParam = data.particlesObj.optValue;
      var pObjBubble = data.bubbleObj.value;
      var pObj = data.particlesObj.value || 0;
      var type = data.type;

      if (bubbleParam !== particlesParam) {
        if (!container.bubble.durationEnd) {
          if (distMouse <= bubbleDistance) {
            var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;

            if (obj !== bubbleParam) {
              var value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;

              if (type === Enums_1.ProcessBubbleType.size) {
                particle.bubble.radius = value;
              }

              if (type === Enums_1.ProcessBubbleType.opacity) {
                particle.bubble.opacity = value;
              }
            }
          } else {
            if (type === Enums_1.ProcessBubbleType.size) {
              delete particle.bubble.radius;
            }

            if (type === Enums_1.ProcessBubbleType.opacity) {
              delete particle.bubble.opacity;
            }
          }
        } else if (pObjBubble) {
          if (type === Enums_1.ProcessBubbleType.size) {
            delete particle.bubble.radius;
          }

          if (type === Enums_1.ProcessBubbleType.opacity) {
            delete particle.bubble.opacity;
          }
        }
      }
    }
  }, {
    key: "clickBubble",
    value: function clickBubble() {
      var _a;

      var container = this.container;
      var options = container.options;
      var mouseClickPos = container.interactivity.mouse.clickPosition;

      if (mouseClickPos === undefined) {
        return;
      }

      var distance = container.retina.bubbleModeDistance;
      var query = container.particles.quadTree.queryCircle(mouseClickPos, distance);

      var _iterator2 = _createForOfIteratorHelper(query),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var particle = _step2.value;

          if (!container.bubble.clicking) {
            continue;
          }

          particle.bubble.inRange = !container.bubble.durationEnd;
          var pos = particle.getPosition();
          var distMouse = Utils_1.NumberUtils.getDistance(pos, mouseClickPos);
          var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;

          if (timeSpent > options.interactivity.modes.bubble.duration) {
            container.bubble.durationEnd = true;
          }

          if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
            container.bubble.clicking = false;
            container.bubble.durationEnd = false;
          }

          var sizeData = {
            bubbleObj: {
              optValue: container.retina.bubbleModeSize,
              value: particle.bubble.radius
            },
            particlesObj: {
              optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
              value: particle.size.value
            },
            type: Enums_1.ProcessBubbleType.size
          };
          this.process(particle, distMouse, timeSpent, sizeData);
          var opacityData = {
            bubbleObj: {
              optValue: options.interactivity.modes.bubble.opacity,
              value: particle.bubble.opacity
            },
            particlesObj: {
              optValue: particle.particlesOptions.opacity.value,
              value: particle.opacity.value
            },
            type: Enums_1.ProcessBubbleType.opacity
          };
          this.process(particle, distMouse, timeSpent, opacityData);

          if (!container.bubble.durationEnd) {
            if (distMouse <= container.retina.bubbleModeDistance) {
              this.hoverBubbleColor(particle);
            } else {
              delete particle.bubble.color;
            }
          } else {
            delete particle.bubble.color;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "hoverBubble",
    value: function hoverBubble() {
      var container = this.container;
      var mousePos = container.interactivity.mouse.position;

      if (mousePos === undefined) {
        return;
      }

      var distance = container.retina.bubbleModeDistance;
      var query = container.particles.quadTree.queryCircle(mousePos, distance);

      var _iterator3 = _createForOfIteratorHelper(query),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var particle = _step3.value;
          particle.bubble.inRange = true;
          var pos = particle.getPosition();
          var pointDistance = Utils_1.NumberUtils.getDistance(pos, mousePos);
          var ratio = 1 - pointDistance / distance;

          if (pointDistance <= distance) {
            if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
              this.hoverBubbleSize(particle, ratio);
              this.hoverBubbleOpacity(particle, ratio);
              this.hoverBubbleColor(particle);
            }
          } else {
            this.reset(particle);
          }

          if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) {
            this.reset(particle);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "hoverBubbleSize",
    value: function hoverBubbleSize(particle, ratio, divBubble) {
      var _a;

      var container = this.container;
      var modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;

      if (modeSize === undefined) {
        return;
      }

      var optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
      var pSize = particle.size.value;
      var size = calculateBubbleValue(pSize, modeSize, optSize, ratio);

      if (size !== undefined) {
        particle.bubble.radius = size;
      }
    }
  }, {
    key: "hoverBubbleOpacity",
    value: function hoverBubbleOpacity(particle, ratio, divBubble) {
      var _a;

      var options = this.container.options;
      var modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;

      if (modeOpacity === undefined) {
        return;
      }

      var optOpacity = particle.particlesOptions.opacity.value;
      var pOpacity = particle.opacity.value;
      var opacity = calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);

      if (opacity !== undefined) {
        particle.bubble.opacity = opacity;
      }
    }
  }, {
    key: "hoverBubbleColor",
    value: function hoverBubbleColor(particle, divBubble) {
      var _a;

      var options = this.container.options;

      if (particle.bubble.color === undefined) {
        var modeColor = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.color) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.color;

        if (modeColor === undefined) {
          return;
        }

        var bubbleColor = modeColor instanceof Array ? Utils_1.Utils.itemFromArray(modeColor) : modeColor;
        particle.bubble.color = Utils_1.ColorUtils.colorToHsl(bubbleColor);
      }
    }
  }]);

  return Bubbler;
}();

exports.Bubbler = Bubbler;

/***/ }),

/***/ "W31w":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatableColor = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "vRcM");

var ColorAnimation_1 = __webpack_require__(/*! ./ColorAnimation */ "ZDl6");

var AnimatableColor = /*#__PURE__*/function (_OptionsColor_1$Optio) {
  _inherits(AnimatableColor, _OptionsColor_1$Optio);

  var _super = _createSuper(AnimatableColor);

  function AnimatableColor() {
    var _this;

    _classCallCheck(this, AnimatableColor);

    _this = _super.call(this);
    _this.animation = new ColorAnimation_1.ColorAnimation();
    return _this;
  }

  _createClass(AnimatableColor, [{
    key: "load",
    value: function load(data) {
      _get(_getPrototypeOf(AnimatableColor.prototype), "load", this).call(this, data);

      this.animation.load(data === null || data === void 0 ? void 0 : data.animation);
    }
  }], [{
    key: "create",
    value: function create(source, data) {
      var color = source !== null && source !== void 0 ? source : new AnimatableColor();

      if (data !== undefined) {
        color.load(typeof data === "string" ? {
          value: data
        } : data);
      }

      return color;
    }
  }]);

  return AnimatableColor;
}(OptionsColor_1.OptionsColor);

exports.AnimatableColor = AnimatableColor;

/***/ }),

/***/ "Wu3R":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = void 0;
var Type;

(function (Type) {
  Type["inline"] = "inline";
  Type["inside"] = "inside";
  Type["outside"] = "outside";
  Type["none"] = "none";
})(Type = exports.Type || (exports.Type = {}));

/***/ }),

/***/ "XGcx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BubbleBase = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var BubbleBase = /*#__PURE__*/function () {
  function BubbleBase() {
    _classCallCheck(this, BubbleBase);

    this.distance = 200;
    this.duration = 0.4;
  }

  _createClass(BubbleBase, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.color !== undefined) {
        if (data.color instanceof Array) {
          this.color = data.color.map(function (s) {
            return OptionsColor_1.OptionsColor.create(undefined, s);
          });
        } else {
          if (this.color instanceof Array) {
            this.color = new OptionsColor_1.OptionsColor();
          }

          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }
    }
  }]);

  return BubbleBase;
}();

exports.BubbleBase = BubbleBase;

/***/ }),

/***/ "XIwB":
/*!****************************************************!*\
  !*** ./node_modules/tsparticles/dist/main.slim.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainSlim = void 0;

var SquareDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/SquareDrawer */ "pmYS");

var TextDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TextDrawer */ "Qbha");

var ImageDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/ImageDrawer */ "vfib");

var Utils_1 = __webpack_require__(/*! ./Utils */ "C9b5");

var Types_1 = __webpack_require__(/*! ./Enums/Types */ "muAV");

var LineDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/LineDrawer */ "yEg2");

var CircleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/CircleDrawer */ "Lut8");

var TriangleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TriangleDrawer */ "YU+L");

var StarDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/StarDrawer */ "XqMA");

var PolygonDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/PolygonDrawer */ "01Bu");

var Loader_1 = __webpack_require__(/*! ./Core/Loader */ "EZQt");

var MainSlim = /*#__PURE__*/function () {
  function MainSlim() {
    _classCallCheck(this, MainSlim);

    this.initialized = false;
    var squareDrawer = new SquareDrawer_1.SquareDrawer();
    var textDrawer = new TextDrawer_1.TextDrawer();
    var imageDrawer = new ImageDrawer_1.ImageDrawer();
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.line, new LineDrawer_1.LineDrawer());
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.edge, squareDrawer);
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.square, squareDrawer);
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.star, new StarDrawer_1.StarDrawer());
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.char, textDrawer);
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.character, textDrawer);
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.image, imageDrawer);
    Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.images, imageDrawer);
  }

  _createClass(MainSlim, [{
    key: "init",
    value: function init() {
      if (!this.initialized) {
        this.initialized = true;
      }
    }
  }, {
    key: "loadFromArray",
    value: function loadFromArray(tagId, options, index) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Loader_1.Loader.load(tagId, options, index));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "load",
    value: function load(tagId, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", Loader_1.Loader.load(tagId, options));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "set",
    value: function set(id, element, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", Loader_1.Loader.set(id, element, options));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "loadJSON",
    value: function loadJSON(tagId, pathConfigJson, index) {
      return Loader_1.Loader.loadJSON(tagId, pathConfigJson, index);
    }
  }, {
    key: "setOnClickHandler",
    value: function setOnClickHandler(callback) {
      Loader_1.Loader.setOnClickHandler(callback);
    }
  }, {
    key: "dom",
    value: function dom() {
      return Loader_1.Loader.dom();
    }
  }, {
    key: "domItem",
    value: function domItem(index) {
      return Loader_1.Loader.domItem(index);
    }
  }, {
    key: "addShape",
    value: function addShape(shape, drawer, init, afterEffect, destroy) {
      var customDrawer;

      if (typeof drawer === "function") {
        customDrawer = {
          afterEffect: afterEffect,
          destroy: destroy,
          draw: drawer,
          init: init
        };
      } else {
        customDrawer = drawer;
      }

      Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
    }
  }, {
    key: "addPreset",
    value: function addPreset(preset, options) {
      Utils_1.Plugins.addPreset(preset, options);
    }
  }, {
    key: "addPlugin",
    value: function addPlugin(plugin) {
      Utils_1.Plugins.addPlugin(plugin);
    }
  }]);

  return MainSlim;
}();

exports.MainSlim = MainSlim;

/***/ }),

/***/ "XUYF":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Trail.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trail = void 0;

var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "C9b5");

var Trail = /*#__PURE__*/function () {
  function Trail() {
    _classCallCheck(this, Trail);

    this.delay = 1;
    this.quantity = 1;
  }

  _createClass(Trail, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }

      if (data.quantity !== undefined) {
        this.quantity = data.quantity;
      }

      if (data.particles !== undefined) {
        this.particles = Utils_1.Utils.deepExtend({}, data.particles);
      }
    }
  }]);

  return Trail;
}();

exports.Trail = Trail;

/***/ }),

/***/ "XqMA":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarDrawer = void 0;

var StarDrawer = /*#__PURE__*/function () {
  function StarDrawer() {
    _classCallCheck(this, StarDrawer);
  }

  _createClass(StarDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount(particle) {
      var _a, _b;

      var star = particle.shapeData;
      return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius) {
      var _a;

      var star = particle.shapeData;
      var sides = this.getSidesCount(particle);
      var inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
      context.moveTo(0, 0 - radius);

      for (var i = 0; i < sides; i++) {
        context.rotate(Math.PI / sides);
        context.lineTo(0, 0 - radius * inset);
        context.rotate(Math.PI / sides);
        context.lineTo(0, 0 - radius);
      }
    }
  }]);

  return StarDrawer;
}();

exports.StarDrawer = StarDrawer;

/***/ }),

/***/ "Xvid":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Rectangle.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = void 0;

var Range_1 = __webpack_require__(/*! ./Range */ "/6af");

var Rectangle = /*#__PURE__*/function (_Range_1$Range) {
  _inherits(Rectangle, _Range_1$Range);

  var _super = _createSuper(Rectangle);

  function Rectangle(x, y, width, height) {
    var _this;

    _classCallCheck(this, Rectangle);

    _this = _super.call(this, x, y);
    _this.size = {
      height: height,
      width: width
    };
    return _this;
  }

  _createClass(Rectangle, [{
    key: "contains",
    value: function contains(point) {
      var w = this.size.width;
      var h = this.size.height;
      var pos = this.position;
      return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
  }, {
    key: "intersects",
    value: function intersects(range) {
      var rect = range;
      var circle = range;
      var w = this.size.width;
      var h = this.size.height;
      var pos1 = this.position;
      var pos2 = range.position;

      if (circle.radius !== undefined) {
        return circle.intersects(this);
      } else if (rect.size !== undefined) {
        var size2 = rect.size;
        var w2 = size2.width;
        var h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
      }

      return false;
    }
  }]);

  return Rectangle;
}(Range_1.Range);

exports.Rectangle = Rectangle;

/***/ }),

/***/ "YU+L":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriangleDrawer = void 0;

var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "gYxR");

var TriangleDrawer = /*#__PURE__*/function (_PolygonDrawerBase_1$) {
  _inherits(TriangleDrawer, _PolygonDrawerBase_1$);

  var _super = _createSuper(TriangleDrawer);

  function TriangleDrawer() {
    _classCallCheck(this, TriangleDrawer);

    return _super.apply(this, arguments);
  }

  _createClass(TriangleDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount() {
      return 3;
    }
  }, {
    key: "getSidesData",
    value: function getSidesData(particle, radius) {
      return {
        count: {
          denominator: 2,
          numerator: 3
        },
        length: radius * 2
      };
    }
  }, {
    key: "getCenter",
    value: function getCenter(particle, radius) {
      return {
        x: -radius,
        y: radius / 1.66
      };
    }
  }]);

  return TriangleDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase);

exports.TriangleDrawer = TriangleDrawer;

/***/ }),

/***/ "Yjw3":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Linker.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Linker = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Linker = /*#__PURE__*/function () {
  function Linker(container) {
    _classCallCheck(this, Linker);

    this.container = container;
  }

  _createClass(Linker, [{
    key: "isEnabled",
    value: function isEnabled(particle) {
      return particle.particlesOptions.links.enable;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact(p1) {
      var _a;

      var container = this.container;
      var linkOpt1 = p1.particlesOptions.links;
      var optOpacity = linkOpt1.opacity;
      var optDistance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
      var canvasSize = container.canvas.size;
      var warp = linkOpt1.warp;
      var pos1 = p1.getPosition();
      var range = warp ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
      var query = container.particles.quadTree.query(range);

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p2 = _step.value;
          var linkOpt2 = p2.particlesOptions.links;

          if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed) {
            continue;
          }

          var pos2 = p2.getPosition();
          var distance = Utils_1.NumberUtils.getDistance(pos1, pos2);

          if (warp) {
            if (distance > optDistance) {
              var pos2NE = {
                x: pos2.x - canvasSize.width,
                y: pos2.y
              };
              distance = Utils_1.NumberUtils.getDistance(pos1, pos2NE);

              if (distance > optDistance) {
                var pos2SE = {
                  x: pos2.x - canvasSize.width,
                  y: pos2.y - canvasSize.height
                };
                distance = Utils_1.NumberUtils.getDistance(pos1, pos2SE);

                if (distance > optDistance) {
                  var pos2SW = {
                    x: pos2.x,
                    y: pos2.y - canvasSize.height
                  };
                  distance = Utils_1.NumberUtils.getDistance(pos1, pos2SW);
                }
              }
            }
          }

          if (distance > optDistance) {
            return;
          }

          var opacityLine = (1 - distance / optDistance) * optOpacity;
          var linksOptions = p1.particlesOptions.links;
          var linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;

          if (!linkColor) {
            var optColor = linksOptions.color;
            linkColor = Utils_1.ColorUtils.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);

            if (linksOptions.id !== undefined) {
              container.particles.linksColors.set(linksOptions.id, linkColor);
            } else {
              container.particles.linksColor = linkColor;
            }
          }

          if (p2.links.map(function (t) {
            return t.destination;
          }).indexOf(p1) === -1 && p1.links.map(function (t) {
            return t.destination;
          }).indexOf(p2) === -1) {
            p1.links.push({
              destination: p2,
              opacity: opacityLine
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Linker;
}();

exports.Linker = Linker;

/***/ }),

/***/ "ZDl6":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorAnimation = void 0;

var ColorAnimation = /*#__PURE__*/function () {
  function ColorAnimation() {
    _classCallCheck(this, ColorAnimation);

    this.enable = false;
    this.speed = 1;
    this.sync = true;
  }

  _createClass(ColorAnimation, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }]);

  return ColorAnimation;
}();

exports.ColorAnimation = ColorAnimation;

/***/ }),

/***/ "ZJaX":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmitterClickMode = void 0;
var EmitterClickMode;

(function (EmitterClickMode) {
  EmitterClickMode["emitter"] = "emitter";
})(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {}));

/***/ }),

/***/ "ZJwF":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Lighter.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lighter = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var Lighter = /*#__PURE__*/function () {
  function Lighter(container) {
    _classCallCheck(this, Lighter);

    this.container = container;
  }

  _createClass(Lighter, [{
    key: "interact",
    value: function interact() {
      var container = this.container;
      var options = container.options;

      if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
        var mousePos = container.interactivity.mouse.position;

        if (!mousePos) {
          return;
        }

        container.canvas.drawLight(mousePos);
      }
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var mouse = container.interactivity.mouse;
      var events = container.options.interactivity.events;

      if (!(events.onHover.enable && mouse.position)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      return Utils_1.Utils.isInArray(Modes_1.HoverMode.light, hoverMode);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return Lighter;
}();

exports.Lighter = Lighter;

/***/ }),

/***/ "ZRNA":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Constants.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = void 0;

var Constants = function Constants() {
  _classCallCheck(this, Constants);
};

exports.Constants = Constants;
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.midColorValue = "mid";
Constants.touchEndEvent = "touchend";
Constants.mouseDownEvent = "mousedown";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.mouseOutEvent = "mouseout";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
Constants.noPolygonDataLoaded = "No polygon data loaded.";
Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";

/***/ }),

/***/ "Zb7y":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Number/ParticlesNumber.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesNumber = void 0;

var Density_1 = __webpack_require__(/*! ./Density */ "P+GZ");

var ParticlesNumber = /*#__PURE__*/function () {
  function ParticlesNumber() {
    _classCallCheck(this, ParticlesNumber);

    this.density = new Density_1.Density();
    this.limit = 0;
    this.value = 100;
  }

  _createClass(ParticlesNumber, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data === undefined) {
        return;
      }

      this.density.load(data.density);
      var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;

      if (limit !== undefined) {
        this.limit = limit;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }, {
    key: "max",
    get: function get() {
      return this.limit;
    },
    set: function set(value) {
      this.limit = value;
    }
  }]);

  return ParticlesNumber;
}();

exports.ParticlesNumber = ParticlesNumber;

/***/ }),

/***/ "ZlLd":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./Directions */ "wSea"), exports);

__exportStar(__webpack_require__(/*! ./Modes */ "ubkD"), exports);

__exportStar(__webpack_require__(/*! ./AnimationStatus */ "zTwn"), exports);

__exportStar(__webpack_require__(/*! ./Types */ "muAV"), exports);

__exportStar(__webpack_require__(/*! ./InteractivityDetect */ "89Jo"), exports);

/***/ }),

/***/ "a9mD":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DestroyType.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DestroyType = void 0;
var DestroyType;

(function (DestroyType) {
  DestroyType["none"] = "none";
  DestroyType["max"] = "max";
  DestroyType["min"] = "min";
})(DestroyType = exports.DestroyType || (exports.DestroyType = {}));

/***/ }),

/***/ "aP84":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = void 0;

var Parallax = /*#__PURE__*/function () {
  function Parallax() {
    _classCallCheck(this, Parallax);

    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }

  _createClass(Parallax, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.force !== undefined) {
        this.force = data.force;
      }

      if (data.smooth !== undefined) {
        this.smooth = data.smooth;
      }
    }
  }]);

  return Parallax;
}();

exports.Parallax = Parallax;

/***/ }),

/***/ "acFK":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Updater.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Updater = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

var OutModeDirection_1 = __webpack_require__(/*! ../../Enums/Directions/OutModeDirection */ "auWv");

function bounceHorizontal(data) {
  if (data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceHorizontal || data.outMode === "bounceHorizontal") {
    var velocity = data.particle.velocity.horizontal;
    var bounced = false;

    if (data.direction === OutModeDirection_1.OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === OutModeDirection_1.OutModeDirection.left && data.bounds.left <= 0 && velocity < 0) {
      var newVelocity = Utils_1.NumberUtils.getValue(data.particle.particlesOptions.bounce.horizontal);
      data.particle.velocity.horizontal *= -newVelocity;
      bounced = true;
    }

    if (bounced) {
      var minPos = data.offset.x + data.size;

      if (data.bounds.right >= data.canvasSize.width) {
        data.particle.position.x = data.canvasSize.width - minPos;
      } else if (data.bounds.left <= 0) {
        data.particle.position.x = minPos;
      }
    }
  }
}

function bounceVertical(data) {
  if (data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceVertical || data.outMode === "bounceVertical") {
    var velocity = data.particle.velocity.vertical;
    var bounced = false;

    if (data.direction === OutModeDirection_1.OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === OutModeDirection_1.OutModeDirection.top && data.bounds.top <= 0 && velocity < 0) {
      var newVelocity = Utils_1.NumberUtils.getValue(data.particle.particlesOptions.bounce.vertical);
      data.particle.velocity.vertical *= -newVelocity;
      bounced = true;
    }

    if (bounced) {
      var minPos = data.offset.y + data.size;

      if (data.bounds.bottom >= data.canvasSize.height) {
        data.particle.position.y = data.canvasSize.height - minPos;
      } else if (data.bounds.top <= 0) {
        data.particle.position.y = minPos;
      }
    }
  }
}

function checkDestroy(particle, destroy, value, minValue, maxValue) {
  switch (destroy) {
    case Enums_1.DestroyType.max:
      if (value >= maxValue) {
        particle.destroy();
      }

      break;

    case Enums_1.DestroyType.min:
      if (value <= minValue) {
        particle.destroy();
      }

      break;
  }
}

var Updater = /*#__PURE__*/function () {
  function Updater(container, particle) {
    _classCallCheck(this, Updater);

    this.container = container;
    this.particle = particle;
  }

  _createClass(Updater, [{
    key: "update",
    value: function update(delta) {
      if (this.particle.destroyed) {
        return;
      }

      this.updateLife(delta);

      if (this.particle.destroyed || this.particle.spawning) {
        return;
      }

      this.updateOpacity(delta);
      this.updateSize(delta);
      this.updateAngle(delta);
      this.updateColor(delta);
      this.updateStrokeColor(delta);
      this.updateOutModes(delta);
    }
  }, {
    key: "updateLife",
    value: function updateLife(delta) {
      var particle = this.particle;
      var justSpawned = false;

      if (particle.spawning) {
        particle.lifeDelayTime += delta.value;

        if (particle.lifeDelayTime >= particle.lifeDelay) {
          justSpawned = true;
          particle.spawning = false;
          particle.lifeDelayTime = 0;
          particle.lifeTime = 0;
        }
      }

      if (particle.lifeDuration === -1) {
        return;
      }

      if (!particle.spawning) {
        if (justSpawned) {
          particle.lifeTime = 0;
        } else {
          particle.lifeTime += delta.value;
        }

        if (particle.lifeTime >= particle.lifeDuration) {
          particle.lifeTime = 0;

          if (particle.livesRemaining > 0) {
            particle.livesRemaining--;
          }

          if (particle.livesRemaining === 0) {
            particle.destroy();
            return;
          }

          var canvasSize = this.container.canvas.size;
          particle.position.x = Utils_1.NumberUtils.randomInRange(0, canvasSize.width);
          particle.position.y = Utils_1.NumberUtils.randomInRange(0, canvasSize.height);
          particle.spawning = true;
          particle.lifeDelayTime = 0;
          particle.lifeTime = 0;
          var lifeOptions = particle.particlesOptions.life;
          particle.lifeDelay = Utils_1.NumberUtils.getValue(lifeOptions.delay) * 1000;
          particle.lifeDuration = Utils_1.NumberUtils.getValue(lifeOptions.duration) * 1000;
        }
      }
    }
  }, {
    key: "updateOpacity",
    value: function updateOpacity(delta) {
      var _a, _b;

      var particle = this.particle;
      var opacityAnim = particle.particlesOptions.opacity.anim;
      var minValue = opacityAnim.minimumValue;
      var maxValue = particle.particlesOptions.opacity.value;

      if (opacityAnim.enable) {
        switch (particle.opacity.status) {
          case Enums_1.AnimationStatus.increasing:
            if (particle.opacity.value >= maxValue) {
              particle.opacity.status = Enums_1.AnimationStatus.decreasing;
            } else {
              particle.opacity.value += ((_a = particle.opacity.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
            if (particle.opacity.value <= minValue) {
              particle.opacity.status = Enums_1.AnimationStatus.increasing;
            } else {
              particle.opacity.value -= ((_b = particle.opacity.velocity) !== null && _b !== void 0 ? _b : 0) * delta.factor;
            }

            break;
        }

        checkDestroy(particle, opacityAnim.destroy, particle.opacity.value, minValue, maxValue);

        if (!particle.destroyed) {
          particle.opacity.value = Utils_1.NumberUtils.clamp(particle.opacity.value, minValue, maxValue);
        }
      }
    }
  }, {
    key: "updateSize",
    value: function updateSize(delta) {
      var _a, _b;

      var container = this.container;
      var particle = this.particle;
      var sizeOpt = particle.particlesOptions.size;
      var sizeAnim = sizeOpt.animation;
      var sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
      var maxValue = (_b = particle.sizeValue) !== null && _b !== void 0 ? _b : container.retina.sizeValue;
      var minValue = sizeAnim.minimumValue * container.retina.pixelRatio;

      if (sizeAnim.enable) {
        switch (particle.size.status) {
          case Enums_1.AnimationStatus.increasing:
            if (particle.size.value >= maxValue) {
              particle.size.status = Enums_1.AnimationStatus.decreasing;
            } else {
              particle.size.value += sizeVelocity;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
            if (particle.size.value <= minValue) {
              particle.size.status = Enums_1.AnimationStatus.increasing;
            } else {
              particle.size.value -= sizeVelocity;
            }

        }

        checkDestroy(particle, sizeAnim.destroy, particle.size.value, minValue, maxValue);

        if (!particle.destroyed) {
          particle.size.value = Utils_1.NumberUtils.clamp(particle.size.value, minValue, maxValue);
        }
      }
    }
  }, {
    key: "updateAngle",
    value: function updateAngle(delta) {
      var _a;

      var particle = this.particle;
      var rotate = particle.particlesOptions.rotate;
      var rotateAnimation = rotate.animation;
      var speed = ((_a = particle.rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
      var max = 2 * Math.PI;

      if (rotate.path) {
        particle.pathAngle = Math.atan2(particle.velocity.vertical, particle.velocity.horizontal);
      } else if (rotateAnimation.enable) {
        switch (particle.rotate.status) {
          case Enums_1.AnimationStatus.increasing:
            particle.rotate.value += speed;

            if (particle.rotate.value > max) {
              particle.rotate.value -= max;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
          default:
            particle.rotate.value -= speed;

            if (particle.rotate.value < 0) {
              particle.rotate.value += max;
            }

            break;
        }
      }
    }
  }, {
    key: "updateColor",
    value: function updateColor(delta) {
      var _a;

      var particle = this.particle;

      if (particle.color.value === undefined) {
        return;
      }

      if (particle.particlesOptions.color.animation.enable) {
        particle.color.value.h += ((_a = particle.color.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;

        if (particle.color.value.h > 360) {
          particle.color.value.h -= 360;
        }
      }
    }
  }, {
    key: "updateStrokeColor",
    value: function updateStrokeColor(delta) {
      var _a, _b;

      var particle = this.particle;
      var color = particle.stroke.color;

      if (typeof color === "string" || color === undefined) {
        return;
      }

      if (particle.strokeColor.value === undefined) {
        return;
      }

      if (color.animation.enable) {
        particle.strokeColor.value.h += ((_b = (_a = particle.strokeColor.velocity) !== null && _a !== void 0 ? _a : particle.color.velocity) !== null && _b !== void 0 ? _b : 0) * delta.factor;

        if (particle.strokeColor.value.h > 360) {
          particle.strokeColor.value.h -= 360;
        }
      }
    }
  }, {
    key: "updateOutModes",
    value: function updateOutModes(delta) {
      var _a, _b, _c, _d;

      var outModes = this.particle.particlesOptions.move.outModes;
      this.updateOutMode(delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, OutModeDirection_1.OutModeDirection.bottom);
      this.updateOutMode(delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, OutModeDirection_1.OutModeDirection.left);
      this.updateOutMode(delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, OutModeDirection_1.OutModeDirection.right);
      this.updateOutMode(delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, OutModeDirection_1.OutModeDirection.top);
    }
  }, {
    key: "updateOutMode",
    value: function updateOutMode(delta, outMode, direction) {
      var container = this.container;
      var particle = this.particle;

      switch (outMode) {
        case Enums_1.OutMode.bounce:
        case Enums_1.OutMode.bounceVertical:
        case Enums_1.OutMode.bounceHorizontal:
        case "bounceVertical":
        case "bounceHorizontal":
          this.updateBounce(delta, direction, outMode);
          break;

        case Enums_1.OutMode.destroy:
          if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
            container.particles.remove(particle);
          }

          break;

        case Enums_1.OutMode.out:
          if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
            this.fixOutOfCanvasPosition(direction);
          }

          break;

        case Enums_1.OutMode.none:
          this.bounceNone(direction);
          break;
      }
    }
  }, {
    key: "fixOutOfCanvasPosition",
    value: function fixOutOfCanvasPosition(direction) {
      var container = this.container;
      var particle = this.particle;
      var wrap = particle.particlesOptions.move.warp;
      var canvasSize = container.canvas.size;
      var newPos = {
        bottom: canvasSize.height + particle.getRadius() - particle.offset.y,
        left: -particle.getRadius() - particle.offset.x,
        right: canvasSize.width + particle.getRadius() + particle.offset.x,
        top: -particle.getRadius() - particle.offset.y
      };
      var sizeValue = particle.getRadius();
      var nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);

      if (direction === OutModeDirection_1.OutModeDirection.right && nextBounds.left > canvasSize.width - particle.offset.x) {
        particle.position.x = newPos.left;

        if (!wrap) {
          particle.position.y = Math.random() * canvasSize.height;
        }
      } else if (direction === OutModeDirection_1.OutModeDirection.left && nextBounds.right < -particle.offset.x) {
        particle.position.x = newPos.right;

        if (!wrap) {
          particle.position.y = Math.random() * canvasSize.height;
        }
      }

      if (direction === OutModeDirection_1.OutModeDirection.bottom && nextBounds.top > canvasSize.height - particle.offset.y) {
        if (!wrap) {
          particle.position.x = Math.random() * canvasSize.width;
        }

        particle.position.y = newPos.top;
      } else if (direction === OutModeDirection_1.OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
        if (!wrap) {
          particle.position.x = Math.random() * canvasSize.width;
        }

        particle.position.y = newPos.bottom;
      }
    }
  }, {
    key: "updateBounce",
    value: function updateBounce(delta, direction, outMode) {
      var container = this.container;
      var particle = this.particle;
      var handled = false;

      var _iterator = _createForOfIteratorHelper(container.plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ref3 = _step.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var plugin = _ref2[1];

          if (plugin.particleBounce !== undefined) {
            handled = plugin.particleBounce(particle, delta, direction);
          }

          if (handled) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (handled) {
        return;
      }

      var pos = particle.getPosition(),
          offset = particle.offset,
          size = particle.getRadius(),
          bounds = Utils_1.Utils.calculateBounds(pos, size),
          canvasSize = container.canvas.size;
      bounceHorizontal({
        particle: particle,
        outMode: outMode,
        direction: direction,
        bounds: bounds,
        canvasSize: canvasSize,
        offset: offset,
        size: size
      });
      bounceVertical({
        particle: particle,
        outMode: outMode,
        direction: direction,
        bounds: bounds,
        canvasSize: canvasSize,
        offset: offset,
        size: size
      });
    }
  }, {
    key: "bounceNone",
    value: function bounceNone(direction) {
      var particle = this.particle;

      if (particle.particlesOptions.move.distance) {
        return;
      }

      var gravityOptions = particle.particlesOptions.move.gravity;
      var container = this.container;

      if (!gravityOptions.enable) {
        if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
          container.particles.remove(particle);
        }
      } else {
        var position = particle.position;

        if (gravityOptions.acceleration >= 0 && position.y > container.canvas.size.height && direction === OutModeDirection_1.OutModeDirection.bottom || gravityOptions.acceleration < 0 && position.y < 0 && direction === OutModeDirection_1.OutModeDirection.top) {
          container.particles.remove(particle);
        }
      }
    }
  }]);

  return Updater;
}();

exports.Updater = Updater;

/***/ }),

/***/ "auWv":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/OutModeDirection.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutModeDirection = void 0;
var OutModeDirection;

(function (OutModeDirection) {
  OutModeDirection["bottom"] = "bottom";
  OutModeDirection["left"] = "left";
  OutModeDirection["right"] = "right";
  OutModeDirection["top"] = "top";
})(OutModeDirection = exports.OutModeDirection || (exports.OutModeDirection = {}));

/***/ }),

/***/ "baxp":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "z01/");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "x49D");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "brjH":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeAnimation = void 0;

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var SizeAnimation = /*#__PURE__*/function () {
  function SizeAnimation() {
    _classCallCheck(this, SizeAnimation);

    this.destroy = Enums_1.DestroyType.none;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 5;
    this.startValue = Enums_1.StartValueType.random;
    this.sync = false;
  }

  _createClass(SizeAnimation, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data === undefined) {
        return;
      }

      if (data.destroy !== undefined) {
        this.destroy = data.destroy;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;

      if (minimumValue !== undefined) {
        this.minimumValue = minimumValue;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.startValue !== undefined) {
        this.startValue = data.startValue;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }, {
    key: "size_min",
    get: function get() {
      return this.minimumValue;
    },
    set: function set(value) {
      this.minimumValue = value;
    }
  }]);

  return SizeAnimation;
}();

exports.SizeAnimation = SizeAnimation;

/***/ }),

/***/ "c29t":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "8v5O");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "cWpP":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinksTriangle = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var LinksTriangle = /*#__PURE__*/function () {
  function LinksTriangle() {
    _classCallCheck(this, LinksTriangle);

    this.enable = false;
    this.frequency = 1;
  }

  _createClass(LinksTriangle, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.frequency !== undefined) {
        this.frequency = data.frequency;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }]);

  return LinksTriangle;
}();

exports.LinksTriangle = LinksTriangle;

/***/ }),

/***/ "d0ux":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbsorberInstance = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var AbsorberInstance = /*#__PURE__*/function () {
  function AbsorberInstance(absorbers, container, options, position) {
    _classCallCheck(this, AbsorberInstance);

    var _a, _b;

    this.absorbers = absorbers;
    this.container = container;
    this.initialPosition = position;
    this.options = options;
    this.dragging = false;
    this.opacity = this.options.opacity;
    this.size = Utils_1.NumberUtils.getValue(options.size) * container.retina.pixelRatio;
    this.mass = this.size * options.size.density * container.retina.reduceFactor;
    var limit = options.size.limit;
    this.limit = limit !== undefined ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
    var color = typeof options.color === "string" ? {
      value: options.color
    } : options.color;
    this.color = (_a = Utils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
      b: 0,
      g: 0,
      r: 0
    };
    this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
  }

  _createClass(AbsorberInstance, [{
    key: "attract",
    value: function attract(particle) {
      var options = this.options;

      if (options.draggable) {
        var mouse = this.container.interactivity.mouse;

        if (mouse.clicking && mouse.downPosition) {
          var mouseDist = Utils_1.NumberUtils.getDistance(this.position, mouse.downPosition);

          if (mouseDist <= this.size) {
            this.dragging = true;
          }
        } else {
          this.dragging = false;
        }

        if (this.dragging && mouse.position) {
          this.position.x = mouse.position.x;
          this.position.y = mouse.position.y;
        }
      }

      var pos = particle.getPosition();

      var _Utils_1$NumberUtils$ = Utils_1.NumberUtils.getDistances(this.position, pos),
          dx = _Utils_1$NumberUtils$.dx,
          dy = _Utils_1$NumberUtils$.dy,
          distance = _Utils_1$NumberUtils$.distance;

      var angle = Math.atan2(dx, dy);
      var acceleration = this.mass / Math.pow(distance, 2) * this.container.retina.reduceFactor;

      if (distance < this.size + particle.getRadius()) {
        var sizeFactor = particle.getRadius() * 0.033 * this.container.retina.pixelRatio;

        if (this.size > particle.getRadius() && distance < this.size - particle.getRadius()) {
          if (options.destroy) {
            particle.destroy();
          } else {
            particle.needsNewPosition = true;
            this.updateParticlePosition(particle, angle, acceleration);
          }
        } else {
          if (options.destroy) {
            particle.size.value -= sizeFactor;
          }

          this.updateParticlePosition(particle, angle, acceleration);
        }

        if (this.limit === undefined || this.size < this.limit) {
          this.size += sizeFactor;
        }

        this.mass += sizeFactor * this.options.size.density * this.container.retina.reduceFactor;
      } else {
        this.updateParticlePosition(particle, angle, acceleration);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var initialPosition = this.initialPosition;
      this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.translate(this.position.x, this.position.y);
      context.beginPath();
      context.arc(0, 0, this.size, 0, Math.PI * 2, false);
      context.closePath();
      context.fillStyle = Utils_1.ColorUtils.getStyleFromRgb(this.color, this.opacity);
      context.fill();
    }
  }, {
    key: "calcPosition",
    value: function calcPosition() {
      var _a, _b;

      var container = this.container;
      var percentPosition = this.options.position;
      return {
        x: ((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width,
        y: ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height
      };
    }
  }, {
    key: "updateParticlePosition",
    value: function updateParticlePosition(particle, angle, acceleration) {
      var _a;

      if (particle.destroyed) {
        return;
      }

      var canvasSize = this.container.canvas.size;

      if (particle.needsNewPosition) {
        var pSize = particle.getRadius();
        particle.position.x = Math.random() * (canvasSize.width - pSize * 2) + pSize;
        particle.position.y = Math.random() * (canvasSize.height - pSize * 2) + pSize;
        particle.needsNewPosition = false;
      }

      if (this.options.orbits) {
        if (particle.orbitRadius === undefined) {
          particle.orbitRadius = Utils_1.NumberUtils.getDistance(particle.getPosition(), this.position);
        }

        if (particle.orbitRadius <= this.size && !this.options.destroy) {
          particle.orbitRadius = Math.random() * Math.max(canvasSize.width, canvasSize.height);
        }

        if (particle.orbitAngle === undefined) {
          particle.orbitAngle = Math.random() * Math.PI * 2;
        }

        var orbitRadius = particle.orbitRadius;
        var orbitAngle = particle.orbitAngle;
        particle.velocity.horizontal = 0;
        particle.velocity.vertical = 0;
        particle.position.x = this.position.x + orbitRadius * Math.cos(orbitAngle);
        particle.position.y = this.position.y + orbitRadius * Math.sin(orbitAngle);
        particle.orbitRadius -= acceleration;
        particle.orbitAngle += ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : this.container.retina.moveSpeed) / 100 * this.container.retina.reduceFactor;
      } else {
        particle.velocity.horizontal += Math.sin(angle) * acceleration;
        particle.velocity.vertical += Math.cos(angle) * acceleration;
      }
    }
  }]);

  return AbsorberInstance;
}();

exports.AbsorberInstance = AbsorberInstance;

/***/ }),

/***/ "dLKv":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/SingleOrMultiple.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ "e0sz":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickMode = void 0;
var ClickMode;

(function (ClickMode) {
  ClickMode["attract"] = "attract";
  ClickMode["bubble"] = "bubble";
  ClickMode["push"] = "push";
  ClickMode["remove"] = "remove";
  ClickMode["repulse"] = "repulse";
  ClickMode["pause"] = "pause";
  ClickMode["trail"] = "trail";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));

/***/ }),

/***/ "eVV1":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ThemeMode.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeMode = void 0;
var ThemeMode;

(function (ThemeMode) {
  ThemeMode["any"] = "any";
  ThemeMode["dark"] = "dark";
  ThemeMode["light"] = "light";
})(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {}));

/***/ }),

/***/ "ehru":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskInstance = void 0;

var Enums_1 = __webpack_require__(/*! ./Enums */ "qtyS");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "vGWO");

function polygonBounce(particle) {
  particle.velocity.horizontal = particle.velocity.vertical / 2 - particle.velocity.horizontal;
  particle.velocity.vertical = particle.velocity.horizontal / 2 - particle.velocity.vertical;
}

function drawPolygonMask(context, rawData, stroke) {
  var color = Utils_1.ColorUtils.colorToRgb(stroke.color);

  if (!color) {
    return;
  }

  context.beginPath();
  context.moveTo(rawData[0].x, rawData[0].y);

  var _iterator = _createForOfIteratorHelper(rawData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      context.lineTo(item.x, item.y);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  context.closePath();
  context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color);
  context.lineWidth = stroke.width;
  context.stroke();
}

function drawPolygonMaskPath(context, path, stroke, position) {
  context.translate(position.x, position.y);
  var color = Utils_1.ColorUtils.colorToRgb(stroke.color);

  if (!color) {
    return;
  }

  context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color, stroke.opacity);
  context.lineWidth = stroke.width;
  context.stroke(path);
}

function parsePaths(paths, scale, offset) {
  var res = [];

  var _iterator2 = _createForOfIteratorHelper(paths),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var path = _step2.value;
      var segments = path.element.pathSegList;
      var len = segments.numberOfItems;
      var p = {
        x: 0,
        y: 0
      };

      for (var i = 0; i < len; i++) {
        var segment = segments.getItem(i);
        var svgPathSeg = window.SVGPathSeg;

        switch (segment.pathSegType) {
          case svgPathSeg.PATHSEG_MOVETO_ABS:
          case svgPathSeg.PATHSEG_LINETO_ABS:
          case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
          case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
          case svgPathSeg.PATHSEG_ARC_ABS:
          case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
          case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
            {
              var absSeg = segment;
              p.x = absSeg.x;
              p.y = absSeg.y;
              break;
            }

          case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
            p.x = segment.x;
            break;

          case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
            p.y = segment.y;
            break;

          case svgPathSeg.PATHSEG_LINETO_REL:
          case svgPathSeg.PATHSEG_MOVETO_REL:
          case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
          case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
          case svgPathSeg.PATHSEG_ARC_REL:
          case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
          case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
            {
              var relSeg = segment;
              p.x += relSeg.x;
              p.y += relSeg.y;
              break;
            }

          case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
            p.x += segment.x;
            break;

          case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
            p.y += segment.y;
            break;

          case svgPathSeg.PATHSEG_UNKNOWN:
          case svgPathSeg.PATHSEG_CLOSEPATH:
            continue;
        }

        res.push({
          x: p.x * scale + offset.x,
          y: p.y * scale + offset.y
        });
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return res;
}

var PolygonMaskInstance = /*#__PURE__*/function () {
  function PolygonMaskInstance(container) {
    _classCallCheck(this, PolygonMaskInstance);

    this.container = container;
    this.dimension = {
      height: 0,
      width: 0
    };
    this.path2DSupported = !!window.Path2D;
    this.options = new PolygonMask_1.PolygonMask();
    this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
  }

  _createClass(PolygonMaskInstance, [{
    key: "initAsync",
    value: function initAsync(options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var polygonMaskOptions;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
                polygonMaskOptions = this.options;
                this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;

                if (!polygonMaskOptions.enable) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return this.initRawData();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this = this;

      var container = this.container;
      var options = this.options;

      if (!(options.enable && options.type !== Enums_1.Type.none)) {
        return;
      }

      if (this.redrawTimeout) {
        clearTimeout(this.redrawTimeout);
      }

      this.redrawTimeout = window.setTimeout(function () {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.initRawData(true);

                case 2:
                  container.particles.redraw();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }, 250);
    }
  }, {
    key: "stop",
    value: function stop() {
      delete this.raw;
      delete this.paths;
    }
  }, {
    key: "particlesInitialization",
    value: function particlesInitialization() {
      var options = this.options;

      if (options.enable && options.type === Enums_1.Type.inline && (options.inline.arrangement === Enums_1.InlineArrangement.onePerPoint || options.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
        this.drawPoints();
        return true;
      }

      return false;
    }
  }, {
    key: "particlePosition",
    value: function particlePosition(position) {
      var _a, _b;

      var options = this.options;

      if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
        return;
      }

      return Utils_1.Utils.deepExtend({}, position ? position : this.randomPoint());
    }
  }, {
    key: "particleBounce",
    value: function particleBounce(particle) {
      var options = this.options;

      if (options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline) {
        if (!this.checkInsidePolygon(particle.getPosition())) {
          polygonBounce(particle);
          return true;
        }
      } else if (options.enable && options.type === Enums_1.Type.inline && particle.initialPosition) {
        var dist = Utils_1.NumberUtils.getDistance(particle.initialPosition, particle.getPosition());

        if (dist > this.polygonMaskMoveRadius) {
          polygonBounce(particle);
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clickPositionValid",
    value: function clickPositionValid(position) {
      var options = this.options;
      return options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline && this.checkInsidePolygon(position);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      var _a;

      if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
        return;
      }

      var options = this.options;
      var polygonDraw = options.draw;

      if (!(options.enable && polygonDraw.enable)) {
        return;
      }

      var rawData = this.raw;

      var _iterator3 = _createForOfIteratorHelper(this.paths),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var path = _step3.value;
          var path2d = path.path2d;
          var path2dSupported = this.path2DSupported;

          if (!context) {
            continue;
          }

          if (path2dSupported && path2d && this.offset) {
            drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
          } else if (rawData) {
            drawPolygonMask(context, rawData, polygonDraw.stroke);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "checkInsidePolygon",
    value: function checkInsidePolygon(position) {
      var _a, _b;

      var container = this.container;
      var options = this.options;

      if (!options.enable || options.type === Enums_1.Type.none || options.type === Enums_1.Type.inline) {
        return true;
      }

      if (!this.raw) {
        throw new Error(Utils_1.Constants.noPolygonFound);
      }

      var canvasSize = container.canvas.size;
      var x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
      var y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
      var inside = false;

      for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
        var pi = this.raw[i];
        var pj = this.raw[j];
        var intersect = pi.y > y !== pj.y > y && x < (pj.x - pi.x) * (y - pi.y) / (pj.y - pi.y) + pi.x;

        if (intersect) {
          inside = !inside;
        }
      }

      return options.type === Enums_1.Type.inside ? inside : options.type === Enums_1.Type.outside ? !inside : false;
    }
  }, {
    key: "parseSvgPath",
    value: function parseSvgPath(xml, force) {
      var _a, _b, _c;

      var forceDownload = force !== null && force !== void 0 ? force : false;

      if (this.paths !== undefined && !forceDownload) {
        return this.raw;
      }

      var container = this.container;
      var options = this.options;
      var parser = new DOMParser();
      var doc = parser.parseFromString(xml, "image/svg+xml");
      var svg = doc.getElementsByTagName("svg")[0];
      var svgPaths = svg.getElementsByTagName("path");

      if (!svgPaths.length) {
        svgPaths = doc.getElementsByTagName("path");
      }

      this.paths = [];

      for (var i = 0; i < svgPaths.length; i++) {
        var path = svgPaths.item(i);

        if (path) {
          this.paths.push({
            element: path,
            length: path.getTotalLength()
          });
        }
      }

      var pxRatio = container.retina.pixelRatio;
      var scale = options.scale / pxRatio;
      this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
      this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
      var position = (_c = options.position) !== null && _c !== void 0 ? _c : {
        x: 50,
        y: 50
      };
      this.offset = {
        x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
        y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2
      };
      return parsePaths(this.paths, scale, this.offset);
    }
  }, {
    key: "downloadSvgPath",
    value: function downloadSvgPath(svgUrl, force) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var options, url, forceDownload, req;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = this.options;
                url = svgUrl || options.url;
                forceDownload = force !== null && force !== void 0 ? force : false;

                if (!(!url || this.paths !== undefined && !forceDownload)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", this.raw);

              case 5:
                _context3.next = 7;
                return fetch(url);

              case 7:
                req = _context3.sent;

                if (req.ok) {
                  _context3.next = 10;
                  break;
                }

                throw new Error("tsParticles Error - Error occurred during polygon mask download");

              case 10:
                _context3.t0 = this;
                _context3.next = 13;
                return req.text();

              case 13:
                _context3.t1 = _context3.sent;
                _context3.t2 = force;
                return _context3.abrupt("return", _context3.t0.parseSvgPath.call(_context3.t0, _context3.t1, _context3.t2));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "drawPoints",
    value: function drawPoints() {
      if (!this.raw) {
        return;
      }

      var _iterator4 = _createForOfIteratorHelper(this.raw),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          this.container.particles.addParticle({
            x: item.x,
            y: item.y
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "randomPoint",
    value: function randomPoint() {
      var container = this.container;
      var options = this.options;
      var position;

      if (options.type === Enums_1.Type.inline) {
        switch (options.inline.arrangement) {
          case Enums_1.InlineArrangement.randomPoint:
            position = this.getRandomPoint();
            break;

          case Enums_1.InlineArrangement.randomLength:
            position = this.getRandomPointByLength();
            break;

          case Enums_1.InlineArrangement.equidistant:
            position = this.getEquidistantPointByIndex(container.particles.count);
            break;

          case Enums_1.InlineArrangement.onePerPoint:
          case Enums_1.InlineArrangement.perPoint:
          default:
            position = this.getPointByIndex(container.particles.count);
        }
      } else {
        position = {
          x: Math.random() * container.canvas.size.width,
          y: Math.random() * container.canvas.size.height
        };
      }

      if (this.checkInsidePolygon(position)) {
        return position;
      } else {
        return this.randomPoint();
      }
    }
  }, {
    key: "getRandomPoint",
    value: function getRandomPoint() {
      if (!this.raw || !this.raw.length) {
        throw new Error(Utils_1.Constants.noPolygonDataLoaded);
      }

      var coords = Utils_1.Utils.itemFromArray(this.raw);
      return {
        x: coords.x,
        y: coords.y
      };
    }
  }, {
    key: "getRandomPointByLength",
    value: function getRandomPointByLength() {
      var _a, _b, _c;

      var options = this.options;

      if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new Error(Utils_1.Constants.noPolygonDataLoaded);
      }

      var path = Utils_1.Utils.itemFromArray(this.paths);
      var distance = Math.floor(Math.random() * path.length) + 1;
      var point = path.element.getPointAtLength(distance);
      return {
        x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
        y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0)
      };
    }
  }, {
    key: "getEquidistantPointByIndex",
    value: function getEquidistantPointByIndex(index) {
      var _a, _b, _c, _d, _e, _f, _g;

      var options = this.container.options;
      var polygonMaskOptions = this.options;
      if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) throw new Error(Utils_1.Constants.noPolygonDataLoaded);
      var offset = 0;
      var point;
      var totalLength = this.paths.reduce(function (tot, path) {
        return tot + path.length;
      }, 0);
      var distance = totalLength / options.particles.number.value;

      var _iterator5 = _createForOfIteratorHelper(this.paths),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var path = _step5.value;
          var pathDistance = distance * index - offset;

          if (pathDistance <= path.length) {
            point = path.element.getPointAtLength(pathDistance);
            break;
          } else {
            offset += path.length;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return {
        x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
        y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0)
      };
    }
  }, {
    key: "getPointByIndex",
    value: function getPointByIndex(index) {
      if (!this.raw || !this.raw.length) {
        throw new Error(Utils_1.Constants.noPolygonDataLoaded);
      }

      var coords = this.raw[index % this.raw.length];
      return {
        x: coords.x,
        y: coords.y
      };
    }
  }, {
    key: "createPath2D",
    value: function createPath2D() {
      var _this2 = this;

      var _a, _b;

      var options = this.options;

      if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
        return;
      }

      var _iterator6 = _createForOfIteratorHelper(this.paths),
          _step6;

      try {
        var _loop = function _loop() {
          var path = _step6.value;
          var pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");

          if (pathData) {
            var path2d = new Path2D(pathData);
            var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
            var finalPath = new Path2D();
            var transform = matrix.scale(options.scale);

            if (finalPath.addPath) {
              finalPath.addPath(path2d, transform);
              path.path2d = finalPath;
            } else {
              delete path.path2d;
            }
          } else {
            delete path.path2d;
          }

          if (path.path2d || !_this2.raw) {
            return "continue";
          }

          path.path2d = new Path2D();
          path.path2d.moveTo(_this2.raw[0].x, _this2.raw[0].y);

          _this2.raw.forEach(function (pos, i) {
            var _a;

            if (i > 0) {
              (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
            }
          });

          path.path2d.closePath();
        };

        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "initRawData",
    value: function initRawData(force) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var options, data, svg, path, namespaces;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = this.options;

                if (!options.url) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 4;
                return this.downloadSvgPath(options.url, force);

              case 4:
                this.raw = _context4.sent;
                _context4.next = 8;
                break;

              case 7:
                if (options.data) {
                  data = options.data;

                  if (typeof data !== "string") {
                    path = data.path instanceof Array ? data.path.map(function (t) {
                      return "<path d=\"".concat(t, "\" />");
                    }).join("") : "<path d=\"".concat(data.path, "\" />");
                    namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                    svg = "<svg ".concat(namespaces, " width=\"").concat(data.size.width, "\" height=\"").concat(data.size.height, "\">").concat(path, "</svg>");
                  } else {
                    svg = data;
                  }

                  this.raw = this.parseSvgPath(svg, force);
                }

              case 8:
                this.createPath2D();

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return PolygonMaskInstance;
}();

exports.PolygonMaskInstance = PolygonMaskInstance;

/***/ }),

/***/ "fReP":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineArrangement = void 0;
var InlineArrangement;

(function (InlineArrangement) {
  InlineArrangement["equidistant"] = "equidistant";
  InlineArrangement["onePerPoint"] = "one-per-point";
  InlineArrangement["perPoint"] = "per-point";
  InlineArrangement["randomLength"] = "random-length";
  InlineArrangement["randomPoint"] = "random-point";
})(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {}));

/***/ }),

/***/ "foZh":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = void 0;

var ConnectLinks_1 = __webpack_require__(/*! ./ConnectLinks */ "KttE");

var Connect = /*#__PURE__*/function () {
  function Connect() {
    _classCallCheck(this, Connect);

    this.distance = 80;
    this.links = new ConnectLinks_1.ConnectLinks();
    this.radius = 60;
  }

  _createClass(Connect, [{
    key: "load",
    value: function load(data) {
      var _a, _b;

      if (data === undefined) {
        return;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }, {
    key: "line_linked",
    get: function get() {
      return this.links;
    },
    set: function set(value) {
      this.links = value;
    }
  }, {
    key: "lineLinked",
    get: function get() {
      return this.links;
    },
    set: function set(value) {
      this.links = value;
    }
  }]);

  return Connect;
}();

exports.Connect = Connect;

/***/ }),

/***/ "fxbo":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrabLinks = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var GrabLinks = /*#__PURE__*/function () {
  function GrabLinks() {
    _classCallCheck(this, GrabLinks);

    this.blink = false;
    this.consent = false;
    this.opacity = 1;
  }

  _createClass(GrabLinks, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.blink !== undefined) {
        this.blink = data.blink;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      if (data.consent !== undefined) {
        this.consent = data.consent;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }]);

  return GrabLinks;
}();

exports.GrabLinks = GrabLinks;

/***/ }),

/***/ "gYxR":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonDrawerBase = void 0;

var PolygonDrawerBase = /*#__PURE__*/function () {
  function PolygonDrawerBase() {
    _classCallCheck(this, PolygonDrawerBase);
  }

  _createClass(PolygonDrawerBase, [{
    key: "getSidesCount",
    value: function getSidesCount(particle) {
      var _a, _b;

      var polygon = particle.shapeData;
      return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius) {
      var start = this.getCenter(particle, radius);
      var side = this.getSidesData(particle, radius);
      var sideCount = side.count.numerator * side.count.denominator;
      var decimalSides = side.count.numerator / side.count.denominator;
      var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
      var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;

      if (!context) {
        return;
      }

      context.beginPath();
      context.translate(start.x, start.y);
      context.moveTo(0, 0);

      for (var i = 0; i < sideCount; i++) {
        context.lineTo(side.length, 0);
        context.translate(side.length, 0);
        context.rotate(interiorAngle);
      }
    }
  }]);

  return PolygonDrawerBase;
}();

exports.PolygonDrawerBase = PolygonDrawerBase;

/***/ }),

/***/ "gp12":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Trail.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trail = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var Trail = /*#__PURE__*/function () {
  function Trail() {
    _classCallCheck(this, Trail);

    this.enable = false;
    this.length = 10;
    this.fillColor = new OptionsColor_1.OptionsColor();
    this.fillColor.value = "#000000";
  }

  _createClass(Trail, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);

      if (data.length !== undefined) {
        this.length = data.length;
      }
    }
  }]);

  return Trail;
}();

exports.Trail = Trail;

/***/ }),

/***/ "gpyY":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Attractor.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attractor = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Attractor = /*#__PURE__*/function () {
  function Attractor(container) {
    _classCallCheck(this, Attractor);

    this.container = container;
  }

  _createClass(Attractor, [{
    key: "interact",
    value: function interact(p1) {
      var _a;

      var container = this.container;
      var distance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
      var pos1 = p1.getPosition();
      var query = container.particles.quadTree.queryCircle(pos1, distance);

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p2 = _step.value;

          if (p1 === p2 || !p2.particlesOptions.move.attract.enable || p2.destroyed || p2.spawning) {
            continue;
          }

          var pos2 = p2.getPosition();

          var _Utils_1$NumberUtils$ = Utils_1.NumberUtils.getDistances(pos1, pos2),
              dx = _Utils_1$NumberUtils$.dx,
              dy = _Utils_1$NumberUtils$.dy;

          var rotate = p1.particlesOptions.move.attract.rotate;
          var ax = dx / (rotate.x * 1000);
          var ay = dy / (rotate.y * 1000);
          p1.velocity.horizontal -= ax;
          p1.velocity.vertical -= ay;
          p2.velocity.horizontal += ax;
          p2.velocity.vertical += ay;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "isEnabled",
    value: function isEnabled(particle) {
      return particle.particlesOptions.move.attract.enable;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return Attractor;
}();

exports.Attractor = Attractor;

/***/ }),

/***/ "h875":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "hNh6":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Repulser.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repulser = void 0;

var Enums_1 = __webpack_require__(/*! ../../Enums */ "ZlLd");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Repulser = /*#__PURE__*/function () {
  function Repulser(container) {
    _classCallCheck(this, Repulser);

    this.container = container;
  }

  _createClass(Repulser, [{
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var options = container.options;
      var mouse = container.interactivity.mouse;
      var events = options.interactivity.events;
      var divs = events.onDiv;
      var divRepulse = Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.repulse, divs);

      if (!(divRepulse || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      var clickMode = events.onClick.mode;
      return Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode) || divRepulse;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact() {
      var _this = this;

      var container = this.container;
      var options = container.options;
      var mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
      var events = options.interactivity.events;
      var hoverEnabled = events.onHover.enable;
      var hoverMode = events.onHover.mode;
      var clickEnabled = events.onClick.enable;
      var clickMode = events.onClick.mode;
      var divs = events.onDiv;

      if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode)) {
        this.hoverRepulse();
      } else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode)) {
        this.clickRepulse();
      } else {
        Utils_1.Utils.divModeExecute(Enums_1.DivMode.repulse, divs, function (selector, div) {
          return _this.singleSelectorRepulse(selector, div);
        });
      }
    }
  }, {
    key: "singleSelectorRepulse",
    value: function singleSelectorRepulse(selector, div) {
      var _this2 = this;

      var container = this.container;
      var query = document.querySelectorAll(selector);

      if (!query.length) {
        return;
      }

      query.forEach(function (item) {
        var elem = item;
        var pxRatio = container.retina.pixelRatio;
        var pos = {
          x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
        };
        var repulseRadius = elem.offsetWidth / 2 * pxRatio;
        var area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
        var divs = container.options.interactivity.modes.repulse.divs;
        var divRepulse = Utils_1.Utils.divMode(divs, elem);

        _this2.processRepulse(pos, repulseRadius, area, divRepulse);
      });
    }
  }, {
    key: "hoverRepulse",
    value: function hoverRepulse() {
      var container = this.container;
      var mousePos = container.interactivity.mouse.position;

      if (!mousePos) {
        return;
      }

      var repulseRadius = container.retina.repulseModeDistance;
      this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
    }
  }, {
    key: "processRepulse",
    value: function processRepulse(position, repulseRadius, area, divRepulse) {
      var _a;

      var container = this.container;
      var query = container.particles.quadTree.query(area);

      var _iterator = _createForOfIteratorHelper(query),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;

          var _Utils_1$NumberUtils$ = Utils_1.NumberUtils.getDistances(particle.position, position),
              dx = _Utils_1$NumberUtils$.dx,
              dy = _Utils_1$NumberUtils$.dy,
              distance = _Utils_1$NumberUtils$.distance;

          var normVec = {
            x: dx / distance,
            y: dy / distance
          };
          var velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : container.options.interactivity.modes.repulse.speed) * 100;
          var repulseFactor = Utils_1.NumberUtils.clamp((1 - Math.pow(distance / repulseRadius, 2)) * velocity, 0, 50);
          particle.position.x = particle.position.x + normVec.x * repulseFactor;
          particle.position.y = particle.position.y + normVec.y * repulseFactor;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clickRepulse",
    value: function clickRepulse() {
      var container = this.container;

      if (!container.repulse.finish) {
        if (!container.repulse.count) {
          container.repulse.count = 0;
        }

        container.repulse.count++;

        if (container.repulse.count === container.particles.count) {
          container.repulse.finish = true;
        }
      }

      if (container.repulse.clicking) {
        var repulseDistance = container.retina.repulseModeDistance;
        var repulseRadius = Math.pow(repulseDistance / 6, 3);
        var mouseClickPos = container.interactivity.mouse.clickPosition;

        if (mouseClickPos === undefined) {
          return;
        }

        var range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
        var query = container.particles.quadTree.query(range);

        var _iterator2 = _createForOfIteratorHelper(query),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var particle = _step2.value;

            var _Utils_1$NumberUtils$2 = Utils_1.NumberUtils.getDistances(mouseClickPos, particle.position),
                dx = _Utils_1$NumberUtils$2.dx,
                dy = _Utils_1$NumberUtils$2.dy,
                distance = _Utils_1$NumberUtils$2.distance;

            var d = distance * distance;
            var velocity = container.options.interactivity.modes.repulse.speed;
            var force = -repulseRadius * velocity / d;

            if (d <= repulseRadius) {
              container.repulse.particles.push(particle);
              var angle = Math.atan2(dy, dx);
              particle.velocity.horizontal = force * Math.cos(angle);
              particle.velocity.vertical = force * Math.sin(angle);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else if (container.repulse.clicking === false) {
        var _iterator3 = _createForOfIteratorHelper(container.repulse.particles),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _particle = _step3.value;
            _particle.velocity.horizontal = _particle.initialVelocity.horizontal;
            _particle.velocity.vertical = _particle.initialVelocity.vertical;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        container.repulse.particles = [];
      }
    }
  }]);

  return Repulser;
}();

exports.Repulser = Repulser;

/***/ }),

/***/ "hQOV":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Absorbers = void 0;

var AbsorberInstance_1 = __webpack_require__(/*! ./AbsorberInstance */ "d0ux");

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "iot7");

var Enums_1 = __webpack_require__(/*! ./Enums */ "FvHc");

var Absorbers = /*#__PURE__*/function () {
  function Absorbers(container) {
    var _this = this;

    _classCallCheck(this, Absorbers);

    this.container = container;
    this.array = [];
    this.absorbers = [];
    this.interactivityAbsorbers = [];
    var overridableContainer = container;

    overridableContainer.addAbsorber = function (options, position) {
      return _this.addAbsorber(options, position);
    };
  }

  _createClass(Absorbers, [{
    key: "init",
    value: function init(options) {
      var _a, _b;

      if (!options) {
        return;
      }

      if (options.absorbers) {
        if (options.absorbers instanceof Array) {
          this.absorbers = options.absorbers.map(function (s) {
            var tmp = new Absorber_1.Absorber();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.absorbers instanceof Array) {
            this.absorbers = new Absorber_1.Absorber();
          }

          this.absorbers.load(options.absorbers);
        }
      }

      var interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;

      if (interactivityAbsorbers) {
        if (interactivityAbsorbers instanceof Array) {
          this.interactivityAbsorbers = interactivityAbsorbers.map(function (s) {
            var tmp = new Absorber_1.Absorber();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.interactivityAbsorbers instanceof Array) {
            this.interactivityAbsorbers = new Absorber_1.Absorber();
          }

          this.interactivityAbsorbers.load(interactivityAbsorbers);
        }
      }

      if (this.absorbers instanceof Array) {
        var _iterator = _createForOfIteratorHelper(this.absorbers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var absorberOptions = _step.value;
            this.addAbsorber(absorberOptions);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        this.addAbsorber(this.absorbers);
      }
    }
  }, {
    key: "particleUpdate",
    value: function particleUpdate(particle) {
      var _iterator2 = _createForOfIteratorHelper(this.array),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var absorber = _step2.value;
          absorber.attract(particle);

          if (particle.destroyed) {
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      var _iterator3 = _createForOfIteratorHelper(this.array),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var absorber = _step3.value;
          context.save();
          absorber.draw(context);
          context.restore();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.array = [];
    }
  }, {
    key: "resize",
    value: function resize() {
      var _iterator4 = _createForOfIteratorHelper(this.array),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var absorber = _step4.value;
          absorber.resize();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "handleClickMode",
    value: function handleClickMode(mode) {
      var container = this.container;
      var absorberOptions = this.absorbers;
      var modeAbsorbers = this.interactivityAbsorbers;

      if (mode === Enums_1.AbsorberClickMode.absorber) {
        var absorbersModeOptions;

        if (modeAbsorbers instanceof Array) {
          if (modeAbsorbers.length > 0) {
            absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
          }
        } else {
          absorbersModeOptions = modeAbsorbers;
        }

        var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : absorberOptions instanceof Array ? Utils_1.Utils.itemFromArray(absorberOptions) : absorberOptions;
        var aPosition = container.interactivity.mouse.clickPosition;
        this.addAbsorber(absorbersOptions, aPosition);
      }
    }
  }, {
    key: "addAbsorber",
    value: function addAbsorber(options, position) {
      var absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, options, position);
      this.array.push(absorber);
      return absorber;
    }
  }, {
    key: "removeAbsorber",
    value: function removeAbsorber(absorber) {
      var index = this.array.indexOf(absorber);

      if (index >= 0) {
        this.array.splice(index, 1);
      }
    }
  }]);

  return Absorbers;
}();

exports.Absorbers = Absorbers;

/***/ }),

/***/ "hoTk":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateDirection = void 0;
var RotateDirection;

(function (RotateDirection) {
  RotateDirection["clockwise"] = "clockwise";
  RotateDirection["counterClockwise"] = "counter-clockwise";
  RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));

/***/ }),

/***/ "i4u4":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDelay.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LifeDelay = void 0;

var ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "9P/A");

var LifeDelay = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(LifeDelay, _ValueWithRandom_1$Va);

  var _super = _createSuper(LifeDelay);

  function LifeDelay() {
    var _this;

    _classCallCheck(this, LifeDelay);

    _this = _super.call(this);
    _this.sync = false;
    return _this;
  }

  _createClass(LifeDelay, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      _get(_getPrototypeOf(LifeDelay.prototype), "load", this).call(this, data);

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }]);

  return LifeDelay;
}(ValueWithRandom_1.ValueWithRandom);

exports.LifeDelay = LifeDelay;

/***/ }),

/***/ "iiaq":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CanvasUtils.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasUtils = void 0;

var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "C6n9");

var NumberUtils_1 = __webpack_require__(/*! ./NumberUtils */ "BAgM");

function drawLine(context, begin, end) {
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.lineTo(end.x, end.y);
  context.closePath();
}

function drawTriangle(context, p1, p2, p3) {
  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p3.x, p3.y);
  context.closePath();
}

var CanvasUtils = /*#__PURE__*/function () {
  function CanvasUtils() {
    _classCallCheck(this, CanvasUtils);
  }

  _createClass(CanvasUtils, null, [{
    key: "paintBase",
    value: function paintBase(context, dimension, baseColor) {
      context.save();
      context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
      context.fillRect(0, 0, dimension.width, dimension.height);
      context.restore();
    }
  }, {
    key: "clear",
    value: function clear(context, dimension) {
      context.clearRect(0, 0, dimension.width, dimension.height);
    }
  }, {
    key: "drawLinkLine",
    value: function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
      var drawn = false;

      if (NumberUtils_1.NumberUtils.getDistance(begin, end) <= maxDistance) {
        drawLine(context, begin, end);
        drawn = true;
      } else if (warp) {
        var pi1;
        var pi2;
        var endNE = {
          x: end.x - canvasSize.width,
          y: end.y
        };
        var d1 = NumberUtils_1.NumberUtils.getDistances(begin, endNE);

        if (d1.distance <= maxDistance) {
          var yi = begin.y - d1.dy / d1.dx * begin.x;
          pi1 = {
            x: 0,
            y: yi
          };
          pi2 = {
            x: canvasSize.width,
            y: yi
          };
        } else {
          var endSW = {
            x: end.x,
            y: end.y - canvasSize.height
          };
          var d2 = NumberUtils_1.NumberUtils.getDistances(begin, endSW);

          if (d2.distance <= maxDistance) {
            var _yi = begin.y - d2.dy / d2.dx * begin.x;

            var xi = -_yi / (d2.dy / d2.dx);
            pi1 = {
              x: xi,
              y: 0
            };
            pi2 = {
              x: xi,
              y: canvasSize.height
            };
          } else {
            var endSE = {
              x: end.x - canvasSize.width,
              y: end.y - canvasSize.height
            };
            var d3 = NumberUtils_1.NumberUtils.getDistances(begin, endSE);

            if (d3.distance <= maxDistance) {
              var _yi2 = begin.y - d3.dy / d3.dx * begin.x;

              var _xi = -_yi2 / (d3.dy / d3.dx);

              pi1 = {
                x: _xi,
                y: _yi2
              };
              pi2 = {
                x: pi1.x + canvasSize.width,
                y: pi1.y + canvasSize.height
              };
            }
          }
        }

        if (pi1 && pi2) {
          drawLine(context, begin, pi1);
          drawLine(context, end, pi2);
          drawn = true;
        }
      }

      if (!drawn) {
        return;
      }

      context.lineWidth = width;

      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }

      context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);

      if (shadow.enable) {
        var shadowColor = ColorUtils_1.ColorUtils.colorToRgb(shadow.color);

        if (shadowColor) {
          context.shadowBlur = shadow.blur;
          context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
        }
      }

      context.stroke();
    }
  }, {
    key: "drawLinkTriangle",
    value: function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
      drawTriangle(context, pos1, pos2, pos3);

      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }

      context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorTriangle, opacityTriangle);
      context.fill();
    }
  }, {
    key: "drawConnectLine",
    value: function drawConnectLine(context, width, lineStyle, begin, end) {
      context.save();
      drawLine(context, begin, end);
      context.lineWidth = width;
      context.strokeStyle = lineStyle;
      context.stroke();
      context.restore();
    }
  }, {
    key: "gradient",
    value: function gradient(context, p1, p2, opacity) {
      var gradStop = Math.floor(p2.getRadius() / p1.getRadius());
      var color1 = p1.getFillColor();
      var color2 = p2.getFillColor();

      if (!color1 || !color2) {
        return;
      }

      var sourcePos = p1.getPosition();
      var destPos = p2.getPosition();
      var midRgb = ColorUtils_1.ColorUtils.mix(color1, color2, p1.getRadius(), p2.getRadius());
      var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
      grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromHsl(color1, opacity));
      grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromRgb(midRgb, opacity));
      grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromHsl(color2, opacity));
      return grad;
    }
  }, {
    key: "drawGrabLine",
    value: function drawGrabLine(context, width, begin, end, colorLine, opacity) {
      context.save();
      drawLine(context, begin, end);
      context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
      context.lineWidth = width;
      context.stroke();
      context.restore();
    }
  }, {
    key: "drawLight",
    value: function drawLight(container, context, mousePos) {
      var lightOptions = container.options.interactivity.modes.light.area;
      context.beginPath();
      context.arc(mousePos.x, mousePos.y, lightOptions.radius, 0, 2 * Math.PI);
      var gradientAmbientLight = context.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, lightOptions.radius);
      var gradient = lightOptions.gradient;
      var gradientRgb = {
        start: ColorUtils_1.ColorUtils.colorToRgb(gradient.start),
        stop: ColorUtils_1.ColorUtils.colorToRgb(gradient.stop)
      };

      if (!gradientRgb.start || !gradientRgb.stop) {
        return;
      }

      gradientAmbientLight.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromRgb(gradientRgb.start));
      gradientAmbientLight.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromRgb(gradientRgb.stop));
      context.fillStyle = gradientAmbientLight;
      context.fill();
    }
  }, {
    key: "drawParticleShadow",
    value: function drawParticleShadow(container, context, particle, mousePos) {
      var pos = particle.getPosition();
      var shadowOptions = container.options.interactivity.modes.light.shadow;
      context.save();
      var radius = particle.getRadius();
      var sides = particle.sides;
      var full = Math.PI * 2 / sides;
      var angle = -particle.rotate.value + Math.PI / 4;
      var factor = 1;
      var dots = [];

      for (var i = 0; i < sides; i++) {
        dots.push({
          x: pos.x + radius * Math.sin(angle + full * i) * factor,
          y: pos.y + radius * Math.cos(angle + full * i) * factor
        });
      }

      var points = [];
      var shadowLength = shadowOptions.length;

      for (var _i = 0, _dots = dots; _i < _dots.length; _i++) {
        var dot = _dots[_i];
        var dotAngle = Math.atan2(mousePos.y - dot.y, mousePos.x - dot.x);
        var endX = dot.x + shadowLength * Math.sin(-dotAngle - Math.PI / 2);
        var endY = dot.y + shadowLength * Math.cos(-dotAngle - Math.PI / 2);
        points.push({
          endX: endX,
          endY: endY,
          startX: dot.x,
          startY: dot.y
        });
      }

      var shadowRgb = ColorUtils_1.ColorUtils.colorToRgb(shadowOptions.color);

      if (!shadowRgb) {
        return;
      }

      var shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowRgb);

      for (var _i2 = points.length - 1; _i2 >= 0; _i2--) {
        var n = _i2 == points.length - 1 ? 0 : _i2 + 1;
        context.beginPath();
        context.moveTo(points[_i2].startX, points[_i2].startY);
        context.lineTo(points[n].startX, points[n].startY);
        context.lineTo(points[n].endX, points[n].endY);
        context.lineTo(points[_i2].endX, points[_i2].endY);
        context.fillStyle = shadowColor;
        context.fill();
      }

      context.restore();
    }
  }, {
    key: "drawParticle",
    value: function drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow) {
      var pos = particle.getPosition();
      context.save();
      context.translate(pos.x, pos.y);
      context.beginPath();
      var angle = particle.rotate.value + (particle.particlesOptions.rotate.path ? particle.pathAngle : 0);

      if (angle !== 0) {
        context.rotate(angle);
      }

      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }

      var shadowColor = particle.shadowColor;

      if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
      }

      if (fillColorValue) {
        context.fillStyle = fillColorValue;
      }

      var stroke = particle.stroke;
      context.lineWidth = particle.strokeWidth;

      if (strokeColorValue) {
        context.strokeStyle = strokeColorValue;
      }

      CanvasUtils.drawShape(container, context, particle, radius, opacity, delta);

      if (stroke.width > 0) {
        context.stroke();
      }

      if (particle.close) {
        context.closePath();
      }

      if (particle.fill) {
        context.fill();
      }

      context.restore();
      context.save();
      context.translate(pos.x, pos.y);

      if (angle !== 0) {
        context.rotate(angle);
      }

      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }

      CanvasUtils.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
      context.restore();
    }
  }, {
    key: "drawShape",
    value: function drawShape(container, context, particle, radius, opacity, delta) {
      if (!particle.shape) {
        return;
      }

      var drawer = container.drawers.get(particle.shape);

      if (!drawer) {
        return;
      }

      drawer.draw(context, particle, radius, opacity, delta.value, container.retina.pixelRatio);
    }
  }, {
    key: "drawShapeAfterEffect",
    value: function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
      if (!particle.shape) {
        return;
      }

      var drawer = container.drawers.get(particle.shape);

      if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
        return;
      }

      drawer.afterEffect(context, particle, radius, opacity, delta.value, container.retina.pixelRatio);
    }
  }, {
    key: "drawPlugin",
    value: function drawPlugin(context, plugin, delta) {
      if (plugin.draw !== undefined) {
        context.save();
        plugin.draw(context, delta);
        context.restore();
      }
    }
  }]);

  return CanvasUtils;
}();

exports.CanvasUtils = CanvasUtils;

/***/ }),

/***/ "iot7":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Absorber = void 0;

var AbsorberSize_1 = __webpack_require__(/*! ./AbsorberSize */ "Ej6A");

var OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "vRcM");

var Absorber = /*#__PURE__*/function () {
  function Absorber() {
    _classCallCheck(this, Absorber);

    this.color = new OptionsColor_1.OptionsColor();
    this.color.value = "#000000";
    this.draggable = false;
    this.opacity = 1;
    this.destroy = true;
    this.orbits = false;
    this.size = new AbsorberSize_1.AbsorberSize();
  }

  _createClass(Absorber, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.color !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
      }

      if (data.draggable !== undefined) {
        this.draggable = data.draggable;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.position !== undefined) {
        this.position = {
          x: data.position.x,
          y: data.position.y
        };
      }

      if (data.size !== undefined) {
        this.size.load(data.size);
      }

      if (data.destroy !== undefined) {
        this.destroy = data.destroy;
      }

      if (data.orbits !== undefined) {
        this.orbits = data.orbits;
      }
    }
  }]);

  return Absorber;
}();

exports.Absorber = Absorber;

/***/ }),

/***/ "iuDB":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/BounceFactor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BounceFactor = void 0;

var ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "9P/A");

var BounceFactor = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
  _inherits(BounceFactor, _ValueWithRandom_1$Va);

  var _super = _createSuper(BounceFactor);

  function BounceFactor() {
    var _this;

    _classCallCheck(this, BounceFactor);

    _this = _super.call(this);
    _this.random.minimumValue = 0.1;
    _this.value = 1;
    return _this;
  }

  return BounceFactor;
}(ValueWithRandom_1.ValueWithRandom);

exports.BounceFactor = BounceFactor;

/***/ }),

/***/ "j1O7":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ShapeType.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./Types */ "muAV"), exports);

/***/ }),

/***/ "j6XU":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveType = void 0;
var MoveType;

(function (MoveType) {
  MoveType["path"] = "path";
  MoveType["radius"] = "radius";
})(MoveType = exports.MoveType || (exports.MoveType = {}));

/***/ }),

/***/ "k9Lu":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateAnimation = void 0;

var RotateAnimation = /*#__PURE__*/function () {
  function RotateAnimation() {
    _classCallCheck(this, RotateAnimation);

    this.enable = false;
    this.speed = 0;
    this.sync = false;
  }

  _createClass(RotateAnimation, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }]);

  return RotateAnimation;
}();

exports.RotateAnimation = RotateAnimation;

/***/ }),

/***/ "kb48":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bubble = void 0;

var BubbleDiv_1 = __webpack_require__(/*! ./BubbleDiv */ "s/5y");

var BubbleBase_1 = __webpack_require__(/*! ./BubbleBase */ "XGcx");

var Bubble = /*#__PURE__*/function (_BubbleBase_1$BubbleB) {
  _inherits(Bubble, _BubbleBase_1$BubbleB);

  var _super = _createSuper(Bubble);

  function Bubble() {
    _classCallCheck(this, Bubble);

    return _super.apply(this, arguments);
  }

  _createClass(Bubble, [{
    key: "load",
    value: function load(data) {
      _get(_getPrototypeOf(Bubble.prototype), "load", this).call(this, data);

      if (!(data !== undefined && data.divs !== undefined)) {
        return;
      }

      if (data.divs instanceof Array) {
        this.divs = data.divs.map(function (s) {
          var tmp = new BubbleDiv_1.BubbleDiv();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.divs instanceof Array || !this.divs) {
          this.divs = new BubbleDiv_1.BubbleDiv();
        }

        this.divs.load(data.divs);
      }
    }
  }]);

  return Bubble;
}(BubbleBase_1.BubbleBase);

exports.Bubble = Bubble;

/***/ }),

/***/ "kxr2":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grab = void 0;

var GrabLinks_1 = __webpack_require__(/*! ./GrabLinks */ "fxbo");

var Grab = /*#__PURE__*/function () {
  function Grab() {
    _classCallCheck(this, Grab);

    this.distance = 100;
    this.links = new GrabLinks_1.GrabLinks();
  }

  _createClass(Grab, [{
    key: "load",
    value: function load(data) {
      var _a, _b;

      if (data === undefined) {
        return;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    }
  }, {
    key: "line_linked",
    get: function get() {
      return this.links;
    },
    set: function set(value) {
      this.links = value;
    }
  }, {
    key: "lineLinked",
    get: function get() {
      return this.links;
    },
    set: function set(value) {
      this.links = value;
    }
  }]);

  return Grab;
}();

exports.Grab = Grab;

/***/ }),

/***/ "lPaE":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Utils.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var OutModeDirection_1 = __webpack_require__(/*! ../Enums/Directions/OutModeDirection */ "auWv");

var NumberUtils_1 = __webpack_require__(/*! ./NumberUtils */ "BAgM");

function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
  var res = {
    bounced: false
  };

  if (pOtherSide.min >= rectOtherSide.min && pOtherSide.min <= rectOtherSide.max && pOtherSide.max >= rectOtherSide.min && pOtherSide.max <= rectOtherSide.max) {
    if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
      res.velocity = velocity * -factor;
      res.bounced = true;
    }
  }

  return res;
}

function checkSelector(element, selectors) {
  if (selectors instanceof Array) {
    var _iterator = _createForOfIteratorHelper(selectors),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var selector = _step.value;

        if (element.matches(selector)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  } else {
    return element.matches(selectors);
  }
}

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "isSsr",
    value: function isSsr() {
      return typeof window === "undefined" || !window;
    }
  }, {
    key: "isInArray",
    value: function isInArray(value, array) {
      return value === array || array instanceof Array && array.indexOf(value) > -1;
    }
  }, {
    key: "loadFont",
    value: function loadFont(character) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return document.fonts.load("".concat(character.weight, " 36px '").concat(character.font, "'"));

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));
    }
  }, {
    key: "arrayRandomIndex",
    value: function arrayRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
    }
  }, {
    key: "itemFromArray",
    value: function itemFromArray(array, index) {
      var useIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var fixedIndex = index !== undefined && useIndex ? index % array.length : Utils.arrayRandomIndex(array);
      return array[fixedIndex];
    }
  }, {
    key: "isPointInside",
    value: function isPointInside(point, size, radius, direction) {
      return Utils.areBoundsInside(Utils.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
    }
  }, {
    key: "areBoundsInside",
    value: function areBoundsInside(bounds, size, direction) {
      var inside = true;

      if (!direction || direction === OutModeDirection_1.OutModeDirection.bottom) {
        inside = bounds.top < size.height;
      }

      if (inside && (!direction || direction === OutModeDirection_1.OutModeDirection.left)) {
        inside = bounds.right > 0;
      }

      if (inside && (!direction || direction === OutModeDirection_1.OutModeDirection.right)) {
        inside = bounds.left < size.width;
      }

      if (inside && (!direction || direction === OutModeDirection_1.OutModeDirection.top)) {
        inside = bounds.bottom > 0;
      }

      return inside;
    }
  }, {
    key: "calculateBounds",
    value: function calculateBounds(point, radius) {
      return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
      };
    }
  }, {
    key: "loadImage",
    value: function loadImage(source) {
      return new Promise(function (resolve, reject) {
        if (!source) {
          reject("Error tsParticles - No image.src");
          return;
        }

        var image = {
          source: source,
          type: source.substr(source.length - 3)
        };
        var img = new Image();
        img.addEventListener("load", function () {
          image.element = img;
          resolve(image);
        });
        img.addEventListener("error", function () {
          reject("Error tsParticles - loading image: ".concat(source));
        });
        img.src = source;
      });
    }
  }, {
    key: "downloadSvgImage",
    value: function downloadSvgImage(source) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var image, response;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (source) {
                  _context2.next = 2;
                  break;
                }

                throw new Error("Error tsParticles - No image.src");

              case 2:
                image = {
                  source: source,
                  type: source.substr(source.length - 3)
                };

                if (!(image.type !== "svg")) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", Utils.loadImage(source));

              case 5:
                _context2.next = 7;
                return fetch(image.source);

              case 7:
                response = _context2.sent;

                if (response.ok) {
                  _context2.next = 10;
                  break;
                }

                throw new Error("Error tsParticles - Image not found");

              case 10:
                _context2.next = 12;
                return response.text();

              case 12:
                image.svgData = _context2.sent;
                return _context2.abrupt("return", image);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "deepExtend",
    value: function deepExtend(destination) {
      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }

      for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
        var source = _sources[_i];

        if (source === undefined || source === null) {
          continue;
        }

        if (typeof source !== "object") {
          destination = source;
          continue;
        }

        var sourceIsArray = Array.isArray(source);

        if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
          destination = [];
        } else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
          destination = {};
        }

        var _loop = function _loop(key) {
          if (key === "__proto__") {
            return "continue";
          }

          var sourceDict = source;
          var value = sourceDict[key];
          var isObject = typeof value === "object";
          var destDict = destination;
          destDict[key] = isObject && Array.isArray(value) ? value.map(function (v) {
            return Utils.deepExtend(destDict[key], v);
          }) : Utils.deepExtend(destDict[key], value);
        };

        for (var key in source) {
          var _ret = _loop(key);

          if (_ret === "continue") continue;
        }
      }

      return destination;
    }
  }, {
    key: "isDivModeEnabled",
    value: function isDivModeEnabled(mode, divs) {
      return divs instanceof Array ? !!divs.find(function (t) {
        return t.enable && Utils.isInArray(mode, t.mode);
      }) : Utils.isInArray(mode, divs.mode);
    }
  }, {
    key: "divModeExecute",
    value: function divModeExecute(mode, divs, callback) {
      if (divs instanceof Array) {
        var _iterator2 = _createForOfIteratorHelper(divs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var div = _step2.value;
            var divMode = div.mode;
            var divEnabled = div.enable;

            if (divEnabled && Utils.isInArray(mode, divMode)) {
              Utils.singleDivModeExecute(div, callback);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        var _divMode = divs.mode;
        var _divEnabled = divs.enable;

        if (_divEnabled && Utils.isInArray(mode, _divMode)) {
          Utils.singleDivModeExecute(divs, callback);
        }
      }
    }
  }, {
    key: "singleDivModeExecute",
    value: function singleDivModeExecute(div, callback) {
      var selectors = div.selectors;

      if (selectors instanceof Array) {
        var _iterator3 = _createForOfIteratorHelper(selectors),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var selector = _step3.value;
            callback(selector, div);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        callback(selectors, div);
      }
    }
  }, {
    key: "divMode",
    value: function divMode(divs, element) {
      if (!element || !divs) {
        return;
      }

      if (divs instanceof Array) {
        return divs.find(function (d) {
          return checkSelector(element, d.selectors);
        });
      } else if (checkSelector(element, divs.selectors)) {
        return divs;
      }
    }
  }, {
    key: "circleBounceDataFromParticle",
    value: function circleBounceDataFromParticle(p) {
      return {
        position: p.getPosition(),
        radius: p.getRadius(),
        velocity: p.velocity,
        factor: {
          horizontal: NumberUtils_1.NumberUtils.getValue(p.particlesOptions.bounce.horizontal),
          vertical: NumberUtils_1.NumberUtils.getValue(p.particlesOptions.bounce.vertical)
        }
      };
    }
  }, {
    key: "circleBounce",
    value: function circleBounce(p1, p2) {
      var xVelocityDiff = p1.velocity.horizontal;
      var yVelocityDiff = p1.velocity.vertical;
      var pos1 = p1.position;
      var pos2 = p2.position;
      var xDist = pos2.x - pos1.x;
      var yDist = pos2.y - pos1.y;

      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        var angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
        var m1 = p1.radius;
        var m2 = p2.radius;
        var u1 = NumberUtils_1.NumberUtils.rotateVelocity(p1.velocity, angle);
        var u2 = NumberUtils_1.NumberUtils.rotateVelocity(p2.velocity, angle);
        var v1 = NumberUtils_1.NumberUtils.collisionVelocity(u1, u2, m1, m2);
        var v2 = NumberUtils_1.NumberUtils.collisionVelocity(u2, u1, m1, m2);
        var vFinal1 = NumberUtils_1.NumberUtils.rotateVelocity(v1, -angle);
        var vFinal2 = NumberUtils_1.NumberUtils.rotateVelocity(v2, -angle);
        p1.velocity.horizontal = vFinal1.horizontal * p1.factor.horizontal;
        p1.velocity.vertical = vFinal1.vertical * p1.factor.vertical;
        p2.velocity.horizontal = vFinal2.horizontal * p2.factor.horizontal;
        p2.velocity.vertical = vFinal2.vertical * p2.factor.vertical;
      }
    }
  }, {
    key: "rectBounce",
    value: function rectBounce(particle, divBounds) {
      var pPos = particle.getPosition();
      var size = particle.getRadius();
      var bounds = Utils.calculateBounds(pPos, size);
      var resH = rectSideBounce({
        min: bounds.left,
        max: bounds.right
      }, {
        min: bounds.top,
        max: bounds.bottom
      }, {
        min: divBounds.left,
        max: divBounds.right
      }, {
        min: divBounds.top,
        max: divBounds.bottom
      }, particle.velocity.horizontal, NumberUtils_1.NumberUtils.getValue(particle.particlesOptions.bounce.horizontal));

      if (resH.bounced) {
        if (resH.velocity !== undefined) {
          particle.velocity.horizontal = resH.velocity;
        }

        if (resH.position !== undefined) {
          particle.position.x = resH.position;
        }
      }

      var resV = rectSideBounce({
        min: bounds.top,
        max: bounds.bottom
      }, {
        min: bounds.left,
        max: bounds.right
      }, {
        min: divBounds.top,
        max: divBounds.bottom
      }, {
        min: divBounds.left,
        max: divBounds.right
      }, particle.velocity.vertical, NumberUtils_1.NumberUtils.getValue(particle.particlesOptions.bounce.vertical));

      if (resV.bounced) {
        if (resV.velocity !== undefined) {
          particle.velocity.vertical = resV.velocity;
        }

        if (resV.position !== undefined) {
          particle.position.y = resV.position;
        }
      }
    }
  }, {
    key: "animate",
    get: function get() {
      return Utils.isSsr() ? function (callback) {
        return setTimeout(callback);
      } : function (callback) {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(callback);
      };
    }
  }, {
    key: "cancelAnimation",
    get: function get() {
      return Utils.isSsr() ? function (handle) {
        return clearTimeout(handle);
      } : function (handle) {
        return (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(handle);
      };
    }
  }]);

  return Utils;
}();

exports.Utils = Utils;

/***/ }),

/***/ "lp8f":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Grabber.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grabber = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "ubkD");

var Grabber = /*#__PURE__*/function () {
  function Grabber(container) {
    _classCallCheck(this, Grabber);

    this.container = container;
  }

  _createClass(Grabber, [{
    key: "isEnabled",
    value: function isEnabled() {
      var container = this.container;
      var mouse = container.interactivity.mouse;
      var events = container.options.interactivity.events;

      if (!(events.onHover.enable && mouse.position)) {
        return false;
      }

      var hoverMode = events.onHover.mode;
      return Utils_1.Utils.isInArray(Modes_1.HoverMode.grab, hoverMode);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "interact",
    value: function interact() {
      var _a;

      var container = this.container;
      var options = container.options;
      var interactivity = options.interactivity;

      if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
        var mousePos = container.interactivity.mouse.position;

        if (mousePos === undefined) {
          return;
        }

        var distance = container.retina.grabModeDistance;
        var query = container.particles.quadTree.queryCircle(mousePos, distance);

        var _iterator = _createForOfIteratorHelper(query),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var particle = _step.value;
            var pos = particle.getPosition();
            var pointDistance = Utils_1.NumberUtils.getDistance(pos, mousePos);

            if (pointDistance <= distance) {
              var grabLineOptions = interactivity.modes.grab.links;
              var lineOpacity = grabLineOptions.opacity;
              var opacityLine = lineOpacity - pointDistance * lineOpacity / distance;

              if (opacityLine > 0) {
                var optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.particlesOptions.links.color;

                if (!container.particles.grabLineColor) {
                  var linksOptions = container.options.interactivity.modes.grab.links;
                  container.particles.grabLineColor = Utils_1.ColorUtils.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
                }

                var colorLine = Utils_1.ColorUtils.getLinkColor(particle, undefined, container.particles.grabLineColor);

                if (colorLine === undefined) {
                  return;
                }

                container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);

  return Grabber;
}();

exports.Grabber = Grabber;

/***/ }),

/***/ "mFsd":
/*!**************************************************!*\
  !*** ./node_modules/react-particles-js/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ReactParticles = __webpack_require__(/*! ./cjs/particles */ "9+kD");

for (var key in ReactParticles) {
  ReactParticles.default[key] = ReactParticles[key];
}

module.exports = ReactParticles.default;

/***/ }),

/***/ "muAV":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/index.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./DestroyType */ "a9mD"), exports);

__exportStar(__webpack_require__(/*! ./ProcessBubbleType */ "CeJ7"), exports);

__exportStar(__webpack_require__(/*! ./ShapeType */ "+HUL"), exports);

__exportStar(__webpack_require__(/*! ./StartValueType */ "uMnv"), exports);

__exportStar(__webpack_require__(/*! ./DivType */ "HMt+"), exports);

/***/ }),

/***/ "mwEM":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modes = void 0;

var Bubble_1 = __webpack_require__(/*! ./Bubble */ "kb48");

var Connect_1 = __webpack_require__(/*! ./Connect */ "foZh");

var Grab_1 = __webpack_require__(/*! ./Grab */ "kxr2");

var Remove_1 = __webpack_require__(/*! ./Remove */ "LPIU");

var Push_1 = __webpack_require__(/*! ./Push */ "4tm2");

var Repulse_1 = __webpack_require__(/*! ./Repulse */ "pmlM");

var Slow_1 = __webpack_require__(/*! ./Slow */ "PeBj");

var Trail_1 = __webpack_require__(/*! ./Trail */ "XUYF");

var Attract_1 = __webpack_require__(/*! ./Attract */ "Cx7u");

var Light_1 = __webpack_require__(/*! ./Light */ "/KHN");

var Bounce_1 = __webpack_require__(/*! ./Bounce */ "VOV1");

var Modes = /*#__PURE__*/function () {
  function Modes() {
    _classCallCheck(this, Modes);

    this.attract = new Attract_1.Attract();
    this.bounce = new Bounce_1.Bounce();
    this.bubble = new Bubble_1.Bubble();
    this.connect = new Connect_1.Connect();
    this.grab = new Grab_1.Grab();
    this.light = new Light_1.Light();
    this.push = new Push_1.Push();
    this.remove = new Remove_1.Remove();
    this.repulse = new Repulse_1.Repulse();
    this.slow = new Slow_1.Slow();
    this.trail = new Trail_1.Trail();
  }

  _createClass(Modes, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.attract.load(data.attract);
      this.bubble.load(data.bubble);
      this.connect.load(data.connect);
      this.grab.load(data.grab);
      this.light.load(data.light);
      this.push.load(data.push);
      this.remove.load(data.remove);
      this.repulse.load(data.repulse);
      this.slow.load(data.slow);
      this.trail.load(data.trail);
    }
  }]);

  return Modes;
}();

exports.Modes = Modes;

/***/ }),

/***/ "nAcs":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightGradient.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightGradient = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "vRcM");

var LightGradient = /*#__PURE__*/function () {
  function LightGradient() {
    _classCallCheck(this, LightGradient);

    this.start = new OptionsColor_1.OptionsColor();
    this.stop = new OptionsColor_1.OptionsColor();
    this.start.value = "#ffffff";
    this.stop.value = "#000000";
  }

  _createClass(LightGradient, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.start = OptionsColor_1.OptionsColor.create(this.start, data.start);
      this.stop = OptionsColor_1.OptionsColor.create(this.stop, data.stop);
    }
  }]);

  return LightGradient;
}();

exports.LightGradient = LightGradient;

/***/ }),

/***/ "nxdw":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = void 0;

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var EmitterRate_1 = __webpack_require__(/*! ./EmitterRate */ "KdG0");

var EmitterLife_1 = __webpack_require__(/*! ./EmitterLife */ "7Ohm");

var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "C9b5");

var EmitterSize_1 = __webpack_require__(/*! ./EmitterSize */ "PFhk");

var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.direction = Enums_1.MoveDirection.none;
    this.life = new EmitterLife_1.EmitterLife();
    this.rate = new EmitterRate_1.EmitterRate();
  }

  _createClass(Emitter, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.size !== undefined) {
        if (this.size === undefined) {
          this.size = new EmitterSize_1.EmitterSize();
        }

        this.size.load(data.size);
      }

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      this.life.load(data.life);

      if (data.particles !== undefined) {
        this.particles = Utils_1.Utils.deepExtend({}, data.particles);
      }

      this.rate.load(data.rate);

      if (data.position !== undefined) {
        this.position = {
          x: data.position.x,
          y: data.position.y
        };
      }
    }
  }]);

  return Emitter;
}();

exports.Emitter = Emitter;

/***/ }),

/***/ "pPzP":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmittersPlugin = void 0;

var Utils_1 = __webpack_require__(/*! ../../Utils */ "C9b5");

var Emitters_1 = __webpack_require__(/*! ./Emitters */ "QyzU");

var Enums_1 = __webpack_require__(/*! ./Enums */ "D98Q");

var Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "nxdw");

var EmittersPlugin = /*#__PURE__*/function () {
  function EmittersPlugin() {
    _classCallCheck(this, EmittersPlugin);

    this.id = "emitters";
  }

  _createClass(EmittersPlugin, [{
    key: "getPlugin",
    value: function getPlugin(container) {
      return new Emitters_1.Emitters(container);
    }
  }, {
    key: "needsPlugin",
    value: function needsPlugin(options) {
      var _a, _b, _c;

      if (options === undefined) {
        return false;
      }

      var emitters = options.emitters;
      var loadEmitters = false;

      if (emitters instanceof Array) {
        if (emitters.length) {
          loadEmitters = true;
        }
      } else if (emitters !== undefined) {
        loadEmitters = true;
      } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && Utils_1.Utils.isInArray(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode)) {
        loadEmitters = true;
      }

      return loadEmitters;
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(options, source) {
      var _a, _b;

      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }

      var optionsCast = options;

      if (source === null || source === void 0 ? void 0 : source.emitters) {
        if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
          optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map(function (s) {
            var tmp = new Emitter_1.Emitter();
            tmp.load(s);
            return tmp;
          });
        } else {
          var emitterOptions = optionsCast.emitters;

          if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === undefined) {
            optionsCast.emitters = emitterOptions = new Emitter_1.Emitter();
          }

          emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
        }
      }

      var interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;

      if (interactivityEmitters) {
        if (interactivityEmitters instanceof Array) {
          optionsCast.interactivity.modes.emitters = interactivityEmitters.map(function (s) {
            var tmp = new Emitter_1.Emitter();
            tmp.load(s);
            return tmp;
          });
        } else {
          var _emitterOptions = optionsCast.interactivity.modes.emitters;

          if ((_emitterOptions === null || _emitterOptions === void 0 ? void 0 : _emitterOptions.load) === undefined) {
            optionsCast.interactivity.modes.emitters = _emitterOptions = new Emitter_1.Emitter();
          }

          _emitterOptions.load(interactivityEmitters);
        }
      }
    }
  }]);

  return EmittersPlugin;
}();

var plugin = new EmittersPlugin();
exports.EmittersPlugin = plugin;

__exportStar(__webpack_require__(/*! ./Enums */ "D98Q"), exports);

/***/ }),

/***/ "pmYS":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SquareDrawer = void 0;

var SquareDrawer = /*#__PURE__*/function () {
  function SquareDrawer() {
    _classCallCheck(this, SquareDrawer);
  }

  _createClass(SquareDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount() {
      return 4;
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius) {
      context.rect(-radius, -radius, radius * 2, radius * 2);
    }
  }]);

  return SquareDrawer;
}();

exports.SquareDrawer = SquareDrawer;

/***/ }),

/***/ "pmYn":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OutMode.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./Modes */ "ubkD"), exports);

/***/ }),

/***/ "pmlM":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repulse = void 0;

var RepulseDiv_1 = __webpack_require__(/*! ./RepulseDiv */ "9XT8");

var RepulseBase_1 = __webpack_require__(/*! ./RepulseBase */ "Tdtd");

var Repulse = /*#__PURE__*/function (_RepulseBase_1$Repuls) {
  _inherits(Repulse, _RepulseBase_1$Repuls);

  var _super = _createSuper(Repulse);

  function Repulse() {
    _classCallCheck(this, Repulse);

    return _super.apply(this, arguments);
  }

  _createClass(Repulse, [{
    key: "load",
    value: function load(data) {
      _get(_getPrototypeOf(Repulse.prototype), "load", this).call(this, data);

      if ((data === null || data === void 0 ? void 0 : data.divs) === undefined) {
        return;
      }

      if (data.divs instanceof Array) {
        this.divs = data.divs.map(function (s) {
          var tmp = new RepulseDiv_1.RepulseDiv();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.divs instanceof Array || !this.divs) {
          this.divs = new RepulseDiv_1.RepulseDiv();
        }

        this.divs.load(data.divs);
      }
    }
  }]);

  return Repulse;
}(RepulseBase_1.RepulseBase);

exports.Repulse = Repulse;

/***/ }),

/***/ "q39K":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbsorberClickMode = void 0;
var AbsorberClickMode;

(function (AbsorberClickMode) {
  AbsorberClickMode["absorber"] = "absorber";
})(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {}));

/***/ }),

/***/ "q7n0":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Theme/ThemeDefault.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeDefault = void 0;

var Modes_1 = __webpack_require__(/*! ../../../Enums/Modes */ "ubkD");

var ThemeDefault = /*#__PURE__*/function () {
  function ThemeDefault() {
    _classCallCheck(this, ThemeDefault);

    this.mode = Modes_1.ThemeMode.any;
    this.value = false;
  }

  _createClass(ThemeDefault, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }]);

  return ThemeDefault;
}();

exports.ThemeDefault = ThemeDefault;

/***/ }),

/***/ "qZoD":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Retina.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Retina = void 0;

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var Retina = /*#__PURE__*/function () {
  function Retina(container) {
    _classCallCheck(this, Retina);

    this.container = container;
  }

  _createClass(Retina, [{
    key: "init",
    value: function init() {
      var _this = this;

      var container = this.container;
      var options = container.options;

      if (options.detectRetina) {
        this.pixelRatio = Utils_1.Utils.isSsr() ? 1 : window.devicePixelRatio;
      } else {
        this.pixelRatio = 1;
      }

      var motionOptions = this.container.options.motion;

      if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
        if (Utils_1.Utils.isSsr() || typeof matchMedia === "undefined" || !matchMedia) {
          this.reduceFactor = 1;
        } else {
          var mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");

          if (mediaQuery) {
            this.handleMotionChange(mediaQuery);

            var handleChange = function handleChange() {
              _this.handleMotionChange(mediaQuery);

              container.refresh().catch(function () {});
            };

            if (mediaQuery.addEventListener !== undefined) {
              mediaQuery.addEventListener("change", handleChange);
            } else if (mediaQuery.addListener !== undefined) {
              mediaQuery.addListener(handleChange);
            }
          }
        }
      } else {
        this.reduceFactor = 1;
      }

      var ratio = this.pixelRatio;

      if (container.canvas.element) {
        var element = container.canvas.element;
        container.canvas.size.width = element.offsetWidth * ratio;
        container.canvas.size.height = element.offsetHeight * ratio;
      }

      var particles = options.particles;
      this.linksDistance = particles.links.distance * ratio;
      this.linksWidth = particles.links.width * ratio;
      this.moveSpeed = particles.move.speed * ratio;
      this.sizeValue = particles.size.value * ratio;
      this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
      var modes = options.interactivity.modes;
      this.connectModeDistance = modes.connect.distance * ratio;
      this.connectModeRadius = modes.connect.radius * ratio;
      this.grabModeDistance = modes.grab.distance * ratio;
      this.repulseModeDistance = modes.repulse.distance * ratio;
      this.bounceModeDistance = modes.bounce.distance * ratio;
      this.attractModeDistance = modes.attract.distance * ratio;
      this.slowModeRadius = modes.slow.radius * ratio;
      this.bubbleModeDistance = modes.bubble.distance * ratio;

      if (modes.bubble.size) {
        this.bubbleModeSize = modes.bubble.size * ratio;
      }
    }
  }, {
    key: "initParticle",
    value: function initParticle(particle) {
      var particlesOptions = particle.particlesOptions;
      var ratio = this.pixelRatio;
      particle.linksDistance = particlesOptions.links.distance * ratio;
      particle.linksWidth = particlesOptions.links.width * ratio;
      particle.moveSpeed = particlesOptions.move.speed * ratio;
      particle.sizeValue = particlesOptions.size.value * ratio;
      particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
      particle.maxDistance = particlesOptions.move.distance * ratio;
    }
  }, {
    key: "handleMotionChange",
    value: function handleMotionChange(mediaQuery) {
      var options = this.container.options;

      if (mediaQuery.matches) {
        var motion = options.motion;
        this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
      } else {
        this.reduceFactor = 1;
      }
    }
  }]);

  return Retina;
}();

exports.Retina = Retina;

/***/ }),

/***/ "qtyS":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./InlineArrangement */ "fReP"), exports);

__exportStar(__webpack_require__(/*! ./MoveType */ "j6XU"), exports);

__exportStar(__webpack_require__(/*! ./Type */ "Wu3R"), exports);

/***/ }),

/***/ "s/5y":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var _get = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/get */ "c29t");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "GXtI");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BubbleDiv = void 0;

var BubbleBase_1 = __webpack_require__(/*! ./BubbleBase */ "XGcx");

var BubbleDiv = /*#__PURE__*/function (_BubbleBase_1$BubbleB) {
  _inherits(BubbleDiv, _BubbleBase_1$BubbleB);

  var _super = _createSuper(BubbleDiv);

  function BubbleDiv() {
    var _this;

    _classCallCheck(this, BubbleDiv);

    _this = _super.call(this);
    _this.selectors = [];
    return _this;
  }

  _createClass(BubbleDiv, [{
    key: "load",
    value: function load(data) {
      _get(_getPrototypeOf(BubbleDiv.prototype), "load", this).call(this, data);

      if (data === undefined) {
        return;
      }

      if (data.ids !== undefined) {
        this.ids = data.ids;
      }

      if (data.selectors !== undefined) {
        this.selectors = data.selectors;
      }
    }
  }, {
    key: "ids",
    get: function get() {
      if (this.selectors instanceof Array) {
        return this.selectors.map(function (t) {
          return t.replace("#", "");
        });
      } else {
        return this.selectors.replace("#", "");
      }
    },
    set: function set(value) {
      if (value instanceof Array) {
        this.selectors = value.map(function (t) {
          return "#".concat(t);
        });
      } else {
        this.selectors = "#".concat(value);
      }
    }
  }]);

  return BubbleDiv;
}(BubbleBase_1.BubbleBase);

exports.BubbleDiv = BubbleDiv;

/***/ }),

/***/ "sJdS":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawStroke = void 0;

var OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "vRcM");

var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "C9b5");

var DrawStroke = /*#__PURE__*/function () {
  function DrawStroke() {
    _classCallCheck(this, DrawStroke);

    this.color = new OptionsColor_1.OptionsColor();
    this.width = 0.5;
    this.opacity = 1;
  }

  _createClass(DrawStroke, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data !== undefined) {
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

        if (typeof this.color.value === "string") {
          this.opacity = (_a = Utils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
        }

        if (data.opacity !== undefined) {
          this.opacity = data.opacity;
        }

        if (data.width !== undefined) {
          this.width = data.width;
        }
      }
    }
  }]);

  return DrawStroke;
}();

exports.DrawStroke = DrawStroke;

/***/ }),

/***/ "slsB":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particle = void 0;

var Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "acFK");

var Particles_1 = __webpack_require__(/*! ../Options/Classes/Particles/Particles */ "N6qZ");

var Shape_1 = __webpack_require__(/*! ../Options/Classes/Particles/Shape/Shape */ "tNle");

var Enums_1 = __webpack_require__(/*! ../Enums */ "ZlLd");

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var Infecter_1 = __webpack_require__(/*! ./Particle/Infecter */ "tfxO");

var Mover_1 = __webpack_require__(/*! ./Particle/Mover */ "67oe");

var Particle = /*#__PURE__*/function () {
  function Particle(id, container, position, overrideOptions) {
    _classCallCheck(this, Particle);

    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    this.id = id;
    this.container = container;
    this.links = [];
    this.fill = true;
    this.close = true;
    this.lastNoiseTime = 0;
    this.destroyed = false;
    this.misplaced = false;
    var pxRatio = container.retina.pixelRatio;
    var options = container.options;
    var particlesOptions = new Particles_1.Particles();
    particlesOptions.load(options.particles);
    var shapeType = particlesOptions.shape.type;
    var reduceDuplicates = particlesOptions.reduceDuplicates;
    this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;

    if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
      if (overrideOptions.shape.type) {
        var overrideShapeType = overrideOptions.shape.type;
        this.shape = overrideShapeType instanceof Array ? Utils_1.Utils.itemFromArray(overrideShapeType, this.id, reduceDuplicates) : overrideShapeType;
      }

      var shapeOptions = new Shape_1.Shape();
      shapeOptions.load(overrideOptions.shape);

      if (this.shape) {
        var shapeData = shapeOptions.options[this.shape];

        if (shapeData) {
          this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
        }
      }
    } else {
      var _shapeData = particlesOptions.shape.options[this.shape];

      if (_shapeData) {
        this.shapeData = Utils_1.Utils.deepExtend({}, _shapeData instanceof Array ? Utils_1.Utils.itemFromArray(_shapeData, this.id, reduceDuplicates) : _shapeData);
      }
    }

    if (overrideOptions !== undefined) {
      particlesOptions.load(overrideOptions);
    }

    if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== undefined) {
      particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
    }

    this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
    this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
    this.particlesOptions = particlesOptions;
    this.noiseDelay = Utils_1.NumberUtils.getValue(this.particlesOptions.move.noise.delay) * 1000;
    container.retina.initParticle(this);
    var color = this.particlesOptions.color;
    var sizeOptions = this.particlesOptions.size;
    var sizeValue = Utils_1.NumberUtils.getValue(sizeOptions) * container.retina.pixelRatio;
    var randomSize = typeof sizeOptions.random === "boolean" ? sizeOptions.random : sizeOptions.random.enable;
    this.size = {
      value: sizeValue
    };
    this.direction = this.particlesOptions.move.direction;
    this.bubble = {
      inRange: false
    };
    this.initialVelocity = this.calculateVelocity();
    this.velocity = {
      horizontal: this.initialVelocity.horizontal,
      vertical: this.initialVelocity.vertical
    };
    this.pathAngle = Math.atan2(this.initialVelocity.vertical, this.initialVelocity.horizontal);
    var rotateOptions = this.particlesOptions.rotate;
    this.rotate = {
      value: (rotateOptions.random.enable ? Math.random() * 360 : rotateOptions.value) * Math.PI / 180
    };
    var rotateDirection = rotateOptions.direction;

    if (rotateDirection === Enums_1.RotateDirection.random) {
      var index = Math.floor(Math.random() * 2);
      rotateDirection = index > 0 ? Enums_1.RotateDirection.counterClockwise : Enums_1.RotateDirection.clockwise;
    }

    switch (rotateDirection) {
      case Enums_1.RotateDirection.counterClockwise:
      case "counterClockwise":
        this.rotate.status = Enums_1.AnimationStatus.decreasing;
        break;

      case Enums_1.RotateDirection.clockwise:
        this.rotate.status = Enums_1.AnimationStatus.increasing;
        break;
    }

    var rotateAnimation = this.particlesOptions.rotate.animation;

    if (rotateAnimation.enable) {
      this.rotate.velocity = rotateAnimation.speed / 360 * container.retina.reduceFactor;

      if (!rotateAnimation.sync) {
        this.rotate.velocity *= Math.random();
      }
    }

    var sizeAnimation = this.particlesOptions.size.animation;

    if (sizeAnimation.enable) {
      this.size.status = Enums_1.AnimationStatus.increasing;

      if (!randomSize) {
        switch (sizeAnimation.startValue) {
          case Enums_1.StartValueType.min:
            this.size.value = sizeAnimation.minimumValue * pxRatio;
            break;

          case Enums_1.StartValueType.random:
            this.size.value = Utils_1.NumberUtils.randomInRange(sizeAnimation.minimumValue * pxRatio, this.size.value);
            break;

          case Enums_1.StartValueType.max:
          default:
            this.size.status = Enums_1.AnimationStatus.decreasing;
            break;
        }
      }

      this.size.velocity = ((_g = this.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;

      if (!sizeAnimation.sync) {
        this.size.velocity *= Math.random();
      }
    }

    this.color = {
      value: Utils_1.ColorUtils.colorToHsl(color, this.id, reduceDuplicates)
    };
    var colorAnimation = this.particlesOptions.color.animation;

    if (colorAnimation.enable) {
      this.color.velocity = colorAnimation.speed / 100 * container.retina.reduceFactor;

      if (!colorAnimation.sync) {
        this.color.velocity *= Math.random();
      }
    }

    this.position = this.calcPosition(this.container, position);
    this.initialPosition = {
      x: this.position.x,
      y: this.position.y
    };
    this.offset = {
      x: 0,
      y: 0
    };
    var opacityOptions = this.particlesOptions.opacity;
    var randomOpacity = typeof opacityOptions.random === "boolean" ? opacityOptions.random : opacityOptions.random.enable;
    this.opacity = {
      value: Utils_1.NumberUtils.getValue(opacityOptions)
    };
    var opacityAnimation = opacityOptions.animation;

    if (opacityAnimation.enable) {
      this.opacity.status = Enums_1.AnimationStatus.increasing;

      if (!randomOpacity) {
        switch (opacityAnimation.startValue) {
          case Enums_1.StartValueType.min:
            this.opacity.value = opacityAnimation.minimumValue;
            break;

          case Enums_1.StartValueType.random:
            this.opacity.value = Utils_1.NumberUtils.randomInRange(opacityAnimation.minimumValue, this.opacity.value);
            break;

          case Enums_1.StartValueType.max:
          default:
            this.opacity.status = Enums_1.AnimationStatus.decreasing;
            break;
        }
      }

      this.opacity.velocity = opacityAnimation.speed / 100 * container.retina.reduceFactor;

      if (!opacityAnimation.sync) {
        this.opacity.velocity *= Math.random();
      }
    }

    this.sides = 24;
    var drawer = container.drawers.get(this.shape);

    if (!drawer) {
      drawer = Utils_1.Plugins.getShapeDrawer(this.shape);

      if (drawer) {
        container.drawers.set(this.shape, drawer);
      }
    }

    var sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;

    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }

    var imageShape = this.loadImageShape(container, drawer);

    if (imageShape) {
      this.image = imageShape.image;
      this.fill = imageShape.fill;
      this.close = imageShape.close;
    }

    this.stroke = this.particlesOptions.stroke instanceof Array ? Utils_1.Utils.itemFromArray(this.particlesOptions.stroke, this.id, reduceDuplicates) : this.particlesOptions.stroke;
    this.strokeWidth = this.stroke.width * container.retina.pixelRatio;
    this.strokeColor = {
      value: (_h = Utils_1.ColorUtils.colorToHsl(this.stroke.color)) !== null && _h !== void 0 ? _h : this.color.value
    };

    if (typeof this.stroke.color !== "string") {
      var strokeColorAnimation = (_j = this.stroke.color) === null || _j === void 0 ? void 0 : _j.animation;

      if (strokeColorAnimation && this.strokeColor) {
        if (strokeColorAnimation.enable) {
          this.strokeColor.velocity = strokeColorAnimation.speed / 100 * container.retina.reduceFactor;

          if (!strokeColorAnimation.sync) {
            this.strokeColor.velocity = this.strokeColor.velocity * Math.random();
          }
        } else {
          this.strokeColor.velocity = 0;
        }

        if (strokeColorAnimation.enable && !strokeColorAnimation.sync && this.strokeColor.value) {
          this.strokeColor.value.h = Math.random() * 360;
        }
      }
    }

    var lifeOptions = particlesOptions.life;
    this.lifeDelay = container.retina.reduceFactor ? Utils_1.NumberUtils.getValue(lifeOptions.delay) * (lifeOptions.delay.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1000 : 0;
    this.lifeDelayTime = 0;
    this.lifeDuration = container.retina.reduceFactor ? Utils_1.NumberUtils.getValue(lifeOptions.duration) * (lifeOptions.duration.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1000 : 0;
    this.lifeTime = 0;
    this.livesRemaining = particlesOptions.life.count;
    this.spawning = this.lifeDelay > 0;

    if (this.lifeDuration <= 0) {
      this.lifeDuration = -1;
    }

    if (this.livesRemaining <= 0) {
      this.livesRemaining = -1;
    }

    this.shadowColor = Utils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
    this.updater = new Updater_1.Updater(container, this);
    this.infecter = new Infecter_1.Infecter(container);
    this.mover = new Mover_1.Mover(container, this);
  }

  _createClass(Particle, [{
    key: "move",
    value: function move(delta) {
      this.mover.move(delta);
    }
  }, {
    key: "update",
    value: function update(delta) {
      this.updater.update(delta);
    }
  }, {
    key: "draw",
    value: function draw(delta) {
      this.container.canvas.drawParticle(this, delta);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return {
        x: this.position.x + this.offset.x,
        y: this.position.y + this.offset.y
      };
    }
  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.bubble.radius || this.size.value;
    }
  }, {
    key: "getFillColor",
    value: function getFillColor() {
      var _a;

      return (_a = this.bubble.color) !== null && _a !== void 0 ? _a : this.color.value;
    }
  }, {
    key: "getStrokeColor",
    value: function getStrokeColor() {
      var _a, _b;

      return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : this.strokeColor.value) !== null && _b !== void 0 ? _b : this.color.value;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      this.bubble.inRange = false;
      this.links = [];
    }
  }, {
    key: "calcPosition",
    value: function calcPosition(container, position) {
      var _a, _b;

      var _iterator = _createForOfIteratorHelper(container.plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ref3 = _step.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var plugin = _ref2[1];
          var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;

          if (pluginPos !== undefined) {
            return Utils_1.Utils.deepExtend({}, pluginPos);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var pos = {
        x: (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * container.canvas.size.width,
        y: (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * container.canvas.size.height
      };
      var outMode = this.particlesOptions.move.outMode;

      if (Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounce) || Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounceHorizontal)) {
        if (pos.x > container.canvas.size.width - this.size.value * 2) {
          pos.x -= this.size.value;
        } else if (pos.x < this.size.value * 2) {
          pos.x += this.size.value;
        }
      }

      if (Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounce) || Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounceVertical)) {
        if (pos.y > container.canvas.size.height - this.size.value * 2) {
          pos.y -= this.size.value;
        } else if (pos.y < this.size.value * 2) {
          pos.y += this.size.value;
        }
      }

      return pos;
    }
  }, {
    key: "calculateVelocity",
    value: function calculateVelocity() {
      var baseVelocity = Utils_1.NumberUtils.getParticleBaseVelocity(this);
      var res = {
        horizontal: 0,
        vertical: 0
      };
      var moveOptions = this.particlesOptions.move;
      var rad;
      var radOffset = Math.PI / 4;

      if (typeof moveOptions.angle === "number") {
        rad = Math.PI / 180 * moveOptions.angle;
      } else {
        rad = Math.PI / 180 * moveOptions.angle.value;
        radOffset = Math.PI / 180 * moveOptions.angle.offset;
      }

      var range = {
        left: Math.sin(radOffset + rad / 2) - Math.sin(radOffset - rad / 2),
        right: Math.cos(radOffset + rad / 2) - Math.cos(radOffset - rad / 2)
      };

      if (moveOptions.straight) {
        res.horizontal = baseVelocity.x;
        res.vertical = baseVelocity.y;

        if (moveOptions.random) {
          res.horizontal += Utils_1.NumberUtils.randomInRange(range.left, range.right) / 2;
          res.vertical += Utils_1.NumberUtils.randomInRange(range.left, range.right) / 2;
        }
      } else {
        res.horizontal = baseVelocity.x + Utils_1.NumberUtils.randomInRange(range.left, range.right) / 2;
        res.vertical = baseVelocity.y + Utils_1.NumberUtils.randomInRange(range.left, range.right) / 2;
      }

      return res;
    }
  }, {
    key: "loadImageShape",
    value: function loadImageShape(container, drawer) {
      var _this = this;

      var _a, _b, _c, _d, _e;

      if (!(this.shape === Enums_1.ShapeType.image || this.shape === Enums_1.ShapeType.images)) {
        return;
      }

      var imageDrawer = drawer;
      var images = imageDrawer.getImages(container).images;
      var imageData = this.shapeData;
      var image = (_a = images.find(function (t) {
        return t.source === imageData.src;
      })) !== null && _a !== void 0 ? _a : images[0];
      var color = this.getFillColor();
      var imageRes;

      if (!image) {
        return;
      }

      if (image.svgData !== undefined && imageData.replaceColor && color) {
        var svgColoredData = Utils_1.ColorUtils.replaceColorSvg(image, color, this.opacity.value);
        var svg = new Blob([svgColoredData], {
          type: "image/svg+xml"
        });
        var domUrl = URL || window.URL || window.webkitURL || window;
        var url = domUrl.createObjectURL(svg);
        var img = new Image();
        imageRes = {
          data: image,
          loaded: false,
          ratio: imageData.width / imageData.height,
          replaceColor: (_b = imageData.replaceColor) !== null && _b !== void 0 ? _b : imageData.replace_color,
          source: imageData.src
        };
        img.addEventListener("load", function () {
          if (_this.image) {
            _this.image.loaded = true;
            image.element = img;
          }

          domUrl.revokeObjectURL(url);
        });
        img.addEventListener("error", function () {
          domUrl.revokeObjectURL(url);
          Utils_1.Utils.loadImage(imageData.src).then(function (img2) {
            if (_this.image) {
              image.element = img2.element;
              _this.image.loaded = true;
            }
          });
        });
        img.src = url;
      } else {
        imageRes = {
          data: image,
          loaded: true,
          ratio: imageData.width / imageData.height,
          replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
          source: imageData.src
        };
      }

      if (!imageRes.ratio) {
        imageRes.ratio = 1;
      }

      var fill = (_d = imageData.fill) !== null && _d !== void 0 ? _d : this.fill;
      var close = (_e = imageData.close) !== null && _e !== void 0 ? _e : this.close;
      return {
        image: imageRes,
        fill: fill,
        close: close
      };
    }
  }]);

  return Particle;
}();

exports.Particle = Particle;

/***/ }),

/***/ "stJM":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/RotateDirection.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./Directions */ "wSea"), exports);

/***/ }),

/***/ "tNle":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = void 0;

var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "ZlLd");

var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "C9b5");

var Shape = /*#__PURE__*/function () {
  function Shape() {
    _classCallCheck(this, Shape);

    this.options = {};
    this.type = Enums_1.ShapeType.circle;
  }

  _createClass(Shape, [{
    key: "load",
    value: function load(data) {
      var _a, _b, _c;

      if (data === undefined) {
        return;
      }

      var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;

      if (options !== undefined) {
        for (var shape in options) {
          var item = options[shape];

          if (item !== undefined) {
            this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
          }
        }
      }

      this.loadShape(data.character, Enums_1.ShapeType.character, Enums_1.ShapeType.char, true);
      this.loadShape(data.polygon, Enums_1.ShapeType.polygon, Enums_1.ShapeType.star, false);
      this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, Enums_1.ShapeType.image, Enums_1.ShapeType.images, true);

      if (data.type !== undefined) {
        this.type = data.type;
      }
    }
  }, {
    key: "loadShape",
    value: function loadShape(item, mainKey, altKey, altOverride) {
      var _a, _b, _c, _d;

      if (item === undefined) {
        return;
      }

      if (item instanceof Array) {
        if (!(this.options[mainKey] instanceof Array)) {
          this.options[mainKey] = [];

          if (!this.options[altKey] || altOverride) {
            this.options[altKey] = [];
          }
        }

        this.options[mainKey] = Utils_1.Utils.deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);

        if (!this.options[altKey] || altOverride) {
          this.options[altKey] = Utils_1.Utils.deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
        }
      } else {
        if (this.options[mainKey] instanceof Array) {
          this.options[mainKey] = {};

          if (!this.options[altKey] || altOverride) {
            this.options[altKey] = {};
          }
        }

        this.options[mainKey] = Utils_1.Utils.deepExtend((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);

        if (!this.options[altKey] || altOverride) {
          this.options[altKey] = Utils_1.Utils.deepExtend((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
        }
      }
    }
  }, {
    key: "image",
    get: function get() {
      var _a;

      return (_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images];
    },
    set: function set(value) {
      this.options[Enums_1.ShapeType.image] = value;
      this.options[Enums_1.ShapeType.images] = value;
    }
  }, {
    key: "custom",
    get: function get() {
      return this.options;
    },
    set: function set(value) {
      this.options = value;
    }
  }, {
    key: "images",
    get: function get() {
      return this.image instanceof Array ? this.image : [this.image];
    },
    set: function set(value) {
      this.image = value;
    }
  }, {
    key: "stroke",
    get: function get() {
      return [];
    },
    set: function set(_value) {}
  }, {
    key: "character",
    get: function get() {
      var _a;

      return (_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.char];
    },
    set: function set(value) {
      this.options[Enums_1.ShapeType.character] = value;
      this.options[Enums_1.ShapeType.char] = value;
    }
  }, {
    key: "polygon",
    get: function get() {
      var _a;

      return (_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star];
    },
    set: function set(value) {
      this.options[Enums_1.ShapeType.polygon] = value;
      this.options[Enums_1.ShapeType.star] = value;
    }
  }]);

  return Shape;
}();

exports.Shape = Shape;

/***/ }),

/***/ "tfxO":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Infecter.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Infecter = void 0;

var Infecter = /*#__PURE__*/function () {
  function Infecter(container) {
    _classCallCheck(this, Infecter);

    this.container = container;
  }

  _createClass(Infecter, [{
    key: "startInfection",
    value: function startInfection(stage) {
      var options = this.container.options;
      var stages = options.infection.stages;
      var stagesCount = stages.length;

      if (stage > stagesCount || stage < 0) {
        return;
      }

      this.infectionDelay = 0;
      this.infectionDelayStage = stage;
    }
  }, {
    key: "updateInfectionStage",
    value: function updateInfectionStage(stage) {
      var options = this.container.options;
      var stagesCount = options.infection.stages.length;

      if (stage > stagesCount || stage < 0 || this.infectionStage !== undefined && this.infectionStage > stage) {
        return;
      }

      this.infectionStage = stage;
      this.infectionTime = 0;
    }
  }, {
    key: "updateInfection",
    value: function updateInfection(delta) {
      var options = this.container.options;
      var infection = options.infection;
      var stages = options.infection.stages;
      var stagesCount = stages.length;

      if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
        var stage = this.infectionDelayStage;

        if (stage > stagesCount || stage < 0) {
          return;
        }

        if (this.infectionDelay > infection.delay * 1000) {
          this.infectionStage = stage;
          this.infectionTime = 0;
          delete this.infectionDelay;
          delete this.infectionDelayStage;
        } else {
          this.infectionDelay += delta;
        }
      } else {
        delete this.infectionDelay;
        delete this.infectionDelayStage;
      }

      if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
        var infectionStage = stages[this.infectionStage];

        if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
          if (this.infectionTime > infectionStage.duration * 1000) {
            this.nextInfectionStage();
          } else {
            this.infectionTime += delta;
          }
        } else {
          this.infectionTime += delta;
        }
      } else {
        delete this.infectionStage;
        delete this.infectionTime;
      }
    }
  }, {
    key: "nextInfectionStage",
    value: function nextInfectionStage() {
      var options = this.container.options;
      var stagesCount = options.infection.stages.length;

      if (stagesCount <= 0 || this.infectionStage === undefined) {
        return;
      }

      this.infectionTime = 0;

      if (stagesCount <= ++this.infectionStage) {
        if (options.infection.cure) {
          delete this.infectionStage;
          delete this.infectionTime;
          return;
        } else {
          this.infectionStage = 0;
          this.infectionTime = 0;
        }
      }
    }
  }]);

  return Infecter;
}();

exports.Infecter = Infecter;

/***/ }),

/***/ "uMnv":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/StartValueType.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartValueType = void 0;
var StartValueType;

(function (StartValueType) {
  StartValueType["max"] = "max";
  StartValueType["min"] = "min";
  StartValueType["random"] = "random";
})(StartValueType = exports.StartValueType || (exports.StartValueType = {}));

/***/ }),

/***/ "uP41":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = void 0;

var Enums_1 = __webpack_require__(/*! ../../Enums */ "qtyS");

var Move = /*#__PURE__*/function () {
  function Move() {
    _classCallCheck(this, Move);

    this.radius = 10;
    this.type = Enums_1.MoveType.path;
  }

  _createClass(Move, [{
    key: "load",
    value: function load(data) {
      if (data !== undefined) {
        if (data.radius !== undefined) {
          this.radius = data.radius;
        }

        if (data.type !== undefined) {
          this.type = data.type;
        }
      }
    }
  }]);

  return Move;
}();

exports.Move = Move;

/***/ }),

/***/ "ub5Q":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/QuadTree.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuadTree = void 0;

var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "Xvid");

var Circle_1 = __webpack_require__(/*! ./Circle */ "Erz+");

var CircleWarp_1 = __webpack_require__(/*! ./CircleWarp */ "EGR3");

var QuadTree = /*#__PURE__*/function () {
  function QuadTree(rectangle, capacity) {
    _classCallCheck(this, QuadTree);

    this.rectangle = rectangle;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  _createClass(QuadTree, [{
    key: "subdivide",
    value: function subdivide() {
      var x = this.rectangle.position.x;
      var y = this.rectangle.position.y;
      var w = this.rectangle.size.width;
      var h = this.rectangle.size.height;
      var capacity = this.capacity;
      this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
      this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
      this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
      this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
      this.divided = true;
    }
  }, {
    key: "insert",
    value: function insert(point) {
      var _a, _b, _c, _d, _e;

      if (!this.rectangle.contains(point.position)) {
        return false;
      }

      if (this.points.length < this.capacity) {
        this.points.push(point);
        return true;
      }

      if (!this.divided) {
        this.subdivide();
      }

      return (_e = ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point))) !== null && _e !== void 0 ? _e : false;
    }
  }, {
    key: "queryCircle",
    value: function queryCircle(position, radius) {
      return this.query(new Circle_1.Circle(position.x, position.y, radius));
    }
  }, {
    key: "queryCircleWarp",
    value: function queryCircleWarp(position, radius, containerOrSize) {
      var container = containerOrSize;
      var size = containerOrSize;
      return this.query(new CircleWarp_1.CircleWarp(position.x, position.y, radius, container.canvas !== undefined ? container.canvas.size : size));
    }
  }, {
    key: "queryRectangle",
    value: function queryRectangle(position, size) {
      return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height));
    }
  }, {
    key: "query",
    value: function query(range, found) {
      var _a, _b, _c, _d;

      var res = found !== null && found !== void 0 ? found : [];

      if (!range.intersects(this.rectangle)) {
        return [];
      } else {
        var _iterator = _createForOfIteratorHelper(this.points),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;

            if (!range.contains(p.position)) {
              continue;
            }

            res.push(p.particle);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (this.divided) {
          (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
          (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
          (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
          (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
        }
      }

      return res;
    }
  }]);

  return QuadTree;
}();

exports.QuadTree = QuadTree;

/***/ }),

/***/ "ubkD":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/index.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./ClickMode */ "e0sz"), exports);

__exportStar(__webpack_require__(/*! ./DivMode */ "QENi"), exports);

__exportStar(__webpack_require__(/*! ./HoverMode */ "+Gz/"), exports);

__exportStar(__webpack_require__(/*! ./CollisionMode */ "v7xC"), exports);

__exportStar(__webpack_require__(/*! ./OutMode */ "yIki"), exports);

__exportStar(__webpack_require__(/*! ./SizeMode */ "7UW+"), exports);

__exportStar(__webpack_require__(/*! ./ThemeMode */ "eVV1"), exports);

/***/ }),

/***/ "v7xC":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollisionMode = void 0;
var CollisionMode;

(function (CollisionMode) {
  CollisionMode["absorb"] = "absorb";
  CollisionMode["bounce"] = "bounce";
  CollisionMode["destroy"] = "destroy";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));

/***/ }),

/***/ "vGWO":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMask = void 0;

var Enums_1 = __webpack_require__(/*! ../../Enums */ "qtyS");

var Draw_1 = __webpack_require__(/*! ./Draw */ "LfGR");

var Move_1 = __webpack_require__(/*! ./Move */ "uP41");

var Inline_1 = __webpack_require__(/*! ./Inline */ "887v");

var LocalSvg_1 = __webpack_require__(/*! ./LocalSvg */ "KbmP");

var PolygonMask = /*#__PURE__*/function () {
  function PolygonMask() {
    _classCallCheck(this, PolygonMask);

    this.draw = new Draw_1.Draw();
    this.enable = false;
    this.inline = new Inline_1.Inline();
    this.move = new Move_1.Move();
    this.scale = 1;
    this.type = Enums_1.Type.none;
  }

  _createClass(PolygonMask, [{
    key: "load",
    value: function load(data) {
      var _a;

      if (data !== undefined) {
        this.draw.load(data.draw);
        var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
          arrangement: data.inlineArrangement
        };

        if (inline !== undefined) {
          this.inline.load(inline);
        }

        this.move.load(data.move);

        if (data.scale !== undefined) {
          this.scale = data.scale;
        }

        if (data.type !== undefined) {
          this.type = data.type;
        }

        if (data.enable !== undefined) {
          this.enable = data.enable;
        } else {
          this.enable = this.type !== Enums_1.Type.none;
        }

        if (data.url !== undefined) {
          this.url = data.url;
        }

        if (data.data !== undefined) {
          if (typeof data.data === "string") {
            this.data = data.data;
          } else {
            this.data = new LocalSvg_1.LocalSvg();
            this.data.load(data.data);
          }
        }

        if (data.position !== undefined) {
          this.position = {
            x: data.position.x,
            y: data.position.y
          };
        }
      }
    }
  }, {
    key: "inlineArrangement",
    get: function get() {
      return this.inline.arrangement;
    },
    set: function set(value) {
      this.inline.arrangement = value;
    }
  }]);

  return PolygonMask;
}();

exports.PolygonMask = PolygonMask;

/***/ }),

/***/ "vH5O":
/*!**********************************************!*\
  !*** ./node_modules/tsparticles/dist/pjs.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPjs = void 0;

var initPjs = function initPjs(main) {
  var particlesJS = function particlesJS(tagId, options) {
    return main.load(tagId, options);
  };

  particlesJS.load = function (tagId, pathConfigJson, callback) {
    main.loadJSON(tagId, pathConfigJson).then(function (container) {
      if (container) {
        callback(container);
      }
    });
  };

  particlesJS.setOnClickHandler = function (callback) {
    main.setOnClickHandler(callback);
  };

  var pJSDom = main.dom();
  return {
    particlesJS: particlesJS,
    pJSDom: pJSDom
  };
};

exports.initPjs = initPjs;

/***/ }),

/***/ "vRcM":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsColor = void 0;

var OptionsColor = /*#__PURE__*/function () {
  function OptionsColor() {
    _classCallCheck(this, OptionsColor);

    this.value = "#fff";
  }

  _createClass(OptionsColor, [{
    key: "load",
    value: function load(data) {
      if ((data === null || data === void 0 ? void 0 : data.value) === undefined) {
        return;
      }

      this.value = data.value;
    }
  }], [{
    key: "create",
    value: function create(source, data) {
      var color = source !== null && source !== void 0 ? source : new OptionsColor();

      if (data !== undefined) {
        color.load(typeof data === "string" ? {
          value: data
        } : data);
      }

      return color;
    }
  }]);

  return OptionsColor;
}();

exports.OptionsColor = OptionsColor;

/***/ }),

/***/ "vfib":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "WmNS");

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageDrawer = void 0;

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var Enums_1 = __webpack_require__(/*! ../Enums */ "ZlLd");

var ImageDrawer = /*#__PURE__*/function () {
  function ImageDrawer() {
    _classCallCheck(this, ImageDrawer);

    this.images = [];
  }

  _createClass(ImageDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount() {
      return 12;
    }
  }, {
    key: "getImages",
    value: function getImages(container) {
      var containerImages = this.images.filter(function (t) {
        return t.id === container.id;
      });

      if (!containerImages.length) {
        this.images.push({
          id: container.id,
          images: []
        });
        return this.getImages(container);
      } else {
        return containerImages[0];
      }
    }
  }, {
    key: "addImage",
    value: function addImage(container, image) {
      var containerImages = this.getImages(container);
      containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    }
  }, {
    key: "init",
    value: function init(container) {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var options, shapeOptions, imageOptions, _iterator, _step, optionsImage;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = container.options;
                shapeOptions = options.particles.shape;

                if (!(!Utils_1.Utils.isInArray(Enums_1.ShapeType.image, shapeOptions.type) && !Utils_1.Utils.isInArray(Enums_1.ShapeType.images, shapeOptions.type))) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];

                if (!(imageOptions instanceof Array)) {
                  _context.next = 25;
                  break;
                }

                _iterator = _createForOfIteratorHelper(imageOptions);
                _context.prev = 7;

                _iterator.s();

              case 9:
                if ((_step = _iterator.n()).done) {
                  _context.next = 15;
                  break;
                }

                optionsImage = _step.value;
                _context.next = 13;
                return this.loadImageShape(container, optionsImage);

              case 13:
                _context.next = 9;
                break;

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](7);

                _iterator.e(_context.t0);

              case 20:
                _context.prev = 20;

                _iterator.f();

                return _context.finish(20);

              case 23:
                _context.next = 27;
                break;

              case 25:
                _context.next = 27;
                return this.loadImageShape(container, imageOptions);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 17, 20, 23]]);
      }));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.images = [];
    }
  }, {
    key: "loadImageShape",
    value: function loadImageShape(container, imageShape) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var image;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!imageShape.replaceColor) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return Utils_1.Utils.downloadSvgImage(imageShape.src);

              case 4:
                _context2.t0 = _context2.sent;
                _context2.next = 10;
                break;

              case 7:
                _context2.next = 9;
                return Utils_1.Utils.loadImage(imageShape.src);

              case 9:
                _context2.t0 = _context2.sent;

              case 10:
                image = _context2.t0;
                this.addImage(container, image);
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t1 = _context2["catch"](0);
                console.warn("tsParticles error - ".concat(imageShape.src, " not found"));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius, opacity) {
      var _a, _b;

      if (!context) {
        return;
      }

      var image = particle.image;
      var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;

      if (!element) {
        return;
      }

      var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
      var pos = {
        x: -radius,
        y: -radius
      };

      if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
        context.globalAlpha = opacity;
      }

      context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);

      if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
        context.globalAlpha = 1;
      }
    }
  }]);

  return ImageDrawer;
}();

exports.ImageDrawer = ImageDrawer;

/***/ }),

/***/ "vuZh":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightArea.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightArea = void 0;

var LightGradient_1 = __webpack_require__(/*! ./LightGradient */ "nAcs");

var LightArea = /*#__PURE__*/function () {
  function LightArea() {
    _classCallCheck(this, LightArea);

    this.gradient = new LightGradient_1.LightGradient();
    this.radius = 1000;
  }

  _createClass(LightArea, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      this.gradient.load(data.gradient);

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }]);

  return LightArea;
}();

exports.LightArea = LightArea;

/***/ }),

/***/ "w1c1":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Attract.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attract = void 0;

var Attract = /*#__PURE__*/function () {
  function Attract() {
    _classCallCheck(this, Attract);

    this.enable = false;
    this.rotate = {
      x: 3000,
      y: 3000
    };
  }

  _createClass(Attract, [{
    key: "load",
    value: function load(data) {
      var _a, _b, _c, _d;

      if (data === undefined) {
        return;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;

      if (rotateX !== undefined) {
        this.rotate.x = rotateX;
      }

      var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;

      if (rotateY !== undefined) {
        this.rotate.y = rotateY;
      }
    }
  }, {
    key: "rotateX",
    get: function get() {
      return this.rotate.x;
    },
    set: function set(value) {
      this.rotate.x = value;
    }
  }, {
    key: "rotateY",
    get: function get() {
      return this.rotate.y;
    },
    set: function set(value) {
      this.rotate.y = value;
    }
  }]);

  return Attract;
}();

exports.Attract = Attract;

/***/ }),

/***/ "wSea":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./MoveDirection */ "UfkC"), exports);

__exportStar(__webpack_require__(/*! ./RotateDirection */ "hoTk"), exports);

/***/ }),

/***/ "x49D":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "xbqb":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "xqYR":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Canvas.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ "bfL6");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "5wUe");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;

var Utils_1 = __webpack_require__(/*! ../Utils */ "C9b5");

var Canvas = /*#__PURE__*/function () {
  function Canvas(container) {
    _classCallCheck(this, Canvas);

    this.container = container;
    this.size = {
      height: 0,
      width: 0
    };
    this.context = null;
    this.generatedCanvas = false;
  }

  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      this.resize();
      var options = this.container.options;
      var element = this.element;

      if (element) {
        if (options.backgroundMode.enable) {
          this.originalStyle = Utils_1.Utils.deepExtend({}, element.style);
          element.style.position = "fixed";
          element.style.zIndex = options.backgroundMode.zIndex.toString(10);
          element.style.top = "0";
          element.style.left = "0";
          element.style.width = "100%";
          element.style.height = "100%";
        } else {
          element.style.position = (_b = (_a = this.originalStyle) === null || _a === void 0 ? void 0 : _a.position) !== null && _b !== void 0 ? _b : "";
          element.style.zIndex = (_d = (_c = this.originalStyle) === null || _c === void 0 ? void 0 : _c.zIndex) !== null && _d !== void 0 ? _d : "";
          element.style.top = (_f = (_e = this.originalStyle) === null || _e === void 0 ? void 0 : _e.top) !== null && _f !== void 0 ? _f : "";
          element.style.left = (_h = (_g = this.originalStyle) === null || _g === void 0 ? void 0 : _g.left) !== null && _h !== void 0 ? _h : "";
          element.style.width = (_k = (_j = this.originalStyle) === null || _j === void 0 ? void 0 : _j.width) !== null && _k !== void 0 ? _k : "";
          element.style.height = (_m = (_l = this.originalStyle) === null || _l === void 0 ? void 0 : _l.height) !== null && _m !== void 0 ? _m : "";
        }
      }

      var cover = options.backgroundMask.cover;
      var color = cover.color;
      var trail = options.particles.move.trail;
      var coverRgb = Utils_1.ColorUtils.colorToRgb(color);
      this.coverColor = coverRgb !== undefined ? {
        r: coverRgb.r,
        g: coverRgb.g,
        b: coverRgb.b,
        a: cover.opacity
      } : undefined;
      this.trailFillColor = Utils_1.ColorUtils.colorToRgb(trail.fillColor);
      this.initBackground();
      this.paint();
    }
  }, {
    key: "loadCanvas",
    value: function loadCanvas(canvas, generatedCanvas) {
      var _a;

      if (!canvas.className) {
        canvas.className = Utils_1.Constants.canvasClass;
      }

      if (this.generatedCanvas) {
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
      }

      this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : this.generatedCanvas;
      this.element = canvas;
      this.originalStyle = Utils_1.Utils.deepExtend({}, this.element.style);
      this.size.height = canvas.offsetHeight;
      this.size.width = canvas.offsetWidth;
      this.context = this.element.getContext("2d");
      this.container.retina.init();
      this.initBackground();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _a;

      if (this.generatedCanvas) {
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
      }

      if (this.context) {
        Utils_1.CanvasUtils.clear(this.context, this.size);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (!this.element) {
        return;
      }

      this.element.width = this.size.width;
      this.element.height = this.size.height;
    }
  }, {
    key: "paint",
    value: function paint() {
      var options = this.container.options;

      if (!this.context) {
        return;
      }

      if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
        Utils_1.CanvasUtils.clear(this.context, this.size);
        this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.coverColor, this.coverColor.a));
      } else {
        this.paintBase();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var options = this.container.options;
      var trail = options.particles.move.trail;

      if (options.backgroundMask.enable) {
        this.paint();
      } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
        this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
      } else if (this.context) {
        Utils_1.CanvasUtils.clear(this.context, this.size);
      }
    }
  }, {
    key: "windowResize",
    value: function windowResize() {
      if (!this.element) {
        return;
      }

      var container = this.container;
      container.canvas.initSize();
      container.particles.setDensity();

      var _iterator = _createForOfIteratorHelper(container.plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ref3 = _step.value;

          var _ref2 = _slicedToArray(_ref3, 2);

          var plugin = _ref2[1];

          if (plugin.resize !== undefined) {
            plugin.resize();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "initSize",
    value: function initSize() {
      if (!this.element) {
        return;
      }

      var container = this.container;
      var pxRatio = container.retina.pixelRatio;
      container.canvas.size.width = this.element.offsetWidth * pxRatio;
      container.canvas.size.height = this.element.offsetHeight * pxRatio;
      this.element.width = container.canvas.size.width;
      this.element.height = container.canvas.size.height;
    }
  }, {
    key: "drawConnectLine",
    value: function drawConnectLine(p1, p2) {
      var _a;

      var lineStyle = this.lineStyle(p1, p2);

      if (!lineStyle) {
        return;
      }

      var ctx = this.context;

      if (!ctx) {
        return;
      }

      var pos1 = p1.getPosition();
      var pos2 = p2.getPosition();
      Utils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
    }
  }, {
    key: "drawGrabLine",
    value: function drawGrabLine(particle, lineColor, opacity, mousePos) {
      var _a;

      var container = this.container;
      var ctx = container.canvas.context;

      if (!ctx) {
        return;
      }

      var beginPos = particle.getPosition();
      Utils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
    }
  }, {
    key: "drawParticleShadow",
    value: function drawParticleShadow(particle, mousePos) {
      if (!this.context) {
        return;
      }

      Utils_1.CanvasUtils.drawParticleShadow(this.container, this.context, particle, mousePos);
    }
  }, {
    key: "drawLinkTriangle",
    value: function drawLinkTriangle(p1, link1, link2) {
      var _a;

      var container = this.container;
      var options = container.options;
      var p2 = link1.destination;
      var p3 = link2.destination;
      var triangleOptions = p1.particlesOptions.links.triangles;
      var opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;

      if (opacityTriangle <= 0) {
        return;
      }

      var pos1 = p1.getPosition();
      var pos2 = p2.getPosition();
      var pos3 = p3.getPosition();
      var ctx = this.context;

      if (!ctx) {
        return;
      }

      if (Utils_1.NumberUtils.getDistance(pos1, pos2) > container.retina.linksDistance || Utils_1.NumberUtils.getDistance(pos3, pos2) > container.retina.linksDistance || Utils_1.NumberUtils.getDistance(pos3, pos1) > container.retina.linksDistance) {
        return;
      }

      var colorTriangle = Utils_1.ColorUtils.colorToRgb(triangleOptions.color);

      if (!colorTriangle) {
        var linksOptions = p1.particlesOptions.links;
        var linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
        colorTriangle = Utils_1.ColorUtils.getLinkColor(p1, p2, linkColor);
      }

      if (!colorTriangle) {
        return;
      }

      Utils_1.CanvasUtils.drawLinkTriangle(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
    }
  }, {
    key: "drawLinkLine",
    value: function drawLinkLine(p1, link) {
      var _a, _b;

      var container = this.container;
      var options = container.options;
      var p2 = link.destination;
      var opacity = link.opacity;
      var pos1 = p1.getPosition();
      var pos2 = p2.getPosition();
      var ctx = this.context;

      if (!ctx) {
        return;
      }

      var colorLine;
      var twinkle = p1.particlesOptions.twinkle.lines;

      if (twinkle.enable) {
        var twinkleFreq = twinkle.frequency;
        var twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
        var twinkling = Math.random() < twinkleFreq;

        if (twinkling && twinkleRgb !== undefined) {
          colorLine = twinkleRgb;
          opacity = twinkle.opacity;
        }
      }

      if (!colorLine) {
        var linksOptions = p1.particlesOptions.links;
        var linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
        colorLine = Utils_1.ColorUtils.getLinkColor(p1, p2, linkColor);
      }

      if (!colorLine) {
        return;
      }

      var width = (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
      var maxDistance = (_b = p1.linksDistance) !== null && _b !== void 0 ? _b : container.retina.linksDistance;
      Utils_1.CanvasUtils.drawLinkLine(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.particlesOptions.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.particlesOptions.links.shadow);
    }
  }, {
    key: "drawParticle",
    value: function drawParticle(particle, delta) {
      var _a, _b, _c, _d;

      if (((_a = particle.image) === null || _a === void 0 ? void 0 : _a.loaded) === false || particle.spawning || particle.destroyed) {
        return;
      }

      var pfColor = particle.getFillColor();
      var psColor = (_b = particle.getStrokeColor()) !== null && _b !== void 0 ? _b : pfColor;

      if (!pfColor && !psColor) {
        return;
      }

      var options = this.container.options;
      var pOptions = particle.particlesOptions;
      var twinkle = pOptions.twinkle.particles;
      var twinkleFreq = twinkle.frequency;
      var twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
      var twinkling = twinkle.enable && Math.random() < twinkleFreq;
      var radius = particle.getRadius();
      var opacity = twinkling ? twinkle.opacity : (_c = particle.bubble.opacity) !== null && _c !== void 0 ? _c : particle.opacity.value;
      var infectionStage = particle.infecter.infectionStage;
      var infection = options.infection;
      var infectionStages = infection.stages;
      var infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
      var infectionRgb = Utils_1.ColorUtils.colorToRgb(infectionColor);
      var fColor = twinkling && twinkleRgb !== undefined ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : pfColor ? Utils_1.ColorUtils.hslToRgb(pfColor) : undefined;
      var sColor = twinkling && twinkleRgb !== undefined ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : psColor ? Utils_1.ColorUtils.hslToRgb(psColor) : undefined;
      var fillColorValue = fColor !== undefined ? Utils_1.ColorUtils.getStyleFromRgb(fColor, opacity) : undefined;

      if (!this.context || !fillColorValue && !sColor) {
        return;
      }

      var strokeColorValue = sColor !== undefined ? Utils_1.ColorUtils.getStyleFromRgb(sColor, (_d = particle.stroke.opacity) !== null && _d !== void 0 ? _d : opacity) : fillColorValue;
      this.drawParticleLinks(particle);

      if (radius > 0) {
        Utils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, fillColorValue, strokeColorValue, options.backgroundMask.enable, options.backgroundMask.composite, radius, opacity, particle.particlesOptions.shadow);
      }
    }
  }, {
    key: "drawParticleLinks",
    value: function drawParticleLinks(particle) {
      var _this = this;

      if (!this.context) {
        return;
      }

      var container = this.container;
      var particles = container.particles;
      var pOptions = particle.particlesOptions;

      if (particle.links.length > 0) {
        this.context.save();
        var p1Links = particle.links.filter(function (l) {
          var linkFreq = container.particles.getLinkFrequency(particle, l.destination);
          return linkFreq <= pOptions.links.frequency;
        });

        var _iterator2 = _createForOfIteratorHelper(p1Links),
            _step2;

        try {
          var _loop = function _loop() {
            var link = _step2.value;
            var p2 = link.destination;

            if (pOptions.links.triangles.enable) {
              var links = p1Links.map(function (l) {
                return l.destination;
              });
              var vertices = p2.links.filter(function (t) {
                var linkFreq = container.particles.getLinkFrequency(p2, t.destination);
                return linkFreq <= p2.particlesOptions.links.frequency && links.indexOf(t.destination) >= 0;
              });

              if (vertices.length) {
                var _iterator3 = _createForOfIteratorHelper(vertices),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var vertex = _step3.value;
                    var p3 = vertex.destination;
                    var triangleFreq = particles.getTriangleFrequency(particle, p2, p3);

                    if (triangleFreq > pOptions.links.triangles.frequency) {
                      continue;
                    }

                    _this.drawLinkTriangle(particle, link, vertex);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            }

            if (link.opacity > 0 && container.retina.linksWidth > 0) {
              _this.drawLinkLine(particle, link);
            }
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.context.restore();
      }
    }
  }, {
    key: "drawPlugin",
    value: function drawPlugin(plugin, delta) {
      if (!this.context) {
        return;
      }

      Utils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    }
  }, {
    key: "drawLight",
    value: function drawLight(mousePos) {
      if (!this.context) {
        return;
      }

      Utils_1.CanvasUtils.drawLight(this.container, this.context, mousePos);
    }
  }, {
    key: "paintBase",
    value: function paintBase(baseColor) {
      if (!this.context) {
        return;
      }

      Utils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
    }
  }, {
    key: "lineStyle",
    value: function lineStyle(p1, p2) {
      var options = this.container.options;
      var connectOptions = options.interactivity.modes.connect;

      if (this.context) {
        return Utils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.links.opacity);
      }
    }
  }, {
    key: "initBackground",
    value: function initBackground() {
      var options = this.container.options;
      var background = options.background;
      var element = this.element;

      if (!element) {
        return;
      }

      var elementStyle = element.style;

      if (background.color) {
        var color = Utils_1.ColorUtils.colorToRgb(background.color);

        if (color) {
          elementStyle.backgroundColor = Utils_1.ColorUtils.getStyleFromRgb(color, background.opacity);
        }
      }

      if (background.image) {
        elementStyle.backgroundImage = background.image;
      }

      if (background.position) {
        elementStyle.backgroundPosition = background.position;
      }

      if (background.repeat) {
        elementStyle.backgroundRepeat = background.repeat;
      }

      if (background.size) {
        elementStyle.backgroundSize = background.size;
      }
    }
  }]);

  return Canvas;
}();

exports.Canvas = Canvas;

/***/ }),

/***/ "yCRH":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Life/Life.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Life = void 0;

var LifeDelay_1 = __webpack_require__(/*! ./LifeDelay */ "i4u4");

var LifeDuration_1 = __webpack_require__(/*! ./LifeDuration */ "Rmgd");

var Life = /*#__PURE__*/function () {
  function Life() {
    _classCallCheck(this, Life);

    this.count = 0;
    this.delay = new LifeDelay_1.LifeDelay();
    this.duration = new LifeDuration_1.LifeDuration();
  }

  _createClass(Life, [{
    key: "load",
    value: function load(data) {
      if (data === undefined) {
        return;
      }

      if (data.count !== undefined) {
        this.count = data.count;
      }

      this.delay.load(data.delay);
      this.duration.load(data.duration);
    }
  }]);

  return Life;
}();

exports.Life = Life;

/***/ }),

/***/ "yEg2":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineDrawer = void 0;

var LineDrawer = /*#__PURE__*/function () {
  function LineDrawer() {
    _classCallCheck(this, LineDrawer);
  }

  _createClass(LineDrawer, [{
    key: "getSidesCount",
    value: function getSidesCount() {
      return 1;
    }
  }, {
    key: "draw",
    value: function draw(context, particle, radius) {
      context.moveTo(0, -radius / 2);
      context.lineTo(0, radius / 2);
    }
  }]);

  return LineDrawer;
}();

exports.LineDrawer = LineDrawer;

/***/ }),

/***/ "yIki":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/OutMode.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutMode = void 0;
var OutMode;

(function (OutMode) {
  OutMode["bounce"] = "bounce";
  OutMode["bounceHorizontal"] = "bounce-horizontal";
  OutMode["bounceVertical"] = "bounce-vertical";
  OutMode["none"] = "none";
  OutMode["out"] = "out";
  OutMode["destroy"] = "destroy";
})(OutMode = exports.OutMode || (exports.OutMode = {}));

/***/ }),

/***/ "z01/":
/*!********************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "z6mI":
/*!***********************************************!*\
  !*** ./node_modules/tsparticles/dist/main.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _inherits = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "2MUX");

var _createSuper = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createSuper */ "CS2o");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = void 0;

var main_slim_1 = __webpack_require__(/*! ./main.slim */ "XIwB");

var AbsorbersPlugin_1 = __webpack_require__(/*! ./Plugins/Absorbers/AbsorbersPlugin */ "Rxhr");

var EmittersPlugin_1 = __webpack_require__(/*! ./Plugins/Emitters/EmittersPlugin */ "pPzP");

var PolygonMaskPlugin_1 = __webpack_require__(/*! ./Plugins/PolygonMask/PolygonMaskPlugin */ "6a9T");

var Main = /*#__PURE__*/function (_main_slim_1$MainSlim) {
  _inherits(Main, _main_slim_1$MainSlim);

  var _super = _createSuper(Main);

  function Main() {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this);

    _this.addPlugin(AbsorbersPlugin_1.AbsorbersPlugin);

    _this.addPlugin(EmittersPlugin_1.EmittersPlugin);

    _this.addPlugin(PolygonMaskPlugin_1.PolygonMaskPlugin);

    return _this;
  }

  return Main;
}(main_slim_1.MainSlim);

exports.Main = Main;

/***/ }),

/***/ "zTwn":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/AnimationStatus.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationStatus = void 0;
var AnimationStatus;

(function (AnimationStatus) {
  AnimationStatus[AnimationStatus["increasing"] = 0] = "increasing";
  AnimationStatus[AnimationStatus["decreasing"] = 1] = "decreasing";
})(AnimationStatus = exports.AnimationStatus || (exports.AnimationStatus = {}));

/***/ }),

/***/ "za7v":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/Bounce.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "xbqb");

var _createClass = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "Lw8S");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bounce = void 0;

var BounceFactor_1 = __webpack_require__(/*! ./BounceFactor */ "iuDB");

var Bounce = /*#__PURE__*/function () {
  function Bounce() {
    _classCallCheck(this, Bounce);

    this.horizontal = new BounceFactor_1.BounceFactor();
    this.vertical = new BounceFactor_1.BounceFactor();
  }

  _createClass(Bounce, [{
    key: "load",
    value: function load(data) {
      if (!data) {
        return;
      }

      this.horizontal.load(data.horizontal);
      this.vertical.load(data.vertical);
    }
  }]);

  return Bounce;
}();

exports.Bounce = Bounce;

/***/ })

}]);