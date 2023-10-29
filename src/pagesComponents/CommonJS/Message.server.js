"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _db = require("../../../server/db.server");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Message(_ref) {
  var id = _ref.id;
  var message = _db.db.messages[id]; // Получаем сообщение по id
  if (!message) {
    return /*#__PURE__*/_react.default.createElement("div", null, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.");
  }
  function someServerFunction() {
    return "Результат серверной функции";
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "messageQwe"
  }, /*#__PURE__*/_react.default.createElement("h1", null, message.title), /*#__PURE__*/_react.default.createElement("p", null, message.body), /*#__PURE__*/_react.default.createElement("p", null, someServerFunction()));
}
var _default = exports.default = Message;