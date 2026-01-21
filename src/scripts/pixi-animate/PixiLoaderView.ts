class PixiLoaderView extends PIXI.Container {
  private graphics: PIXI.Graphics;
  private ticker: PIXI.ticker.Ticker; // в Pixi 4 это глобальный тикер
  private baseRadius = 22;
  private pulsePhase = 0;
  private angle = 0;

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
    const g = this.graphics;

    this.pulsePhase += 0.08;

    const pulse = Math.sin(this.pulsePhase) * 2; // лёгкая пульсация
    const radius = this.baseRadius + pulse;

    g.clear();

    // === свечение (подложка) ===
    g.lineStyle(10, 0xffffff, 0.06);
    g.drawCircle(0, 0, radius);

    g.lineStyle(7, 0xffffff, 0.15);
    g.drawCircle(0, 0, radius);

    // --- Базовое кольцо ---
    g.lineStyle(3, 0xffffff, 0.25);
    g.drawCircle(0, 0, radius);

    // --- Хвост (дуга) ---
    const segments = 18;
    const tailLength = Math.PI * 0.9;

    for (let i = 0; i < segments; i++) {
      const t = i / segments;
      const alpha = t * 0.9;
      const thickness = 2 + t * 4;

      const startAngle = t * tailLength;
      const endAngle = startAngle + tailLength / segments;

      g.lineStyle(thickness, 0xffffff, alpha);
      g.arc(0, 0, radius, startAngle, endAngle);
    }

    // --- Вращение всего контейнера ---
    this.rotation += 0.12;
  };

  destroy(options?: any) {
    this.ticker.remove(this.animate);
    super.destroy(options);
  }
}

export default PixiLoaderView;
