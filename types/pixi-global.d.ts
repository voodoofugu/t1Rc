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
  }

  class Application {
    stage: Container;
    renderer: any;

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
