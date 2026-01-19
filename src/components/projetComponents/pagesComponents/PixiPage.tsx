import PIXIComponent from "../../../scripts/pixi-animate/PIXIComponent";
import { PIXIView } from "../../../scripts/pixi-animate/PIXIView";

export const cssFiles = ["all-001-preload"];

// Минимальный тестовый View
class TestView extends PIXIView {
  constructor() {
    super(new PIXI.Container());
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xff0000);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();
    (this.symbol as PIXI.Container).addChild(graphics);
  }
}

function PixiPage() {
  const view = new TestView();

  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <PIXIComponent width={400} height={300} view={view} />
    </div>
  );
}

export default PixiPage;
