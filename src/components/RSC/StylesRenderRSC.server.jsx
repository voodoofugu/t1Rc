// Серверный код
import { renderToNodeStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import StylesRSC from "./styles-rsc";

function renderWithStyles(cssFiles) {
  const helmetContext = {};

  const appStream = renderToNodeStream(
    <HelmetProvider context={helmetContext}>
      <html>
        <head>
          <StylesRSC cssFiles={cssFiles} />
        </head>
        <body>
          <div id="root">{/* Вставьте ваш основной компонент здесь */}</div>
        </body>
      </html>
    </HelmetProvider>
  );

  return new Readable({
    read(size) {
      // Отправьте контент клиенту
      this.push(appStream.read());
      this.push(null);
    },
  });
}

// Здесь настройте ваш сервер Express или другой серверный фреймворк
app.get("/", (req, res) => {
  // Загрузка стилей перед рендерингом
  const cssFiles = ["01-all", "01-all-res", "v2-screen-main"];
  res.writeHead(200, { "Content-Type": "text/html" });
  renderWithStyles(cssFiles).pipe(res);
});
