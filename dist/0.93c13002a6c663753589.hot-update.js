webpackHotUpdate(0,{

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(910);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import axios from 'axios';
var outcomes;

var Voice = function (_Component) {
  _inherits(Voice, _Component);

  function Voice() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Voice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Voice.__proto__ || Object.getPrototypeOf(Voice)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onClick = function (evt) {
      var that = _this;
      var isButton = $(evt.target).is(':button');
      if (isButton) {
        // if clicked on outer button node, get child mic image
        var btImg = evt.target.childNodes[1]; //get mic image
        !$(btImg).hasClass('Rec') ? $(btImg).addClass('Rec') : $(btImg).removeClass('Rec');
      } else {
        // if clicked on inner mic image
        var btImg = evt.target;
        !$(btImg).hasClass('Rec') ? $(btImg).addClass('Rec') : $(btImg).removeClass('Rec');
      }
      var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;
      recognition.start();
      recognition.onresult = function (event) {
        var text = event.results[0][0].transcript;
        text = text.charAt(0).toUpperCase() + text.slice(1);

        that.props.onSubmit({
          type: 'text',
          content: text
        });
      };

      recognition.onend = function () {
        console.log('Speech recognition finished');
        $('.Rec').removeClass('Rec');
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Voice, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { className: 'voice-button', onClick: this.onClick },
        _react2.default.createElement('img', {
          className: 'voice-button-image',
          src: 'https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/microphone.png'
        })
      );
    }
  }]);

  return Voice;
}(_react.Component);

exports.default = Voice;

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".voice-button {\n  width: 20px;\n  padding: 0px 0.1rem;\n  background: white;\n  vertical-align: middle;\n  border-radius: 50%; }\n\n.voice-button-image {\n  border-radius: 50%;\n  width: 12px; }\n\n.Rec {\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);\n            box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3); }\n  65% {\n    -webkit-box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);\n            box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3); }\n  90% {\n    -webkit-box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);\n            box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);\n            box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3); }\n  65% {\n    -webkit-box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);\n            box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3); }\n  90% {\n    -webkit-box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);\n            box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0); } }\n", ""]);

// exports


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(909);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(15)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(909, function() {
			var newContent = __webpack_require__(909);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.93c13002a6c663753589.hot-update.js.map