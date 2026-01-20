declare namespace PIXI {
  class DisplayObject {
    renderable: boolean;
    destroy?(options?: any): void;
  }

  class Container extends DisplayObject {
    addChild(child: DisplayObject): void;
    destroy(options?: any): void;
  }

  class Graphics extends Container {
    beginFill(color: number): void;
    drawRect(x: number, y: number, w: number, h: number): void;
    endFill(): void;
    x: number;
    y: number;
  }

  class Texture {
    baseTexture: any;
    width: number;
    height: number;

    static from(source: string | HTMLImageElement): Texture;
  }

  class Sprite extends Container {
    texture: Texture;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor(texture: Texture);
  }

  interface ApplicationOptions {
    width?: number;
    height?: number;
    view?: HTMLCanvasElement;
    backgroundColor?: number;
    transparent?: boolean;
    antialias?: boolean;
    resolution?: number;
    autoStart?: boolean;
    preferWebGL?: boolean;
    forceCanvas?: boolean;
  }

  class Application {
    stage: Container;
    renderer: any;

    view: HTMLCanvasElement;

    constructor(options?: ApplicationOptions);

    start(): void;
    stop(): void;

    destroy(removeView?: boolean, stageOptions?: boolean): void;
  }

  namespace loaders {
    class Loader {
      resources: Record<string, any>;
      loading: boolean;
      add(name: string, url: string, options?: any): this;
      load(cb: (loader: Loader, resources: ResourceDictionary) => void): void;
      onComplete: {
        add(cb: () => void): void;
      };
    }

    interface ResourceDictionary {
      [key: string]: any;
    }
  }

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

/** Глобальная переменная из UMD */
declare const PIXI: typeof PIXI;
