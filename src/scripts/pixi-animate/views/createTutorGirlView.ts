function buildScene(
  root: PIXI.Container,
  rezz: PIXI.loaders.ResourceDictionary,
): PIXI.Container {
  let tutorGirl: PIXI.spine.Spine;
  let drop: PIXI.spine.Spine;

  // -------------------
  // Текст
  // -------------------
  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 40,
    fontWeight: "bold",
    fill: ["#ffffff", "#c2c2c5"],
    stroke: "#4a1850",
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 4,
    dropShadowDistance: 4,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: "round",
  });

  // -------------------
  // Drop текст
  // -------------------
  function dropText(x: number, y: number) {
    drop = new PIXI.spine.Spine(rezz.drop.spineData);

    drop.state.setAnimation(0, "drop", false).drop = drop;
    drop.position.set(x, y);
    drop.scale.set(1.4);

    const txt = new PIXI.Text("TOUCH", style);
    txt.scale.set(0.18);
    txt.position.set(-txt.width / 2, -txt.height / 2);

    // !!! надо будет поправить
    const layer0 = drop.children[0] as PIXI.Container;
    const layer1 = layer0.children[0] as PIXI.Container;
    layer1.addChild(txt);

    drop.state.addListener({
      complete(e: any) {
        if (e && (e as any).drop) {
          setTimeout(() => {
            root.removeChild(drop);
            drop.destroy(true);
          });
        }
      },
    });

    root.addChild(drop);
  }

  // -------------------
  // TutorGirl
  // -------------------
  function addTutorGirl() {
    tutorGirl = new PIXI.spine.Spine(rezz.tutorGirl.spineData);

    tutorGirl.scale.set(0.52);
    tutorGirl.position.set(1900, 1200);

    tutorGirl.state.setAnimation(0, "anim-start", false);
    tutorGirl.state.addListener({ complete: nextAnim });

    tutorGirl.interactive = true;
    tutorGirl.buttonMode = true;

    tutorGirl.on("pointerup", (e: PIXI.interaction.InteractionEvent) => {
      const pos = e.data.getLocalPosition(root);
      dropText(pos.x, pos.y);

      tutorGirl.state.setAnimation(0, "anim-fly", false);
      tutorGirl.state.setAnimation(1, "anim-click", false);
    });

    root.addChild(tutorGirl);
  }

  // -------------------
  // Анимации
  // -------------------
  function nextAnim() {
    tutorGirl.stateData.setMix("anim-fly", "anim-click", 0.4);
    tutorGirl.stateData.setMix("anim-hit", "anim-click", 0.4);
    tutorGirl.stateData.setMix("anim-blink1", "anim-click", 0.4);
    tutorGirl.stateData.setMix("anim-blink2", "anim-click", 0.4);

    tutorGirl.state.setAnimation(0, "anim-fly", true);

    const numm = Math.round(Math.random() * 9 + 1);

    if (numm > 7) {
      tutorGirl.state.setAnimation(2, "anim-blob", false);
      setTimeout(() => tutorGirl.state.clearTrack(2), 2950);
    }

    if (numm === 5) {
      tutorGirl.state.setAnimation(2, "anim-blink1", false);
      setTimeout(() => tutorGirl.state.clearTrack(2), 950);
    }

    if (numm === 6) {
      tutorGirl.state.setAnimation(2, "anim-blink2", false);
      setTimeout(() => tutorGirl.state.clearTrack(2), 950);
    }

    if (numm < 4) {
      tutorGirl.state.setAnimation(1, "anim-hit", false);
      setTimeout(() => tutorGirl.state.clearTrack(1), 3950);
    }
  }

  addTutorGirl();

  return root;
}

function createTutorGirlView(): Promise<PIXI.Container> {
  return new Promise((resolve, reject) => {
    const container = new PIXI.Container();

    const loader = new PIXI.loaders.Loader(); // почему-то обратить к PIXI.loader нельзя из-за NEXUS

    loader
      .add("tutorGirl", "/pixi-src/tutorGirl.json")
      .add("drop", "/pixi-src/drop.json")
      .load((_, resources) => {
        try {
          const view = buildScene(container, resources);
          resolve(view);
        } catch (e) {
          reject(e);
        }
      });
  });
}

export default createTutorGirlView;
