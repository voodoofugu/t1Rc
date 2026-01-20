import React, { Component } from "react";

import App from "App";
import PIXIComponent from "./PIXIComponent";

import BattleView from "./BattleView";

class BattleContainer extends Component {
  constructor() {
    super(...arguments);
    this.setBattleCont = this.setBattleCont.bind(this);
    this.state = { view: null };
  }

  componentDidMount() {
    App.events.on("WorldEvent", this.__update);
    this.view = new BattleView();
    this.setState({ view: this.view });
    App.battleController.restore();
    App.progress = 1;
  }

  componentWillUnmount() {
    App.events.off("WorldEvent", this.__update);
    this.view.destroy();
  }

  __update = () => {
    this.forceUpdate();
  };

  setBattleCont(el) {
    if (el) {
      this.battleContainer = el;
    }
  }

  render() {
    if (!this.state.view) return null;
    return (
      <React.Fragment>
        <div
          className="monster"
          style={{
            top: "-100px",
            left: "-100px",
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          {this.state.view ? (
            <PIXIComponent
              width={668}
              height={640}
              stageOptions={{
                transparent: true,
                backgroundAlpha: 0,
                antialias: false, //App.graphics.antialias,
              }}
              view={this.view}
            />
          ) : null}
        </div>
        <div
          onMouseDown={(e) => {
            this.view.clickHandler({
              x: e.clientX - e.currentTarget.getBoundingClientRect().x + 100,
              y: e.clientY - e.currentTarget.getBoundingClientRect().y + 100,
            });
          }}
          style={{
            width: "478px",
            height: "500px",
            zIndex: 101,
          }}
        ></div>
      </React.Fragment>
    );
  }
}

export default BattleContainer;
