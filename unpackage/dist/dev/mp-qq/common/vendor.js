(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-qq/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'getBeacons',
// 'onBeaconUpdate',
// 'onBeaconServiceChange',
// 'addPhoneContact',
// 'getHCEState',
// 'startHCE',
// 'stopHCE',
// 'onHCEMessage',
// 'sendHCEMessage',
// 'startWifi',
// 'stopWifi',
// 'connectWifi',
// 'getWifiList',
// 'onGetWifiList',
// 'setWifiList',
// 'onWifiConnected',
// 'getConnectedWifi',
// 'setTopBarText',
// 'getPhoneNumber',
// 'chooseAddress',
// 'addCard',
// 'openCard',
// 'getWeRunData',
// 'launchApp',
// 'chooseInvoiceTitle',
// 'checkIsSupportSoterAuthentication',
// 'startSoterAuthentication',
// 'checkIsSoterEnrolledInDevice',
// 'vibrate',
// 'loadFontFace',
// 'getExtConfig',
// 'getExtConfigSync'
];
var canIUses = [
'scanCode',
'startAccelerometer',
'stopAccelerometer',
'onAccelerometerChange',
'startCompass',
'onCompassChange',
'setScreenBrightness',
'getScreenBrightness',
'setKeepScreenOn',
'onUserCaptureScreen',
'vibrateLong',
'vibrateShort',
'createWorker',
'connectSocket',
'onSocketOpen',
'onSocketError',
'sendSocketMessage',
'onSocketMessage',
'closeSocket',
'onSocketClose',
'openDocument',
'updateShareMenu',
'getShareInfo',
'createLivePlayerContext',
'createLivePusherContext',
'setNavigationBarColor',
'onMemoryWarning',
'onNetworkStatusChange',
'reportMonitor',
'getLogManager',
'reportAnalytics'];


