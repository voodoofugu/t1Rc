import PIXIComponent from "../../../scripts/pixi-animate/PIXIComponent";
import createTutorGirlView from "../../../scripts/pixi-animate/views/createTutorGirlView";

function PixiPage() {
  const createView = () => {
    return new Promise<PIXI.Container>((resolve) => {
      const container = new PIXI.Container();

      // красный квадрат
      const g = new PIXI.Graphics();
      g.beginFill(0xff0000);
      g.drawRect(0, 0, 100, 100);
      g.endFill();
      g.x = 150;
      g.y = 100;
      container.addChild(g);

      // загружаем изображение
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

        resolve(container);
      };
    });
  };

  return (
    <div className="main world1">
      {/* <PIXIComponent
        width={400}
        height={300}
        view={createView}
        // onStageInit={() => console.log("Stage готов")}
      /> */}

      <PIXIComponent width={1200} height={640} view={createTutorGirlView} />
    </div>
  );
}

export default PixiPage;
