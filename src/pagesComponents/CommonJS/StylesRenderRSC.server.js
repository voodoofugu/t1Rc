"use strict";

var _server = require("react-dom/server");
var _reactHelmetAsync = require("react-helmet-async");
var _stylesRsc = _interopRequireDefault(require("./styles-rsc"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Серверный код

function renderWithStyles(cssFiles) {
  var helmetContext = {};
  var appStream = (0, _server.renderToNodeStream)( /*#__PURE__*/React.createElement(_reactHelmetAsync.HelmetProvider, {
    context: helmetContext
  }, /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement(_stylesRsc.default, {
    cssFiles: cssFiles
  })), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("div", {
    id: "root"
  })))));
  return new Readable({
    read: function read(size) {
      // Отправьте контент клиенту
      this.push(appStream.read());
      this.push(null);
    }
  });
}

// Здесь настройте ваш сервер Express или другой серверный фреймворк
app.get("/", function (req, res) {
  // Загрузка стилей перед рендерингом
  var cssFiles = ["01-all", "01-all-res", "v2-screen-main"];
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  renderWithStyles(cssFiles).pipe(res);
});