var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("QQ\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("QQ\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['qq'],
  share: ['qq'],
  payment: ['qqpay'],
  push: ['qq'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-qq";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function parseApp$1(vm) {
  return parseApp(vm);
}

function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parseComponent$1(vueComponentOptions) {
  return parseComponent(vueComponentOptions);
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent$1(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parsePage$1(vuePageOptions) {
  return parsePage(vuePageOptions);
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage$1(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-qq" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue ) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!***************************************************************!*\
  !*** F:/MJZWorkSpace/HbuilderXProject/MadHeroUtil/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRDovSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC1xcS9kaXN0L2luZGV4LmpzIiwidW5pLWFwcDovLy9EOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL21wLXZ1ZS9kaXN0L21wLnJ1bnRpbWUuZXNtLmpzIiwidW5pLWFwcDovLy9EOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwidW5pLWFwcDovLy9EOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJuYW1lcyI6WyJfdG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImhhc093blByb3BlcnR5IiwiaXNGbiIsImZuIiwiaXNTdHIiLCJzdHIiLCJpc1BsYWluT2JqZWN0Iiwib2JqIiwiY2FsbCIsImhhc093biIsImtleSIsIm5vb3AiLCJjYWNoZWQiLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwiaGl0IiwiY2FtZWxpemVSRSIsImNhbWVsaXplIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJIT09LUyIsImdsb2JhbEludGVyY2VwdG9ycyIsInNjb3BlZEludGVyY2VwdG9ycyIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwicmVzIiwiY29uY2F0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVkdXBlSG9va3MiLCJob29rcyIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUhvb2siLCJob29rIiwiaW5kZXgiLCJzcGxpY2UiLCJtZXJnZUludGVyY2VwdG9ySG9vayIsImludGVyY2VwdG9yIiwib3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJyZW1vdmVJbnRlcmNlcHRvckhvb2siLCJhZGRJbnRlcmNlcHRvciIsIm1ldGhvZCIsInJlbW92ZUludGVyY2VwdG9yIiwid3JhcHBlckhvb2siLCJkYXRhIiwiaXNQcm9taXNlIiwidGhlbiIsInF1ZXVlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsbGJhY2siLCJ3cmFwcGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJuYW1lIiwib2xkQ2FsbGJhY2siLCJjYWxsYmFja0ludGVyY2VwdG9yIiwid3JhcHBlclJldHVyblZhbHVlIiwicmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZUhvb2tzIiwiZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyIsInNsaWNlIiwic2NvcGVkSW50ZXJjZXB0b3IiLCJpbnZva2VBcGkiLCJhcGkiLCJwYXJhbXMiLCJpbnZva2UiLCJwcm9taXNlSW50ZXJjZXB0b3IiLCJjYXRjaCIsIlNZTkNfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkUiLCJDT05URVhUX0FQSV9SRV9FWEMiLCJBU1lOQ19BUEkiLCJDQUxMQkFDS19BUElfUkUiLCJpc0NvbnRleHRBcGkiLCJ0ZXN0IiwiaXNTeW5jQXBpIiwiaXNDYWxsYmFja0FwaSIsImhhbmRsZVByb21pc2UiLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInJlamVjdCIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJwaXhlbFJhdGlvIiwid2luZG93V2lkdGgiLCJ1cHgycHgiLCJudW1iZXIiLCJuZXdEZXZpY2VXaWR0aCIsIk51bWJlciIsInJlc3VsdCIsIk1hdGgiLCJmbG9vciIsImludGVyY2VwdG9ycyIsImJhc2VBcGkiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJwcmV2aWV3SW1hZ2UiLCJhcmdzIiwiZnJvbUFyZ3MiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnQiLCJpc05hTiIsInVybHMiLCJsZW4iLCJmaWx0ZXIiLCJpdGVtIiwiaW5kaWNhdG9yIiwibG9vcCIsInByb3RvY29scyIsInRvZG9zIiwiY2FuSVVzZXMiLCJDQUxMQkFDS1MiLCJwcm9jZXNzQ2FsbGJhY2siLCJtZXRob2ROYW1lIiwicHJvY2Vzc1JldHVyblZhbHVlIiwicHJvY2Vzc0FyZ3MiLCJhcmdzT3B0aW9uIiwia2VlcEZyb21BcmdzIiwidG9BcmdzIiwia2V5T3B0aW9uIiwiY29uc29sZSIsIndhcm4iLCJrZWVwUmV0dXJuVmFsdWUiLCJ3cmFwcGVyIiwicHJvdG9jb2wiLCJlcnJvciIsImFyZzEiLCJhcmcyIiwiYXBwbHkiLCJ0b2RvQXBpcyIsIlRPRE9TIiwiY3JlYXRlVG9kb0FwaSIsInRvZG9BcGkiLCJlcnJNc2ciLCJwcm92aWRlcnMiLCJvYXV0aCIsInNoYXJlIiwicGF5bWVudCIsImdldFByb3ZpZGVyIiwic2VydmljZSIsInByb3ZpZGVyIiwiZXh0cmFBcGkiLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCJWdWUiLCJjdHgiLCIkb24iLCJhcmd1bWVudHMiLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImV2ZW50QXBpIiwiTVBQYWdlIiwiUGFnZSIsIk1QQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiY3VzdG9taXplUkUiLCJjdXN0b21pemUiLCJpbml0VHJpZ2dlckV2ZW50IiwibXBJbnN0YW5jZSIsIm9sZFRyaWdnZXJFdmVudCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwiaW5pdEhvb2siLCJvbGRIb29rIiwiUEFHRV9FVkVOVF9IT09LUyIsImluaXRNb2NrcyIsInZtIiwibW9ja3MiLCIkbXAiLCJtcFR5cGUiLCJtb2NrIiwiaGFzSG9vayIsInZ1ZU9wdGlvbnMiLCJkZWZhdWx0IiwiZXh0ZW5kT3B0aW9ucyIsInN1cGVyIiwibWl4aW5zIiwiZmluZCIsIm1peGluIiwiaW5pdEhvb2tzIiwibXBPcHRpb25zIiwiJHZtIiwiX19jYWxsX2hvb2siLCJpbml0VnVlQ29tcG9uZW50IiwiVnVlQ29tcG9uZW50IiwiZXh0ZW5kIiwiaW5pdFNsb3RzIiwidnVlU2xvdHMiLCIkc2xvdHMiLCJzbG90TmFtZSIsIiRzY29wZWRTbG90cyIsImluaXRWdWVJZHMiLCJ2dWVJZHMiLCJzcGxpdCIsIl8kdnVlSWQiLCJfJHZ1ZVBpZCIsImluaXREYXRhIiwiY29udGV4dCIsIm1ldGhvZHMiLCJlIiwicHJvY2VzcyIsIlZVRV9BUFBfREVCVUciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfX2xpZmVjeWNsZV9ob29rc19fIiwiUFJPUF9UWVBFUyIsIlN0cmluZyIsIkJvb2xlYW4iLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwibmV3VmFsIiwib2xkVmFsIiwiaW5pdEJlaGF2aW9ycyIsImluaXRCZWhhdmlvciIsInZ1ZUJlaGF2aW9ycyIsImJlaGF2aW9ycyIsInZ1ZUV4dGVuZHMiLCJleHRlbmRzIiwidnVlTWl4aW5zIiwidnVlUHJvcHMiLCJwcm9wcyIsImJlaGF2aW9yIiwidHlwZSIsIkRhdGUiLCJwcm9wZXJ0aWVzIiwiaW5pdFByb3BlcnRpZXMiLCJ2dWVNaXhpbiIsInBhcnNlUHJvcFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlIiwiaXNCZWhhdmlvciIsInZ1ZUlkIiwic2V0RGF0YSIsIm9wdHMiLCJ3cmFwcGVyJDEiLCJtcCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGV0YWlsIiwibWFya2VySWQiLCJnZXRFeHRyYVZhbHVlIiwiZGF0YVBhdGhzQXJyYXkiLCJkYXRhUGF0aEFycmF5IiwiZGF0YVBhdGgiLCJwcm9wUGF0aCIsInZhbHVlUGF0aCIsInZGb3IiLCJfX2dldF92YWx1ZSIsImlzSW50ZWdlciIsInZGb3JJdGVtIiwidkZvcktleSIsInByb2Nlc3NFdmVudEV4dHJhIiwiZXh0cmEiLCJleHRyYU9iaiIsImdldE9iakJ5QXJyYXkiLCJhcnIiLCJlbGVtZW50IiwicHJvY2Vzc0V2ZW50QXJncyIsImlzQ3VzdG9tIiwiaXNDdXN0b21NUEV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21UeXBlIiwiX19hcmdzX18iLCJyZXQiLCJhcmciLCJPTkNFIiwiQ1VTVE9NIiwiaXNNYXRjaEV2ZW50VHlwZSIsImV2ZW50VHlwZSIsIm9wdFR5cGUiLCJoYW5kbGVFdmVudCIsImV2ZW50T3B0cyIsImV2ZW50T3B0IiwiZXZlbnRzQXJyYXkiLCJjaGFyQXQiLCJpc09uY2UiLCJldmVudEFycmF5IiwiaGFuZGxlckN0eCIsIiRvcHRpb25zIiwiZ2VuZXJpYyIsIiRwYXJlbnQiLCJoYW5kbGVyIiwiRXJyb3IiLCJvbmNlIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsImJlZm9yZUNyZWF0ZSIsIiRzY29wZSIsImFwcE9wdGlvbnMiLCJvbkxhdW5jaCIsImNhbklVc2UiLCJhcHAiLCJnbG9iYWxEYXRhIiwiX2lzTW91bnRlZCIsImZpbmRWbUJ5VnVlSWQiLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwicGFyZW50Vm0iLCJCZWhhdmlvciIsImlzUGFnZSIsInJvdXRlIiwiaW5pdFJlbGF0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCIkcmVmcyIsImNvbXBvbmVudHMiLCJzZWxlY3RBbGxDb21wb25lbnRzIiwiY29tcG9uZW50IiwicmVmIiwiZm9yQ29tcG9uZW50cyIsImhhbmRsZUxpbmsiLCJwYXJlbnQiLCJwYXJzZUFwcCIsInBhcnNlQXBwJDEiLCJjcmVhdGVBcHAiLCJBcHAiLCJwYXJzZUJhc2VDb21wb25lbnQiLCJ2dWVDb21wb25lbnRPcHRpb25zIiwibXVsdGlwbGVTbG90cyIsImFkZEdsb2JhbENsYXNzIiwiY29tcG9uZW50T3B0aW9ucyIsIl9fZmlsZSIsImxpZmV0aW1lcyIsImF0dGFjaGVkIiwicHJvcHNEYXRhIiwiJG1vdW50IiwicmVhZHkiLCJkZXRhY2hlZCIsIiRkZXN0cm95IiwicGFnZUxpZmV0aW1lcyIsInNob3ciLCJoaWRlIiwicmVzaXplIiwic2l6ZSIsIl9fbCIsIl9fZSIsImV4dGVybmFsQ2xhc3NlcyIsInd4c0NhbGxNZXRob2RzIiwiY2FsbE1ldGhvZCIsInBhcnNlQ29tcG9uZW50IiwicGFyc2VDb21wb25lbnQkMSIsImhvb2tzJDEiLCJwYXJzZUJhc2VQYWdlIiwidnVlUGFnZU9wdGlvbnMiLCJwYWdlT3B0aW9ucyIsIm9uTG9hZCIsInF1ZXJ5IiwicGFyc2VQYWdlIiwicGFyc2VQYWdlJDEiLCJjcmVhdGVQYWdlIiwiY3JlYXRlQ29tcG9uZW50IiwiY2FuSVVzZUFwaSIsImFwaU5hbWUiLCJ1bmkiLCJQcm94eSIsInNldCIsInVuaSQxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OytMQUFBLHFFOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFuQztBQUNBLElBQU1DLGNBQWMsR0FBR0gsTUFBTSxDQUFDQyxTQUFQLENBQWlCRSxjQUF4Qzs7QUFFQSxTQUFTQyxJQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDakIsU0FBTyxPQUFPQSxFQUFQLEtBQWMsVUFBckI7QUFDRDs7QUFFRCxTQUFTQyxLQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQixTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNEOztBQUVELFNBQVNDLGFBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQzNCLFNBQU9WLFNBQVMsQ0FBQ1csSUFBVixDQUFlRCxHQUFmLE1BQXdCLGlCQUEvQjtBQUNEOztBQUVELFNBQVNFLE1BQVQsQ0FBaUJGLEdBQWpCLEVB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRCxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlDQUFpQyxFQUFFO0FBQ3JGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFvQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFvQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHO0FBQ1I7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsdUNBQXVDLHdCQUF3QixFQUFFO0FBQ2pFLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CLEVBQUU7QUFDckQ7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsU0FBUyxxQkFBcUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVCQUF1QjtBQUN6RCxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0Esa0JBQWtCO0FBQ2xCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFvQjtBQUN0QztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixPQUFPLFVBQVUsSUFBcUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxHQUFHLFVBQVUsSUFBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixXQUFXO0FBQ1g7QUFDQSxHQUFHLFVBQVUsSUFBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFFUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLHFDQUFxQyxFQUFFO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MseUNBQXlDLEVBQUU7QUFDL0U7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNEQUFzRCxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkUsY0FBYyw2QkFBNkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRSxjQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sTUFBTSxFQUVOO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLElBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEMsdUNBQXVDO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLHNDQUFzQztBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNELEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLEtBQXFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUNBQXFDLGdFQUFnRTtBQUNyRztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNEJBQTRCLCtCQUErQjtBQUMzRCw0QkFBNEIsK0JBQStCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0Msa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUZBQXVGO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0JBQStCO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQkFBb0Isb0JBQW9CO0FBQ3hDLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0EsNkNBQTZDLDRDQUE0Qzs7QUFFekY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxNQUFNLEVBR047QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssMkNBQTJDLDhCQUE4QixFQUFFOztBQUVoRjtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0Esb0JBQW9CLFNBQUk7QUFDeEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUssTUFBTSxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0Esc0NBQXNDO0FBQ3RDLDhDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyw0QkFBNEIsRUFBRTtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUMsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QscURBQXFELEVBQUUsU0FBUztBQUN0SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFZSxrRUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7QUN6NExuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi92ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblxyXG5jb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG5mdW5jdGlvbiBpc0ZuIChmbikge1xyXG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHIgKHN0cikge1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcclxuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xyXG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBub29wICgpIHt9XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FjaGVkIChmbikge1xyXG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xyXG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcclxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xyXG5jb25zdCBjYW1lbGl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpXHJcbn0pO1xyXG5cclxuY29uc3QgSE9PS1MgPSBbXHJcbiAgJ2ludm9rZScsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdmYWlsJyxcclxuICAnY29tcGxldGUnLFxyXG4gICdyZXR1cm5WYWx1ZSdcclxuXTtcclxuXHJcbmNvbnN0IGdsb2JhbEludGVyY2VwdG9ycyA9IHt9O1xyXG5jb25zdCBzY29wZWRJbnRlcmNlcHRvcnMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIG1lcmdlSG9vayAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xyXG4gIGNvbnN0IHJlcyA9IGNoaWxkVmFsXHJcbiAgICA/IHBhcmVudFZhbFxyXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXHJcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcclxuICAgICAgICA/IGNoaWxkVmFsIDogW2NoaWxkVmFsXVxyXG4gICAgOiBwYXJlbnRWYWw7XHJcbiAgcmV0dXJuIHJlc1xyXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXHJcbiAgICA6IHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcclxuICBjb25zdCByZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xyXG4gICAgICByZXMucHVzaChob29rc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSG9vayAoaG9va3MsIGhvb2spIHtcclxuICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoaG9vayk7XHJcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XHJcbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xyXG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IG1lcmdlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XHJcbiAgaWYgKCFpbnRlcmNlcHRvciB8fCAhb3B0aW9uKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xyXG4gICAgICByZW1vdmVIb29rKGludGVyY2VwdG9yW2hvb2tdLCBvcHRpb25baG9va10pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbnRlcmNlcHRvciAobWV0aG9kLCBvcHRpb24pIHtcclxuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycgJiYgaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XHJcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSB8fCAoc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gPSB7fSksIG9wdGlvbik7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcclxuICAgIG1lcmdlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xyXG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xyXG4gICAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0sIG9wdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcclxuICAgIHJlbW92ZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVySG9vayAoaG9vaykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIGhvb2soZGF0YSkgfHwgZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcclxuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWV1ZSAoaG9va3MsIGRhdGEpIHtcclxuICBsZXQgcHJvbWlzZSA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGhvb2sgPSBob29rc1tpXTtcclxuICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnRoZW4od3JhcHBlckhvb2soaG9vaykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzID0gaG9vayhkYXRhKTtcclxuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XHJcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRoZW4gKCkge31cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHByb21pc2UgfHwge1xyXG4gICAgdGhlbiAoY2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyT3B0aW9ucyAoaW50ZXJjZXB0b3IsIG9wdGlvbnMgPSB7fSkge1xyXG4gIFsnc3VjY2VzcycsICdmYWlsJywgJ2NvbXBsZXRlJ10uZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGludGVyY2VwdG9yW25hbWVdKSkge1xyXG4gICAgICBjb25zdCBvbGRDYWxsYmFjayA9IG9wdGlvbnNbbmFtZV07XHJcbiAgICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiBjYWxsYmFja0ludGVyY2VwdG9yIChyZXMpIHtcclxuICAgICAgICBxdWV1ZShpbnRlcmNlcHRvcltuYW1lXSwgcmVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xyXG4gICAgICAgICAgcmV0dXJuIGlzRm4ob2xkQ2FsbGJhY2spICYmIG9sZENhbGxiYWNrKHJlcykgfHwgcmVzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlclJldHVyblZhbHVlIChtZXRob2QsIHJldHVyblZhbHVlKSB7XHJcbiAgY29uc3QgcmV0dXJuVmFsdWVIb29rcyA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSkpIHtcclxuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5nbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBpbnRlcmNlcHRvciA9IHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gIGlmIChpbnRlcmNlcHRvciAmJiBBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLnJldHVyblZhbHVlKSkge1xyXG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmludGVyY2VwdG9yLnJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuVmFsdWVIb29rcy5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgcmV0dXJuVmFsdWUgPSBob29rKHJldHVyblZhbHVlKSB8fCByZXR1cm5WYWx1ZTtcclxuICB9KTtcclxuICByZXR1cm4gcmV0dXJuVmFsdWVcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyAobWV0aG9kKSB7XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIE9iamVjdC5rZXlzKGdsb2JhbEludGVyY2VwdG9ycykuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChob29rICE9PSAncmV0dXJuVmFsdWUnKSB7XHJcbiAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gZ2xvYmFsSW50ZXJjZXB0b3JzW2hvb2tdLnNsaWNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3Qgc2NvcGVkSW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICBpZiAoc2NvcGVkSW50ZXJjZXB0b3IpIHtcclxuICAgIE9iamVjdC5rZXlzKHNjb3BlZEludGVyY2VwdG9yKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgICBpZiAoaG9vayAhPT0gJ3JldHVyblZhbHVlJykge1xyXG4gICAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gKGludGVyY2VwdG9yW2hvb2tdIHx8IFtdKS5jb25jYXQoc2NvcGVkSW50ZXJjZXB0b3JbaG9va10pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGludGVyY2VwdG9yXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZUFwaSAobWV0aG9kLCBhcGksIG9wdGlvbnMsIC4uLnBhcmFtcykge1xyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyhtZXRob2QpO1xyXG4gIGlmIChpbnRlcmNlcHRvciAmJiBPYmplY3Qua2V5cyhpbnRlcmNlcHRvcikubGVuZ3RoKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5pbnZva2UpKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHF1ZXVlKGludGVyY2VwdG9yLmludm9rZSwgb3B0aW9ucyk7XHJcbiAgICAgIHJldHVybiByZXMudGhlbigob3B0aW9ucykgPT4ge1xyXG4gICAgICAgIHJldHVybiBhcGkod3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpLCAuLi5wYXJhbXMpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXBpKG9wdGlvbnMsIC4uLnBhcmFtcylcclxufVxyXG5cclxuY29uc3QgcHJvbWlzZUludGVyY2VwdG9yID0ge1xyXG4gIHJldHVyblZhbHVlIChyZXMpIHtcclxuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJldHVybiByZXNbMV1cclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIHJldHVybiByZXNbMF1cclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU1lOQ19BUElfUkUgPVxyXG4gIC9eXFwkfHNlbmROYXRpdmVFdmVudHxyZXN0b3JlR2xvYmFsfGdldEN1cnJlbnRTdWJOVnVlfGdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3R8XnJlcG9ydHxpbnRlcmNlcHRvcnN8SW50ZXJjZXB0b3IkfGdldFN1Yk5WdWVCeUlkfHJlcXVpcmVOYXRpdmVQbHVnaW58dXB4MnB4fGhpZGVLZXlib2FyZHxjYW5JVXNlfF5jcmVhdGV8U3luYyR8TWFuYWdlciR8YmFzZTY0VG9BcnJheUJ1ZmZlcnxhcnJheUJ1ZmZlclRvQmFzZTY0LztcclxuXHJcbmNvbnN0IENPTlRFWFRfQVBJX1JFID0gL15jcmVhdGV8TWFuYWdlciQvO1xyXG5cclxuLy8gQ29udGV4dOS+i+WkluaDheWGtVxyXG5jb25zdCBDT05URVhUX0FQSV9SRV9FWEMgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTtcclxuXHJcbi8vIOWQjOatpeS+i+WkluaDheWGtVxyXG5jb25zdCBBU1lOQ19BUEkgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTtcclxuXHJcbmNvbnN0IENBTExCQUNLX0FQSV9SRSA9IC9eb258Xm9mZi87XHJcblxyXG5mdW5jdGlvbiBpc0NvbnRleHRBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gQ09OVEVYVF9BUElfUkUudGVzdChuYW1lKSAmJiBDT05URVhUX0FQSV9SRV9FWEMuaW5kZXhPZihuYW1lKSA9PT0gLTFcclxufVxyXG5mdW5jdGlvbiBpc1N5bmNBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gU1lOQ19BUElfUkUudGVzdChuYW1lKSAmJiBBU1lOQ19BUEkuaW5kZXhPZihuYW1lKSA9PT0gLTFcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDYWxsYmFja0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBDQUxMQkFDS19BUElfUkUudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnb25QdXNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9taXNlIChwcm9taXNlKSB7XHJcbiAgcmV0dXJuIHByb21pc2UudGhlbihkYXRhID0+IHtcclxuICAgIHJldHVybiBbbnVsbCwgZGF0YV1cclxuICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBbZXJyXSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkUHJvbWlzZSAobmFtZSkge1xyXG4gIGlmIChcclxuICAgIGlzQ29udGV4dEFwaShuYW1lKSB8fFxyXG4gICAgaXNTeW5jQXBpKG5hbWUpIHx8XHJcbiAgICBpc0NhbGxiYWNrQXBpKG5hbWUpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG5pZiAoIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcclxuICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiB0aGlzLnRoZW4oXHJcbiAgICAgIHZhbHVlID0+IHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcclxuICAgICAgcmVhc29uID0+IHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aHJvdyByZWFzb25cclxuICAgICAgfSlcclxuICAgIClcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9taXNpZnkgKG5hbWUsIGFwaSkge1xyXG4gIGlmICghc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgcmV0dXJuIGFwaVxyXG4gIH1cclxuICByZXR1cm4gZnVuY3Rpb24gcHJvbWlzZUFwaSAob3B0aW9ucyA9IHt9LCAuLi5wYXJhbXMpIHtcclxuICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgcmV0dXJuIHdyYXBwZXJSZXR1cm5WYWx1ZShuYW1lLCBpbnZva2VBcGkobmFtZSwgYXBpLCBvcHRpb25zLCAuLi5wYXJhbXMpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdyYXBwZXJSZXR1cm5WYWx1ZShuYW1lLCBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaW52b2tlQXBpKG5hbWUsIGFwaSwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgIH0pLCAuLi5wYXJhbXMpO1xyXG4gICAgfSkpKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRVBTID0gMWUtNDtcclxuY29uc3QgQkFTRV9ERVZJQ0VfV0lEVEggPSA3NTA7XHJcbmxldCBpc0lPUyA9IGZhbHNlO1xyXG5sZXQgZGV2aWNlV2lkdGggPSAwO1xyXG5sZXQgZGV2aWNlRFBSID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGV2aWNlV2lkdGggKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHBsYXRmb3JtLFxyXG4gICAgcGl4ZWxSYXRpbyxcclxuICAgIHdpbmRvd1dpZHRoXHJcbiAgfSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7IC8vIHVuaT0+d3ggcnVudGltZSDnvJbor5Hnm67moIfmmK8gdW5pIOWvueixoe+8jOWGhemDqOS4jeWFgeiuuOebtOaOpeS9v+eUqCB1bmlcclxuXHJcbiAgZGV2aWNlV2lkdGggPSB3aW5kb3dXaWR0aDtcclxuICBkZXZpY2VEUFIgPSBwaXhlbFJhdGlvO1xyXG4gIGlzSU9TID0gcGxhdGZvcm0gPT09ICdpb3MnO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHgycHggKG51bWJlciwgbmV3RGV2aWNlV2lkdGgpIHtcclxuICBpZiAoZGV2aWNlV2lkdGggPT09IDApIHtcclxuICAgIGNoZWNrRGV2aWNlV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xyXG4gIGlmIChudW1iZXIgPT09IDApIHtcclxuICAgIHJldHVybiAwXHJcbiAgfVxyXG4gIGxldCByZXN1bHQgPSAobnVtYmVyIC8gQkFTRV9ERVZJQ0VfV0lEVEgpICogKG5ld0RldmljZVdpZHRoIHx8IGRldmljZVdpZHRoKTtcclxuICBpZiAocmVzdWx0IDwgMCkge1xyXG4gICAgcmVzdWx0ID0gLXJlc3VsdDtcclxuICB9XHJcbiAgcmVzdWx0ID0gTWF0aC5mbG9vcihyZXN1bHQgKyBFUFMpO1xyXG4gIGlmIChyZXN1bHQgPT09IDApIHtcclxuICAgIGlmIChkZXZpY2VEUFIgPT09IDEgfHwgIWlzSU9TKSB7XHJcbiAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudW1iZXIgPCAwID8gLXJlc3VsdCA6IHJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBpbnRlcmNlcHRvcnMgPSB7XHJcbiAgcHJvbWlzZUludGVyY2VwdG9yXHJcbn07XHJcblxyXG52YXIgYmFzZUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgdXB4MnB4OiB1cHgycHgsXHJcbiAgYWRkSW50ZXJjZXB0b3I6IGFkZEludGVyY2VwdG9yLFxyXG4gIHJlbW92ZUludGVyY2VwdG9yOiByZW1vdmVJbnRlcmNlcHRvcixcclxuICBpbnRlcmNlcHRvcnM6IGludGVyY2VwdG9yc1xyXG59KTtcclxuXHJcbnZhciBwcmV2aWV3SW1hZ2UgPSB7XHJcbiAgYXJncyAoZnJvbUFyZ3MpIHtcclxuICAgIGxldCBjdXJyZW50SW5kZXggPSBwYXJzZUludChmcm9tQXJncy5jdXJyZW50KTtcclxuICAgIGlmIChpc05hTihjdXJyZW50SW5kZXgpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJscyA9IGZyb21BcmdzLnVybHM7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXJscykpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBsZW4gPSB1cmxzLmxlbmd0aDtcclxuICAgIGlmICghbGVuKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcclxuICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID49IGxlbikge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSBsZW4gLSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgZnJvbUFyZ3MuY3VycmVudCA9IHVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgZnJvbUFyZ3MudXJscyA9IHVybHMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtLCBpbmRleCkgPT4gaW5kZXggPCBjdXJyZW50SW5kZXggPyBpdGVtICE9PSB1cmxzW2N1cnJlbnRJbmRleF0gOiB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1swXTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJvdG9jb2xzID0ge1xyXG4gIHByZXZpZXdJbWFnZVxyXG59O1xyXG5jb25zdCB0b2RvcyA9IFtcclxuICAncHJlbG9hZFBhZ2UnLFxyXG4gICd1blByZWxvYWRQYWdlJyxcclxuICAnbG9hZFN1YlBhY2thZ2UnXHJcbiAgLy8gJ3N0YXJ0QmVhY29uRGlzY292ZXJ5JyxcclxuICAvLyAnc3RvcEJlYWNvbkRpc2NvdmVyeScsXHJcbiAgLy8gJ2dldEJlYWNvbnMnLFxyXG4gIC8vICdvbkJlYWNvblVwZGF0ZScsXHJcbiAgLy8gJ29uQmVhY29uU2VydmljZUNoYW5nZScsXHJcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXHJcbiAgLy8gJ2dldEhDRVN0YXRlJyxcclxuICAvLyAnc3RhcnRIQ0UnLFxyXG4gIC8vICdzdG9wSENFJyxcclxuICAvLyAnb25IQ0VNZXNzYWdlJyxcclxuICAvLyAnc2VuZEhDRU1lc3NhZ2UnLFxyXG4gIC8vICdzdGFydFdpZmknLFxyXG4gIC8vICdzdG9wV2lmaScsXHJcbiAgLy8gJ2Nvbm5lY3RXaWZpJyxcclxuICAvLyAnZ2V0V2lmaUxpc3QnLFxyXG4gIC8vICdvbkdldFdpZmlMaXN0JyxcclxuICAvLyAnc2V0V2lmaUxpc3QnLFxyXG4gIC8vICdvbldpZmlDb25uZWN0ZWQnLFxyXG4gIC8vICdnZXRDb25uZWN0ZWRXaWZpJyxcclxuICAvLyAnc2V0VG9wQmFyVGV4dCcsXHJcbiAgLy8gJ2dldFBob25lTnVtYmVyJyxcclxuICAvLyAnY2hvb3NlQWRkcmVzcycsXHJcbiAgLy8gJ2FkZENhcmQnLFxyXG4gIC8vICdvcGVuQ2FyZCcsXHJcbiAgLy8gJ2dldFdlUnVuRGF0YScsXHJcbiAgLy8gJ2xhdW5jaEFwcCcsXHJcbiAgLy8gJ2Nob29zZUludm9pY2VUaXRsZScsXHJcbiAgLy8gJ2NoZWNrSXNTdXBwb3J0U290ZXJBdXRoZW50aWNhdGlvbicsXHJcbiAgLy8gJ3N0YXJ0U290ZXJBdXRoZW50aWNhdGlvbicsXHJcbiAgLy8gJ2NoZWNrSXNTb3RlckVucm9sbGVkSW5EZXZpY2UnLFxyXG4gIC8vICd2aWJyYXRlJyxcclxuICAvLyAnbG9hZEZvbnRGYWNlJyxcclxuICAvLyAnZ2V0RXh0Q29uZmlnJyxcclxuICAvLyAnZ2V0RXh0Q29uZmlnU3luYydcclxuXTtcclxuY29uc3QgY2FuSVVzZXMgPSBbXHJcbiAgJ3NjYW5Db2RlJyxcclxuICAnc3RhcnRBY2NlbGVyb21ldGVyJyxcclxuICAnc3RvcEFjY2VsZXJvbWV0ZXInLFxyXG4gICdvbkFjY2VsZXJvbWV0ZXJDaGFuZ2UnLFxyXG4gICdzdGFydENvbXBhc3MnLFxyXG4gICdvbkNvbXBhc3NDaGFuZ2UnLFxyXG4gICdzZXRTY3JlZW5CcmlnaHRuZXNzJyxcclxuICAnZ2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgJ3NldEtlZXBTY3JlZW5PbicsXHJcbiAgJ29uVXNlckNhcHR1cmVTY3JlZW4nLFxyXG4gICd2aWJyYXRlTG9uZycsXHJcbiAgJ3ZpYnJhdGVTaG9ydCcsXHJcbiAgJ2NyZWF0ZVdvcmtlcicsXHJcbiAgJ2Nvbm5lY3RTb2NrZXQnLFxyXG4gICdvblNvY2tldE9wZW4nLFxyXG4gICdvblNvY2tldEVycm9yJyxcclxuICAnc2VuZFNvY2tldE1lc3NhZ2UnLFxyXG4gICdvblNvY2tldE1lc3NhZ2UnLFxyXG4gICdjbG9zZVNvY2tldCcsXHJcbiAgJ29uU29ja2V0Q2xvc2UnLFxyXG4gICdvcGVuRG9jdW1lbnQnLFxyXG4gICd1cGRhdGVTaGFyZU1lbnUnLFxyXG4gICdnZXRTaGFyZUluZm8nLFxyXG4gICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXHJcbiAgJ2NyZWF0ZUxpdmVQdXNoZXJDb250ZXh0JyxcclxuICAnc2V0TmF2aWdhdGlvbkJhckNvbG9yJyxcclxuICAnb25NZW1vcnlXYXJuaW5nJyxcclxuICAnb25OZXR3b3JrU3RhdHVzQ2hhbmdlJyxcclxuICAncmVwb3J0TW9uaXRvcicsXHJcbiAgJ2dldExvZ01hbmFnZXInLFxyXG4gICdyZXBvcnRBbmFseXRpY3MnXHJcbl07XHJcblxyXG5jb25zdCBDQUxMQkFDS1MgPSBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjYW5jZWwnLCAnY29tcGxldGUnXTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayAobWV0aG9kTmFtZSwgbWV0aG9kLCByZXR1cm5WYWx1ZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICByZXR1cm4gbWV0aG9kKHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcmdzIChtZXRob2ROYW1lLCBmcm9tQXJncywgYXJnc09wdGlvbiA9IHt9LCByZXR1cm5WYWx1ZSA9IHt9LCBrZWVwRnJvbUFyZ3MgPSBmYWxzZSkge1xyXG4gIGlmIChpc1BsYWluT2JqZWN0KGZyb21BcmdzKSkgeyAvLyDkuIDoiKwgYXBpIOeahOWPguaVsOino+aekFxyXG4gICAgY29uc3QgdG9BcmdzID0ga2VlcEZyb21BcmdzID09PSB0cnVlID8gZnJvbUFyZ3MgOiB7fTsgLy8gcmV0dXJuVmFsdWUg5Li6IGZhbHNlIOaXtu+8jOivtOaYjuaYr+agvOW8j+WMlui/lOWbnuWAvO+8jOebtOaOpeWcqOi/lOWbnuWAvOWvueixoeS4iuS/ruaUuei1i+WAvFxyXG4gICAgaWYgKGlzRm4oYXJnc09wdGlvbikpIHtcclxuICAgICAgYXJnc09wdGlvbiA9IGFyZ3NPcHRpb24oZnJvbUFyZ3MsIHRvQXJncykgfHwge307XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tQXJncykge1xyXG4gICAgICBpZiAoaGFzT3duKGFyZ3NPcHRpb24sIGtleSkpIHtcclxuICAgICAgICBsZXQga2V5T3B0aW9uID0gYXJnc09wdGlvbltrZXldO1xyXG4gICAgICAgIGlmIChpc0ZuKGtleU9wdGlvbikpIHtcclxuICAgICAgICAgIGtleU9wdGlvbiA9IGtleU9wdGlvbihmcm9tQXJnc1trZXldLCBmcm9tQXJncywgdG9BcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZXlPcHRpb24pIHsgLy8g5LiN5pSv5oyB55qE5Y+C5pWwXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFFR5bCP56iL5bqPICR7bWV0aG9kTmFtZX3mmoLkuI3mlK/mjIEke2tleX1gKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyKGtleU9wdGlvbikpIHsgLy8g6YeN5YaZ5Y+C5pWwIGtleVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChrZXlPcHRpb24pKSB7IC8vIHtuYW1lOm5ld05hbWUsdmFsdWU6dmFsdWV95Y+v6YeN5paw5oyH5a6a5Y+C5pWwIGtleTp2YWx1ZVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbi5uYW1lID8ga2V5T3B0aW9uLm5hbWUgOiBrZXldID0ga2V5T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChDQUxMQkFDS1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgIHRvQXJnc1trZXldID0gcHJvY2Vzc0NhbGxiYWNrKG1ldGhvZE5hbWUsIGZyb21BcmdzW2tleV0sIHJldHVyblZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWtlZXBGcm9tQXJncykge1xyXG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvQXJnc1xyXG4gIH0gZWxzZSBpZiAoaXNGbihmcm9tQXJncykpIHtcclxuICAgIGZyb21BcmdzID0gcHJvY2Vzc0NhbGxiYWNrKG1ldGhvZE5hbWUsIGZyb21BcmdzLCByZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcm9tQXJnc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmV0dXJuVmFsdWUgKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIGtlZXBSZXR1cm5WYWx1ZSA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzRm4ocHJvdG9jb2xzLnJldHVyblZhbHVlKSkgeyAvLyDlpITnkIbpgJrnlKggcmV0dXJuVmFsdWVcclxuICAgIHJlcyA9IHByb3RvY29scy5yZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXMpO1xyXG4gIH1cclxuICByZXR1cm4gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwge30sIGtlZXBSZXR1cm5WYWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlciAobWV0aG9kTmFtZSwgbWV0aG9kKSB7XHJcbiAgaWYgKGhhc093bihwcm90b2NvbHMsIG1ldGhvZE5hbWUpKSB7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IHByb3RvY29sc1ttZXRob2ROYW1lXTtcclxuICAgIGlmICghcHJvdG9jb2wpIHsgLy8g5pqC5LiN5pSv5oyB55qEIGFwaVxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFFR5bCP56iL5bqPIOaaguS4jeaUr+aMgSR7bWV0aG9kTmFtZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcxLCBhcmcyKSB7IC8vIOebruWJjSBhcGkg5pyA5aSa5Lik5Liq5Y+C5pWwXHJcbiAgICAgIGxldCBvcHRpb25zID0gcHJvdG9jb2w7XHJcbiAgICAgIGlmIChpc0ZuKHByb3RvY29sKSkge1xyXG4gICAgICAgIG9wdGlvbnMgPSBwcm90b2NvbChhcmcxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJnMSA9IHByb2Nlc3NBcmdzKG1ldGhvZE5hbWUsIGFyZzEsIG9wdGlvbnMuYXJncywgb3B0aW9ucy5yZXR1cm5WYWx1ZSk7XHJcblxyXG4gICAgICBjb25zdCBhcmdzID0gW2FyZzFdO1xyXG4gICAgICBpZiAodHlwZW9mIGFyZzIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd3hbb3B0aW9ucy5uYW1lIHx8IG1ldGhvZE5hbWVdLmFwcGx5KHd4LCBhcmdzKTtcclxuICAgICAgaWYgKGlzU3luY0FwaShtZXRob2ROYW1lKSkgeyAvLyDlkIzmraUgYXBpXHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXR1cm5WYWx1ZSwgb3B0aW9ucy5yZXR1cm5WYWx1ZSwgaXNDb250ZXh0QXBpKG1ldGhvZE5hbWUpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWV0aG9kXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9BcGlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmNvbnN0IFRPRE9TID0gW1xyXG4gICdvblRhYkJhck1pZEJ1dHRvblRhcCcsXHJcbiAgJ3N1YnNjcmliZVB1c2gnLFxyXG4gICd1bnN1YnNjcmliZVB1c2gnLFxyXG4gICdvblB1c2gnLFxyXG4gICdvZmZQdXNoJyxcclxuICAnc2hhcmUnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvZG9BcGkgKHtcclxuICAgIGZhaWwsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiBgJHtuYW1lfTpmYWlsOuaaguS4jeaUr+aMgSAke25hbWV9IOaWueazlWBcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5UT0RPUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdG9kb0FwaXNbbmFtZV0gPSBjcmVhdGVUb2RvQXBpKG5hbWUpO1xyXG59KTtcclxuXHJcbnZhciBwcm92aWRlcnMgPSB7XHJcbiAgb2F1dGg6IFsncXEnXSxcclxuICBzaGFyZTogWydxcSddLFxyXG4gIHBheW1lbnQ6IFsncXFwYXknXSxcclxuICBwdXNoOiBbJ3FxJ11cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFByb3ZpZGVyICh7XHJcbiAgc2VydmljZSxcclxuICBzdWNjZXNzLFxyXG4gIGZhaWwsXHJcbiAgY29tcGxldGVcclxufSkge1xyXG4gIGxldCByZXMgPSBmYWxzZTtcclxuICBpZiAocHJvdmlkZXJzW3NlcnZpY2VdKSB7XHJcbiAgICByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOm9rJyxcclxuICAgICAgc2VydmljZSxcclxuICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyc1tzZXJ2aWNlXVxyXG4gICAgfTtcclxuICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOmZhaWw65pyN5YqhWycgKyBzZXJ2aWNlICsgJ13kuI3lrZjlnKgnXHJcbiAgICB9O1xyXG4gICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgfVxyXG4gIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbn1cclxuXHJcbnZhciBleHRyYUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgZ2V0UHJvdmlkZXI6IGdldFByb3ZpZGVyXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0RW1pdHRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgcmV0dXJuIGdldFVuaUVtaXR0ZXJcclxuICB9XHJcbiAgbGV0IEVtaXR0ZXI7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIgKCkge1xyXG4gICAgaWYgKCFFbWl0dGVyKSB7XHJcbiAgICAgIEVtaXR0ZXIgPSBuZXcgVnVlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW1pdHRlclxyXG4gIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uICRvbiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRvZmYgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9uY2UgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRlbWl0ICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5cclxudmFyIGV2ZW50QXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICAkb246ICRvbixcclxuICAkb2ZmOiAkb2ZmLFxyXG4gICRvbmNlOiAkb25jZSxcclxuICAkZW1pdDogJGVtaXRcclxufSk7XHJcblxyXG52YXIgYXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbFxyXG59KTtcclxuXHJcbmNvbnN0IE1QUGFnZSA9IFBhZ2U7XHJcbmNvbnN0IE1QQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG5cclxuY29uc3QgY3VzdG9taXplUkUgPSAvOi9nO1xyXG5cclxuY29uc3QgY3VzdG9taXplID0gY2FjaGVkKChzdHIpID0+IHtcclxuICByZXR1cm4gY2FtZWxpemUoc3RyLnJlcGxhY2UoY3VzdG9taXplUkUsICctJykpXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdFRyaWdnZXJFdmVudCAobXBJbnN0YW5jZSkge1xyXG4gIGNvbnN0IG9sZFRyaWdnZXJFdmVudCA9IG1wSW5zdGFuY2UudHJpZ2dlckV2ZW50O1xyXG4gIG1wSW5zdGFuY2UudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gb2xkVHJpZ2dlckV2ZW50LmFwcGx5KG1wSW5zdGFuY2UsIFtjdXN0b21pemUoZXZlbnQpLCAuLi5hcmdzXSlcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0SG9vayAobmFtZSwgb3B0aW9ucykge1xyXG4gIGNvbnN0IG9sZEhvb2sgPSBvcHRpb25zW25hbWVdO1xyXG4gIGlmICghb2xkSG9vaykge1xyXG4gICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICBpbml0VHJpZ2dlckV2ZW50KHRoaXMpO1xyXG4gICAgICByZXR1cm4gb2xkSG9vay5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblBhZ2UgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgaW5pdEhvb2soJ29uTG9hZCcsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBNUFBhZ2Uob3B0aW9ucylcclxufTtcclxuXHJcbkNvbXBvbmVudCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICBpbml0SG9vaygnY3JlYXRlZCcsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBNUENvbXBvbmVudChvcHRpb25zKVxyXG59O1xyXG5cclxuY29uc3QgUEFHRV9FVkVOVF9IT09LUyA9IFtcclxuICAnb25QdWxsRG93blJlZnJlc2gnLFxyXG4gICdvblJlYWNoQm90dG9tJyxcclxuICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICdvblBhZ2VTY3JvbGwnLFxyXG4gICdvblJlc2l6ZScsXHJcbiAgJ29uVGFiSXRlbVRhcCdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRNb2NrcyAodm0sIG1vY2tzKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xyXG4gIG1vY2tzLmZvckVhY2gobW9jayA9PiB7XHJcbiAgICBpZiAoaGFzT3duKG1wSW5zdGFuY2UsIG1vY2spKSB7XHJcbiAgICAgIHZtW21vY2tdID0gbXBJbnN0YW5jZVttb2NrXTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSG9vayAoaG9vaywgdnVlT3B0aW9ucykge1xyXG4gIGlmICghdnVlT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChWdWUub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KFZ1ZS5vcHRpb25zW2hvb2tdKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcclxuICAgIGlmIChpc0ZuKHZ1ZU9wdGlvbnMuZXh0ZW5kT3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICh2dWVPcHRpb25zLnN1cGVyICYmXHJcbiAgICAgIHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9ucyAmJlxyXG4gICAgICBBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGNvbnN0IG1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KG1peGlucykpIHtcclxuICAgIHJldHVybiAhIW1peGlucy5maW5kKG1peGluID0+IGhhc0hvb2soaG9vaywgbWl4aW4pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2tzIChtcE9wdGlvbnMsIGhvb2tzLCB2dWVPcHRpb25zKSB7XHJcbiAgaG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICAgIG1wT3B0aW9uc1tob29rXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKGhvb2ssIGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVDb21wb25lbnQgKFZ1ZSwgdnVlT3B0aW9ucykge1xyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuICBsZXQgVnVlQ29tcG9uZW50O1xyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHZ1ZU9wdGlvbnMpO1xyXG4gIH1cclxuICB2dWVPcHRpb25zID0gVnVlQ29tcG9uZW50Lm9wdGlvbnM7XHJcbiAgcmV0dXJuIFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTbG90cyAodm0sIHZ1ZVNsb3RzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZ1ZVNsb3RzLmZvckVhY2goc2xvdE5hbWUgPT4ge1xyXG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgdm0uJHNjb3BlZFNsb3RzID0gdm0uJHNsb3RzID0gJHNsb3RzO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XHJcbiAgdnVlSWRzID0gKHZ1ZUlkcyB8fCAnJykuc3BsaXQoJywnKTtcclxuICBjb25zdCBsZW4gPSB2dWVJZHMubGVuZ3RoO1xyXG5cclxuICBpZiAobGVuID09PSAxKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVQaWQgPSB2dWVJZHNbMV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xyXG4gIGxldCBkYXRhID0gdnVlT3B0aW9ucy5kYXRhIHx8IHt9O1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB2dWVPcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDlr7kgZGF0YSDmoLzlvI/ljJZcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcclxuICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xyXG4gICAgICBkYXRhW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuY29uc3QgUFJPUF9UWVBFUyA9IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgT2JqZWN0LCBBcnJheSwgbnVsbF07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlciAobmFtZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBvYnNlcnZlciAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICB0aGlzLiR2bVtuYW1lXSA9IG5ld1ZhbDsgLy8g5Li65LqG6Kem5Y+R5YW25LuW6Z2eIHJlbmRlciB3YXRjaGVyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3JzICh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpIHtcclxuICBjb25zdCB2dWVCZWhhdmlvcnMgPSB2dWVPcHRpb25zLmJlaGF2aW9ycztcclxuICBjb25zdCB2dWVFeHRlbmRzID0gdnVlT3B0aW9ucy5leHRlbmRzO1xyXG4gIGNvbnN0IHZ1ZU1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG5cclxuICBsZXQgdnVlUHJvcHMgPSB2dWVPcHRpb25zLnByb3BzO1xyXG5cclxuICBpZiAoIXZ1ZVByb3BzKSB7XHJcbiAgICB2dWVPcHRpb25zLnByb3BzID0gdnVlUHJvcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJlaGF2aW9ycyA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZUJlaGF2aW9ycykpIHtcclxuICAgIHZ1ZUJlaGF2aW9ycy5mb3JFYWNoKGJlaGF2aW9yID0+IHtcclxuICAgICAgYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IucmVwbGFjZSgndW5pOi8vJywgYCR7XCJ3eFwifTovL2ApKTtcclxuICAgICAgaWYgKGJlaGF2aW9yID09PSAndW5pOi8vZm9ybS1maWVsZCcpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVQcm9wcykpIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ25hbWUnKTtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLm5hbWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBEYXRlXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QodnVlRXh0ZW5kcykgJiYgdnVlRXh0ZW5kcy5wcm9wcykge1xyXG4gICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgIGluaXRCZWhhdmlvcih7XHJcbiAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlRXh0ZW5kcy5wcm9wcywgdHJ1ZSlcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU1peGlucykpIHtcclxuICAgIHZ1ZU1peGlucy5mb3JFYWNoKHZ1ZU1peGluID0+IHtcclxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodnVlTWl4aW4pICYmIHZ1ZU1peGluLnByb3BzKSB7XHJcbiAgICAgICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVNaXhpbi5wcm9wcywgdHJ1ZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBiZWhhdmlvcnNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9wVHlwZSAoa2V5LCB0eXBlLCBkZWZhdWx0VmFsdWUsIGZpbGUpIHtcclxuICAvLyBbU3RyaW5nXT0+U3RyaW5nXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkgJiYgdHlwZS5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiB0eXBlWzBdXHJcbiAgfVxyXG4gIHJldHVybiB0eXBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRQcm9wZXJ0aWVzIChwcm9wcywgaXNCZWhhdmlvciA9IGZhbHNlLCBmaWxlID0gJycpIHtcclxuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XHJcbiAgaWYgKCFpc0JlaGF2aW9yKSB7XHJcbiAgICBwcm9wZXJ0aWVzLnZ1ZUlkID0ge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuICAgIHByb3BlcnRpZXMudnVlU2xvdHMgPSB7IC8vIOWwj+eoi+W6j+S4jeiDveebtOaOpeWumuS5iSAkc2xvdHMg55qEIHByb3Bz77yM5omA5Lul6YCa6L+HIHZ1ZVNsb3RzIOi9rOaNouWIsCAkc2xvdHNcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICBuZXdWYWwuZm9yRWFjaChzbG90TmFtZSA9PiB7XHJcbiAgICAgICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgJHNsb3RzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkgeyAvLyBbJ3RpdGxlJ11cclxuICAgIHByb3BzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHsgLy8ge3RpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfSxjb250ZW50OlN0cmluZ31cclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdHMgPSBwcm9wc1trZXldO1xyXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRzKSkgeyAvLyB0aXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDonJ31cclxuICAgICAgICBsZXQgdmFsdWUgPSBvcHRzLmRlZmF1bHQ7XHJcbiAgICAgICAgaWYgKGlzRm4odmFsdWUpKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRzLnR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cy50eXBlKTtcclxuXHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKG9wdHMudHlwZSkgIT09IC0xID8gb3B0cy50eXBlIDogbnVsbCxcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2UgeyAvLyBjb250ZW50OlN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cyk7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKHR5cGUpICE9PSAtMSA/IHR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHByb3BlcnRpZXNcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlciQxIChldmVudCkge1xyXG4gIC8vIFRPRE8g5Y+I5b6X5YW85a65IG1wdnVlIOeahCBtcCDlr7nosaFcclxuICB0cnkge1xyXG4gICAgZXZlbnQubXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gbm9vcDtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IG5vb3A7XHJcblxyXG4gIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCB7fTtcclxuXHJcbiAgaWYgKCFoYXNPd24oZXZlbnQsICdkZXRhaWwnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoaGFzT3duKGV2ZW50LCAnbWFya2VySWQnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0gdHlwZW9mIGV2ZW50LmRldGFpbCA9PT0gJ29iamVjdCcgPyBldmVudC5kZXRhaWwgOiB7fTtcclxuICAgIGV2ZW50LmRldGFpbC5tYXJrZXJJZCA9IGV2ZW50Lm1hcmtlcklkO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZXZlbnQuZGV0YWlsKSkge1xyXG4gICAgZXZlbnQudGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQudGFyZ2V0LCBldmVudC5kZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV2ZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV4dHJhVmFsdWUgKHZtLCBkYXRhUGF0aHNBcnJheSkge1xyXG4gIGxldCBjb250ZXh0ID0gdm07XHJcbiAgZGF0YVBhdGhzQXJyYXkuZm9yRWFjaChkYXRhUGF0aEFycmF5ID0+IHtcclxuICAgIGNvbnN0IGRhdGFQYXRoID0gZGF0YVBhdGhBcnJheVswXTtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVBhdGhBcnJheVsyXTtcclxuICAgIGlmIChkYXRhUGF0aCB8fCB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7IC8vIFsnJywnJyxpbmRleCwnZGlzYWJsZSddXHJcbiAgICAgIGNvbnN0IHByb3BQYXRoID0gZGF0YVBhdGhBcnJheVsxXTtcclxuICAgICAgY29uc3QgdmFsdWVQYXRoID0gZGF0YVBhdGhBcnJheVszXTtcclxuXHJcbiAgICAgIGNvbnN0IHZGb3IgPSBkYXRhUGF0aCA/IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLCBjb250ZXh0KSA6IGNvbnRleHQ7XHJcblxyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2Rm9yKSkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIGlmICghcHJvcFBhdGgpIHtcclxuICAgICAgICBjb250ZXh0ID0gdkZvclt2YWx1ZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodkZvcikpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSB2Rm9yLmZpbmQodkZvckl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uX19nZXRfdmFsdWUocHJvcFBhdGgsIHZGb3JJdGVtKSA9PT0gdmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2Rm9yKSkge1xyXG4gICAgICAgICAgY29udGV4dCA9IE9iamVjdC5rZXlzKHZGb3IpLmZpbmQodkZvcktleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5fX2dldF92YWx1ZShwcm9wUGF0aCwgdkZvclt2Rm9yS2V5XSkgPT09IHZhbHVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcigndi1mb3Ig5pqC5LiN5pSv5oyB5b6q546v5pWw5o2u77yaJywgdkZvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWVQYXRoKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZtLl9fZ2V0X3ZhbHVlKHZhbHVlUGF0aCwgY29udGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRFeHRyYSAodm0sIGV4dHJhLCBldmVudCkge1xyXG4gIGNvbnN0IGV4dHJhT2JqID0ge307XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGV4dHJhKSAmJiBleHRyYS5sZW5ndGgpIHtcclxuICAgIC8qKlxyXG4gICAgICpbXHJcbiAgICAgKiAgICBbJ2RhdGEuaXRlbXMnLCAnZGF0YS5pZCcsIGl0ZW0uZGF0YS5pZF0sXHJcbiAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cclxuICAgICAqXSxcclxuICAgICAqW1xyXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXHJcbiAgICAgKl0sXHJcbiAgICAgKid0ZXN0J1xyXG4gICAgICovXHJcbiAgICBleHRyYS5mb3JFYWNoKChkYXRhUGF0aCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhUGF0aCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoIWRhdGFQYXRoKSB7IC8vIG1vZGVsLHByb3Auc3luY1xyXG4gICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChkYXRhUGF0aCA9PT0gJyRldmVudCcpIHsgLy8gJGV2ZW50XHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50O1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhUGF0aC5pbmRleE9mKCckZXZlbnQuJykgPT09IDApIHsgLy8gJGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bS5fX2dldF92YWx1ZShkYXRhUGF0aC5yZXBsYWNlKCckZXZlbnQuJywgJycpLCBldmVudCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bS5fX2dldF92YWx1ZShkYXRhUGF0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGdldEV4dHJhVmFsdWUodm0sIGRhdGFQYXRoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXh0cmFPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T2JqQnlBcnJheSAoYXJyKSB7XHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaV07XHJcbiAgICBvYmpbZWxlbWVudFswXV0gPSBlbGVtZW50WzFdO1xyXG4gIH1cclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NFdmVudEFyZ3MgKHZtLCBldmVudCwgYXJncyA9IFtdLCBleHRyYSA9IFtdLCBpc0N1c3RvbSwgbWV0aG9kTmFtZSkge1xyXG4gIGxldCBpc0N1c3RvbU1QRXZlbnQgPSBmYWxzZTsgLy8gd3hjb21wb25lbnQg57uE5Lu277yM5Lyg6YCS5Y6f5aeLIGV2ZW50IOWvueixoVxyXG4gIGlmIChpc0N1c3RvbSkgeyAvLyDoh6rlrprkuYnkuovku7ZcclxuICAgIGlzQ3VzdG9tTVBFdmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiZcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0ICYmXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb21UeXBlID09PSAnd3gnO1xyXG4gICAgaWYgKCFhcmdzLmxlbmd0aCkgeyAvLyDml6Dlj4LmlbDvvIznm7TmjqXkvKDlhaUgZXZlbnQg5oiWIGRldGFpbCDmlbDnu4RcclxuICAgICAgaWYgKGlzQ3VzdG9tTVBFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBbZXZlbnRdXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGV2ZW50LmRldGFpbC5fX2FyZ3NfXyB8fCBldmVudC5kZXRhaWxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGV4dHJhT2JqID0gcHJvY2Vzc0V2ZW50RXh0cmEodm0sIGV4dHJhLCBldmVudCk7XHJcblxyXG4gIGNvbnN0IHJldCA9IFtdO1xyXG4gIGFyZ3MuZm9yRWFjaChhcmcgPT4ge1xyXG4gICAgaWYgKGFyZyA9PT0gJyRldmVudCcpIHtcclxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdfX3NldF9tb2RlbCcgJiYgIWlzQ3VzdG9tKSB7IC8vIGlucHV0IHYtbW9kZWwgdmFsdWVcclxuICAgICAgICByZXQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpc0N1c3RvbSAmJiAhaXNDdXN0b21NUEV2ZW50KSB7XHJcbiAgICAgICAgICByZXQucHVzaChldmVudC5kZXRhaWwuX19hcmdzX19bMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIHd4Y29tcG9uZW50IOe7hOS7tuaIluWGhee9rue7hOS7tlxyXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmdbMF0gPT09ICdvJykge1xyXG4gICAgICAgIHJldC5wdXNoKGdldE9iakJ5QXJyYXkoYXJnKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgaGFzT3duKGV4dHJhT2JqLCBhcmcpKSB7XHJcbiAgICAgICAgcmV0LnB1c2goZXh0cmFPYmpbYXJnXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0LnB1c2goYXJnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmV0XHJcbn1cclxuXHJcbmNvbnN0IE9OQ0UgPSAnfic7XHJcbmNvbnN0IENVU1RPTSA9ICdeJztcclxuXHJcbmZ1bmN0aW9uIGlzTWF0Y2hFdmVudFR5cGUgKGV2ZW50VHlwZSwgb3B0VHlwZSkge1xyXG4gIHJldHVybiAoZXZlbnRUeXBlID09PSBvcHRUeXBlKSB8fFxyXG4gICAgKFxyXG4gICAgICBvcHRUeXBlID09PSAncmVnaW9uY2hhbmdlJyAmJlxyXG4gICAgICAoXHJcbiAgICAgICAgZXZlbnRUeXBlID09PSAnYmVnaW4nIHx8XHJcbiAgICAgICAgZXZlbnRUeXBlID09PSAnZW5kJ1xyXG4gICAgICApXHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldmVudCkge1xyXG4gIGV2ZW50ID0gd3JhcHBlciQxKGV2ZW50KTtcclxuXHJcbiAgLy8gW1sndGFwJyxbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXV1cclxuICBjb25zdCBkYXRhc2V0ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQudGFyZ2V0KS5kYXRhc2V0O1xyXG4gIGlmICghZGF0YXNldCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcclxuICB9XHJcbiAgY29uc3QgZXZlbnRPcHRzID0gZGF0YXNldC5ldmVudE9wdHMgfHwgZGF0YXNldFsnZXZlbnQtb3B0cyddOyAvLyDmlK/ku5jlrp0gd2ViLXZpZXcg57uE5Lu2IGRhdGFzZXQg6Z2e6am85bOwXHJcbiAgaWYgKCFldmVudE9wdHMpIHtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpXHJcbiAgfVxyXG5cclxuICAvLyBbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXHJcbiAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQudHlwZTtcclxuXHJcbiAgY29uc3QgcmV0ID0gW107XHJcblxyXG4gIGV2ZW50T3B0cy5mb3JFYWNoKGV2ZW50T3B0ID0+IHtcclxuICAgIGxldCB0eXBlID0gZXZlbnRPcHRbMF07XHJcbiAgICBjb25zdCBldmVudHNBcnJheSA9IGV2ZW50T3B0WzFdO1xyXG5cclxuICAgIGNvbnN0IGlzQ3VzdG9tID0gdHlwZS5jaGFyQXQoMCkgPT09IENVU1RPTTtcclxuICAgIHR5cGUgPSBpc0N1c3RvbSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xyXG4gICAgY29uc3QgaXNPbmNlID0gdHlwZS5jaGFyQXQoMCkgPT09IE9OQ0U7XHJcbiAgICB0eXBlID0gaXNPbmNlID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XHJcblxyXG4gICAgaWYgKGV2ZW50c0FycmF5ICYmIGlzTWF0Y2hFdmVudFR5cGUoZXZlbnRUeXBlLCB0eXBlKSkge1xyXG4gICAgICBldmVudHNBcnJheS5mb3JFYWNoKGV2ZW50QXJyYXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBldmVudEFycmF5WzBdO1xyXG4gICAgICAgIGlmIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgICBsZXQgaGFuZGxlckN0eCA9IHRoaXMuJHZtO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBoYW5kbGVyQ3R4LiRvcHRpb25zLmdlbmVyaWMgJiZcclxuICAgICAgICAgICAgaGFuZGxlckN0eC4kcGFyZW50ICYmXHJcbiAgICAgICAgICAgIGhhbmRsZXJDdHguJHBhcmVudC4kcGFyZW50XHJcbiAgICAgICAgICApIHsgLy8gbXAtd2VpeGluLG1wLXRvdXRpYW8g5oq96LGh6IqC54K55qih5oufIHNjb3BlZCBzbG90c1xyXG4gICAgICAgICAgICBoYW5kbGVyQ3R4ID0gaGFuZGxlckN0eC4kcGFyZW50LiRwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJyRlbWl0Jykge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ3R4LiRlbWl0LmFwcGx5KGhhbmRsZXJDdHgsXHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0V2ZW50QXJncyhcclxuICAgICAgICAgICAgICAgIHRoaXMuJHZtLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBldmVudEFycmF5WzFdLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcclxuICAgICAgICAgICAgICAgIGlzQ3VzdG9tLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kTmFtZVxyXG4gICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyQ3R4W21ldGhvZE5hbWVdO1xyXG4gICAgICAgICAgaWYgKCFpc0ZuKGhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgIF92bS4ke21ldGhvZE5hbWV9IGlzIG5vdCBhIGZ1bmN0aW9uYClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpc09uY2UpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIub25jZSkge1xyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25jZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXQucHVzaChoYW5kbGVyLmFwcGx5KGhhbmRsZXJDdHgsIHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgIHRoaXMuJHZtLFxyXG4gICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcclxuICAgICAgICAgICAgaXNDdXN0b20sXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoXHJcbiAgICBldmVudFR5cGUgPT09ICdpbnB1dCcgJiZcclxuICAgIHJldC5sZW5ndGggPT09IDEgJiZcclxuICAgIHR5cGVvZiByZXRbMF0gIT09ICd1bmRlZmluZWQnXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmV0WzBdXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBob29rcyA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25FcnJvcicsXHJcbiAgJ29uUGFnZU5vdEZvdW5kJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXNlQXBwICh2bSwge1xyXG4gIG1vY2tzLFxyXG4gIGluaXRSZWZzXHJcbn0pIHtcclxuICBpZiAodm0uJG9wdGlvbnMuc3RvcmUpIHtcclxuICAgIFZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gdm0uJG9wdGlvbnMuc3RvcmU7XHJcbiAgfVxyXG5cclxuICBWdWUucHJvdG90eXBlLm1wSG9zdCA9IFwibXAtcXFcIjtcclxuXHJcbiAgVnVlLm1peGluKHtcclxuICAgIGJlZm9yZUNyZWF0ZSAoKSB7XHJcbiAgICAgIGlmICghdGhpcy4kb3B0aW9ucy5tcFR5cGUpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tcFR5cGUgPSB0aGlzLiRvcHRpb25zLm1wVHlwZTtcclxuXHJcbiAgICAgIHRoaXMuJG1wID0ge1xyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIFt0aGlzLm1wVHlwZV06IHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy4kc2NvcGUgPSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XHJcblxyXG4gICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcFR5cGU7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5tcFR5cGUgIT09ICdhcHAnKSB7XHJcbiAgICAgICAgaW5pdFJlZnModGhpcyk7XHJcbiAgICAgICAgaW5pdE1vY2tzKHRoaXMsIG1vY2tzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhcHBPcHRpb25zID0ge1xyXG4gICAgb25MYXVuY2ggKGFyZ3MpIHtcclxuICAgICAgaWYgKHRoaXMuJHZtKSB7IC8vIOW3sue7j+WIneWni+WMlui/h+S6hu+8jOS4u+imgeaYr+S4uuS6hueZvuW6pu+8jOeZvuW6piBvblNob3cg5ZyoIG9uTGF1bmNoIOS5i+WJjVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoIXd4LmNhbklVc2UoJ25leHRUaWNrJykpIHsgLy8g5LqL5a6eIOS4ijIuMi4zIOWNs+WPr++8jOeugOWNleS9v+eUqCAyLjMuMCDnmoQgbmV4dFRpY2sg5Yik5patXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCflvZPliY3lvq7kv6Hln7rnoYDlupPniYjmnKzov4fkvY7vvIzor7flsIYg5b6u5L+h5byA5Y+R6ICF5bel5YW3LeivpuaDhS3pobnnm67orr7nva4t6LCD6K+V5Z+656GA5bqT54mI5pysIOabtOaNouS4umAyLjMuMGDku6XkuIonKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHZtID0gdm07XHJcblxyXG4gICAgICB0aGlzLiR2bS4kbXAgPSB7XHJcbiAgICAgICAgYXBwOiB0aGlzXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiR2bS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAvLyB2bSDkuIrkuZ/mjILovb0gZ2xvYmFsRGF0YVxyXG4gICAgICB0aGlzLiR2bS5nbG9iYWxEYXRhID0gdGhpcy5nbG9iYWxEYXRhO1xyXG5cclxuICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJywgYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25MYXVuY2gnLCBhcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyDlhbzlrrnml6fniYjmnKwgZ2xvYmFsRGF0YVxyXG4gIGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSA9IHZtLiRvcHRpb25zLmdsb2JhbERhdGEgfHwge307XHJcbiAgLy8g5bCGIG1ldGhvZHMg5Lit55qE5pa55rOV5oyC5ZyoIGdldEFwcCgpIOS4rVxyXG4gIGNvbnN0IG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xyXG4gIGlmIChtZXRob2RzKSB7XHJcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBhcHBPcHRpb25zW25hbWVdID0gbWV0aG9kc1tuYW1lXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhvb2tzKGFwcE9wdGlvbnMsIGhvb2tzKTtcclxuXHJcbiAgcmV0dXJuIGFwcE9wdGlvbnNcclxufVxyXG5cclxuY29uc3QgbW9ja3MgPSBbJ19fcm91dGVfXycsICdfX3d4RXhwYXJzZXJOb2RlSWRfXycsICdfX3d4V2Vidmlld0lkX18nXTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRWbUJ5VnVlSWQgKHZtLCB2dWVQaWQpIHtcclxuICBjb25zdCAkY2hpbGRyZW4gPSB2bS4kY2hpbGRyZW47XHJcbiAgLy8g5LyY5YWI5p+l5om+55u05bGeKOWPjeWQkeafpeaJvjpodHRwczovL2dpdGh1Yi5jb20vZGNsb3VkaW8vdW5pLWFwcC9pc3N1ZXMvMTIwMClcclxuICBmb3IgKGxldCBpID0gJGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBjaGlsZFZtID0gJGNoaWxkcmVuW2ldO1xyXG4gICAgaWYgKGNoaWxkVm0uJHNjb3BlLl8kdnVlSWQgPT09IHZ1ZVBpZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGRWbVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyDlj43lkJHpgJLlvZLmn6Xmib5cclxuICBsZXQgcGFyZW50Vm07XHJcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKCRjaGlsZHJlbltpXSwgdnVlUGlkKTtcclxuICAgIGlmIChwYXJlbnRWbSkge1xyXG4gICAgICByZXR1cm4gcGFyZW50Vm1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRCZWhhdmlvciAob3B0aW9ucykge1xyXG4gIHJldHVybiBCZWhhdmlvcihvcHRpb25zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BhZ2UgKCkge1xyXG4gIHJldHVybiAhIXRoaXMucm91dGVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlbGF0aW9uIChkZXRhaWwpIHtcclxuICB0aGlzLnRyaWdnZXJFdmVudCgnX19sJywgZGV0YWlsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlZnMgKHZtKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sICckcmVmcycsIHtcclxuICAgIGdldCAoKSB7XHJcbiAgICAgIGNvbnN0ICRyZWZzID0ge307XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmJyk7XHJcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICAkcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBmb3JDb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InKTtcclxuICAgICAgZm9yQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgIGlmICghJHJlZnNbcmVmXSkge1xyXG4gICAgICAgICAgJHJlZnNbcmVmXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuICRyZWZzXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUxpbmsgKGV2ZW50KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdnVlUGlkLFxyXG4gICAgdnVlT3B0aW9uc1xyXG4gIH0gPSBldmVudC5kZXRhaWwgfHwgZXZlbnQudmFsdWU7IC8vIGRldGFpbCDmmK/lvq7kv6EsdmFsdWUg5piv55m+5bqmKGRpcGF0Y2gpXHJcblxyXG4gIGxldCBwYXJlbnRWbTtcclxuXHJcbiAgaWYgKHZ1ZVBpZCkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJlbnRWbSkge1xyXG4gICAgcGFyZW50Vm0gPSB0aGlzLiR2bTtcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMucGFyZW50ID0gcGFyZW50Vm07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQXBwICh2bSkge1xyXG4gIHJldHVybiBwYXJzZUJhc2VBcHAodm0sIHtcclxuICAgIG1vY2tzLFxyXG4gICAgaW5pdFJlZnNcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUFwcCQxICh2bSkge1xyXG4gIHJldHVybiBwYXJzZUFwcCh2bSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXBwICh2bSkge1xyXG4gIEFwcChwYXJzZUFwcCQxKHZtKSk7XHJcbiAgcmV0dXJuIHZtXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZUNvbXBvbmVudCAodnVlQ29tcG9uZW50T3B0aW9ucywge1xyXG4gIGlzUGFnZSxcclxuICBpbml0UmVsYXRpb25cclxufSA9IHt9KSB7XHJcbiAgY29uc3QgW1Z1ZUNvbXBvbmVudCwgdnVlT3B0aW9uc10gPSBpbml0VnVlQ29tcG9uZW50KFZ1ZSwgdnVlQ29tcG9uZW50T3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXHJcbiAgICAuLi4odnVlT3B0aW9ucy5vcHRpb25zIHx8IHt9KVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8vIOW+ruS/oSBtdWx0aXBsZVNsb3RzIOmDqOWIhuaDheWGteaciSBidWfvvIzlr7zoh7TlhoXlrrnpobrluo/plJnkubEg5aaCIHUtbGlzdO+8jOaPkOS+m+imhueblumAiemhuVxyXG4gICAgaWYgKHZ1ZU9wdGlvbnNbJ21wLXdlaXhpbiddICYmIHZ1ZU9wdGlvbnNbJ21wLXdlaXhpbiddLm9wdGlvbnMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB2dWVPcHRpb25zWydtcC13ZWl4aW4nXS5vcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudE9wdGlvbnMgPSB7XHJcbiAgICBvcHRpb25zLFxyXG4gICAgZGF0YTogaW5pdERhdGEodnVlT3B0aW9ucywgVnVlLnByb3RvdHlwZSksXHJcbiAgICBiZWhhdmlvcnM6IGluaXRCZWhhdmlvcnModnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSxcclxuICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU9wdGlvbnMucHJvcHMsIGZhbHNlLCB2dWVPcHRpb25zLl9fZmlsZSksXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgYXR0YWNoZWQgKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBtcFR5cGU6IGlzUGFnZS5jYWxsKHRoaXMpID8gJ3BhZ2UnIDogJ2NvbXBvbmVudCcsXHJcbiAgICAgICAgICBtcEluc3RhbmNlOiB0aGlzLFxyXG4gICAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5aSE55CG54i25a2Q5YWz57O7XHJcbiAgICAgICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgdnVlUGlkOiB0aGlzLl8kdnVlUGlkLFxyXG4gICAgICAgICAgdnVlT3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJYgdnVlIOWunuS+i1xyXG4gICAgICAgIHRoaXMuJHZtID0gbmV3IFZ1ZUNvbXBvbmVudChvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8g5aSE55CGJHNsb3RzLCRzY29wZWRTbG90c++8iOaaguS4jeaUr+aMgeWKqOaAgeWPmOWMliRzbG90c++8iVxyXG4gICAgICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7XHJcblxyXG4gICAgICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXHJcbiAgICAgICAgdGhpcy4kdm0uJG1vdW50KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlYWR5ICgpIHtcclxuICAgICAgICAvLyDlvZPnu4Tku7YgcHJvcHMg6buY6K6k5YC85Li6IHRydWXvvIzliJ3lp4vljJbml7bkvKDlhaUgZmFsc2Ug5Lya5a+86Ie0IGNyZWF0ZWQscmVhZHkg6Kem5Y+RLCDkvYYgYXR0YWNoZWQg5LiN6Kem5Y+RXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2RldmVsb3AvZG9jLzAwMDY2YWUyODQ0Y2MwZjhlYjg4M2UyYTU1NzgwMFxyXG4gICAgICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xyXG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGFjaGVkICgpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgICBzaG93IChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVNob3cnLCBhcmdzKTtcclxuICAgICAgfSxcclxuICAgICAgaGlkZSAoKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZUhpZGUnKTtcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplIChzaXplKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVJlc2l6ZScsIHNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBfX2w6IGhhbmRsZUxpbmssXHJcbiAgICAgIF9fZTogaGFuZGxlRXZlbnRcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGV4dGVybmFsQ2xhc3Nlc1xyXG4gIGlmICh2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3Nlcykge1xyXG4gICAgY29tcG9uZW50T3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSB2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3NlcztcclxuICB9XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMud3hzQ2FsbE1ldGhvZHMpKSB7XHJcbiAgICB2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzLmZvckVhY2goY2FsbE1ldGhvZCA9PiB7XHJcbiAgICAgIGNvbXBvbmVudE9wdGlvbnMubWV0aG9kc1tjYWxsTWV0aG9kXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtW2NhbGxNZXRob2RdKGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChpc1BhZ2UpIHtcclxuICAgIHJldHVybiBjb21wb25lbnRPcHRpb25zXHJcbiAgfVxyXG4gIHJldHVybiBbY29tcG9uZW50T3B0aW9ucywgVnVlQ29tcG9uZW50XVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbXBvbmVudCAodnVlQ29tcG9uZW50T3B0aW9ucykge1xyXG4gIHJldHVybiBwYXJzZUJhc2VDb21wb25lbnQodnVlQ29tcG9uZW50T3B0aW9ucywge1xyXG4gICAgaXNQYWdlLFxyXG4gICAgaW5pdFJlbGF0aW9uXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDb21wb25lbnQkMSAodnVlQ29tcG9uZW50T3B0aW9ucykge1xyXG4gIHJldHVybiBwYXJzZUNvbXBvbmVudCh2dWVDb21wb25lbnRPcHRpb25zKVxyXG59XHJcblxyXG5jb25zdCBob29rcyQxID0gW1xyXG4gICdvblNob3cnLFxyXG4gICdvbkhpZGUnLFxyXG4gICdvblVubG9hZCdcclxuXTtcclxuXHJcbmhvb2tzJDEucHVzaCguLi5QQUdFX0VWRU5UX0hPT0tTKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zLCB7XHJcbiAgaXNQYWdlLFxyXG4gIGluaXRSZWxhdGlvblxyXG59KSB7XHJcbiAgY29uc3QgcGFnZU9wdGlvbnMgPSBwYXJzZUNvbXBvbmVudCQxKHZ1ZVBhZ2VPcHRpb25zKTtcclxuXHJcbiAgaW5pdEhvb2tzKHBhZ2VPcHRpb25zLm1ldGhvZHMsIGhvb2tzJDEsIHZ1ZVBhZ2VPcHRpb25zKTtcclxuXHJcbiAgcGFnZU9wdGlvbnMubWV0aG9kcy5vbkxvYWQgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgdGhpcy4kdm0uJG1wLnF1ZXJ5ID0gYXJnczsgLy8g5YW85a65IG1wdnVlXHJcbiAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25Mb2FkJywgYXJncyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VPcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUGFnZSAodnVlUGFnZU9wdGlvbnMpIHtcclxuICByZXR1cm4gcGFyc2VCYXNlUGFnZSh2dWVQYWdlT3B0aW9ucywge1xyXG4gICAgaXNQYWdlLFxyXG4gICAgaW5pdFJlbGF0aW9uXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQYWdlJDEgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAgcmV0dXJuIHBhcnNlUGFnZSh2dWVQYWdlT3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnZSAodnVlUGFnZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlUGFnZSQxKHZ1ZVBhZ2VPcHRpb25zKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodnVlT3B0aW9ucykge1xyXG4gIHtcclxuICAgIHJldHVybiBDb21wb25lbnQocGFyc2VDb21wb25lbnQkMSh2dWVPcHRpb25zKSlcclxuICB9XHJcbn1cclxuXHJcbnRvZG9zLmZvckVhY2godG9kb0FwaSA9PiB7XHJcbiAgcHJvdG9jb2xzW3RvZG9BcGldID0gZmFsc2U7XHJcbn0pO1xyXG5cclxuY2FuSVVzZXMuZm9yRWFjaChjYW5JVXNlQXBpID0+IHtcclxuICBjb25zdCBhcGlOYW1lID0gcHJvdG9jb2xzW2NhbklVc2VBcGldICYmIHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lID8gcHJvdG9jb2xzW2NhbklVc2VBcGldLm5hbWVcclxuICAgIDogY2FuSVVzZUFwaTtcclxuICBpZiAoIXd4LmNhbklVc2UoYXBpTmFtZSkpIHtcclxuICAgIHByb3RvY29sc1tjYW5JVXNlQXBpXSA9IGZhbHNlO1xyXG4gIH1cclxufSk7XHJcblxyXG5sZXQgdW5pID0ge307XHJcblxyXG5pZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBcIm1wLXFxXCIgIT09ICdhcHAtcGx1cycpIHtcclxuICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgIGdldCAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgIGlmICh0YXJnZXRbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJhc2VBcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gYmFzZUFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSlcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKGV4dHJhQXBpW25hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGV4dHJhQXBpW25hbWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9kb0FwaXNbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudEFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBldmVudEFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaGFzT3duKHd4LCBuYW1lKSAmJiAhaGFzT3duKHByb3RvY29scywgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgd3hbbmFtZV0pKVxyXG4gICAgfSxcclxuICAgIHNldCAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KTtcclxufSBlbHNlIHtcclxuICBPYmplY3Qua2V5cyhiYXNlQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gYmFzZUFwaVtuYW1lXTtcclxuICB9KTtcclxuXHJcbiAge1xyXG4gICAgT2JqZWN0LmtleXModG9kb0FwaXMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5rZXlzKGV4dHJhQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhldmVudEFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IGV2ZW50QXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyhhcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmtleXMod3gpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoaGFzT3duKHd4LCBuYW1lKSB8fCBoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB3eFtuYW1lXSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG53eC5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XHJcbnd4LmNyZWF0ZVBhZ2UgPSBjcmVhdGVQYWdlO1xyXG53eC5jcmVhdGVDb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQ7XHJcblxyXG52YXIgdW5pJDEgPSB1bmk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1bmkkMTtcclxuZXhwb3J0IHsgY3JlYXRlQXBwLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZVBhZ2UgfTtcclxuIiwiLyohXG4gKiBWdWUuanMgdjIuNi4xMVxuICogKGMpIDIwMTQtMjAyMCBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFRoZXNlIGhlbHBlcnMgcHJvZHVjZSBiZXR0ZXIgVk0gY29kZSBpbiBKUyBlbmdpbmVzIGR1ZSB0byB0aGVpclxuLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbmZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICByZXR1cm4gdiA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiAoXG4gICAgaXNEZWYodmFsKSAmJlxuICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbFxuICAgID8gJydcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXG4gICAgICA6IFN0cmluZyh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICovXG52YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNhbWUgdmFsdWUuXG4gKi9cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKClcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc09iamVjdEEgJiYgIWlzT2JqZWN0Qikge1xuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICogY29udGFpbiBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc2hhcGUpLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIEFTU0VUX1RZUEVTID0gW1xuICAnY29tcG9uZW50JyxcbiAgJ2RpcmVjdGl2ZScsXG4gICdmaWx0ZXInXG5dO1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnYmVmb3JlQ3JlYXRlJyxcbiAgJ2NyZWF0ZWQnLFxuICAnYmVmb3JlTW91bnQnLFxuICAnbW91bnRlZCcsXG4gICdiZWZvcmVVcGRhdGUnLFxuICAndXBkYXRlZCcsXG4gICdiZWZvcmVEZXN0cm95JyxcbiAgJ2Rlc3Ryb3llZCcsXG4gICdhY3RpdmF0ZWQnLFxuICAnZGVhY3RpdmF0ZWQnLFxuICAnZXJyb3JDYXB0dXJlZCcsXG4gICdzZXJ2ZXJQcmVmZXRjaCdcbl07XG5cbi8qICAqL1xuXG5cblxudmFyIGNvbmZpZyA9ICh7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqL1xuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgKi9cbiAgcHJvZHVjdGlvblRpcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICovXG4gIGRldnRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAqL1xuICBwZXJmb3JtYW5jZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIFdhcm4gaGFuZGxlciBmb3Igd2F0Y2hlciB3YXJuc1xuICAgKi9cbiAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxuICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqL1xuICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAqIFRoaXMgd2lsbCBzaWduaWZpY2FudGx5IHJlZHVjZSBwZXJmb3JtYW5jZSBpZiBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBhc3luYzogdHJ1ZSxcblxuICAvKipcbiAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICovXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXG59KTtcblxuLyogICovXG5cbi8qKlxuICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAqIHNraXBwaW5nIFxcdTEwMDAwLVxcdUVGRkZGIGR1ZSB0byBpdCBmcmVlemluZyB1cCBQaGFudG9tSlNcbiAqL1xudmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gbmV3IFJlZ0V4cCgoXCJbXlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiLiRfXFxcXGRdXCIpKTtcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xudmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG52YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cbnZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5pZiAoaW5Ccm93c2VyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCAoe1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgfVxuICAgIH0pKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4vLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxudmFyIF9pc1NlcnZlcjtcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZGV0ZWN0IHByZXNlbmNlIG9mIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgYW5kIGF2b2lkXG4gICAgICAvLyBXZWJwYWNrIHNoaW1taW5nIHRoZSBwcm9jZXNzXG4gICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXSAmJiBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pc1NlcnZlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2lzU2VydmVyXG59O1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoQ3Rvci50b1N0cmluZygpKVxufVxuXG52YXIgaGFzU3ltYm9sID1cbiAgdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU3ltYm9sKSAmJlxuICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcblxudmFyIF9TZXQ7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldDtcbn0gZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNldCAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFtrZXldID09PSB0cnVlXG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoa2V5KSB7XG4gICAgICB0aGlzLnNldFtrZXldID0gdHJ1ZTtcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTZXQ7XG4gIH0oKSk7XG59XG5cbi8qICAqL1xuXG52YXIgd2FybiA9IG5vb3A7XG52YXIgdGlwID0gbm9vcDtcbnZhciBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gKG5vb3ApOyAvLyB3b3JrIGFyb3VuZCBmbG93IGNoZWNrXG52YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IChub29wKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXSkoXFx3KS9nO1xuICB2YXIgY2xhc3NpZnkgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHJcbiAgICAucmVwbGFjZShjbGFzc2lmeVJFLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KVxuICAgIC5yZXBsYWNlKC9bLV9dL2csICcnKTsgfTtcblxuICB3YXJuID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICB2YXIgdHJhY2UgPSB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJyc7XG5cbiAgICBpZiAoY29uZmlnLndhcm5IYW5kbGVyKSB7XG4gICAgICBjb25maWcud2FybkhhbmRsZXIuY2FsbChudWxsLCBtc2csIHZtLCB0cmFjZSk7XG4gICAgfSBlbHNlIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW1Z1ZSB3YXJuXTogXCIgKyBtc2cgKyB0cmFjZSkpO1xuICAgIH1cbiAgfTtcblxuICB0aXAgPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyAoXG4gICAgICAgIHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJ1xuICAgICAgKSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XG4gICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgaWYgKHZtLiRvcHRpb25zICYmIHZtLiRvcHRpb25zLl9fZmlsZSkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgcmV0dXJuICgnJykgKyB2bS4kb3B0aW9ucy5fX2ZpbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPFJvb3Q+J1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiB2bSA9PT0gJ2Z1bmN0aW9uJyAmJiB2bS5jaWQgIT0gbnVsbFxuICAgICAgPyB2bS5vcHRpb25zXG4gICAgICA6IHZtLl9pc1Z1ZVxuICAgICAgICA/IHZtLiRvcHRpb25zIHx8IHZtLmNvbnN0cnVjdG9yLm9wdGlvbnNcbiAgICAgICAgOiB2bTtcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgdmFyIGZpbGUgPSBvcHRpb25zLl9fZmlsZTtcbiAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xuICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICBuYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChuYW1lID8gKFwiPFwiICsgKGNsYXNzaWZ5KG5hbWUpKSArIFwiPlwiKSA6IFwiPEFub255bW91cz5cIikgK1xuICAgICAgKGZpbGUgJiYgaW5jbHVkZUZpbGUgIT09IGZhbHNlID8gKFwiIGF0IFwiICsgZmlsZSkgOiAnJylcbiAgICApXG4gIH07XG5cbiAgdmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChzdHIsIG4pIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChuICUgMiA9PT0gMSkgeyByZXMgKz0gc3RyOyB9XG4gICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxuICAgICAgbiA+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9O1xuXG4gIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcbiAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgIHZhciB0cmVlID0gW107XG4gICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgIHdoaWxlICh2bSAmJiB2bS4kb3B0aW9ucy5uYW1lICE9PSAnUGFnZUJvZHknKSB7XG4gICAgICAgIGlmICh0cmVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbGFzdCA9IHRyZWVbdHJlZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAobGFzdC5jb25zdHJ1Y3RvciA9PT0gdm0uY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSsrO1xuICAgICAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA+IDApIHtcbiAgICAgICAgICAgIHRyZWVbdHJlZS5sZW5ndGggLSAxXSA9IFtsYXN0LCBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2VdO1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXZtLiRvcHRpb25zLmlzUmVzZXJ2ZWQgJiYgdHJlZS5wdXNoKHZtKTtcbiAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZtLCBpKSB7IHJldHVybiAoXCJcIiArIChpID09PSAwID8gJy0tLT4gJyA6IHJlcGVhdCgnICcsIDUgKyBpICogMikpICsgKEFycmF5LmlzQXJyYXkodm0pXG4gICAgICAgICAgICA/ICgoZm9ybWF0Q29tcG9uZW50TmFtZSh2bVswXSkpICsgXCIuLi4gKFwiICsgKHZtWzFdKSArIFwiIHJlY3Vyc2l2ZSBjYWxscylcIilcbiAgICAgICAgICAgIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpKTsgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJcXG5cXG4oZm91bmQgaW4gXCIgKyAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIpXCIpXG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCA9IDA7XG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICovXG52YXIgRGVwID0gZnVuY3Rpb24gRGVwICgpIHtcbiAgLy8gZml4ZWQgYnkgeHh4eHh4IChudnVlIHZ1ZXgpXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIGlmKHR5cGVvZiBTaGFyZWRPYmplY3QgIT09ICd1bmRlZmluZWQnKXtcbiAgICB0aGlzLmlkID0gU2hhcmVkT2JqZWN0LnVpZCsrO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaWQgPSB1aWQrKztcbiAgfVxuICB0aGlzLnN1YnMgPSBbXTtcbn07XG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gYWRkU3ViIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gcmVtb3ZlU3ViIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7XG4gICAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICB9XG59O1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgIC8vIG9yZGVyXG4gICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG4vLyBmaXhlZCBieSB4eHh4eHggKG52dWUgc2hhcmVkIHZ1ZXgpXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuRGVwLlNoYXJlZE9iamVjdCA9IHR5cGVvZiBTaGFyZWRPYmplY3QgIT09ICd1bmRlZmluZWQnID8gU2hhcmVkT2JqZWN0IDoge307XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFja1tEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgey8vIGZpeGVkIGJ5IHh4eHh4eCDlvq7kv6HlsI/nqIvluo/kvb/nlKggcGx1Z2lucyDkuYvlkI7vvIzmlbDnu4Tmlrnms5Xooqvnm7TmjqXmjILovb3liLDkuobmlbDnu4Tlr7nosaHkuIrvvIzpnIDopoHmiafooYwgY29weUF1Z21lbnQg6YC76L6RXG4gICAgICAgIGlmKHZhbHVlLnB1c2ggIT09IHZhbHVlLl9fcHJvdG9fXy5wdXNoKXtcbiAgICAgICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvQXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7IHJldHVybiB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRvVmFsICE9PSBmcm9tVmFsICYmXG4gICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgdmFyIHJlcyA9IGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbDtcbiAgcmV0dXJuIHJlc1xuICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgIDogcmVzXG59XG5cbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkxJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcbn0pO1xuXG4vKipcbiAqIEFzc2V0c1xuICpcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAqIGEgdGhyZWUtd2F5IG1lcmdlIGJldHdlZW4gY29uc3RydWN0b3Igb3B0aW9ucywgaW5zdGFuY2VcbiAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCk7XG4gIGlmIChjaGlsZFZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5BU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICBpZiAoY2hpbGRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IGNoaWxkVmFsID0gdW5kZWZpbmVkOyB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IHt9O1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcbiAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgIH1cbiAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXRcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5pbmplY3QgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgaWYgKGNoaWxkVmFsICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgaWYgKGNoaWxkVmFsKSB7IGV4dGVuZChyZXQsIGNoaWxkVmFsKTsgfVxuICByZXR1cm4gcmV0XG59O1xuc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgaWYgKCFuZXcgUmVnRXhwKChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSokXCIpKS50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnc2hvdWxkIGNvbmZvcm0gdG8gdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZSBpbiBodG1sNSBzcGVjaWZpY2F0aW9uLidcbiAgICApO1xuICB9XG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAnaWQ6ICcgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgaSwgdmFsLCBuYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyB2YWxcbiAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZSAobmFtZSwgdmFsdWUsIHZtKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIlwiICsgbmFtZSArIFwiXFxcIjogZXhwZWN0ZWQgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIHZtXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgfVxuXG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcblxuICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVBc3NldCAoXG4gIG9wdGlvbnMsXG4gIHR5cGUsXG4gIGlkLFxuICB3YXJuTWlzc2luZ1xuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICBpZiAoaGFzT3duKGFzc2V0cywgaWQpKSB7IHJldHVybiBhc3NldHNbaWRdIH1cbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgdmFyIFBhc2NhbENhc2VJZCA9IGNhcGl0YWxpemUoY2FtZWxpemVkSWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oXG4gICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSlcbiAgKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICBpZiAodm0gJiYgdm0uJG9wdGlvbnMucHJvcHNEYXRhICYmXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICB3YXJuKFxuICAgICAgZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBzaW1wbGVDaGVja1JFID0gL14oU3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufFN5bWJvbCkkLztcblxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcbiAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXG4gKiBiZWNhdXNlIGEgc2ltcGxlIGVxdWFsaXR5IGNoZWNrIHdpbGwgZmFpbCB3aGVuIHJ1bm5pbmdcbiAqIGFjcm9zcyBkaWZmZXJlbnQgdm1zIC8gaWZyYW1lcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSAoZm4pIHtcbiAgdmFyIG1hdGNoID0gZm4gJiYgZm4udG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xufVxuXG5mdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XG4gIHJldHVybiBnZXRUeXBlKGEpID09PSBnZXRUeXBlKGIpXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVJbmRleCAodHlwZSwgZXhwZWN0ZWRUeXBlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRUeXBlcykpIHtcbiAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMVxuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZFR5cGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UgKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gIHZhciBtZXNzYWdlID0gXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgIFwiIEV4cGVjdGVkIFwiICsgKGV4cGVjdGVkVHlwZXMubWFwKGNhcGl0YWxpemUpLmpvaW4oJywgJykpO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlc1swXTtcbiAgdmFyIHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgdmFyIHJlY2VpdmVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCByZWNlaXZlZFR5cGUpO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJlxuICAgICAgIWlzQm9vbGVhbihleHBlY3RlZFR5cGUsIHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICB9XG4gIG1lc3NhZ2UgKz0gXCIsIGdvdCBcIiArIHJlY2VpdmVkVHlwZSArIFwiIFwiO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgcmVjZWl2ZWQgdmFsdWVcbiAgaWYgKGlzRXhwbGljYWJsZShyZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIndpdGggdmFsdWUgXCIgKyByZWNlaXZlZFZhbHVlICsgXCIuXCI7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICByZXR1cm4gKFwiXCIgKyAoTnVtYmVyKHZhbHVlKSkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICB2YXIgZXhwbGljaXRUeXBlcyA9IFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ107XG4gIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW07IH0pXG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50b0xvd2VyQ2FzZSgpID09PSAnYm9vbGVhbic7IH0pXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVleC9pc3N1ZXMvMTUwNVxuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgaWYgKHZtKSB7XG4gICAgICB2YXIgY3VyID0gdm07XG4gICAgICB3aGlsZSAoKGN1ciA9IGN1ci4kcGFyZW50KSkge1xuICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcbiAgICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVFcnJvcihlLCBjdXIsICdlcnJvckNhcHR1cmVkIGhvb2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcgKFxuICBoYW5kbGVyLFxuICBjb250ZXh0LFxuICBhcmdzLFxuICB2bSxcbiAgaW5mb1xuKSB7XG4gIHZhciByZXM7XG4gIHRyeSB7XG4gICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG4gICAgaWYgKHJlcyAmJiAhcmVzLl9pc1Z1ZSAmJiBpc1Byb21pc2UocmVzKSAmJiAhcmVzLl9oYW5kbGVkKSB7XG4gICAgICByZXMuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvICsgXCIgKFByb21pc2UvYXN5bmMpXCIpOyB9KTtcbiAgICAgIC8vIGlzc3VlICM5NTExXG4gICAgICAvLyBhdm9pZCBjYXRjaCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzIHdoZW4gbmVzdGVkIGNhbGxzXG4gICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChjb25maWcuZXJyb3JIYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAvLyBkbyBub3QgbG9nIGl0IHR3aWNlXG4gICAgICBpZiAoZSAhPT0gZXJyKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MgKCkge1xuICBwZW5kaW5nID0gZmFsc2U7XG4gIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvcGllc1tpXSgpO1xuICB9XG59XG5cbi8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbi8vIEluIDIuNSB3ZSB1c2VkIChtYWNybykgdGFza3MgKGluIGNvbWJpbmF0aW9uIHdpdGggbWljcm90YXNrcykuXG4vLyBIb3dldmVyLCBpdCBoYXMgc3VidGxlIHByb2JsZW1zIHdoZW4gc3RhdGUgaXMgY2hhbmdlZCByaWdodCBiZWZvcmUgcmVwYWludFxuLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4vLyBBbHNvLCB1c2luZyAobWFjcm8pIHRhc2tzIGluIGV2ZW50IGhhbmRsZXIgd291bGQgY2F1c2Ugc29tZSB3ZWlyZCBiZWhhdmlvcnNcbi8vIHRoYXQgY2Fubm90IGJlIGNpcmN1bXZlbnRlZCAoZS5nLiAjNzEwOSwgIzcxNTMsICM3NTQ2LCAjNzgzNCwgIzgxMDkpLlxuLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuLy8gQSBtYWpvciBkcmF3YmFjayBvZiB0aGlzIHRyYWRlb2ZmIGlzIHRoYXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zXG4vLyB3aGVyZSBtaWNyb3Rhc2tzIGhhdmUgdG9vIGhpZ2ggYSBwcmlvcml0eSBhbmQgZmlyZSBpbiBiZXR3ZWVuIHN1cHBvc2VkbHlcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbi8vIG9yIGV2ZW4gYmV0d2VlbiBidWJibGluZyBvZiB0aGUgc2FtZSBldmVudCAoIzY1NjYpLlxudmFyIHRpbWVyRnVuYztcblxuLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbi8vIHZpYSBlaXRoZXIgbmF0aXZlIFByb21pc2UudGhlbiBvciBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXV0YXRpb25PYnNlcnZlciBoYXMgd2lkZXIgc3VwcG9ydCwgaG93ZXZlciBpdCBpcyBzZXJpb3VzbHkgYnVnZ2VkIGluXG4vLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuLy8gY29tcGxldGVseSBzdG9wcyB3b3JraW5nIGFmdGVyIHRyaWdnZXJpbmcgYSBmZXcgdGltZXMuLi4gc28sIGlmIG5hdGl2ZVxuLy8gUHJvbWlzZSBpcyBhdmFpbGFibGUsIHdlIHdpbGwgdXNlIGl0OlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQsICRmbG93LWRpc2FibGUtbGluZSAqL1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcC50aGVuKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAvLyBJbiBwcm9ibGVtYXRpYyBVSVdlYlZpZXdzLCBQcm9taXNlLnRoZW4gZG9lc24ndCBjb21wbGV0ZWx5IGJyZWFrLCBidXRcbiAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYnV0IHRoZSBxdWV1ZSBpc24ndCBiZWluZyBmbHVzaGVkLCB1bnRpbCB0aGUgYnJvd3NlclxuICAgIC8vIG5lZWRzIHRvIGRvIHNvbWUgb3RoZXIgd29yaywgZS5nLiBoYW5kbGUgYSB0aW1lci4gVGhlcmVmb3JlIHdlIGNhblxuICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgIGlmIChpc0lPUykgeyBzZXRUaW1lb3V0KG5vb3ApOyB9XG4gIH07XG59IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gIC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4pKSB7XG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHdoZXJlIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBhdmFpbGFibGUsXG4gIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gIHZhciBjb3VudGVyID0gMTtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICtcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxuICApO1xuXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcbiAgICAgICdlaXRoZXIgaW4gdGhlIGRhdGEgb3B0aW9uLCBvciBmb3IgY2xhc3MtYmFzZWQgY29tcG9uZW50cywgYnkgJyArXG4gICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHdhcm5SZXNlcnZlZFByZWZpeCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgK1xuICAgICAgJ3Byb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBcIiRcIiBvciBcIl9cIiBhcmUgbm90IHByb3hpZWQgaW4gdGhlIFZ1ZSBpbnN0YW5jZSB0byAnICtcbiAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGhhc1Byb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcblxuICBpZiAoaGFzUHJveHkpIHtcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhLGV4YWN0Jyk7XG4gICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNIYW5kbGVyID0ge1xuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgdmFyIGhhcyA9IGtleSBpbiB0YXJnZXQ7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fFxuICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5LmNoYXJBdCgwKSA9PT0gJ18nICYmICEoa2V5IGluIHRhcmdldC4kZGF0YSkpO1xuICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgfVxuICB9O1xuXG4gIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcbiAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm94eSBoYW5kbGVyIHRvIHVzZVxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWRcbiAgICAgICAgPyBnZXRIYW5kbGVyXG4gICAgICAgIDogaGFzSGFuZGxlcjtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IG5ldyBQcm94eSh2bSwgaGFuZGxlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG4gIHNlZW5PYmplY3RzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIHZhciBpLCBrZXlzO1xuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbC5fX29iX18pIHtcbiAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2Vlbi5hZGQoZGVwSWQpO1xuICB9XG4gIGlmIChpc0EpIHtcbiAgICBpID0gdmFsLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxbaV0sIHNlZW4pOyB9XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7IH1cbiAgfVxufVxuXG52YXIgbWFyaztcbnZhciBtZWFzdXJlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcGVyZiA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoXG4gICAgcGVyZiAmJlxuICAgIHBlcmYubWFyayAmJlxuICAgIHBlcmYubWVhc3VyZSAmJlxuICAgIHBlcmYuY2xlYXJNYXJrcyAmJlxuICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICApIHtcbiAgICBtYXJrID0gZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gcGVyZi5tYXJrKHRhZyk7IH07XG4gICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICBwZXJmLm1lYXN1cmUobmFtZSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3Moc3RhcnRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAvLyBwZXJmLmNsZWFyTWVhc3VyZXMobmFtZSlcbiAgICB9O1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgbmFtZSA9IG9uY2UkJDEgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb25jZTogb25jZSQkMSxcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zLCB2bSkge1xuICBmdW5jdGlvbiBpbnZva2VyICgpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgdmFyIGNsb25lZCA9IGZucy5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2xvbmVkW2ldLCBudWxsLCBhcmd1bWVudHMkMSwgdm0sIFwidi1vbiBoYW5kbGVyXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgcmV0dXJuIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGZucywgbnVsbCwgYXJndW1lbnRzLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIilcbiAgICB9XG4gIH1cbiAgaW52b2tlci5mbnMgPSBmbnM7XG4gIHJldHVybiBpbnZva2VyXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RlbmVycyAoXG4gIG9uLFxuICBvbGRPbixcbiAgYWRkLFxuICByZW1vdmUkJDEsXG4gIGNyZWF0ZU9uY2VIYW5kbGVyLFxuICB2bVxuKSB7XG4gIHZhciBuYW1lLCBkZWYkJDEsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgZGVmJCQxID0gY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNUcnVlKGV2ZW50Lm9uY2UpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobXAgcHJvcGVydGllcylcclxuZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dCkge1xyXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMgJiYgQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5wcm9wZXJ0aWVzO1xyXG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cbiAgdmFyIGV4dGVybmFsQ2xhc3NlcyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzIHx8IFtdO1xyXG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XHJcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xyXG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICB2YXIgcmVzdWx0ID0gY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgICAgLy8gZXh0ZXJuYWxDbGFzc1xuICAgICAgaWYgKFxuICAgICAgICByZXN1bHQgJiZcbiAgICAgICAgcmVzW2tleV0gJiZcbiAgICAgICAgZXh0ZXJuYWxDbGFzc2VzLmluZGV4T2YoYWx0S2V5KSAhPT0gLTEgJiZcbiAgICAgICAgY29udGV4dFtjYW1lbGl6ZShyZXNba2V5XSldXG4gICAgICApIHtcbiAgICAgICAgLy8g6LWL5YC8IGV4dGVybmFsQ2xhc3Mg55yf5q2j55qE5YC8KOaooeadv+mHjCBleHRlcm5hbENsYXNzIOeahOWAvOWPr+iDveaYr+Wtl+espuS4silcbiAgICAgICAgcmVzW2tleV0gPSBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV07XG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnLFxuICBjb250ZXh0Ly8gZml4ZWQgYnkgeHh4eHh4XG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dClcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXhlZCBieSB4eHh4eHgg5Li05pe2IGhhY2sg5o6JIHVuaS1hcHAg5Lit55qE5byC5q2lIG5hbWUgc2xvdCBwYWdlXG4gICAgICBpZihjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKXtcbiAgICAgICAgKHNsb3RzWydwYWdlJ10gfHwgKHNsb3RzWydwYWdlJ10gPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCwgaSsrLCBpKSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcywgdGhpcywgcHJvcHMuX2kpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUF0dGFjaGVkJyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cbiAgXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCB1cGRhdGUgcHJvcGVydGllcyhtcCBydW50aW1lKVxuICB2bS5fJHVwZGF0ZVByb3BlcnRpZXMgJiYgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzKHZtKTtcbiAgXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZih2bS5tcEhvc3QgPT09ICdtcC1iYWlkdScpey8v55m+5bqmIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2YWx1ZScgJiYgXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgICAgICAgICAgICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih2bS5fZ2V0Rm9ybURhdGEpe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIHdoaWxlKCRwYXJlbnQpe1xuICAgICAgICAgICAgICBpZigkcGFyZW50Ll9fbmV4dF90aWNrX3BlbmRpbmcpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgey8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzICBcbiAgICBpbml0U3RhdGUodm0pO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTsgICAgICBcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjExJztcblxuLyoqXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGVuY2VudC93ZXN0b3JlL21hc3Rlci9wYWNrYWdlcy93ZXN0b3JlL3V0aWxzL2RpZmYuanNcbiAqL1xudmFyIEFSUkFZVFlQRSA9ICdbb2JqZWN0IEFycmF5XSc7XG52YXIgT0JKRUNUVFlQRSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuLy8gY29uc3QgRlVOQ1RJT05UWVBFID0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuXG5mdW5jdGlvbiBkaWZmKGN1cnJlbnQsIHByZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBzeW5jS2V5cyhjdXJyZW50LCBwcmUpO1xuICAgIF9kaWZmKGN1cnJlbnQsIHByZSwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzeW5jS2V5cyhjdXJyZW50LCBwcmUpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSAmJiByb290UHJlVHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCA+PSBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFtrZXldID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50VmFsdWUsIHByZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUgJiYgcm9vdFByZVR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+PSBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50W2luZGV4XSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2RpZmYoY3VycmVudCwgcHJlLCBwYXRoLCByZXN1bHQpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHByZVZhbHVlID0gcHJlW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwcmVUeXBlID0gdHlwZShwcmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9IEFSUkFZVFlQRSAmJiBjdXJyZW50VHlwZSAhPSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT0gcHJlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoIDwgcHJlVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVWYWx1ZVtpbmRleF0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50VmFsdWUpLmxlbmd0aCA8IE9iamVjdC5rZXlzKHByZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3ViS2V5IGluIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGN1cnJlbnRWYWx1ZVtzdWJLZXldLCBwcmVWYWx1ZVtzdWJLZXldLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICcuJyArIHN1YktleSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50KSBsb29wKCBrZXkgKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm9vdEN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA8IHByZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVbaW5kZXhdLCBwYXRoICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFJlc3VsdChyZXN1bHQsIGssIHYpIHtcbiAgICAvLyBpZiAodHlwZSh2KSAhPSBGVU5DVElPTlRZUEUpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gdjtcbiAgICAvLyB9XG59XG5cbmZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXG59XG5cbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MkMSh2bSkge1xyXG4gICAgaWYgKHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyAmJiB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcclxuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xyXG4gICAgICAgICAgICAgICAgJ106Zmx1c2hDYWxsYmFja3NbJyArIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGggKyAnXScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29waWVzID0gdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvcGllc1tpXSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFzUmVuZGVyV2F0Y2hlcih2bSkge1xyXG4gICAgcmV0dXJuIHF1ZXVlLmZpbmQoZnVuY3Rpb24gKHdhdGNoZXIpIHsgcmV0dXJuIHZtLl93YXRjaGVyID09PSB3YXRjaGVyOyB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0VGljayQxKHZtLCBjYikge1xyXG4gICAgLy8xLm5leHRUaWNrIOS5i+WJjSDlt7Igc2V0RGF0YSDkuJQgc2V0RGF0YSDov5jmnKrlm57osIPlrozmiJBcclxuICAgIC8vMi5uZXh0VGljayDkuYvliY3lrZjlnKggcmVuZGVyIHdhdGNoZXJcclxuICAgIGlmICghdm0uX19uZXh0X3RpY2tfcGVuZGluZyAmJiAhaGFzUmVuZGVyV2F0Y2hlcih2bSkpIHtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRWdWVUaWNrJyk7XG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV4dFRpY2soY2IsIHZtKVxyXG4gICAgfWVsc2V7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UkMSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlJDEuaXMgfHwgbXBJbnN0YW5jZSQxLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0TVBUaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XHJcbiAgICB2YXIgX3Jlc29sdmU7XHJcbiAgICBpZiAoIXZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcykge1xyXG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY2IuY2FsbCh2bSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAnbmV4dFRpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcclxuICAgICAgICAgICAgX3Jlc29sdmUodm0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXHJcbiAgICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxuXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGNsb25lV2l0aERhdGEodm0pIHtcclxuICAvLyDnoa7kv53lvZPliY0gdm0g5omA5pyJ5pWw5o2u6KKr5ZCM5q2lXHJcbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgdmFyIGRhdGFLZXlzID0gW10uY29uY2F0KFxyXG4gICAgT2JqZWN0LmtleXModm0uX2RhdGEgfHwge30pLFxyXG4gICAgT2JqZWN0LmtleXModm0uX2NvbXB1dGVkV2F0Y2hlcnMgfHwge30pKTtcclxuXHJcbiAgZGF0YUtleXMucmVkdWNlKGZ1bmN0aW9uKHJldCwga2V5KSB7XHJcbiAgICByZXRba2V5XSA9IHZtW2tleV07XHJcbiAgICByZXR1cm4gcmV0XHJcbiAgfSwgcmV0KTtcclxuICAvL1RPRE8g6ZyA6KaB5oqK5peg55So5pWw5o2u5aSE55CG5o6J77yM5q+U5aaCIGxpc3Q9PmwwIOWImSBsaXN0IOmcgOimgeenu+mZpO+8jOWQpuWImeWkmuS8oOi+k+S4gOS7veaVsOaNrlxyXG4gIE9iamVjdC5hc3NpZ24ocmV0LCB2bS4kbXAuZGF0YSB8fCB7fSk7XHJcbiAgaWYgKFxyXG4gICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXHJcbiAgICB2bS4kb3B0aW9ucy5iZWhhdmlvcnMuaW5kZXhPZigndW5pOi8vZm9ybS1maWVsZCcpICE9PSAtMVxyXG4gICkgeyAvL2Zvcm0tZmllbGRcclxuICAgIHJldFsnbmFtZSddID0gdm0ubmFtZTtcclxuICAgIHJldFsndmFsdWUnXSA9IHZtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmV0KSlcclxufVxyXG5cclxudmFyIHBhdGNoID0gZnVuY3Rpb24ob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXHJcbiAgaWYgKHZub2RlID09PSBudWxsKSB7IC8vZGVzdHJveVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmICh0aGlzLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IHRoaXMubXBUeXBlID09PSAnY29tcG9uZW50Jykge1xyXG4gICAgdmFyIG1wSW5zdGFuY2UgPSB0aGlzLiRzY29wZTtcclxuICAgIHZhciBkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBjbG9uZVdpdGhEYXRhKHRoaXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIGRhdGEuX193ZWJ2aWV3SWRfXyA9IG1wSW5zdGFuY2UuZGF0YS5fX3dlYnZpZXdJZF9fO1xyXG4gICAgdmFyIG1wRGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgLy/ku4XlkIzmraUgZGF0YSDkuK3mnInnmoTmlbDmja5cclxuICAgICAgbXBEYXRhW2tleV0gPSBtcEluc3RhbmNlLmRhdGFba2V5XTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGRpZmZEYXRhID0gdGhpcy4kc2hvdWxkRGlmZkRhdGEgPT09IGZhbHNlID8gZGF0YSA6IGRpZmYoZGF0YSwgbXBEYXRhKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmRGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdGhpcy5fdWlkICtcclxuICAgICAgICAgICdd5beu6YeP5pu05pawJyxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRpZmZEYXRhKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX25leHRfdGlja19wZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgbXBJbnN0YW5jZS5zZXREYXRhKGRpZmZEYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcyQxLl9fbmV4dF90aWNrX3BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMkMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmx1c2hDYWxsYmFja3MkMSh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVJlbmRlcigpIHtcblxufVxuXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCQxKFxuICB2bSxcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIGlmICghdm0ubXBUeXBlKSB7Ly9tYWluLmpzIOS4reeahCBuZXcgVnVlXG4gICAgcmV0dXJuIHZtXG4gIH1cbiAgaWYgKHZtLm1wVHlwZSA9PT0gJ2FwcCcpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVJlbmRlcjtcbiAgfVxuICBpZiAoIXZtLiRvcHRpb25zLnJlbmRlcikge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICgodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHx8XG4gICAgICAgIHZtLiRvcHRpb25zLmVsIHx8IGVsKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCBvZiBWdWUgd2hlcmUgdGhlIHRlbXBsYXRlICcgK1xuICAgICAgICAgICdjb21waWxlciBpcyBub3QgYXZhaWxhYmxlLiBFaXRoZXIgcHJlLWNvbXBpbGUgdGhlIHRlbXBsYXRlcyBpbnRvICcgK1xuICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgdmFyIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgfTtcblxuICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXG4gIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgICAgIGlmICh2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRydWUgLyogaXNSZW5kZXJXYXRjaGVyICovKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG4gIHJldHVybiB2bVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVuZGVyQ2xhc3MgKFxuICBzdGF0aWNDbGFzcyxcbiAgZHluYW1pY0NsYXNzXG4pIHtcbiAgaWYgKGlzRGVmKHN0YXRpY0NsYXNzKSB8fCBpc0RlZihkeW5hbWljQ2xhc3MpKSB7XG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBhID8gYiA/IChhICsgJyAnICsgYikgOiBhIDogKGIgfHwgJycpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUNsYXNzICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5QXJyYXkgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIHN0cmluZ2lmaWVkO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpc0RlZihzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkgJiYgc3RyaW5naWZpZWQgIT09ICcnKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBzdHJpbmdpZmllZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlPYmplY3QgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICB2YXIgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcgKGJpbmRpbmdTdHlsZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKVxuICB9XG4gIHJldHVybiBiaW5kaW5nU3R5bGVcbn1cblxuLyogICovXHJcblxyXG52YXIgTVBfTUVUSE9EUyA9IFsnY3JlYXRlU2VsZWN0b3JRdWVyeScsICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsICdzZWxlY3RBbGxDb21wb25lbnRzJywgJ3NlbGVjdENvbXBvbmVudCddO1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KG9iaiwgcGF0aCkge1xyXG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuICB2YXIga2V5ID0gcGFydHNbMF07XHJcbiAgaWYgKGtleS5pbmRleE9mKCdfXyRuJykgPT09IDApIHsgLy9udW1iZXIgaW5kZXhcclxuICAgIGtleSA9IHBhcnNlSW50KGtleS5yZXBsYWNlKCdfXyRuJywgJycpKTtcclxuICB9XHJcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG9ialtrZXldXHJcbiAgfVxyXG4gIHJldHVybiBnZXRUYXJnZXQob2JqW2tleV0sIHBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW50ZXJuYWxNaXhpbihWdWUgKSB7XHJcblxyXG4gIFZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24oZXJyLCB2bSwgaW5mbykge1xyXG4gICAgVnVlLnV0aWwud2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICB2YXIgYXBwID0gZ2V0QXBwKCk7XHJcbiAgICBpZiAoYXBwICYmIGFwcC5vbkVycm9yKSB7XHJcbiAgICAgIGFwcC5vbkVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9sZEVtaXQgPSBWdWUucHJvdG90eXBlLiRlbWl0O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiBldmVudCkge1xyXG4gICAgICB0aGlzLiRzY29wZVsndHJpZ2dlckV2ZW50J10oZXZlbnQsIHtcclxuICAgICAgICBfX2FyZ3NfXzogdG9BcnJheShhcmd1bWVudHMsIDEpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9sZEVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIHJldHVybiBuZXh0VGljayQxKHRoaXMsIGZuKVxyXG4gIH07XHJcblxyXG4gIE1QX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICBWdWUucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZVttZXRob2RdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlW21ldGhvZF0oYXJncylcclxuICAgICAgfVxyXG4gICAgICAvLyBtcC1hbGlwYXlcclxuICAgICAgaWYgKHR5cGVvZiBteSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAobWV0aG9kID09PSAnY3JlYXRlU2VsZWN0b3JRdWVyeScpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgIHJldHVybiBteS5jcmVhdGVTZWxlY3RvclF1ZXJ5KGFyZ3MpXHJcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICByZXR1cm4gbXkuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXJncylcclxuICAgICAgfVxyXG4gICAgICAvLyBUT0RPIG1wLWFsaXBheSDmmoLkuI3mlK/mjIEgc2VsZWN0QWxsQ29tcG9uZW50cyxzZWxlY3RDb21wb25lbnRcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19pbml0X3Byb3ZpZGUgPSBpbml0UHJvdmlkZTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfaW5qZWN0aW9ucyA9IGluaXRJbmplY3Rpb25zO1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rID0gZnVuY3Rpb24oaG9vaywgYXJncykge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcclxuICAgIHB1c2hUYXJnZXQoKTtcclxuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xyXG4gICAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xyXG4gICAgdmFyIHJldDtcclxuICAgIGlmIChoYW5kbGVycykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgIHJldCA9IGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgYXJncyA/IFthcmdzXSA6IG51bGwsIHZtLCBpbmZvKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcclxuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2ssIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgcG9wVGFyZ2V0KCk7XHJcbiAgICByZXR1cm4gcmV0XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX3NldF9tb2RlbCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSwgbW9kaWZpZXJzKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RpZmllcnMpKSB7XHJcbiAgICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZigndHJpbScpICE9PSAtMSkge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZignbnVtYmVyJykgIT09IC0xKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9uKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgdGFyZ2V0ID0gdGhpcztcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX3NldF9zeW5jID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICB0YXJnZXQgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fZ2V0X29yaWcgPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChpdGVtKSkge1xyXG4gICAgICByZXR1cm4gaXRlbVsnJG9yaWcnXSB8fCBpdGVtXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfdmFsdWUgPSBmdW5jdGlvbihkYXRhUGF0aCwgdGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gZ2V0VGFyZ2V0KHRhcmdldCB8fCB0aGlzLCBkYXRhUGF0aClcclxuICB9O1xyXG5cclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX2dldF9jbGFzcyA9IGZ1bmN0aW9uKGR5bmFtaWNDbGFzcywgc3RhdGljQ2xhc3MpIHtcclxuICAgIHJldHVybiByZW5kZXJDbGFzcyhzdGF0aWNDbGFzcywgZHluYW1pY0NsYXNzKVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfc3R5bGUgPSBmdW5jdGlvbihkeW5hbWljU3R5bGUsIHN0YXRpY1N0eWxlKSB7XHJcbiAgICBpZiAoIWR5bmFtaWNTdHlsZSAmJiAhc3RhdGljU3R5bGUpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcbiAgICB2YXIgZHluYW1pY1N0eWxlT2JqID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGR5bmFtaWNTdHlsZSk7XHJcbiAgICB2YXIgc3R5bGVPYmogPSBzdGF0aWNTdHlsZSA/IGV4dGVuZChzdGF0aWNTdHlsZSwgZHluYW1pY1N0eWxlT2JqKSA6IGR5bmFtaWNTdHlsZU9iajtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAoKGh5cGhlbmF0ZShuYW1lKSkgKyBcIjpcIiArIChzdHlsZU9ialtuYW1lXSkpOyB9KS5qb2luKCc7JylcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fbWFwID0gZnVuY3Rpb24odmFsLCBpdGVyYXRlZSkge1xyXG4gICAgLy9UT0RPIOaaguS4jeiAg+iZkSBzdHJpbmcsbnVtYmVyXHJcbiAgICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcclxuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICByZXRbaV0gPSBpdGVyYXRlZSh2YWxbaV0sIGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXRcclxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xyXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcclxuICAgICAgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcclxuICAgICAgICByZXRba2V5XSA9IGl0ZXJhdGVlKHZhbFtrZXldLCBrZXksIGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXRcclxuICAgIH1cclxuICAgIHJldHVybiBbXVxyXG4gIH07XHJcblxyXG59XG5cbi8qICAqL1xyXG5cclxudmFyIExJRkVDWUNMRV9IT09LUyQxID0gW1xyXG4gICAgLy9BcHBcclxuICAgICdvbkxhdW5jaCcsXHJcbiAgICAnb25TaG93JyxcclxuICAgICdvbkhpZGUnLFxyXG4gICAgJ29uVW5pTlZpZXdNZXNzYWdlJyxcbiAgICAnb25FcnJvcicsXHJcbiAgICAvL1BhZ2VcclxuICAgICdvbkxvYWQnLFxyXG4gICAgLy8gJ29uU2hvdycsXHJcbiAgICAnb25SZWFkeScsXHJcbiAgICAvLyAnb25IaWRlJyxcclxuICAgICdvblVubG9hZCcsXHJcbiAgICAnb25QdWxsRG93blJlZnJlc2gnLFxyXG4gICAgJ29uUmVhY2hCb3R0b20nLFxyXG4gICAgJ29uVGFiSXRlbVRhcCcsXHJcbiAgICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxuICAgICdvblJlc2l6ZScsXHJcbiAgICAnb25QYWdlU2Nyb2xsJyxcclxuICAgICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnLFxyXG4gICAgJ29uQmFja1ByZXNzJyxcclxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnLFxyXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJyxcclxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnLFxyXG4gICAgLy9Db21wb25lbnRcclxuICAgIC8vICdvblJlYWR5JywgLy8g5YW85a655pen54mI5pys77yM5bqU6K+l56e76Zmk6K+l5LqL5Lu2XHJcbiAgICAnb25QYWdlU2hvdycsXHJcbiAgICAnb25QYWdlSGlkZScsXHJcbiAgICAnb25QYWdlUmVzaXplJ1xyXG5dO1xyXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiQxKFZ1ZSkge1xyXG5cclxuICAgIC8vZml4ZWQgdnVlLWNsYXNzLWNvbXBvbmVudFxyXG4gICAgdmFyIG9sZEV4dGVuZCA9IFZ1ZS5leHRlbmQ7XHJcbiAgICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24oZXh0ZW5kT3B0aW9ucykge1xyXG4gICAgICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICB2YXIgbWV0aG9kcyA9IGV4dGVuZE9wdGlvbnMubWV0aG9kcztcclxuICAgICAgICBpZiAobWV0aG9kcykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTElGRUNZQ0xFX0hPT0tTJDEuaW5kZXhPZihtZXRob2ROYW1lKSE9PS0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kT3B0aW9uc1ttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9sZEV4dGVuZC5jYWxsKHRoaXMsIGV4dGVuZE9wdGlvbnMpXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJhdGVnaWVzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XHJcbiAgICB2YXIgbWVyZ2VIb29rID0gc3RyYXRlZ2llcy5jcmVhdGVkO1xyXG4gICAgTElGRUNZQ0xFX0hPT0tTJDEuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xyXG4gICAgICAgIHN0cmF0ZWdpZXNbaG9va10gPSBtZXJnZUhvb2s7XHJcbiAgICB9KTtcclxuXHJcbiAgICBWdWUucHJvdG90eXBlLl9fbGlmZWN5Y2xlX2hvb2tzX18gPSBMSUZFQ1lDTEVfSE9PS1MkMTtcclxufVxuXG4vKiAgKi9cclxuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHBhdGNoIGZ1bmN0aW9uXHJcblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gcGF0Y2g7XHJcblxyXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXHJcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24oXHJcbiAgICBlbCAsXHJcbiAgICBoeWRyYXRpbmcgXHJcbikge1xyXG4gICAgcmV0dXJuIG1vdW50Q29tcG9uZW50JDEodGhpcywgZWwsIGh5ZHJhdGluZylcclxufTtcclxuXHJcbmxpZmVjeWNsZU1peGluJDEoVnVlKTtcclxuaW50ZXJuYWxNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZXhwb3J0IGRlZmF1bHQgVnVlO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=