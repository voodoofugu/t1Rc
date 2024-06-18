// PIXI = window.PIXI;

// import React, { Component } from "react";

// import App from "App";

// import type PIXIView from "./PIXIView";

// import LoadingProgress from "./LoadingProgress";

// declare var DEBUG: number;

// export default class PIXIComponent extends Component<{
//   width: number,
//   height: number,
//   stageOptions?: ?Object,
//   view?: PIXIView,
//   className?: string,
//   onStageInit?: ?Function,
// }> {
//   canvas: ?HTMLCanvasElement = null;
//   app: ?PIXI.Application = null;
//   loading = false;

//   render() {
//     // if (App.webglSupport !== 1) return null;
//     const loading = this.app && this.loading;
//     const { width, height, className } = this.props;
//     return (
//       <div
//         className={`${className || ""}`}
//         style={{
//           width,
//           height,
//         }}
//       >
//         <canvas
//           width={width}
//           height={height}
//           ref={this.refCanvas}
//           style={{
//             width,
//             height,
//           }}
//         />
//         {loading ? <LoadingProgress /> : null}
//         {false && DEBUG && (
//           <button
//             style={{
//               position: "absolute",
//               bottom: "0",
//               left: "-100px",
//             }}
//             onClick={this.takeScreenshot}
//           >
//             ScreenShot
//           </button>
//         )}
//       </div>
//     );
//   }

//   refCanvas = (ref: ?HTMLCanvasElement) => {
//     this.canvas = ref;
//     if (ref) {
//       this.initStage();
//     } else {
//       this.destroy();
//     }
//   };

//   setRenderable(renderable: boolean) {
//     if (this.app) {
//       if (renderable) {
//         this.app.start();
//       } else {
//         this.app.stop();
//       }
//     }
//   }

//   initStage() {
//     if (this.canvas && !this.app) {
//       let resolution = App.getDevicePixelRatio();
//       resolution = resolution > 1 ? 2 : 1;
//       const { width, height, stageOptions, view } = this.props;
//       let opts = {
//         width,
//         height,
//         view: this.canvas,
//         resolution,
//         backgroundColor: "white",
//         backgroundAlpha: 0,
//       };
//       opts = Object.assign(opts, stageOptions || {});
//       const app = (this.app = new PIXI.Application(opts));
//       globalThis.__PIXI_APP__ = app; // eslint-disable-line
//       this.app = app;
//       App.renderer = app.renderer;
//       if (view) this.initView(view);
//       else {
//         this.loading = true;
//         console.log("no canvas inited");
//       }
//     }
//   }

//   initView(view: PIXIView) {
//     const result: ?(PIXI.Container | Promise<any>) = view.getSymbol();
//     if (result && view.loading) {
//       if (typeof result.then === "function") {
//         App.loadStart();
//         this.loading = true;
//         return result.then(this.setView).then(() => {
//           this.loading = false;
//           App.loadEnd();
//         });
//       } else {
//         this.setView(result);
//       }
//     }
//   }

//   setView = (symbol: PIXI.Container) => {
//     if (this.app && this.app.stage) this.app.stage.addChild(symbol);
//     if (this.props.onStageInit) this.props.onStageInit();
//   };

//   takeScreenshot = () => {
//     if (!this.app) {
//       return;
//     }
//     this.app.renderer.extract.canvas(this.app.stage).toBlob(b => {
//       const a = document.createElement("a");
//       // $FlowFixMe
//       document.body.append(a);
//       a.download = "screenshot";
//       a.href = URL.createObjectURL(b);
//       a.click();
//       a.remove();
//     }, "image/png");
//   };

//   destroy = () => {
//     if (this.props.view) {
//       this.props.view.destroy();
//     }
//     const app = this.app;
//     if (app) {
//       app.stage.destroy({ children: true });
//       app.destroy(true);
//       this.app = null;
//     }
//   };
// }
