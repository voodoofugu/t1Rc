import { useEffect, useRef, useState } from "react";
import PIXIComponent from "../../../scripts/pixi-animate/PIXIComponent";
import { PIXIView } from "../../../scripts/pixi-animate/PIXIView";

function PixiPage() {
  const [view, setView] = useState<PIXIView | undefined>();

  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !window.PIXI) return;
    // Если canvas уже содержит Pixi, не создаём новый
    if (appRef.current) return;

    const app = new PIXI.Application({
      width: 400,
      height: 300,
      backgroundColor: 0x1099bb,
      antialias: true,
    });

    // Добавляем canvas в DOM
    canvasRef.current.innerHTML = "";
    canvasRef.current.appendChild(app.view as HTMLCanvasElement);

    appRef.current = app;

    // Минимальный графический объект
    const g = new PIXI.Graphics();
    g.beginFill(0xff0000);
    g.drawRect(0, 0, 50, 50);
    g.endFill();
    g.x = 100;
    g.y = 100;
    app.stage.addChild(g);

    // Загружаем картинку
    const img = new Image();
    img.src = "img/images/hero-all/tithero-675/icons/break-girl.png";
    img.onload = () => {
      if (!appRef.current) return;
      const texture = PIXI.Texture.from(img);
      const sprite = new PIXI.Sprite(texture);
      sprite.width = 100;
      sprite.height = 100;
      sprite.x = 200;
      sprite.y = 100;
      appRef.current.stage.addChild(sprite);
    };

    return () => {
      app.destroy(true);
      appRef.current = null;
    };
  }, []);

  useEffect(() => {
    const container = new PIXI.Container();

    // Создаём прямоугольник для теста
    const g = new PIXI.Graphics();
    g.beginFill(0xff0000);
    g.drawRect(0, 0, 100, 100);
    g.endFill();
    g.x = 150;
    g.y = 100;
    container.addChild(g);

    const img = new Image();
    img.src = "img/images/hero-all/tithero-675/icons/break-girl.png";
    img.onload = () => {
      const texture = PIXI.Texture.from(img);
      const sprite = new PIXI.Sprite(texture);
      sprite.width = 200;
      sprite.height = 200;
      sprite.x = 50;
      sprite.y = 50;
      container.addChild(sprite);

      // Только после загрузки создаём PIXIView
      setView(new PIXIView(container));
    };
  }, []);

  return (
    <div className="main world1">
      <div className="canvas-wrap" ref={canvasRef} />
      <PIXIComponent
        width={400}
        height={300}
        style={{ position: "relative" }}
        className="canvas"
        view={view}
      />
    </div>
  );
}

export default PixiPage;
