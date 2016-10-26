(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Artwork = __webpack_require__(1);
	
	var _Artwork2 = _interopRequireDefault(_Artwork);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Artwork2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventemitter = __webpack_require__(7);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _reactDraggable = __webpack_require__(8);
	
	var _reactDraggable2 = _interopRequireDefault(_reactDraggable);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _index = __webpack_require__(11);
	
	var _typeChecker = __webpack_require__(38);
	
	var _typeChecker2 = _interopRequireDefault(_typeChecker);
	
	var _portrait = __webpack_require__(39);
	
	var _portrait2 = _interopRequireDefault(_portrait);
	
	__webpack_require__(41);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// window.fetch polyfill
	
	
	var Artwork = function (_Component) {
	  _inherits(Artwork, _Component);
	
	  function Artwork(props) {
	    _classCallCheck(this, Artwork);
	
	    var _this = _possibleConstructorReturn(this, (Artwork.__proto__ || Object.getPrototypeOf(Artwork)).call(this, props));
	
	    _this.validateSettings();
	    _this.isValid = true;
	    _this.state = {
	      images: [],
	      draggable: _this.props.draggable
	    };
	    // to manage events between components
	    _this.emitter = new _eventemitter2.default();
	    _this.currentScreen = 0;
	    _this.theme = _this.props.theme ? _this.props.theme : {};
	    return _this;
	  }
	
	  _createClass(Artwork, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        emitter: this.emitter
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (this.isValid) {
	        return _react2.default.createElement(
	          _reactDraggable2.default,
	          {
	            disabled: !this.state.draggable,
	            allowAnyClick: false,
	            bounds: this.props.containment ? "parent" : null
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'el',
	              id: this.props.id,
	              className: (0, _classnames2.default)(_portrait2.default.portrait, this.theme.portrait, this.state.draggable ? _portrait2.default.draggable + ' ' + this.theme.draggable : null),
	              style: {
	                width: this.props.width,
	                height: this.props.height
	              }
	            },
	            _react2.default.createElement(_index.Header, {
	              ref: 'header',
	              showToggleDrag: this.props.draggable,
	              theme: this.theme
	            }),
	            _react2.default.createElement(
	              'main',
	              {
	                className: (0, _classnames2.default)(_portrait2.default.body, this.theme.body)
	              },
	              this.state.images.map(function (image, i) {
	                return _react2.default.createElement(_index.Screen, {
	                  ref: 'screen' + i,
	                  key: i,
	                  image: image,
	                  transitionDuration: _this2.props.transitionDuration,
	                  theme: _this2.theme
	                });
	              })
	            ),
	            _react2.default.createElement(_index.Control, {
	              ref: 'control',
	              imagesCount: this.state.images.length,
	              theme: this.theme
	            })
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'h3',
	          { style: { color: "red", fontFamily: "lato" } },
	          'There is errors in your code'
	        );
	      }
	    }
	
	    /**
	     * When the component is rendered, it need to fetch
	     * the images from the folde if the option inline
	     * is disabled. Otherwise, just update the state of
	     * images.
	     */
	
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;
	
	      if (this.props.inline === false) {
	        (function () {
	          var path = '' + window.location + _this3.props.source;
	          fetch(path + '/data.json').then(function (res) {
	            return res.json();
	          }).then(function (data) {
	            _this3.setState({
	              images: data.map(function (imgData) {
	                var name = path + '/' + imgData.name;
	                var title = imgData.title;
	                return { title: title, name: name };
	              })
	            }, function () {
	              _this3.configure();
	              _this3.sortScreens();
	              _this3.start();
	            });
	          });
	        })();
	      } else {
	        this.setState({
	          images: this.props.images
	        }, function () {
	          _this3.configure();
	          _this3.sortScreens();
	          _this3.start();
	        });
	      }
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.refs.control.active(0);
	      this.screens()[this.currentScreen].loadImage();
	    }
	
	    /**
	     * Change the screen. After move the screen, it
	     * compares de screen index with the curret 
	     * screen in the foreach and if match, load
	     * the image asociated with this screen.
	     * 
	     * @param index the index of the screen to show
	     */
	
	  }, {
	    key: 'onChangeScreen',
	    value: function onChangeScreen(index) {
	      var _this4 = this;
	
	      var toMove = this.props.width * (index - this.currentScreen);
	      this.screens().forEach(function (screen, i) {
	        var pos = screen.getPosition() - toMove;
	        screen.move(pos).then(function () {
	          if (index === i) {
	            screen.loadImage();
	            _this4.currentScreen = index;
	          }
	        });
	      });
	    }
	  }, {
	    key: 'onChangeTitle',
	    value: function onChangeTitle(newTitle) {
	      this.refs.header.changeTitle(newTitle);
	    }
	  }, {
	    key: 'onToggleDrag',
	    value: function onToggleDrag() {
	      this.setState({
	        draggable: !this.state.draggable
	      });
	    }
	
	    /**
	     * Sort the screens one after another inline.
	     */
	
	  }, {
	    key: 'sortScreens',
	    value: function sortScreens() {
	      var _this5 = this;
	
	      this.screens().forEach(function (v, i) {
	        var screen = _this5.refs['screen' + i];
	        var pixels = i * _this5.props.width;
	        screen.move(pixels);
	      });
	    }
	
	    /**
	     * @return {Array} screens
	     */
	
	  }, {
	    key: 'screens',
	    value: function screens() {
	      var _this6 = this;
	
	      return [].concat(_toConsumableArray(Array(this.state.images.length))).map(function (v, i) {
	        return _this6.refs['screen' + i];
	      });
	    }
	
	    /**
	     * Configure the component (styles, events, etc.)
	     */
	
	  }, {
	    key: 'configure',
	    value: function configure() {
	      if (this.isValid) {
	        if (this.props.containment) {
	          this.refs.el.parentNode.style.position = 'relative';
	        }
	        if (this.props.shadow) {
	          this.refs.el.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.22),' + '0 14px 56px rgba(0, 0, 0, 0.25)';
	        }
	        this.refs.el.style.borderRadius = this.props.radius + 'px';
	        this.emitter.on('changeScreen', this.onChangeScreen.bind(this));
	        this.emitter.on('changeTitle', this.onChangeTitle.bind(this));
	        this.emitter.on('toggleDrag', this.onToggleDrag.bind(this));
	      }
	    }
	
	    /**
	     * Validate the options of the component before render it.
	     */
	
	  }, {
	    key: 'validateSettings',
	    value: function validateSettings() {
	      try {
	        if (!_typeChecker2.default.isNumber(this.props.height) || this.props.height <= 0) {
	          throw new Error('You need to provide a valid width');
	        }
	        if (!_typeChecker2.default.isNumber(this.props.width) || this.props.width <= 0) {
	          throw new Error('You need to provide a valid width');
	        }
	        /*if (!typeChecker.isNumber(this.props.interval) || this.props.interval <= 0) {
	          throw new Error('You need to provide a valid interval');
	        }*/
	        if (!_typeChecker2.default.isBoolean(this.props.inline)) {
	          throw new Error('inline option accepts only boolean values');
	        }
	        if (!_typeChecker2.default.isBoolean(this.props.shadow)) {
	          throw new Error('shadow option accepts only boolean values');
	        }
	        if (!_typeChecker2.default.isArray(this.props.images) && this.props.inline) {
	          throw new Error('Images option accepts only an array');
	        }
	        if (this.props.inline === false && !_typeChecker2.default.isString(this.props.source)) {
	          throw new Error('You need to provide a valid source');
	        }
	        if (!_typeChecker2.default.isNumber(this.props.radius) || this.props.radius < 0) {
	          throw new Error('Invalid radius value. Must be greater than 0');
	        }
	        if (!_typeChecker2.default.isStringNumber(this.props.transitionDuration)) {
	          throw new Error('Invalid transition duration. Must be greater than 0s');
	        }
	        if (!_typeChecker2.default.isBoolean(this.props.draggable)) {
	          throw new Error('draggable argument accepts only boolean values');
	        }
	        if (this.props.inline && !this.props.images.length) {
	          throw new Error('You need to provide the inline images or remove' + ' the inline option and pass a valid source with images');
	        }
	      } catch (error) {
	        this.isValid = false;
	        console.error(error);
	      }
	    }
	  }]);
	
	  return Artwork;
	}(_react.Component);
	
	exports.default = Artwork;
	
	
	Artwork.defaultProps = {
	  radius: 0,
	  draggable: false,
	  transitionDuration: '1s',
	  inline: false,
	  images: [],
	  containment: false,
	  shadow: false
	};
	
	Artwork.childContextTypes = {
	  emitter: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);
	
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = self.fetch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, Promise, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(5);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.Promise;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(3), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Promise) {/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	;!function(undefined) {
	
	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;
	
	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }
	
	  function configure(conf) {
	    if (conf) {
	      this._conf = conf;
	
	      conf.delimiter && (this.delimiter = conf.delimiter);
	      this._events.maxListeners = conf.maxListeners !== undefined ? conf.maxListeners : defaultMaxListeners;
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);
	
	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    } else {
	      this._events.maxListeners = defaultMaxListeners;
	    }
	  }
	
	  function logPossibleMemoryLeak(count) {
	    console.error('(node) warning: possible EventEmitter memory ' +
	      'leak detected. %d listeners added. ' +
	      'Use emitter.setMaxListeners() to increase limit.',
	      count);
	
	    if (console.trace){
	      console.trace();
	    }
	  }
	
	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property
	
	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
	        typeLength = type.length, currentType = type[i], nextType = type[i+1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }
	
	    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
	          }
	        }
	        return listeners;
	      } else if(currentType === '**') {
	        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
	        if(endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }
	
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if(branch === '*' || branch === '**') {
	              if(tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if(branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }
	
	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
	    }
	
	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i+1);
	    }
	
	    xxTree = tree['**'];
	    if(xxTree) {
	      if(i < typeLength) {
	        if(xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }
	
	        // Build arrays of matching next branches and others.
	        for(branch in xxTree) {
	          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if(branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i+2);
	            } else if(branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i+1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
	            }
	          }
	        }
	      } else if(xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if(xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }
	
	    return listeners;
	  }
	
	  function growListenerTree(type, listener) {
	
	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	
	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for(var i = 0, len = type.length; i+1 < len; i++) {
	      if(type[i] === '**' && type[i+1] === '**') {
	        return;
	      }
	    }
	
	    var tree = this.listenerTree;
	    var name = type.shift();
	
	    while (name !== undefined) {
	
	      if (!tree[name]) {
	        tree[name] = {};
	      }
	
	      tree = tree[name];
	
	      if (type.length === 0) {
	
	        if (!tree._listeners) {
	          tree._listeners = listener;
	        }
	        else {
	          if (typeof tree._listeners === 'function') {
	            tree._listeners = [tree._listeners];
	          }
	
	          tree._listeners.push(listener);
	
	          if (
	            !tree._listeners.warned &&
	            this._events.maxListeners > 0 &&
	            tree._listeners.length > this._events.maxListeners
	          ) {
	            tree._listeners.warned = true;
	            logPossibleMemoryLeak(tree._listeners.length);
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }
	
	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.
	
	  EventEmitter.prototype.delimiter = '.';
	
	  EventEmitter.prototype.setMaxListeners = function(n) {
	    if (n !== undefined) {
	      this._events || init.call(this);
	      this._events.maxListeners = n;
	      if (!this._conf) this._conf = {};
	      this._conf.maxListeners = n;
	    }
	  };
	
	  EventEmitter.prototype.event = '';
	
	  EventEmitter.prototype.once = function(event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };
	
	  EventEmitter.prototype.many = function(event, ttl, fn) {
	    var self = this;
	
	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }
	
	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }
	
	    listener._origin = fn;
	
	    this.on(event, listener);
	
	    return self;
	  };
	
	  EventEmitter.prototype.emit = function() {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }
	
	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;
	
	    if (this._all && this._all.length) {
	      handler = this._all.slice();
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 0; j < al; j++) args[j] = arguments[j];
	      }
	
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this, type);
	          break;
	        case 2:
	          handler[i].call(this, type, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, type, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	    }
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	      if (typeof handler === 'function') {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler.call(this);
	          break;
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          args = new Array(al - 1);
	          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	          handler.apply(this, args);
	        }
	        return true;
	      } else if (handler) {
	        // need to make copy of handlers because list can change in the middle
	        // of emit call
	        handler = handler.slice();
	      }
	    }
	
	    if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this);
	          break;
	        case 2:
	          handler[i].call(this, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	      return true;
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        throw arguments[1]; // Unhandled 'error' event
	      } else {
	        throw new Error("Uncaught, unspecified 'error' event.");
	      }
	      return false;
	    }
	
	    return !!this._all;
	  };
	
	  EventEmitter.prototype.emitAsync = function() {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	        if (!this._events.newListener) { return Promise.resolve([false]); }
	    }
	
	    var promises= [];
	
	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;
	
	    if (this._all) {
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) args[j] = arguments[j];
	      }
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(this._all[i].call(this, type));
	          break;
	        case 2:
	          promises.push(this._all[i].call(this, type, arguments[1]));
	          break;
	        case 3:
	          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(this._all[i].apply(this, args));
	        }
	      }
	    }
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }
	
	    if (typeof handler === 'function') {
	      this.event = type;
	      switch (al) {
	      case 1:
	        promises.push(handler.call(this));
	        break;
	      case 2:
	        promises.push(handler.call(this, arguments[1]));
	        break;
	      case 3:
	        promises.push(handler.call(this, arguments[1], arguments[2]));
	        break;
	      default:
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	        promises.push(handler.apply(this, args));
	      }
	    } else if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(handler[i].call(this));
	          break;
	        case 2:
	          promises.push(handler[i].call(this, arguments[1]));
	          break;
	        case 3:
	          promises.push(handler[i].call(this, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(handler[i].apply(this, args));
	        }
	      }
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        return Promise.reject(arguments[1]); // Unhandled 'error' event
	      } else {
	        return Promise.reject("Uncaught, unspecified 'error' event.");
	      }
	    }
	
	    return Promise.all(promises);
	  };
	
	  EventEmitter.prototype.on = function(type, listener) {
	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }
	
	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);
	
	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);
	
	    if (this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }
	
	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    }
	    else {
	      if (typeof this._events[type] === 'function') {
	        // Change to array.
	        this._events[type] = [this._events[type]];
	      }
	
	      // If we've already got an array, just append.
	      this._events[type].push(listener);
	
	      // Check for listener leak
	      if (
	        !this._events[type].warned &&
	        this._events.maxListeners > 0 &&
	        this._events[type].length > this._events.maxListeners
	      ) {
	        this._events[type].warned = true;
	        logPossibleMemoryLeak(this._events[type].length);
	      }
	    }
	
	    return this;
	  };
	
	  EventEmitter.prototype.onAny = function(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }
	
	    if (!this._all) {
	      this._all = [];
	    }
	
	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };
	
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	  EventEmitter.prototype.off = function(type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }
	
	    var handlers,leafs=[];
	
	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    }
	    else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({_listeners:handlers});
	    }
	
	    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {
	
	        var position = -1;
	
	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener ||
	            (handlers[i].listener && handlers[i].listener === listener) ||
	            (handlers[i]._origin && handlers[i]._origin === listener)) {
	            position = i;
	            break;
	          }
	        }
	
	        if (position < 0) {
	          continue;
	        }
	
	        if(this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        }
	        else {
	          this._events[type].splice(position, 1);
	        }
	
	        if (handlers.length === 0) {
	          if(this.wildcard) {
	            delete leaf._listeners;
	          }
	          else {
	            delete this._events[type];
	          }
	        }
	
	        this.emit("removeListener", type, listener);
	
	        return this;
	      }
	      else if (handlers === listener ||
	        (handlers.listener && handlers.listener === listener) ||
	        (handlers._origin && handlers._origin === listener)) {
	        if(this.wildcard) {
	          delete leaf._listeners;
	        }
	        else {
	          delete this._events[type];
	        }
	
	        this.emit("removeListener", type, listener);
	      }
	    }
	
	    function recursivelyGarbageCollect(root) {
	      if (root === undefined) {
	        return;
	      }
	      var keys = Object.keys(root);
	      for (var i in keys) {
	        var key = keys[i];
	        var obj = root[key];
	        if ((obj instanceof Function) || (typeof obj !== "object") || (obj === null))
	          continue;
	        if (Object.keys(obj).length > 0) {
	          recursivelyGarbageCollect(root[key]);
	        }
	        if (Object.keys(obj).length === 0) {
	          delete root[key];
	        }
	      }
	    }
	    recursivelyGarbageCollect(this.listenerTree);
	
	    return this;
	  };
	
	  EventEmitter.prototype.offAny = function(fn) {
	    var i = 0, l = 0, fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++) {
	        if(fn === fns[i]) {
	          fns.splice(i, 1);
	          this.emit("removeListenerAny", fn);
	          return this;
	        }
	      }
	    } else {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++)
	        this.emit("removeListenerAny", fns[i]);
	      this._all = [];
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
	
	  EventEmitter.prototype.removeAllListeners = function(type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }
	
	    if (this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	
	      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    }
	    else if (this._events) {
	      this._events[type] = null;
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.listeners = function(type) {
	    if (this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }
	
	    this._events || init.call(this);
	
	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };
	
	  EventEmitter.prototype.listenerCount = function(type) {
	    return this.listeners(type).length;
	  };
	
	  EventEmitter.prototype.listenersAny = function() {
	
	    if(this._all) {
	      return this._all;
	    }
	    else {
	      return [];
	    }
	
	  };
	
	  if (true) {
	     // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    module.exports = EventEmitter;
	  }
	  else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	}();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(6), __webpack_require__(9));
		else if(typeof define === 'function' && define.amd)
			define(["react", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
		else
			root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		module.exports = __webpack_require__(1).default;
		module.exports.DraggableCore = __webpack_require__(9).default;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _classnames = __webpack_require__(4);
		
		var _classnames2 = _interopRequireDefault(_classnames);
		
		var _domFns = __webpack_require__(5);
		
		var _positionFns = __webpack_require__(8);
		
		var _shims = __webpack_require__(6);
		
		var _DraggableCore = __webpack_require__(9);
		
		var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
		
		var _log = __webpack_require__(11);
		
		var _log2 = _interopRequireDefault(_log);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		// $FlowIgnore
		
		
		/*:: import type {DraggableEventHandler} from './utils/types';*/
		/*:: type DraggableState = {
		  dragging: boolean,
		  dragged: boolean,
		  x: number, y: number,
		  slackX: number, slackY: number,
		  isElementSVG: boolean
		};*/
		
		
		//
		// Define <Draggable>
		//
		
		/*:: type ConstructorProps = {
		  position: { x: number, y: number },
		  defaultPosition: { x: number, y: number }
		};*/
		
		var Draggable = function (_React$Component) {
		  _inherits(Draggable, _React$Component);
		
		  function Draggable(props /*: ConstructorProps*/) {
		    _classCallCheck(this, Draggable);
		
		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Draggable).call(this, props));
		
		    _this.onDragStart = function (e, coreData) {
		      (0, _log2.default)('Draggable: onDragStart: %j', coreData);
		
		      // Short-circuit if user's callback killed it.
		      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));
		      // Kills start event on core as well, so move handlers are never bound.
		      if (shouldStart === false) return false;
		
		      _this.setState({ dragging: true, dragged: true });
		    };
		
		    _this.onDrag = function (e, coreData) {
		      if (!_this.state.dragging) return false;
		      (0, _log2.default)('Draggable: onDrag: %j', coreData);
		
		      var uiData = (0, _positionFns.createDraggableData)(_this, coreData);
		
		      var newState /*: $Shape<DraggableState>*/ = {
		        x: uiData.x,
		        y: uiData.y
		      };
		
		      // Keep within bounds.
		      if (_this.props.bounds) {
		        // Save original x and y.
		        var _x = newState.x;
		        var _y = newState.y;
		
		        // Add slack to the values used to calculate bound position. This will ensure that if
		        // we start removing slack, the element won't react to it right away until it's been
		        // completely removed.
		
		        newState.x += _this.state.slackX;
		        newState.y += _this.state.slackY;
		
		        // Get bound position. This will ceil/floor the x and y within the boundaries.
		        // $FlowBug
		
		
		        // Recalculate slack by noting how much was shaved by the boundPosition handler.
		
		        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y);
		
		        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
		
		        newState.x = _getBoundPosition2[0];
		        newState.y = _getBoundPosition2[1];
		        newState.slackX = _this.state.slackX + (_x - newState.x);
		        newState.slackY = _this.state.slackY + (_y - newState.y);
		
		        // Update the event we fire to reflect what really happened after bounds took effect.
		        uiData.x = _x;
		        uiData.y = _y;
		        uiData.deltaX = newState.x - _this.state.x;
		        uiData.deltaY = newState.y - _this.state.y;
		      }
		
		      // Short-circuit if user's callback killed it.
		      var shouldUpdate = _this.props.onDrag(e, uiData);
		      if (shouldUpdate === false) return false;
		
		      _this.setState(newState);
		    };
		
		    _this.onDragStop = function (e, coreData) {
		      if (!_this.state.dragging) return false;
		
		      // Short-circuit if user's callback killed it.
		      var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));
		      if (shouldStop === false) return false;
		
		      (0, _log2.default)('Draggable: onDragStop: %j', coreData);
		
		      var newState /*: $Shape<DraggableState>*/ = {
		        dragging: false,
		        slackX: 0,
		        slackY: 0
		      };
		
		      // If this is a controlled component, the result of this operation will be to
		      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
		      var controlled = Boolean(_this.props.position);
		      if (controlled) {
		        var _this$props$position = _this.props.position;
		        var _x2 = _this$props$position.x;
		        var _y2 = _this$props$position.y;
		
		        newState.x = _x2;
		        newState.y = _y2;
		      }
		
		      _this.setState(newState);
		    };
		
		    _this.state = {
		      // Whether or not we are currently dragging.
		      dragging: false,
		
		      // Whether or not we have been dragged before.
		      dragged: false,
		
		      // Current transform x and y.
		      x: props.position ? props.position.x : props.defaultPosition.x,
		      y: props.position ? props.position.y : props.defaultPosition.y,
		
		      // Used for compensating for out-of-bounds drags
		      slackX: 0, slackY: 0,
		
		      // Can only determine if SVG after mounting
		      isElementSVG: false
		    };
		    return _this;
		  }
		
		  _createClass(Draggable, [{
		    key: 'componentWillMount',
		    value: function componentWillMount() {
		      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
		        // eslint-disable-next-line
		        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
		      }
		    }
		  }, {
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      // Check to see if the element passed is an instanceof SVGElement
		      if (typeof SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof SVGElement) {
		        this.setState({ isElementSVG: true });
		      }
		    }
		  }, {
		    key: 'componentWillReceiveProps',
		    value: function componentWillReceiveProps(nextProps /*: Object*/) {
		      // Set x/y if position has changed
		      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
		        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
		      }
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _classNames;
		
		      var style = {},
		          svgTransform = null;
		
		      // If this is controlled, we don't want to move it - unless it's dragging.
		      var controlled = Boolean(this.props.position);
		      var draggable = !controlled || this.state.dragging;
		
		      var position = this.props.position || this.props.defaultPosition;
		      var transformOpts = {
		        // Set left if horizontal drag is enabled
		        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x,
		
		        // Set top if vertical drag is enabled
		        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y
		      };
		
		      // If this element was SVG, we use the `transform` attribute.
		      if (this.state.isElementSVG) {
		        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
		      } else {
		        // Add a CSS transform to move the element around. This allows us to move the element around
		        // without worrying about whether or not it is relatively or absolutely positioned.
		        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
		        // has a clean slate.
		        style = (0, _domFns.createCSSTransform)(transformOpts);
		      }
		
		      var _props = this.props;
		      var defaultClassName = _props.defaultClassName;
		      var defaultClassNameDragging = _props.defaultClassNameDragging;
		      var defaultClassNameDragged = _props.defaultClassNameDragged;
		
		      // Mark with class while dragging
		
		      var className = (0, _classnames2.default)(this.props.children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));
		
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2.default.createElement(
		        _DraggableCore2.default,
		        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
		        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
		          className: className,
		          style: _extends({}, this.props.children.props.style, style),
		          transform: svgTransform
		        })
		      );
		    }
		  }]);
		
		  return Draggable;
		}(_react2.default.Component);
		
		Draggable.displayName = 'Draggable';
		Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
		
		  /**
		   * `axis` determines which axis the draggable can move.
		   *
		   *  Note that all callbacks will still return data as normal. This only
		   *  controls flushing to the DOM.
		   *
		   * 'both' allows movement horizontally and vertically.
		   * 'x' limits movement to horizontal axis.
		   * 'y' limits movement to vertical axis.
		   * 'none' limits all movement.
		   *
		   * Defaults to 'both'.
		   */
		  axis: _react.PropTypes.oneOf(['both', 'x', 'y', 'none']),
		
		  /**
		   * `bounds` determines the range of movement available to the element.
		   * Available values are:
		   *
		   * 'parent' restricts movement within the Draggable's parent node.
		   *
		   * Alternatively, pass an object with the following properties, all of which are optional:
		   *
		   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
		   *
		   * All values are in px.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable bounds={{right: 300, bottom: 300}}>
		   *              <div>Content</div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
		    left: _react.PropTypes.number,
		    right: _react.PropTypes.number,
		    top: _react.PropTypes.number,
		    bottom: _react.PropTypes.number
		  }), _react.PropTypes.string, _react.PropTypes.oneOf([false])]),
		
		  defaultClassName: _react.PropTypes.string,
		  defaultClassNameDragging: _react.PropTypes.string,
		  defaultClassNameDragged: _react.PropTypes.string,
		
		  /**
		   * `defaultPosition` specifies the x and y that the dragged item should start at
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  defaultPosition: _react.PropTypes.shape({
		    x: _react.PropTypes.number,
		    y: _react.PropTypes.number
		  }),
		
		  /**
		   * `position`, if present, defines the current position of the element.
		   *
		   *  This is similar to how form elements in React work - if no `position` is supplied, the component
		   *  is uncontrolled.
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable position={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  position: _react.PropTypes.shape({
		    x: _react.PropTypes.number,
		    y: _react.PropTypes.number
		  }),
		
		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: _shims.dontSetMe,
		  style: _shims.dontSetMe,
		  transform: _shims.dontSetMe
		});
		Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
		  axis: 'both',
		  bounds: false,
		  defaultClassName: 'react-draggable',
		  defaultClassNameDragging: 'react-draggable-dragging',
		  defaultClassNameDragged: 'react-draggable-dragged',
		  defaultPosition: { x: 0, y: 0 },
		  position: null
		});
		exports.default = Draggable;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */
		
		(function () {
			'use strict';
		
			var hasOwn = {}.hasOwnProperty;
		
			function classNames () {
				var classes = [];
		
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
		
					var argType = typeof arg;
		
					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						classes.push(classNames.apply(null, arg));
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}
		
				return classes.join(' ');
			}
		
			if (typeof module !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else if (true) {
				// register as 'classnames', consistent with npm package name
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return classNames;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
				window.classNames = classNames;
			}
		}());
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		exports.matchesSelector = matchesSelector;
		exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
		exports.addEvent = addEvent;
		exports.removeEvent = removeEvent;
		exports.outerHeight = outerHeight;
		exports.outerWidth = outerWidth;
		exports.innerHeight = innerHeight;
		exports.innerWidth = innerWidth;
		exports.offsetXYFromParent = offsetXYFromParent;
		exports.createCSSTransform = createCSSTransform;
		exports.createSVGTransform = createSVGTransform;
		exports.getTouch = getTouch;
		exports.getTouchIdentifier = getTouchIdentifier;
		exports.addUserSelectStyles = addUserSelectStyles;
		exports.removeUserSelectStyles = removeUserSelectStyles;
		exports.styleHacks = styleHacks;
		
		var _shims = __webpack_require__(6);
		
		var _getPrefix = __webpack_require__(7);
		
		var _getPrefix2 = _interopRequireDefault(_getPrefix);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		/*:: import type {ControlPosition} from './types';*/
		
		
		var matchesSelectorFunc = '';
		function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
		  if (!matchesSelectorFunc) {
		    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
		      // $FlowIgnore: Doesn't think elements are indexable
		      return (0, _shims.isFunction)(el[method]);
		    });
		  }
		
		  // $FlowIgnore: Doesn't think elements are indexable
		  return el[matchesSelectorFunc].call(el, selector);
		}
		
		// Works up the tree to the draggable itself attempting to match selector.
		function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
		  var node = el;
		  do {
		    if (matchesSelector(node, selector)) return true;
		    if (node === baseNode) return false;
		    node = node.parentNode;
		  } while (node);
		
		  return false;
		}
		
		function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
		  if (!el) {
		    return;
		  }
		  if (el.attachEvent) {
		    el.attachEvent('on' + event, handler);
		  } else if (el.addEventListener) {
		    el.addEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = handler;
		  }
		}
		
		function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
		  if (!el) {
		    return;
		  }
		  if (el.detachEvent) {
		    el.detachEvent('on' + event, handler);
		  } else if (el.removeEventListener) {
		    el.removeEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = null;
		  }
		}
		
		function outerHeight(node /*: HTMLElement*/) /*: number*/ {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetTop which is including margin. See getBoundPosition
		  var height = node.clientHeight;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  height += (0, _shims.int)(computedStyle.borderTopWidth);
		  height += (0, _shims.int)(computedStyle.borderBottomWidth);
		  return height;
		}
		
		function outerWidth(node /*: HTMLElement*/) /*: number*/ {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetLeft which is including margin. See getBoundPosition
		  var width = node.clientWidth;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  width += (0, _shims.int)(computedStyle.borderLeftWidth);
		  width += (0, _shims.int)(computedStyle.borderRightWidth);
		  return width;
		}
		function innerHeight(node /*: HTMLElement*/) /*: number*/ {
		  var height = node.clientHeight;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  height -= (0, _shims.int)(computedStyle.paddingTop);
		  height -= (0, _shims.int)(computedStyle.paddingBottom);
		  return height;
		}
		
		function innerWidth(node /*: HTMLElement*/) /*: number*/ {
		  var width = node.clientWidth;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  width -= (0, _shims.int)(computedStyle.paddingLeft);
		  width -= (0, _shims.int)(computedStyle.paddingRight);
		  return width;
		}
		
		// Get from offsetParent
		function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
		  var isBody = offsetParent === offsetParent.ownerDocument.body;
		  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
		
		  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
		  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
		
		  return { x: x, y: y };
		}
		
		function createCSSTransform(_ref) /*: Object*/ {
		  var x = _ref.x;
		  var y = _ref.y;
		
		  // Replace unitless items with px
		  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate(' + x + 'px,' + y + 'px)');
		}
		
		function createSVGTransform(_ref3) /*: string*/ {
		  var x = _ref3.x;
		  var y = _ref3.y;
		
		  return 'translate(' + x + ',' + y + ')';
		}
		
		function getTouch(e /*: MouseEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
		  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
		    return identifier === t.identifier;
		  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
		    return identifier === t.identifier;
		  });
		}
		
		function getTouchIdentifier(e /*: MouseEvent*/) /*: ?number*/ {
		  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
		}
		
		// User-select Hacks:
		//
		// Useful for preventing blue highlights all over everything when dragging.
		var userSelectPrefix = (0, _getPrefix.getPrefix)('user-select');
		var userSelect = (0, _getPrefix.browserPrefixToStyle)('user-select', userSelectPrefix);
		var userSelectStyle = ';' + userSelect + ': none;';
		
		// Note we're passing `document` b/c we could be iframed
		function addUserSelectStyles(body /*: HTMLElement*/) {
		  var style = body.getAttribute('style') || '';
		  body.setAttribute('style', style + userSelectStyle);
		}
		
		function removeUserSelectStyles(body /*: HTMLElement*/) {
		  var style = body.getAttribute('style') || '';
		  body.setAttribute('style', style.replace(userSelectStyle, ''));
		}
		
		function styleHacks() /*: Object*/ {
		  var childStyle /*: Object*/ = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  // Workaround IE pointer events; see #51
		  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
		  return _extends({
		    touchAction: 'none'
		  }, childStyle);
		}
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.findInArray = findInArray;
		exports.isFunction = isFunction;
		exports.isNum = isNum;
		exports.int = int;
		exports.dontSetMe = dontSetMe;
		
		// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
		function findInArray(array /*: Array<any>*/, callback /*: Function*/) /*: any*/ {
		  for (var i = 0, length = array.length; i < length; i++) {
		    if (callback.apply(callback, [array[i], i, array])) return array[i];
		  }
		}
		
		function isFunction(func /*: any*/) /*: boolean*/ {
		  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
		}
		
		function isNum(num /*: any*/) /*: boolean*/ {
		  return typeof num === 'number' && !isNaN(num);
		}
		
		function int(a /*: string*/) /*: number*/ {
		  return parseInt(a, 10);
		}
		
		function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
		  if (props[propName]) {
		    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
		  }
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getPrefix = getPrefix;
		exports.browserPrefixToKey = browserPrefixToKey;
		exports.browserPrefixToStyle = browserPrefixToStyle;
		
		var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
		function getPrefix() /*: string*/ {
		  var prop /*: string*/ = arguments.length <= 0 || arguments[0] === undefined ? 'transform' : arguments[0];
		
		  // Checking specifically for 'window.document' is for pseudo-browser server-side
		  // environments that define 'window' as the global context.
		  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
		  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
		
		  var style = window.document.documentElement.style;
		
		  if (prop in style) return '';
		
		  for (var i = 0; i < prefixes.length; i++) {
		    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
		  }
		
		  return '';
		}
		
		function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
		  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
		}
		
		function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
		  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
		}
		
		function kebabToTitleCase(str /*: string*/) /*: string*/ {
		  var out = '';
		  var shouldCapitalize = true;
		  for (var i = 0; i < str.length; i++) {
		    if (shouldCapitalize) {
		      out += str[i].toUpperCase();
		      shouldCapitalize = false;
		    } else if (str[i] === '-') {
		      shouldCapitalize = true;
		    } else {
		      out += str[i];
		    }
		  }
		  return out;
		}
		
		// Default export is the prefix itself, like 'Moz', 'Webkit', etc
		// Note that you may have to re-test for certain things; for instance, Chrome 50
		// can handle unprefixed `transform`, but not unprefixed `user-select`
		exports.default = getPrefix();
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getBoundPosition = getBoundPosition;
		exports.snapToGrid = snapToGrid;
		exports.canDragX = canDragX;
		exports.canDragY = canDragY;
		exports.getControlPosition = getControlPosition;
		exports.createCoreData = createCoreData;
		exports.createDraggableData = createDraggableData;
		
		var _shims = __webpack_require__(6);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _domFns = __webpack_require__(5);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		/*:: import type Draggable from '../Draggable';*/
		/*:: import type {Bounds, ControlPosition, DraggableData} from './types';*/
		/*:: import type DraggableCore from '../DraggableCore';*/
		function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
		  // If no bounds, short-circuit and move on
		  if (!draggable.props.bounds) return [x, y];
		
		  // Clone new bounds
		  var bounds = draggable.props.bounds;
		
		  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
		  var node = _reactDom2.default.findDOMNode(draggable);
		
		  if (typeof bounds === 'string') {
		    var ownerDocument = node.ownerDocument;
		
		    var ownerWindow = ownerDocument.defaultView;
		    var boundNode = void 0;
		    if (bounds === 'parent') {
		      boundNode = node.parentNode;
		    } else {
		      boundNode = ownerDocument.querySelector(bounds);
		      if (!boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');
		    }
		    var nodeStyle = ownerWindow.getComputedStyle(node);
		    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
		    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
		    bounds = {
		      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
		      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
		      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
		      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop
		    };
		  }
		
		  // Keep x and y below right and bottom limits...
		  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
		  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
		
		  // But above left and top limits.
		  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
		  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
		
		  return [x, y];
		}
		
		function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
		  var x = Math.round(pendingX / grid[0]) * grid[0];
		  var y = Math.round(pendingY / grid[1]) * grid[1];
		  return [x, y];
		}
		
		function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
		}
		
		function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
		}
		
		// Get {x, y} positions from event.
		function getControlPosition(e /*: MouseEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
		  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
		  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
		  var node = _reactDom2.default.findDOMNode(draggableCore);
		  // User can provide an offsetParent if desired.
		  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
		  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
		}
		
		// Create an data object exposed by <DraggableCore>'s events
		function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
		  // State changes are often (but not always!) async. We want the latest value.
		  var state = draggable._pendingState || draggable.state;
		  var isStart = !(0, _shims.isNum)(state.lastX);
		
		  if (isStart) {
		    // If this is our first move, use the x and y as last coords.
		    return {
		      node: _reactDom2.default.findDOMNode(draggable),
		      deltaX: 0, deltaY: 0,
		      lastX: x, lastY: y,
		      x: x, y: y
		    };
		  } else {
		    // Otherwise calculate proper values.
		    return {
		      node: _reactDom2.default.findDOMNode(draggable),
		      deltaX: x - state.lastX, deltaY: y - state.lastY,
		      lastX: state.lastX, lastY: state.lastY,
		      x: x, y: y
		    };
		  }
		}
		
		// Create an data exposed by <Draggable>'s events
		function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
		  return {
		    node: coreData.node,
		    x: draggable.state.x + coreData.deltaX,
		    y: draggable.state.y + coreData.deltaY,
		    deltaX: coreData.deltaX,
		    deltaY: coreData.deltaY,
		    lastX: draggable.state.x,
		    lastY: draggable.state.y
		  };
		}
		
		// A lot faster than stringify/parse
		function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
		  return {
		    left: bounds.left,
		    top: bounds.top,
		    right: bounds.right,
		    bottom: bounds.bottom
		  };
		}
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _domFns = __webpack_require__(5);
		
		var _positionFns = __webpack_require__(8);
		
		var _shims = __webpack_require__(6);
		
		var _log = __webpack_require__(11);
		
		var _log2 = _interopRequireDefault(_log);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		// Simple abstraction for dragging events names.
		/*:: import type {EventHandler} from './utils/types';*/
		var eventsFor = {
		  touch: {
		    start: 'touchstart',
		    move: 'touchmove',
		    stop: 'touchend'
		  },
		  mouse: {
		    start: 'mousedown',
		    move: 'mousemove',
		    stop: 'mouseup'
		  }
		};
		
		// Default to mouse events.
		var dragEventFor = eventsFor.mouse;
		
		//
		// Define <DraggableCore>.
		//
		// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
		// work well with libraries that require more control over the element.
		//
		
		/*:: type CoreState = {
		  dragging: boolean,
		  lastX: number,
		  lastY: number,
		  touchIdentifier: ?number
		};*/
		
		var DraggableCore = function (_React$Component) {
		  _inherits(DraggableCore, _React$Component);
		
		  function DraggableCore() {
		    var _Object$getPrototypeO;
		
		    var _temp, _this, _ret;
		
		    _classCallCheck(this, DraggableCore);
		
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
		
		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DraggableCore)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      dragging: false,
		      // Used while dragging to determine deltas.
		      lastX: NaN, lastY: NaN,
		      touchIdentifier: null
		    }, _this.handleDragStart = function (e) {
		      // Make it possible to attach event handlers on top of this one.
		      _this.props.onMouseDown(e);
		
		      // Only accept left-clicks.
		      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
		
		      // Get nodes. Be sure to grab relative document (could be iframed)
		      var domNode = _reactDom2.default.findDOMNode(_this);
		      var ownerDocument = domNode.ownerDocument;
		
		      // Short circuit if handle or cancel prop was provided and selector doesn't match.
		
		      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, domNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, domNode)) {
		        return;
		      }
		
		      // Set touch identifier in component state if this is a touch event. This allows us to
		      // distinguish between individual touches on multitouch screens by identifying which
		      // touchpoint was set to this element.
		      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
		      _this.setState({ touchIdentifier: touchIdentifier });
		
		      // Get the current drag point from the event. This is used as the offset.
		      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);
		      if (position == null) return; // not possible but satisfies flow
		      var x = position.x;
		      var y = position.y;
		
		      // Create an event object with all the data parents need to make a decision here.
		
		      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
		
		      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent);
		
		      // Call event handler. If it returns explicit false, cancel.
		      (0, _log2.default)('calling', _this.props.onStart);
		      var shouldUpdate = _this.props.onStart(e, coreEvent);
		      if (shouldUpdate === false) return;
		
		      // Add a style to the body to disable user-select. This prevents text from
		      // being selected all over the page.
		      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument.body);
		
		      // Initiate dragging. Set the current x and y as offsets
		      // so we know how much we've moved during the drag. This allows us
		      // to drag elements around even if they have been moved, without issue.
		      _this.setState({
		        dragging: true,
		
		        lastX: x,
		        lastY: y
		      });
		
		      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
		      // this element. We use different events depending on whether or not we have detected that this
		      // is a touch-capable device.
		      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
		      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
		    }, _this.handleDrag = function (e) {
		
		      // Get the current drag point from the event. This is used as the offset.
		      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
		      if (position == null) return;
		      var x = position.x;
		      var y = position.y;
		
		      // Snap to grid if prop has been provided
		
		      if (x !== x) debugger;
		
		      if (Array.isArray(_this.props.grid)) {
		        var deltaX = x - _this.state.lastX,
		            deltaY = y - _this.state.lastY;
		
		        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
		
		        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
		
		        deltaX = _snapToGrid2[0];
		        deltaY = _snapToGrid2[1];
		
		        if (!deltaX && !deltaY) return; // skip useless drag
		        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
		      }
		
		      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
		
		      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent);
		
		      // Call event handler. If it returns explicit false, trigger end.
		      var shouldUpdate = _this.props.onDrag(e, coreEvent);
		      if (shouldUpdate === false) {
		        try {
		          _this.handleDragStop(new MouseEvent('mouseup'));
		        } catch (err) {
		          // Old browsers
		          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseEvent*/);
		          // I see why this insanity was deprecated
		          // $FlowIgnore
		          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		          _this.handleDragStop(event);
		        }
		        return;
		      }
		
		      _this.setState({
		        lastX: x,
		        lastY: y
		      });
		    }, _this.handleDragStop = function (e) {
		      if (!_this.state.dragging) return;
		
		      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
		      if (position == null) return;
		      var x = position.x;
		      var y = position.y;
		
		      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
		
		      var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this);
		
		      var ownerDocument = _ReactDOM$findDOMNode.ownerDocument;
		
		      // Remove user-select hack
		
		      if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
		
		      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent);
		
		      // Reset the el.
		      _this.setState({
		        dragging: false,
		        lastX: NaN,
		        lastY: NaN
		      });
		
		      // Call event handler
		      _this.props.onStop(e, coreEvent);
		
		      // Remove event handlers
		      (0, _log2.default)('DraggableCore: Removing handlers');
		      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
		      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
		    }, _this.onMouseDown = function (e) {
		      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
		
		      return _this.handleDragStart(e);
		    }, _this.onMouseUp = function (e) {
		      dragEventFor = eventsFor.mouse;
		
		      return _this.handleDragStop(e);
		    }, _this.onTouchStart = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStart(e);
		    }, _this.onTouchEnd = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStop(e);
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }
		
		  _createClass(DraggableCore, [{
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
		      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
		
		      var _ReactDOM$findDOMNode2 = _reactDom2.default.findDOMNode(this);
		
		      var ownerDocument = _ReactDOM$findDOMNode2.ownerDocument;
		
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
		      if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
		    }
		
		    // Same as onMouseDown (start drag), but now consider this a touch device.
		
		  }, {
		    key: 'render',
		    value: function render() {
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
		        style: (0, _domFns.styleHacks)(this.props.children.props.style),
		
		        // Note: mouseMove handler is attached to document so it will still function
		        // when the user drags quickly and leaves the bounds of the element.
		        onMouseDown: this.onMouseDown,
		        onTouchStart: this.onTouchStart,
		        onMouseUp: this.onMouseUp,
		        onTouchEnd: this.onTouchEnd
		      });
		    }
		  }]);
		
		  return DraggableCore;
		}(_react2.default.Component);
		
		DraggableCore.displayName = 'DraggableCore';
		DraggableCore.propTypes = {
		  /**
		   * `allowAnyClick` allows dragging using any mouse button.
		   * By default, we only accept the left button.
		   *
		   * Defaults to `false`.
		   */
		  allowAnyClick: _react.PropTypes.bool,
		
		  /**
		   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
		   * with the exception of `onMouseDown`, will not fire.
		   */
		  disabled: _react.PropTypes.bool,
		
		  /**
		   * By default, we add 'user-select:none' attributes to the document body
		   * to prevent ugly text selection during drag. If this is causing problems
		   * for your app, set this to `false`.
		   */
		  enableUserSelectHack: _react.PropTypes.bool,
		
		  /**
		   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
		   * instead of using the parent node.
		   */
		  offsetParent: function offsetParent(props, propName) {
		    if (process.browser && props[propName] && props[propName].nodeType !== 1) {
		      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
		    }
		  },
		
		  /**
		   * `grid` specifies the x and y that dragging should snap to.
		   */
		  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
		
		  /**
		   * `handle` specifies a selector to be used as the handle that initiates drag.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable handle=".handle">
		   *              <div>
		   *                  <div className="handle">Click me to drag</div>
		   *                  <div>This is some other content</div>
		   *              </div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  handle: _react.PropTypes.string,
		
		  /**
		   * `cancel` specifies a selector to be used to prevent drag initialization.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return(
		   *               <Draggable cancel=".cancel">
		   *                   <div>
		   *                     <div className="cancel">You can't drag from here</div>
		   *                     <div>Dragging here works fine</div>
		   *                   </div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  cancel: _react.PropTypes.string,
		
		  /**
		   * Called when dragging starts.
		   * If this function returns the boolean false, dragging will be canceled.
		   */
		  onStart: _react.PropTypes.func,
		
		  /**
		   * Called while dragging.
		   * If this function returns the boolean false, dragging will be canceled.
		   */
		  onDrag: _react.PropTypes.func,
		
		  /**
		   * Called when dragging stops.
		   * If this function returns the boolean false, the drag will remain active.
		   */
		  onStop: _react.PropTypes.func,
		
		  /**
		   * A workaround option which can be passed if onMouseDown needs to be accessed,
		   * since it'll always be blocked (as there is internal use of onMouseDown)
		   */
		  onMouseDown: _react.PropTypes.func,
		
		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: _shims.dontSetMe,
		  style: _shims.dontSetMe,
		  transform: _shims.dontSetMe
		};
		DraggableCore.defaultProps = {
		  allowAnyClick: false, // by default only accept left click
		  cancel: null,
		  disabled: false,
		  enableUserSelectHack: true,
		  offsetParent: null,
		  handle: null,
		  grid: null,
		  transform: null,
		  onStart: function onStart() {},
		  onDrag: function onDrag() {},
		  onStop: function onStop() {},
		  onMouseDown: function onMouseDown() {}
		};
		exports.default = DraggableCore;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		// shim for using process in browser
		
		var process = module.exports = {};
		
		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.
		
		var cachedSetTimeout;
		var cachedClearTimeout;
		
		(function () {
		  try {
		    cachedSetTimeout = setTimeout;
		  } catch (e) {
		    cachedSetTimeout = function () {
		      throw new Error('setTimeout is not defined');
		    }
		  }
		  try {
		    cachedClearTimeout = clearTimeout;
		  } catch (e) {
		    cachedClearTimeout = function () {
		      throw new Error('clearTimeout is not defined');
		    }
		  }
		} ())
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
		
		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
		
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = cachedSetTimeout(cleanUpNextTick);
		    draining = true;
		
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    cachedClearTimeout(timeout);
		}
		
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        cachedSetTimeout(drainQueue, 0);
		    }
		};
		
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
		
		function noop() {}
		
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
		
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = log;
		
		/*eslint no-console:0*/
		function log() {
		  var _console;
		
		  if ((undefined)) (_console = console).log.apply(_console, arguments);
		}
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=react-draggable.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Header = __webpack_require__(12);
	
	Object.defineProperty(exports, 'Header', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Header).default;
	  }
	});
	
	var _Screen = __webpack_require__(30);
	
	Object.defineProperty(exports, 'Screen', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Screen).default;
	  }
	});
	
	var _Image = __webpack_require__(31);
	
	Object.defineProperty(exports, 'Image', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Image).default;
	  }
	});
	
	var _Control = __webpack_require__(35);
	
	Object.defineProperty(exports, 'Control', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Control).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTooltip = __webpack_require__(13);
	
	var _reactTooltip2 = _interopRequireDefault(_reactTooltip);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _move = __webpack_require__(23);
	
	var _move2 = _interopRequireDefault(_move);
	
	var _header = __webpack_require__(24);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _popup = __webpack_require__(28);
	
	var _popup2 = _interopRequireDefault(_popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	    _this.state = {
	      title: _this.props.defaultTitle
	    };
	    _this.theme = _this.props.theme ? _this.props.theme : {};
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var button = _react2.default.createElement(
	        'button',
	        {
	          className: _header2.default.settings,
	          onClick: this.toggleDrag.bind(this),
	          'data-tip': true,
	          'data-for': 'icon'
	        },
	        _react2.default.createElement('img', { src: _move2.default })
	      );
	      return _react2.default.createElement(
	        'header',
	        {
	          id: this.props.id,
	          className: (0, _classnames2.default)(_header2.default.header, this.theme.header, "no-cursor")
	        },
	        _react2.default.createElement(
	          'h3',
	          null,
	          this.state.title
	        ),
	        this.props.showToggleDrag ? button : null,
	        _react2.default.createElement(
	          _reactTooltip2.default,
	          {
	            id: 'icon',
	            place: 'left',
	            type: 'dark',
	            effect: 'solid',
	            'class': _popup2.default.popup + ' ' + _popup2.default['place-left']
	          },
	          _react2.default.createElement(
	            'span',
	            null,
	            'Toggle drag'
	          )
	        )
	      );
	    }
	
	    /**
	     * Emit an event to toggle the drag behaviour
	     */
	
	  }, {
	    key: 'toggleDrag',
	    value: function toggleDrag(e) {
	      this.context.emitter.emit('toggleDrag', {});
	    }
	  }, {
	    key: 'changeTitle',
	    value: function changeTitle(newTitle) {
	      this.setState({
	        title: newTitle
	      });
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	exports.default = Header;
	
	
	Header.contextTypes = {
	  emitter: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _class2, _temp;
	
	/* Decoraters */
	
	
	/* Utils */
	
	
	/* CSS */
	
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(9);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _staticMethods = __webpack_require__(14);
	
	var _staticMethods2 = _interopRequireDefault(_staticMethods);
	
	var _windowListener = __webpack_require__(16);
	
	var _windowListener2 = _interopRequireDefault(_windowListener);
	
	var _customEvent = __webpack_require__(17);
	
	var _customEvent2 = _interopRequireDefault(_customEvent);
	
	var _isCapture = __webpack_require__(18);
	
	var _isCapture2 = _interopRequireDefault(_isCapture);
	
	var _getPosition = __webpack_require__(19);
	
	var _getPosition2 = _interopRequireDefault(_getPosition);
	
	var _getTipContent = __webpack_require__(20);
	
	var _getTipContent2 = _interopRequireDefault(_getTipContent);
	
	var _aria = __webpack_require__(21);
	
	var _style = __webpack_require__(22);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactTooltip = (0, _staticMethods2.default)(_class = (0, _windowListener2.default)(_class = (0, _customEvent2.default)(_class = (0, _isCapture2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ReactTooltip, _Component);
	
	  function ReactTooltip(props) {
	    _classCallCheck(this, ReactTooltip);
	
	    var _this = _possibleConstructorReturn(this, (ReactTooltip.__proto__ || Object.getPrototypeOf(ReactTooltip)).call(this, props));
	
	    _this.state = {
	      place: 'top', // Direction of tooltip
	      type: 'dark', // Color theme of tooltip
	      effect: 'float', // float or fixed
	      show: false,
	      border: false,
	      placeholder: '',
	      offset: {},
	      extraClass: '',
	      html: false,
	      delayHide: 0,
	      delayShow: 0,
	      event: props.event || null,
	      eventOff: props.eventOff || null,
	      currentEvent: null, // Current mouse event
	      currentTarget: null, // Current target of mouse event
	      ariaProps: (0, _aria.parseAria)(props), // aria- and role attributes
	      isEmptyTip: false,
	      disable: false
	    };
	
	    _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize']);
	
	    _this.mount = true;
	    _this.delayShowLoop = null;
	    _this.delayHideLoop = null;
	    _this.intervalUpdateContent = null;
	    return _this;
	  }
	
	  /**
	   * For unify the bind and unbind listener
	   */
	
	
	  _createClass(ReactTooltip, [{
	    key: 'bind',
	    value: function bind(methodArray) {
	      var _this2 = this;
	
	      methodArray.forEach(function (method) {
	        _this2[method] = _this2[method].bind(_this2);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setStyleHeader(); // Set the style to the <link>
	      this.bindListener(); // Bind listener for tooltip
	      this.bindWindowEvents(this.props.resizeHide); // Bind global event for static method
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      var ariaProps = this.state.ariaProps;
	
	      var newAriaProps = (0, _aria.parseAria)(props);
	
	      var isChanged = Object.keys(newAriaProps).some(function (props) {
	        return newAriaProps[props] !== ariaProps[props];
	      });
	      if (isChanged) {
	        this.setState({ ariaProps: newAriaProps });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mount = false;
	
	      this.clearTimer();
	
	      this.unbindListener();
	      this.removeScrollListener();
	      this.unbindWindowEvents();
	    }
	
	    /**
	     * Pick out corresponded target elements
	     */
	
	  }, {
	    key: 'getTargetArray',
	    value: function getTargetArray(id) {
	      var targetArray = void 0;
	
	      if (!id) {
	        targetArray = document.querySelectorAll('[data-tip]:not([data-for])');
	      } else {
	        targetArray = document.querySelectorAll('[data-tip][data-for="' + id + '"]');
	      }
	
	      // targetArray is a NodeList, convert it to a real array
	      // I hope I can use Object.values...
	      return Object.keys(targetArray).filter(function (key) {
	        return key !== 'length';
	      }).map(function (key) {
	        return targetArray[key];
	      });
	    }
	
	    /**
	     * Bind listener to the target elements
	     * These listeners used to trigger showing or hiding the tooltip
	     */
	
	  }, {
	    key: 'bindListener',
	    value: function bindListener() {
	      var _this3 = this;
	
	      var _props = this.props;
	      var id = _props.id;
	      var globalEventOff = _props.globalEventOff;
	
	      var targetArray = this.getTargetArray(id);
	
	      targetArray.forEach(function (target) {
	        var isCaptureMode = _this3.isCapture(target);
	        if (target.getAttribute('currentItem') === null) {
	          target.setAttribute('currentItem', 'false');
	        }
	        _this3.unbindBasicListener(target);
	
	        if (_this3.isCustomEvent(target)) {
	          _this3.customBindListener(target);
	          return;
	        }
	
	        target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
	        if (_this3.state.effect === 'float') {
	          target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
	        }
	        target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
	      });
	
	      // Global event to hide tooltip
	      if (globalEventOff) {
	        window.removeEventListener(globalEventOff, this.hideTooltip);
	        window.addEventListener(globalEventOff, this.hideTooltip, false);
	      }
	    }
	
	    /**
	     * Unbind listeners on target elements
	     */
	
	  }, {
	    key: 'unbindListener',
	    value: function unbindListener() {
	      var _this4 = this;
	
	      var _props2 = this.props;
	      var id = _props2.id;
	      var globalEventOff = _props2.globalEventOff;
	
	      var targetArray = this.getTargetArray(id);
	      targetArray.forEach(function (target) {
	        _this4.unbindBasicListener(target);
	        if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
	      });
	
	      if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
	    }
	
	    /**
	     * Invoke this before bind listener and ummount the compont
	     * it is necessary to invloke this even when binding custom event
	     * so that the tooltip can switch between custom and default listener
	     */
	
	  }, {
	    key: 'unbindBasicListener',
	    value: function unbindBasicListener(target) {
	      target.removeEventListener('mouseenter', this.showTooltip);
	      target.removeEventListener('mousemove', this.updateTooltip);
	      target.removeEventListener('mouseleave', this.hideTooltip);
	    }
	
	    /**
	     * When mouse enter, show the tooltip
	     */
	
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip(e, isGlobalCall) {
	      var _this5 = this;
	
	      if (isGlobalCall) {
	        // Don't trigger other elements belongs to other ReactTooltip
	        var targetArray = this.getTargetArray(this.props.id);
	        var isMyElement = targetArray.some(function (ele) {
	          return ele === e.currentTarget;
	        });
	        if (!isMyElement || this.state.show) return;
	      }
	      // Get the tooltip content
	      // calculate in this phrase so that tip width height can be detected
	      var _props3 = this.props;
	      var children = _props3.children;
	      var multiline = _props3.multiline;
	      var getContent = _props3.getContent;
	
	      var originTooltip = e.currentTarget.getAttribute('data-tip');
	      var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false;
	
	      // Generate tootlip content
	      var content = void 0;
	      if (getContent) {
	        if (Array.isArray(getContent)) {
	          content = getContent[0] && getContent[0]();
	        } else {
	          content = getContent();
	        }
	      }
	      var placeholder = (0, _getTipContent2.default)(originTooltip, children, content, isMultiline);
	      var isEmptyTip = typeof placeholder === 'string' && placeholder === '' || placeholder === null;
	
	      // If it is focus event or called by ReactTooltip.show, switch to `solid` effect
	      var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;
	
	      // if it need to skip adding hide listener to scroll
	      var scrollHide = true;
	      if (e.currentTarget.getAttribute('data-scroll-hide')) {
	        scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
	      } else if (this.props.scrollHide != null) {
	        scrollHide = this.props.scrollHide;
	      }
	
	      this.setState({
	        placeholder: placeholder,
	        isEmptyTip: isEmptyTip,
	        place: e.currentTarget.getAttribute('data-place') || this.props.place || 'top',
	        type: e.currentTarget.getAttribute('data-type') || this.props.type || 'dark',
	        effect: switchToSolid && 'solid' || e.currentTarget.getAttribute('data-effect') || this.props.effect || 'float',
	        offset: e.currentTarget.getAttribute('data-offset') || this.props.offset || {},
	        html: e.currentTarget.getAttribute('data-html') ? e.currentTarget.getAttribute('data-html') === 'true' : this.props.html || false,
	        delayShow: e.currentTarget.getAttribute('data-delay-show') || this.props.delayShow || 0,
	        delayHide: e.currentTarget.getAttribute('data-delay-hide') || this.props.delayHide || 0,
	        border: e.currentTarget.getAttribute('data-border') ? e.currentTarget.getAttribute('data-border') === 'true' : this.props.border || false,
	        extraClass: e.currentTarget.getAttribute('data-class') || this.props.class || '',
	        disable: e.currentTarget.getAttribute('data-tip-disable') ? e.currentTarget.getAttribute('data-tip-disable') === 'true' : this.props.disable || false
	      }, function () {
	        if (scrollHide) _this5.addScrollListener(e);
	        _this5.updateTooltip(e);
	
	        if (getContent && Array.isArray(getContent)) {
	          _this5.intervalUpdateContent = setInterval(function () {
	            if (_this5.mount) {
	              var _getContent = _this5.props.getContent;
	
	              var _placeholder = (0, _getTipContent2.default)(originTooltip, _getContent[0](), isMultiline);
	              var _isEmptyTip = typeof _placeholder === 'string' && _placeholder === '';
	              _this5.setState({
	                placeholder: _placeholder,
	                isEmptyTip: _isEmptyTip
	              });
	            }
	          }, getContent[1]);
	        }
	      });
	    }
	
	    /**
	     * When mouse hover, updatetooltip
	     */
	
	  }, {
	    key: 'updateTooltip',
	    value: function updateTooltip(e) {
	      var _this6 = this;
	
	      var _state = this.state;
	      var delayShow = _state.delayShow;
	      var show = _state.show;
	      var isEmptyTip = _state.isEmptyTip;
	      var disable = _state.disable;
	      var afterShow = this.props.afterShow;
	      var placeholder = this.state.placeholder;
	
	      var delayTime = show ? 0 : parseInt(delayShow, 10);
	      var eventTarget = e.currentTarget;
	
	      if (isEmptyTip || disable) return; // if the tooltip is empty, disable the tooltip
	      var updateState = function updateState() {
	        if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
	          (function () {
	            var isInvisible = !_this6.state.show;
	            _this6.setState({
	              currentEvent: e,
	              currentTarget: eventTarget,
	              show: true
	            }, function () {
	              _this6.updatePosition();
	              if (isInvisible && afterShow) afterShow();
	            });
	          })();
	        }
	      };
	
	      clearTimeout(this.delayShowLoop);
	      if (delayShow) {
	        this.delayShowLoop = setTimeout(updateState, delayTime);
	      } else {
	        updateState();
	      }
	    }
	
	    /**
	     * When mouse leave, hide tooltip
	     */
	
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip(e, hasTarget) {
	      var _this7 = this;
	
	      var _state2 = this.state;
	      var delayHide = _state2.delayHide;
	      var isEmptyTip = _state2.isEmptyTip;
	      var disable = _state2.disable;
	      var afterHide = this.props.afterHide;
	
	      if (!this.mount) return;
	      if (isEmptyTip || disable) return; // if the tooltip is empty, disable the tooltip
	      if (hasTarget) {
	        // Don't trigger other elements belongs to other ReactTooltip
	        var targetArray = this.getTargetArray(this.props.id);
	        var isMyElement = targetArray.some(function (ele) {
	          return ele === e.currentTarget;
	        });
	        if (!isMyElement || !this.state.show) return;
	      }
	      var resetState = function resetState() {
	        var isVisible = _this7.state.show;
	        _this7.setState({
	          show: false
	        }, function () {
	          _this7.removeScrollListener();
	          if (isVisible && afterHide) afterHide();
	        });
	      };
	
	      this.clearTimer();
	      if (delayHide) {
	        this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
	      } else {
	        resetState();
	      }
	    }
	
	    /**
	     * Add scroll eventlistener when tooltip show
	     * automatically hide the tooltip when scrolling
	     */
	
	  }, {
	    key: 'addScrollListener',
	    value: function addScrollListener(e) {
	      var isCaptureMode = this.isCapture(e.currentTarget);
	      window.addEventListener('scroll', this.hideTooltip, isCaptureMode);
	    }
	  }, {
	    key: 'removeScrollListener',
	    value: function removeScrollListener() {
	      window.removeEventListener('scroll', this.hideTooltip);
	    }
	
	    // Calculation the position
	
	  }, {
	    key: 'updatePosition',
	    value: function updatePosition() {
	      var _this8 = this;
	
	      var _state3 = this.state;
	      var currentEvent = _state3.currentEvent;
	      var currentTarget = _state3.currentTarget;
	      var place = _state3.place;
	      var effect = _state3.effect;
	      var offset = _state3.offset;
	
	      var node = _reactDom2.default.findDOMNode(this);
	      var result = (0, _getPosition2.default)(currentEvent, currentTarget, node, place, effect, offset);
	
	      if (result.isNewState) {
	        // Switch to reverse placement
	        return this.setState(result.newState, function () {
	          _this8.updatePosition();
	        });
	      }
	      // Set tooltip position
	      node.style.left = result.position.left + 'px';
	      node.style.top = result.position.top + 'px';
	    }
	
	    /**
	     * Set style tag in header
	     * in this way we can insert default css
	     */
	
	  }, {
	    key: 'setStyleHeader',
	    value: function setStyleHeader() {
	      if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-tooltip"]')) {
	        var tag = document.createElement('style');
	        tag.id = 'react-tooltip';
	        tag.innerHTML = _style2.default;
	        document.getElementsByTagName('head')[0].appendChild(tag);
	      }
	    }
	
	    /**
	     * CLear all kinds of timeout of interval
	     */
	
	  }, {
	    key: 'clearTimer',
	    value: function clearTimer() {
	      clearTimeout(this.delayShowLoop);
	      clearTimeout(this.delayHideLoop);
	      clearInterval(this.intervalUpdateContent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state4 = this.state;
	      var placeholder = _state4.placeholder;
	      var extraClass = _state4.extraClass;
	      var html = _state4.html;
	      var ariaProps = _state4.ariaProps;
	      var disable = _state4.disable;
	      var isEmptyTip = _state4.isEmptyTip;
	
	      var tooltipClass = (0, _classnames2.default)('__react_component_tooltip', { 'show': this.state.show && !disable && !isEmptyTip }, { 'border': this.state.border }, { 'place-top': this.state.place === 'top' }, { 'place-bottom': this.state.place === 'bottom' }, { 'place-left': this.state.place === 'left' }, { 'place-right': this.state.place === 'right' }, { 'type-dark': this.state.type === 'dark' }, { 'type-success': this.state.type === 'success' }, { 'type-warning': this.state.type === 'warning' }, { 'type-error': this.state.type === 'error' }, { 'type-info': this.state.type === 'info' }, { 'type-light': this.state.type === 'light' });
	      if (html) {
	        return _react2.default.createElement('div', _extends({ className: tooltipClass + ' ' + extraClass
	        }, ariaProps, {
	          'data-id': 'tooltip',
	          dangerouslySetInnerHTML: { __html: placeholder } }));
	      } else {
	        return _react2.default.createElement(
	          'div',
	          _extends({ className: tooltipClass + ' ' + extraClass
	          }, ariaProps, {
	            'data-id': 'tooltip' }),
	          placeholder
	        );
	      }
	    }
	  }]);
	
	  return ReactTooltip;
	}(_react.Component), _class2.propTypes = {
	  children: _react.PropTypes.any,
	  place: _react.PropTypes.string,
	  type: _react.PropTypes.string,
	  effect: _react.PropTypes.string,
	  offset: _react.PropTypes.object,
	  multiline: _react.PropTypes.bool,
	  border: _react.PropTypes.bool,
	  class: _react.PropTypes.string,
	  id: _react.PropTypes.string,
	  html: _react.PropTypes.bool,
	  delayHide: _react.PropTypes.number,
	  delayShow: _react.PropTypes.number,
	  event: _react.PropTypes.string,
	  eventOff: _react.PropTypes.string,
	  watchWindow: _react.PropTypes.bool,
	  isCapture: _react.PropTypes.bool,
	  globalEventOff: _react.PropTypes.string,
	  getContent: _react.PropTypes.any,
	  afterShow: _react.PropTypes.func,
	  afterHide: _react.PropTypes.func,
	  disable: _react.PropTypes.bool,
	  scrollHide: _react.PropTypes.bool,
	  resizeHide: _react.PropTypes.bool
	}, _class2.defaultProps = {
	  resizeHide: true
	}, _temp)) || _class) || _class) || _class) || _class;
	
	/* export default not fit for standalone, it will exports {default:...} */
	
	
	module.exports = ReactTooltip;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  /**
	   * Hide all tooltip
	   * @trigger ReactTooltip.hide()
	   */
	  target.hide = function (target) {
	    dispatchGlobalEvent(_constant2.default.GLOBAL.HIDE, { target: target });
	  };
	
	  /**
	   * Rebuild all tooltip
	   * @trigger ReactTooltip.rebuild()
	   */
	  target.rebuild = function () {
	    dispatchGlobalEvent(_constant2.default.GLOBAL.REBUILD);
	  };
	
	  /**
	   * Show specific tooltip
	   * @trigger ReactTooltip.show()
	   */
	  target.show = function (target) {
	    dispatchGlobalEvent(_constant2.default.GLOBAL.SHOW, { target: target });
	  };
	
	  target.prototype.globalRebuild = function () {
	    if (this.mount) {
	      this.unbindListener();
	      this.bindListener();
	    }
	  };
	
	  target.prototype.globalShow = function (event) {
	    if (this.mount) {
	      // Create a fake event, specific show will limit the type to `solid`
	      // only `float` type cares e.clientX e.clientY
	      var e = { currentTarget: event.detail.target };
	      this.showTooltip(e, true);
	    }
	  };
	
	  target.prototype.globalHide = function (event) {
	    if (this.mount) {
	      var hasTarget = event && event.detail && event.detail.target && true || false;
	      this.hideTooltip({ currentTarget: hasTarget && event.detail.target }, hasTarget);
	    }
	  };
	};
	
	var _constant = __webpack_require__(15);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
	  // Compatibale with IE
	  // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
	  var event = void 0;
	
	  if (typeof window.CustomEvent === 'function') {
	    event = new window.CustomEvent(eventName, { detail: opts });
	  } else {
	    event = document.createEvent('Event');
	    event.initEvent(eventName, false, true, opts);
	  }
	
	  window.dispatchEvent(event);
	}; /**
	    * Static methods for react-tooltip
	    */

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  GLOBAL: {
	    HIDE: '__react_tooltip_hide_event',
	    REBUILD: '__react_tooltip_rebuild_event',
	    SHOW: '__react_tooltip_show_event'
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  target.prototype.bindWindowEvents = function (resizeHide) {
	    // ReactTooltip.hide
	    window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
	    window.addEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide, false);
	
	    // ReactTooltip.rebuild
	    window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
	    window.addEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild, false);
	
	    // ReactTooltip.show
	    window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
	    window.addEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow, false);
	
	    // Resize
	    if (resizeHide) {
	      window.removeEventListener('resize', this.onWindowResize);
	      window.addEventListener('resize', this.onWindowResize, false);
	    }
	  };
	
	  target.prototype.unbindWindowEvents = function () {
	    window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
	    window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
	    window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
	    window.removeEventListener('resize', this.onWindowResize);
	  };
	
	  /**
	   * invoked by resize event of window
	   */
	  target.prototype.onWindowResize = function () {
	    if (!this.mount) return;
	    this.hideTooltip();
	  };
	};
	
	var _constant = __webpack_require__(15);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  target.prototype.isCustomEvent = function (ele) {
	    var event = this.state.event;
	
	    return event || !!ele.getAttribute('data-event');
	  };
	
	  /* Bind listener for custom event */
	  target.prototype.customBindListener = function (ele) {
	    var _this = this;
	
	    var _state = this.state;
	    var event = _state.event;
	    var eventOff = _state.eventOff;
	
	    var dataEvent = ele.getAttribute('data-event') || event;
	    var dataEventOff = ele.getAttribute('data-event-off') || eventOff;
	
	    dataEvent.split(' ').forEach(function (event) {
	      ele.removeEventListener(event, customListener);
	      customListener = checkStatus.bind(_this, dataEventOff);
	      ele.addEventListener(event, customListener, false);
	    });
	    if (dataEventOff) {
	      dataEventOff.split(' ').forEach(function (event) {
	        ele.removeEventListener(event, _this.hideTooltip);
	        ele.addEventListener(event, _this.hideTooltip, false);
	      });
	    }
	  };
	
	  /* Unbind listener for custom event */
	  target.prototype.customUnbindListener = function (ele) {
	    var _state2 = this.state;
	    var event = _state2.event;
	    var eventOff = _state2.eventOff;
	
	    var dataEvent = event || ele.getAttribute('data-event');
	    var dataEventOff = eventOff || ele.getAttribute('data-event-off');
	
	    ele.removeEventListener(dataEvent, customListener);
	    if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
	  };
	};
	
	/**
	 * Custom events to control showing and hiding of tooltip
	 *
	 * @attributes
	 * - `event` {String}
	 * - `eventOff` {String}
	 */
	
	var checkStatus = function checkStatus(dataEventOff, e) {
	  var show = this.state.show;
	  var id = this.props.id;
	
	  var dataIsCapture = e.currentTarget.getAttribute('data-iscapture');
	  var isCapture = dataIsCapture && dataIsCapture === 'true' || this.props.isCapture;
	  var currentItem = e.currentTarget.getAttribute('currentItem');
	
	  if (!isCapture) e.stopPropagation();
	  if (show && currentItem === 'true') {
	    if (!dataEventOff) this.hideTooltip(e);
	  } else {
	    e.currentTarget.setAttribute('currentItem', 'true');
	    setUntargetItems(e.currentTarget, this.getTargetArray(id));
	    this.showTooltip(e);
	  }
	};
	
	var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
	  for (var i = 0; i < targetArray.length; i++) {
	    if (currentTarget !== targetArray[i]) {
	      targetArray[i].setAttribute('currentItem', 'false');
	    } else {
	      targetArray[i].setAttribute('currentItem', 'true');
	    }
	  }
	};
	
	var customListener = void 0;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (target) {
	  target.prototype.isCapture = function (currentTarget) {
	    var dataIsCapture = currentTarget.getAttribute('data-iscapture');
	    return dataIsCapture && dataIsCapture === 'true' || this.props.isCapture || false;
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (e, target, node, place, effect, offset) {
	  var tipWidth = node.clientWidth;
	  var tipHeight = node.clientHeight;
	
	  var _getCurrentOffset = getCurrentOffset(e, target, effect);
	
	  var mouseX = _getCurrentOffset.mouseX;
	  var mouseY = _getCurrentOffset.mouseY;
	
	  var defaultOffset = getDefaultPosition(effect, target.clientWidth, target.clientHeight, tipWidth, tipHeight);
	
	  var _calculateOffset = calculateOffset(offset);
	
	  var extraOffset_X = _calculateOffset.extraOffset_X;
	  var extraOffset_Y = _calculateOffset.extraOffset_Y;
	
	
	  var windowWidth = window.innerWidth;
	  var windowHeight = window.innerHeight;
	
	  var _getParent = getParent(node);
	
	  var parentTop = _getParent.parentTop;
	  var parentLeft = _getParent.parentLeft;
	
	  // Get the edge offset of the tooltip
	
	  var getTipOffsetLeft = function getTipOffsetLeft(place) {
	    var offset_X = defaultOffset[place].l;
	    return mouseX + offset_X + extraOffset_X;
	  };
	  var getTipOffsetRight = function getTipOffsetRight(place) {
	    var offset_X = defaultOffset[place].r;
	    return mouseX + offset_X + extraOffset_X;
	  };
	  var getTipOffsetTop = function getTipOffsetTop(place) {
	    var offset_Y = defaultOffset[place].t;
	    return mouseY + offset_Y + extraOffset_Y;
	  };
	  var getTipOffsetBottom = function getTipOffsetBottom(place) {
	    var offset_Y = defaultOffset[place].b;
	    return mouseY + offset_Y + extraOffset_Y;
	  };
	
	  // Judge if the tooltip has over the window(screen)
	  var outsideVertical = function outsideVertical() {
	    var result = false;
	    var newPlace = void 0;
	    if (getTipOffsetTop('left') < 0 && getTipOffsetBottom('left') <= windowHeight && getTipOffsetBottom('bottom') <= windowHeight) {
	      result = true;
	      newPlace = 'bottom';
	    } else if (getTipOffsetBottom('left') > windowHeight && getTipOffsetTop('left') >= 0 && getTipOffsetTop('top') >= 0) {
	      result = true;
	      newPlace = 'top';
	    }
	    return { result: result, newPlace: newPlace };
	  };
	  var outsideLeft = function outsideLeft() {
	    var _outsideVertical = outsideVertical();
	
	    var result = _outsideVertical.result;
	    var newPlace = _outsideVertical.newPlace; // Deal with vertical as first priority
	
	    if (result && outsideHorizontal().result) {
	      return { result: false }; // No need to change, if change to vertical will out of space
	    }
	    if (!result && getTipOffsetLeft('left') < 0 && getTipOffsetRight('right') <= windowWidth) {
	      result = true; // If vertical ok, but let out of side and right won't out of side
	      newPlace = 'right';
	    }
	    return { result: result, newPlace: newPlace };
	  };
	  var outsideRight = function outsideRight() {
	    var _outsideVertical2 = outsideVertical();
	
	    var result = _outsideVertical2.result;
	    var newPlace = _outsideVertical2.newPlace;
	
	    if (result && outsideHorizontal().result) {
	      return { result: false }; // No need to change, if change to vertical will out of space
	    }
	    if (!result && getTipOffsetRight('right') > windowWidth && getTipOffsetLeft('left') >= 0) {
	      result = true;
	      newPlace = 'left';
	    }
	    return { result: result, newPlace: newPlace };
	  };
	
	  var outsideHorizontal = function outsideHorizontal() {
	    var result = false;
	    var newPlace = void 0;
	    if (getTipOffsetLeft('top') < 0 && getTipOffsetRight('top') <= windowWidth && getTipOffsetRight('right') <= windowWidth) {
	      result = true;
	      newPlace = 'right';
	    } else if (getTipOffsetRight('top') > windowWidth && getTipOffsetLeft('top') >= 0 && getTipOffsetLeft('left') >= 0) {
	      result = true;
	      newPlace = 'left';
	    }
	    return { result: result, newPlace: newPlace };
	  };
	  var outsideTop = function outsideTop() {
	    var _outsideHorizontal = outsideHorizontal();
	
	    var result = _outsideHorizontal.result;
	    var newPlace = _outsideHorizontal.newPlace;
	
	    if (result && outsideVertical().result) {
	      return { result: false };
	    }
	    if (!result && getTipOffsetTop('top') < 0 && getTipOffsetBottom('bottom') <= windowHeight) {
	      result = true;
	      newPlace = 'bottom';
	    }
	    return { result: result, newPlace: newPlace };
	  };
	  var outsideBottom = function outsideBottom() {
	    var _outsideHorizontal2 = outsideHorizontal();
	
	    var result = _outsideHorizontal2.result;
	    var newPlace = _outsideHorizontal2.newPlace;
	
	    if (result && outsideVertical().result) {
	      return { result: false };
	    }
	    if (!result && getTipOffsetBottom('bottom') > windowHeight && getTipOffsetTop('top') >= 0) {
	      result = true;
	      newPlace = 'top';
	    }
	    return { result: result, newPlace: newPlace };
	  };
	
	  // Return new state to change the placement to the reverse if possible
	  var outsideLeftResult = outsideLeft();
	  var outsideRightResult = outsideRight();
	  var outsideTopResult = outsideTop();
	  var outsideBottomResult = outsideBottom();
	
	  if (place === 'left' && outsideLeftResult.result) {
	    return {
	      isNewState: true,
	      newState: { place: outsideLeftResult.newPlace }
	    };
	  } else if (place === 'right' && outsideRightResult.result) {
	    return {
	      isNewState: true,
	      newState: { place: outsideRightResult.newPlace }
	    };
	  } else if (place === 'top' && outsideTopResult.result) {
	    return {
	      isNewState: true,
	      newState: { place: outsideTopResult.newPlace }
	    };
	  } else if (place === 'bottom' && outsideBottomResult.result) {
	    return {
	      isNewState: true,
	      newState: { place: outsideBottomResult.newPlace }
	    };
	  }
	
	  // Return tooltip offset position
	  return {
	    isNewState: false,
	    position: {
	      left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
	      top: parseInt(getTipOffsetTop(place) - parentTop, 10)
	    }
	  };
	};
	
	// Get current mouse offset
	var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
	  var boundingClientRect = currentTarget.getBoundingClientRect();
	  var targetTop = boundingClientRect.top;
	  var targetLeft = boundingClientRect.left;
	  var targetWidth = currentTarget.clientWidth;
	  var targetHeight = currentTarget.clientHeight;
	
	  if (effect === 'float') {
	    return {
	      mouseX: e.clientX,
	      mouseY: e.clientY
	    };
	  }
	  return {
	    mouseX: targetLeft + targetWidth / 2,
	    mouseY: targetTop + targetHeight / 2
	  };
	};
	
	// List all possibility of tooltip final offset
	// This is useful in judging if it is necessary for tooltip to switch position when out of window
	/**
	 * Calculate the position of tooltip
	 *
	 * @params
	 * - `e` {Event} the event of current mouse
	 * - `target` {Element} the currentTarget of the event
	 * - `node` {DOM} the react-tooltip object
	 * - `place` {String} top / right / bottom / left
	 * - `effect` {String} float / solid
	 * - `offset` {Object} the offset to default position
	 *
	 * @return {Object
	 * - `isNewState` {Bool} required
	 * - `newState` {Object}
	 * - `position` {OBject} {left: {Number}, top: {Number}}
	 */
	var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
	  var top = void 0;
	  var right = void 0;
	  var bottom = void 0;
	  var left = void 0;
	  var disToMouse = 3;
	  var triangleHeight = 2;
	  var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip
	
	  if (effect === 'float') {
	    top = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: -(tipHeight + disToMouse + triangleHeight),
	      b: -disToMouse
	    };
	    bottom = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: disToMouse + cursorHeight,
	      b: tipHeight + disToMouse + triangleHeight + cursorHeight
	    };
	    left = {
	      l: -(tipWidth + disToMouse + triangleHeight),
	      r: -disToMouse,
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	    right = {
	      l: disToMouse,
	      r: tipWidth + disToMouse + triangleHeight,
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	  } else if (effect === 'solid') {
	    top = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: -(targetHeight / 2 + tipHeight + triangleHeight),
	      b: -(targetHeight / 2)
	    };
	    bottom = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: targetHeight / 2,
	      b: targetHeight / 2 + tipHeight + triangleHeight
	    };
	    left = {
	      l: -(tipWidth + targetWidth / 2 + triangleHeight),
	      r: -(targetWidth / 2),
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	    right = {
	      l: targetWidth / 2,
	      r: tipWidth + targetWidth / 2 + triangleHeight,
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	  }
	
	  return { top: top, bottom: bottom, left: left, right: right };
	};
	
	// Consider additional offset into position calculation
	var calculateOffset = function calculateOffset(offset) {
	  var extraOffset_X = 0;
	  var extraOffset_Y = 0;
	
	  if (Object.prototype.toString.apply(offset) === '[object String]') {
	    offset = JSON.parse(offset.toString().replace(/\'/g, '\"'));
	  }
	  for (var key in offset) {
	    if (key === 'top') {
	      extraOffset_Y -= parseInt(offset[key], 10);
	    } else if (key === 'bottom') {
	      extraOffset_Y += parseInt(offset[key], 10);
	    } else if (key === 'left') {
	      extraOffset_X -= parseInt(offset[key], 10);
	    } else if (key === 'right') {
	      extraOffset_X += parseInt(offset[key], 10);
	    }
	  }
	
	  return { extraOffset_X: extraOffset_X, extraOffset_Y: extraOffset_Y };
	};
	
	// Get the offset of the parent elements
	var getParent = function getParent(currentTarget) {
	  var currentParent = currentTarget;
	  while (currentParent) {
	    if (window.getComputedStyle(currentParent).getPropertyValue('transform') !== 'none') break;
	    currentParent = currentParent.parentElement;
	  }
	
	  var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
	  var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;
	
	  return { parentTop: parentTop, parentLeft: parentLeft };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (tip, children, getContent, multiline) {
	  if (children) return children;
	  if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.
	  if (getContent === null) return null; // Tip not exist and childern is null or undefined
	
	  var regexp = /<br\s*\/?>/;
	  if (!multiline || multiline === 'false' || !regexp.test(tip)) {
	    // No trim(), so that user can keep their input
	    return tip;
	  }
	
	  // Multiline tooltip content
	  return tip.split(regexp).map(function (d, i) {
	    return _react2.default.createElement(
	      'span',
	      { key: i, className: 'multi-line' },
	      d
	    );
	  });
	};
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseAria = parseAria;
	/**
	 * Support aria- and role in ReactTooltip
	 *
	 * @params props {Object}
	 * @return {Object}
	 */
	function parseAria(props) {
	  var ariaObj = {};
	  Object.keys(props).filter(function (prop) {
	    // aria-xxx and role is acceptable
	    return (/(^aria-\w+$|^role$)/.test(prop)
	    );
	  }).forEach(function (prop) {
	    ariaObj[prop] = props[prop];
	  });
	
	  return ariaObj;
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '.__react_component_tooltip{border-radius:3px;display:inline-block;font-size:13px;left:-999em;opacity:0;padding:8px 21px;position:fixed;pointer-events:none;transition:opacity 0.3s ease-out;top:-999em;visibility:hidden;z-index:999}.__react_component_tooltip:before,.__react_component_tooltip:after{content:"";width:0;height:0;position:absolute}.__react_component_tooltip.show{opacity:0.9;margin-top:0px;margin-left:0px;visibility:visible}.__react_component_tooltip.type-dark{color:#fff;background-color:#222}.__react_component_tooltip.type-dark.place-top:after{border-top-color:#222;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-dark.place-bottom:after{border-bottom-color:#222;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-dark.place-left:after{border-left-color:#222;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-dark.place-right:after{border-right-color:#222;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-dark.border{border:1px solid #fff}.__react_component_tooltip.type-dark.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-dark.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-dark.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-dark.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-success{color:#fff;background-color:#8DC572}.__react_component_tooltip.type-success.place-top:after{border-top-color:#8DC572;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-success.place-bottom:after{border-bottom-color:#8DC572;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-success.place-left:after{border-left-color:#8DC572;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-success.place-right:after{border-right-color:#8DC572;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-success.border{border:1px solid #fff}.__react_component_tooltip.type-success.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-success.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-success.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-success.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-warning{color:#fff;background-color:#F0AD4E}.__react_component_tooltip.type-warning.place-top:after{border-top-color:#F0AD4E;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-warning.place-bottom:after{border-bottom-color:#F0AD4E;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-warning.place-left:after{border-left-color:#F0AD4E;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-warning.place-right:after{border-right-color:#F0AD4E;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-warning.border{border:1px solid #fff}.__react_component_tooltip.type-warning.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-warning.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-warning.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-warning.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-error{color:#fff;background-color:#BE6464}.__react_component_tooltip.type-error.place-top:after{border-top-color:#BE6464;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-error.place-bottom:after{border-bottom-color:#BE6464;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-error.place-left:after{border-left-color:#BE6464;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-error.place-right:after{border-right-color:#BE6464;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-error.border{border:1px solid #fff}.__react_component_tooltip.type-error.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-error.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-error.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-error.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-info{color:#fff;background-color:#337AB7}.__react_component_tooltip.type-info.place-top:after{border-top-color:#337AB7;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-info.place-bottom:after{border-bottom-color:#337AB7;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-info.place-left:after{border-left-color:#337AB7;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-info.place-right:after{border-right-color:#337AB7;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-info.border{border:1px solid #fff}.__react_component_tooltip.type-info.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-info.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-info.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-info.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-light{color:#222;background-color:#fff}.__react_component_tooltip.type-light.place-top:after{border-top-color:#fff;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-light.place-bottom:after{border-bottom-color:#fff;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-light.place-left:after{border-left-color:#fff;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-light.place-right:after{border-right-color:#fff;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-light.border{border:1px solid #222}.__react_component_tooltip.type-light.border.place-top:before{border-top:8px solid #222}.__react_component_tooltip.type-light.border.place-bottom:before{border-bottom:8px solid #222}.__react_component_tooltip.type-light.border.place-left:before{border-left:8px solid #222}.__react_component_tooltip.type-light.border.place-right:before{border-right:8px solid #222}.__react_component_tooltip.place-top{margin-top:-10px}.__react_component_tooltip.place-top:before{border-left:10px solid transparent;border-right:10px solid transparent;bottom:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-top:after{border-left:8px solid transparent;border-right:8px solid transparent;bottom:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-bottom{margin-top:10px}.__react_component_tooltip.place-bottom:before{border-left:10px solid transparent;border-right:10px solid transparent;top:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-bottom:after{border-left:8px solid transparent;border-right:8px solid transparent;top:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-left{margin-left:-10px}.__react_component_tooltip.place-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;right:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-left:after{border-top:5px solid transparent;border-bottom:5px solid transparent;right:-6px;top:50%;margin-top:-4px}.__react_component_tooltip.place-right{margin-left:10px}.__react_component_tooltip.place-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;left:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-right:after{border-top:5px solid transparent;border-bottom:5px solid transparent;left:-6px;top:50%;margin-top:-4px}.__react_component_tooltip .multi-line{display:block;padding:2px 0px;text-align:center}';

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header_2dhAB","settings":"settings_1ln6X"};

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"popup":"popup_2xv3Y","place-left":"place-left_3GH5g"};

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Image = __webpack_require__(31);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _screen = __webpack_require__(33);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Screen = function (_Component) {
	  _inherits(Screen, _Component);
	
	  function Screen(props) {
	    _classCallCheck(this, Screen);
	
	    var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, props));
	
	    _this.state = {
	      position: 0
	    };
	    _this.theme = _this.props.theme ? _this.props.theme : {};
	    return _this;
	  }
	
	  _createClass(Screen, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        {
	          id: this.props.id,
	          className: (0, _classnames2.default)(_screen2.default.screen, this.theme.screen),
	          style: {
	            transitionDuration: this.props.transitionDuration,
	            transform: 'translateX(' + this.state.position + 'px)'
	          },
	          'data-index': this.props.index
	        },
	        _react2.default.createElement(_Image2.default, {
	          title: this.props.image.title,
	          image: this.props.image.name,
	          ref: 'image'
	        })
	      );
	    }
	
	    /**
	     * Move the screen X quantity of pixels
	     * 
	     * @param position pixels to move
	     * @return {Promise} when the screen has been moved.
	     */
	
	  }, {
	    key: 'move',
	    value: function move(position) {
	      var _this2 = this;
	
	      return new Promise(function (resolve, reject) {
	        _this2.setState({ position: position }, function () {
	          return resolve();
	        });
	      });
	    }
	  }, {
	    key: 'loadImage',
	    value: function loadImage() {
	      this.refs.image.load();
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      return this.state.position;
	    }
	  }]);
	
	  return Screen;
	}(_react.Component);
	
	exports.default = Screen;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loading = __webpack_require__(32);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Image = function (_Component) {
	  _inherits(Image, _Component);
	
	  function Image(props) {
	    _classCallCheck(this, Image);
	
	    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
	
	    _this.isLoaded = false;
	    _this.state = {
	      image: _this.props.loadingImage ? _this.props.loadingImage : _loading2.default
	    };
	    return _this;
	  }
	
	  _createClass(Image, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('img', {
	        id: this.props.id,
	        ref: 'img',
	        src: this.state.image,
	        'data-loading': true
	      });
	    }
	
	    /**
	     * Load the real image. This method  is called
	     * by the parent (screen) when it is shown.
	     * This method only could be fired once by image.
	     */
	
	  }, {
	    key: 'load',
	    value: function load() {
	      var _this2 = this;
	
	      if (!this.isLoaded) {
	        this.setState({
	          image: this.props.image
	        }, function () {
	          _this2.refs.img.onload = function () {
	            _this2.refs.img.removeAttribute('data-loading');
	            _this2.isLoaded = true;
	          };
	        });
	      }
	      this.context.emitter.emit('changeTitle', this.props.title);
	    }
	  }]);
	
	  return Image;
	}(_react.Component);
	
	exports.default = Image;
	
	
	Image.contextTypes = {
	  emitter: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,R0lGODlhyADIALMPAPTz9Nzd3ImIh/z6/GtpauTj5OTe3J+ena2sq8HAwMvJyuzs7NLQ0Lm3t+zm5P///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3QUE2REZDMDIxRDExRTQ5RjFBOTNBQjgxRjgzQTdEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI3QUE2REZEMDIxRDExRTQ5RjFBOTNBQjgxRjgzQTdEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjdBQTZERkEwMjFEMTFFNDlGMUE5M0FCODFGODNBN0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjdBQTZERkIwMjFEMTFFNDlGMUE5M0FCODFGODNBN0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl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"

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"screen":"screen_2idUF","pushy":"pushy_24y5V","fady":"fady_OiFmS"};

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _control = __webpack_require__(36);
	
	var _control2 = _interopRequireDefault(_control);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Control = function (_Component) {
	  _inherits(Control, _Component);
	
	  function Control(props) {
	    _classCallCheck(this, Control);
	
	    var _this = _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));
	
	    _this.state = {
	      activeIndex: -1
	    };
	    _this.theme = _this.props.theme ? _this.props.theme : {};
	    return _this;
	  }
	
	  _createClass(Control, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'footer',
	        {
	          ref: 'control',
	          id: this.props.id,
	          className: (0, _classnames2.default)(_control2.default.control, this.theme.control, "no-cursor") },
	        [].concat(_toConsumableArray(Array(this.props.imagesCount))).map(function (v, i) {
	          return _react2.default.createElement('button', {
	            key: i,
	            'data-index': i,
	            className: _this2.state.activeIndex === i ? _control2.default.active + ' ' + _this2.theme.active : null,
	            onClick: _this2.showPage.bind(_this2)
	          });
	        })
	      );
	    }
	
	    /**
	     * Enable a button by it's index
	     * 
	     * @param index the index of the button
	     */
	
	  }, {
	    key: 'active',
	    value: function active(index, cb) {
	      this.setState({
	        activeIndex: index
	      }, function () {
	        if (typeof cb === 'function') {
	          cb();
	        }
	      });
	    }
	
	    /**
	     * Emit an event to show a screen by it's index
	     */
	
	  }, {
	    key: 'showPage',
	    value: function showPage(e) {
	      var _this3 = this;
	
	      var index = Number(e.target.getAttribute('data-index'));
	      this.active(index, function () {
	        _this3.context.emitter.emit('changeScreen', index);
	      });
	    }
	  }]);
	
	  return Control;
	}(_react.Component);
	
	exports.default = Control;
	
	
	Control.contextTypes = {
	  emitter: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"control":"control_1HU6e","active":"active_2VHQ_"};

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  isNumber: function isNumber(value) {
	    return typeof value === 'number';
	  },
	  isString: function isString(value) {
	    return typeof value === 'string';
	  },
	  isStringNumber: function isStringNumber(value) {
	    var sPos = value.indexOf('s');
	    return !isNaN(value.substring(0, sPos));
	  },
	  isBoolean: function isBoolean(value) {
	    return typeof value === 'boolean';
	  },
	  isObject: function isObject(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	  },
	  isArray: function isArray(value) {
	    try {
	      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.length !== undefined;
	    } catch (e) {
	      return false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"portrait":"portrait_2cHLH","draggable":"draggable_1w2Qn","body":"body_1lCTf"};

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map