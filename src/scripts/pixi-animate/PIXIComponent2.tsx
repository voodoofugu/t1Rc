import { Component, CSSProperties } from "react";

import PixiLoaderView from "./PixiLoaderView";

declare const DEBUG: number;

type ViewFactory = () => PIXI.Container | Promise<PIXI.Container>;

interface PIXIComponentProps {
  width: number;
  height: number;
  style?: CSSProperties;
  stageOptions?: Partial<PIXI.ApplicationOptions>;
  view?: ViewFactory;
  className?: string;
  onStageInit?: () => void;
}

class PIXIComponent2 extends Component<PIXIComponentProps> {
  private canvas: HTMLCanvasElement | null = null;
  private app: PIXI.Application | null = null;
  private currentView?: PIXI.Container;
  private loader?: PixiLoaderView;
  private viewToken = 0;

  render() {
    const { width, height, className, style } = this.props;

    return (
      <div className={className || ""} style={{ ...style, width, height }}>
        <canvas
          width={width}
          height={height}
          ref={this.refCanvas}
          style={{ width, height }}
        />

        {false && DEBUG && (
          <button
            style={{
              position: "absolute",
              bottom: 0,
              left: "-100px",
            }}
            onClick={this.takeScreenshot}
          >
            ScreenShot
          </button>
        )}
      </div>
    );
  }

  componentDidUpdate(prevProps: PIXIComponentProps) {
    if (!this.app) return;

    if (this.props.view !== prevProps.view && this.props.view) {
      this.initView(this.props.view);
    }
  }

  // ------------------------
  // Canvas ref
  // ------------------------
  private refCanvas = (ref: HTMLCanvasElement | null) => {
    this.canvas = ref;

    if (ref) {
      this.initStage();
    } else {
      this.destroy();
    }
  };

  // ------------------------
  // Stage init
  // ------------------------
  private initStage() {
    if (!this.canvas || this.app) return;

    const resolution = window.devicePixelRatio > 1 ? 2 : 1;
    const { width, height, stageOptions, view } = this.props;

    const opts: PIXI.ApplicationOptions = {
      width,
      height,
      view: this.canvas,
      resolution,
      forceCanvas: true,
      backgroundColor: 0x1099bb,
      ...(stageOptions ?? {}),
    };

    const app = new PIXI.Application(opts);
    this.app = app;
    (globalThis as any).__PIXI_APP__ = app;

    // добавляем лоадер
    this.loader = new PixiLoaderView(width, height);
    app.stage.addChild(this.loader);

    if (view) this.initView(view);
  }

  // ------------------------
  // View lifecycle
  // ------------------------
  private initView(factory: ViewFactory) {
    const token = ++this.viewToken;
    const result = factory();

    const apply = (container: PIXI.Container) => {
      if (token !== this.viewToken) return;

      // удаляем старый view
      if (this.currentView) {
        this.app?.stage.removeChild(this.currentView);
        this.currentView.destroy?.();
      }

      this.currentView = container;
      this.app?.stage.addChild(container);

      // убираем лоадер
      if (this.loader) {
        this.app?.stage.removeChild(this.loader);
        this.loader.destroy();
        this.loader = undefined;
      }

      this.props.onStageInit?.();
    };

    if (result instanceof Promise) {
      result.then(apply).catch(console.error);
    } else {
      apply(result);
    }
  }

  // ------------------------
  // Utils
  // ------------------------
  private takeScreenshot = () => {
    if (!this.app) return;

    this.app.renderer.extract
      .canvas(this.app.stage)
      .toBlob((blob: Blob | null) => {
        if (!blob) return;

        const a = document.createElement("a");
        document.body.append(a);

        a.download = "screenshot.png";
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
      }, "image/png");
  };

  // ------------------------
  // Destroy
  // ------------------------
  private destroy = () => {
    if (this.loader) {
      this.loader.destroy();
      this.loader = undefined;
    }

    if (this.currentView) {
      this.currentView.destroy?.();
      this.currentView = undefined;
    }

    if (!this.app) return;

    this.app.stage.destroy();
    this.app.destroy(true);
    this.app = null;
  };
}

export default PIXIComponent2;
