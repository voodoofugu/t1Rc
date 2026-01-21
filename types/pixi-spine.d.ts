import "pixi.js"; // чтобы расширить существующий namespace

declare module "pixi.js" {
  namespace PIXI {
    namespace spine {
      class Spine {
        constructor(data: any);
        update(delta: number): void;
        setAnimation(trackIndex: number, name: string, loop?: boolean): void;
        state: any;
        skeleton: any;
      }
    }
  }
}

// или, если используете через глобальный PIXI (через скрипт):
declare global {
  namespace PIXI {
    namespace spine {
      class Spine {
        constructor(data: any);
        update(delta: number): void;
        setAnimation(trackIndex: number, name: string, loop?: boolean): void;
        state: any;
        skeleton: any;
      }
    }
  }
}
