// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"chart.js":[function(require,module,exports) {
// chart sample data
var arrVisitors = new Array();
arrVisitors[0] = "2007, 750";
arrVisitors[1] = "2008, 425";
arrVisitors[2] = "2009, 960";
arrVisitors[3] = "2010, 700";
arrVisitors[4] = "2011, 800";
arrVisitors[5] = "2012, 975";
arrVisitors[6] = "2013, 375";
arrVisitors[7] = "2014, 775";
var canvas;
var context; // chart properties

var cWidth, cHeight, cMargin, cSpace;
var cMarginSpace, cMarginHeight; // bar properties

var bWidth, bMargin, totalBars, maxDataValue;
var bWidthMargin; // bar animation

var ctr, numctr, speed; // axis property

var totLabelsOnYAxis; // barchart constructor

function barChart() {
  canvas = document.getElementById('bchart');

  if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
  }

  chartSettings();
  drawAxisLabelMarkers();
  drawChartWithAnimation();
} // initialize the chart and bar values


function chartSettings() {
  // chart properties
  cMargin = 25;
  cSpace = 60;
  cHeight = canvas.height - 2 * cMargin - cSpace;
  cWidth = canvas.width - 2 * cMargin - cSpace;
  cMarginSpace = cMargin + cSpace;
  cMarginHeight = cMargin + cHeight; // bar properties

  bMargin = 15;
  totalBars = arrVisitors.length;
  bWidth = cWidth / totalBars - bMargin; // find maximum value to plot on chart

  maxDataValue = 0;

  for (var i = 0; i < totalBars; i++) {
    var arrVal = arrVisitors[i].split(",");
    var barVal = parseInt(arrVal[1]);
    if (parseInt(barVal) > parseInt(maxDataValue)) maxDataValue = barVal;
  }

  totLabelsOnYAxis = 10;
  context.font = "10pt Garamond"; // initialize Animation variables

  ctr = 0;
  numctr = 100;
  speed = 10;
} // draw chart axis, labels and markers


function drawAxisLabelMarkers() {
  context.lineWidth = "2.0"; // draw y axis

  drawAxis(cMarginSpace, cMarginHeight, cMarginSpace, cMargin); // draw x axis

  drawAxis(cMarginSpace, cMarginHeight, cMarginSpace + cWidth, cMarginHeight);
  context.lineWidth = "1.0";
  drawMarkers();
} // draw X and Y axis


function drawAxis(x, y, X, Y) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(X, Y);
  context.closePath();
  context.stroke();
} // draw chart markers on X and Y Axis


function drawMarkers() {
  var numMarkers = parseInt(maxDataValue / totLabelsOnYAxis);
  context.textAlign = "right";
  context.fillStyle = "#000";
  ; // Y Axis

  for (var i = 0; i <= totLabelsOnYAxis; i++) {
    markerVal = i * numMarkers;
    markerValHt = i * numMarkers * cHeight;
    var xMarkers = cMarginSpace - 5;
    var yMarkers = cMarginHeight - markerValHt / maxDataValue;
    context.fillText(markerVal, xMarkers, yMarkers, cSpace);
  } // X Axis


  context.textAlign = 'center';

  for (var i = 0; i < totalBars; i++) {
    arrval = arrVisitors[i].split(",");
    name = arrval[0];
    markerXPos = cMarginSpace + bMargin + i * (bWidth + bMargin) + bWidth / 2;
    markerYPos = cMarginHeight + 10;
    context.fillText(name, markerXPos, markerYPos, bWidth);
  }

  context.save(); // Add Y Axis title

  context.translate(cMargin + 10, cHeight / 2);
  context.rotate(Math.PI * -90 / 180);
  context.fillText('Visitors in Thousands', 0, 0);
  context.restore(); // Add X Axis Title

  context.fillText('Year Wise', cMarginSpace + cWidth / 2, cMarginHeight + 30);
}

function drawChartWithAnimation() {
  // Loop through the total bars and draw
  for (var i = 0; i < totalBars; i++) {
    var arrVal = arrVisitors[i].split(",");
    bVal = parseInt(arrVal[1]);
    bHt = bVal * cHeight / maxDataValue / numctr * ctr;
    bX = cMarginSpace + i * (bWidth + bMargin) + bMargin;
    bY = cMarginHeight - bHt - 2;
    drawRectangle(bX, bY, bWidth, bHt, true);
  } // timeout runs and checks if bars have reached
  // the desired height; if not, keep growing


  if (ctr < numctr) {
    ctr = ctr + 1;
    setTimeout(arguments.callee, speed);
  }
}

function drawRectangle(x, y, w, h, fill) {
  context.beginPath();
  context.rect(x, y, w, h);
  context.closePath();
  context.stroke();

  if (fill) {
    var gradient = context.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, 'rgba(67,203,36,.15)');
    context.fillStyle = gradient;
    context.strokeStyle = gradient;
    context.fill();
  }
}

body = document.getElementsByTagName('body');
body.addEventListener('load', barChart);
},{}],"../../../../Javascript/node_global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12614" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Javascript/node_global/node_modules/parcel/src/builtins/hmr-runtime.js","chart.js"], null)
//# sourceMappingURL=/chart.776f2112.js.map