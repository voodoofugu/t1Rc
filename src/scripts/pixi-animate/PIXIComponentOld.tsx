import { Component, CSSProperties } from "react";

import { PIXIView } from "./PIXIView";

declare const DEBUG: number;

function Loading(_props: { noBG?: boolean; addStyle?: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(4, 8, 42, 0.4)",
        color: "#fff",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      Loading…
    </div>
  );
}
interface PIXIComponentProps {
  width: number;
  height: number;
  style?: CSSProperties;
  stageOptions?: Partial<PIXI.ApplicationOptions>;
  view?: PIXIView;
  className?: string;
  onStageInit?: () => void;
}

export default class PIXIComponent extends Component<PIXIComponentProps> {
  private canvas: HTMLCanvasElement | null = null;
  private app: PIXI.Application | null = null;
  state = {
    loading: false,
  };

  render() {
    const { width, height, className, style } = this.props;
    const isLoading = Boolean(this.app && this.state.loading);

    return (
      <div className={className || ""} style={{ ...style, width, height }}>
        <canvas
          width={width}
          height={height}
          ref={this.refCanvas}
          style={{ width, height }}
        />

        {isLoading && <Loading noBG={false} addStyle="" />}

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

  // ! добавлено для обновления
  componentDidUpdate(prevProps: PIXIComponentProps) {
    if (!this.app) return;

    if (this.props.view && this.props.view !== prevProps.view) {
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
  // Public API
  // ------------------------
  setRenderable(renderable: boolean) {
    if (!this.app) return;

    if (renderable) this.app.start();
    else this.app.stop();
  }

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
      // preferWebGL: false, // добавлено
      forceCanvas: true, // добавлено
      backgroundColor: 0x1099bb,
      // backgroundAlpha: 0,
      ...(stageOptions ?? {}),
    };

    const app = new PIXI.Application(opts);
    this.app = app;

    // для отладки
    (globalThis as any).__PIXI_APP__ = app;

    if (view) this.initView(view);
    else {
      this.setState({ loading: true });
      console.warn("PIXIComponent: view is not provided");
    }
  }

  private initView(view: PIXIView) {
    const result = view.getSymbol();

    if (!result) return;

    if (typeof (result as Promise<PIXI.Container>).then === "function") {
      this.setState({ loading: true });
      (result as Promise<PIXI.Container>).then(this.setView).finally(() => {
        this.setState({ loading: false });
      });
    } else {
      this.setView(result as PIXI.Container);
      this.setState({ loading: false });
    }
  }

  private setView = (symbol: PIXI.Container) => {
    this.app?.stage.addChild(symbol);
    this.props.onStageInit?.();
  };

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
    this.props.view?.destroy();

    if (!this.app) return;

    this.app.stage.destroy();
    this.app.destroy(true);
    this.app = null;
  };
}
