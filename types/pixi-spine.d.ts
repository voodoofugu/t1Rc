declare global {
  namespace PIXI {
    namespace spine {
      class Spine extends PIXI.Container {
        constructor(data: any);

        update(delta: number): void;

        state: any;
        skeleton: any;
        stateData: any;
      }
    }
  }
}

export {};
