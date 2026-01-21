class PixiLoaderView extends PIXI.Container {
  private graphics: PIXI.Graphics;
  private ticker: PIXI.ticker.Ticker; // в Pixi 4 это глобальный тикер

  constructor(width: number, height: number) {
    super();

    this.graphics = new PIXI.Graphics();
    this.addChild(this.graphics);
    this.x = width / 2;
    this.y = height / 2;

    // глобальный тикер Pixi v4
    this.ticker = PIXI.ticker.shared;
    this.ticker.add(this.animate);
  }

  private animate = () => {
    this.graphics.clear();
    this.graphics.lineStyle(6, 0xffffff, 1);
    this.graphics.drawCircle(0, 0, 20);
    this.graphics.rotation += 0.08;
  };

  destroy(options?: any) {
    this.ticker.remove(this.animate);
    super.destroy(options);
  }
}

export default PixiLoaderView;
