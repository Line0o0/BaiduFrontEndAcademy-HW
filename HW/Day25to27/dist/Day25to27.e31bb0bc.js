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
})({"index.js":[function(require,module,exports) {
function format(date) {
  //传进来一个Date对象
  var year = date.getFullYear(),
      month = checkTime(date.getMonth() + 1),
      day = checkTime(date.getDate()),
      hour = checkTime(date.getHours()),
      minute = checkTime(date.getMinutes()),
      second = checkTime(date.getSeconds()),
      weekday = getWeekDay(date.getDay());
  return '' + year + '年' + month + '月' + day + '日 ' + weekday + ' ' + hour + ':' + minute + ':' + second;
}

function checkTime(n) {
  if (n < 10) return '0' + n;
  return n + ''; //一律转换成字符串
}

function getWeekDay(n) {
  var week = ['日', '一', '二', '三', '四', '五', '六'];
  return '星期' + week[n];
}

function refreshTime() {
  var text = format(new Date());
  var ele = document.getElementById('time');
  ele.innerText = text;
}

refreshTime(); //让初次显示不需要等250ms

setInterval(refreshTime, 250);
var options = document.getElementById('options'),
    yearEle = document.getElementById("year-select"),
    monthEle = document.getElementById("month-select"),
    dayEle = document.getElementById("day-select"),
    hourEle = document.getElementById("hour-select"),
    minuteEle = document.getElementById("minute-select"),
    secondEle = document.getElementById("second-select"),
    changeText = document.getElementById("changeText"),
    selected = document.getElementById('selected'),
    toNow = document.getElementById('toNow'),
    dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 29];

window.onload = function () {
  addOptionList(2000, 2040, yearEle);

  for (var i = 1; i <= 12; i++) {
    var option = this.document.createElement("option");
    option.value = i - 1; //value和index统一 

    option.innerText = i;
    monthEle.appendChild(option);
  }

  addOptionList(1, 31, dayEle);
  addOptionList(1, 24, hourEle);
  addOptionList(0, 59, minuteEle);
  addOptionList(0, 59, secondEle);
};

function addOptionList(start, end, element) {
  for (var i = start; i <= end; i++) {
    var option = this.document.createElement("option");
    option.value = i;
    option.innerText = i;
    element.appendChild(option);
  }
}

function handleSelect(e) {
  var year = yearEle.value,
      monthIdx = monthEle.value,
      //value的值就是index
  day = dayEle.value,
      hour = hourEle.value,
      minute = minuteEle.value,
      second = secondEle.value,
      selectedDate = new Date(year, monthIdx, day, hour, minute, second),
      msDiff = new Date() - selectedDate;
  selected.innerText = format(selectedDate);

  if (selectedDate.getTime() >= new Date().getTime()) {
    changeText.innerText = "还有";
    toNow.innerText = formatDiff(-msDiff);
  } else {
    changeText.innerText = "已经过去";
    toNow.innerText = formatDiff(msDiff);
  }

  if (e.target.id === "month-select" || e.target.id === "year-select") {
    if (yearEle.value % 4 === 0 && monthEle.value == 1) {
      dayEle.innerHTML = ""; //先将子元素删掉再加

      addOptionList(1, dayList[12], dayEle);
    } else if (yearEle.value % 4 !== 0 && monthEle.value == 1) {
      dayEle.innerHTML = "";
      addOptionList(1, dayList[1], dayEle);
    } else if (e.target.id === "month-select") {
      dayEle.innerHTML = "";
      addOptionList(1, dayList[monthEle.value], dayEle);
    } //剩下的只改了年没有改月的就不需要修改了

  }
}

function formatDiff(diff) {
  diff /= 1000;
  var dayDiff = Math.floor(diff / 86400);
  diff -= dayDiff * 86400;
  var hourDiff = Math.floor(diff / 3600);
  diff -= hourDiff * 3600;
  var minuteDiff = Math.floor(diff / 60),
      secondDiff = Math.round(diff - minuteDiff * 60);
  return dayDiff + '天' + hourDiff + '小时' + minuteDiff + '分' + secondDiff + '秒';
}

options.addEventListener('change', handleSelect);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13626" + '/');

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
},{}]},{},["../../../../Javascript/node_global/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Day25to27.e31bb0bc.js.map