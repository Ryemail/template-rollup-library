
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as _createClass, a as _classCallCheck } from './createClass-ec81664a.js';

function hello() {
  console.log("hello1");
}

var es6Method = function es6Method() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  console.log("我是箭头函数1", arg);
  return arg;
};

var Parent = /*#__PURE__*/function () {
  function Parent() {
    _classCallCheck(this, Parent);

    this.name = "LEFT";
  }

  _createClass(Parent, [{
    key: "getProp",
    value: function getProp(prop) {
      return this[prop];
    }
  }]);

  return Parent;
}();

var main = {
  hello: hello,
  es6Method: es6Method,
  Parent: Parent
};

export { main as default };
