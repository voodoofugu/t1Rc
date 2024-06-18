// наш канвас
const app = new PIXI.Application({
  backgroundAlpha: 0,
  antialias: true,
  width: 2400,
  height: 1280,
  events: false,
});

const appTouch = new PIXI.Application({
  backgroundAlpha: 0,
  antialias: true,
  width: 464,
  height: 1172,
});
document.getElementById("app").appendChild(app.view);
document.getElementById("screen").appendChild(appTouch.view);
app.interactive = false;
appTouch.interactive = false;

var clickBox = new PIXI.Sprite();
clickBox.interactive = true;
clickBox.width = 464;
clickBox.height = 1172;
appTouch.stage.addChild(clickBox);
// clickBox.x = appTouch.screen.width / 2;
// clickBox.y = appTouch.screen.height / 2;
// clickBox.anchor.set(0.5);

// ресурсы
const loader = PIXI.Loader.shared;
loader.add("tutorGirl", "../json/tutor-girl/tutorGirl.json");
loader.add("drop", "../json/tutor-girl/drop.json");
loader.add("hover", "../json/tutor-girl/cursor-hover.svg");
loader.add("active", "../../json/tutor-girl/cursor-active.svg");
loader.add("load", "../json/tutor-girl/cursor-load.svg");
var tutorGirl, drop;

// курсоры
const hovertIcon = "url('../json/tutor-girl/cursor-hover.svg'),auto";
const activeIcon = "url('../json/tutor-girl/cursor-active.svg'),auto";
const loadIcon = "url('../json/tutor-girl/cursor-load.svg'),auto";
appTouch.renderer.plugins.interaction.cursorStyles.hover = hovertIcon;
appTouch.renderer.plugins.interaction.cursorStyles.active = activeIcon;
appTouch.renderer.plugins.interaction.cursorStyles.load = loadIcon;

// текст
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

function dropText(x, y) {
  drop = new PIXI.spine.Spine(rezz.drop.spineData);
  drop.state.setAnimation(0, "drop", false).drop = drop;
  drop.x = x;
  drop.y = y + 20;
  drop.scale.set(1.4);

  a = "TOUCH";
  var txt = new PIXI.Text(a, style);
  console.log(a);
  txt.scale.set(0.18);
  txt.x = 0 - txt.width / 2;
  txt.y = 0 - txt.height / 2;
  drop.children[0].children[0].addChild(txt);

  drop.state.addListener({
    complete: function (e) {
      if (e && e.drop) {
        window.setTimeout(function () {
          appTouch.stage.removeChild(e.drop);
        });
      }
    },
  });
  appTouch.stage.addChild(drop);
}

// добавляем анимацию и клики
function addTutorGirl(eventData) {
  tutorGirl = new PIXI.spine.Spine(rezz.tutorGirl.spineData);
  tutorGirl.scale.set(0.52);
  tutorGirl.scale.x = -0.52;
  tutorGirl.x = 780;
  tutorGirl.y = 1200;

  tutorGirl.state.setAnimation(0, "anim-start", false);
  tutorGirl.state.addListener({
    complete: nextAnim,
  });
  app.stage.addChildAt(tutorGirl);
  tutorGirl.cursor = "hover";
  tutorGirl.interactive = true;

  clickBox.on("pointerdown", (onPointerdown) => {
    clickBox.cursor = "active";
  });

  clickBox.on("pointerup", (onPointerup) => {
    clickBox.interactive = false;
    appTouch.stage.interactive = true;
    appTouch.stage.cursor = "load";
    tutorGirl.state.setAnimation(0, "anim-fly", false);
    tutorGirl.state.setAnimation(1, "anim-click", false);
    tutorGirl.state.setAnimation(2, "anim-click", false);
    tutorGirl.state.setAnimation(3, "anim-click", false);
    setTimeout(() => {
      tutorGirl.state.clearTrack(1);
      tutorGirl.state.clearTrack(2);
      tutorGirl.state.clearTrack(3);
      clickBox.cursor = "hover";
      clickBox.interactive = true;
      appTouch.stage.interactive = false;
    }, 3950);

    var x = onPointerup.data.global.x;
    var y = onPointerup.data.global.y;
    dropText(x, y);
  });

  clickBox.on("pointerover", (onPointerover) => {
    clickBox.cursor = "hover";
  });
}

// переключение анимации
function nextAnim(entry) {
  tutorGirl.stateData.setMix("anim-fly", "anim-click", 0.4);
  tutorGirl.stateData.setMix("anim-hit", "anim-click", 0.4);
  tutorGirl.stateData.setMix("anim-blink1", "anim-click", 0.4);
  tutorGirl.stateData.setMix("anim-blink2", "anim-click", 0.4);

  tutorGirl.state.setAnimation(0, "anim-fly", true);

  function mathNum() {
    return Math.round(Math.random() * 9 + 1);
  }
  let numm = mathNum();

  // 30%
  if (numm > 7) {
    a = "anim-blob";
    tutorGirl.state.setAnimation(2, a, false);
    console.log(a);
    setTimeout(() => {
      tutorGirl.state.clearTrack(2);
    }, 2950);
  }

  // 10%
  if (numm == 5) {
    a = "anim-blink1";
    tutorGirl.state.setAnimation(2, a, false);
    console.log(a);
    setTimeout(() => {
      tutorGirl.state.clearTrack(2);
    }, 950);
  }

  // 10%
  if (numm == 6) {
    a = "anim-blink2";
    tutorGirl.state.setAnimation(2, a, false);
    console.log(a);
    setTimeout(() => {
      tutorGirl.state.clearTrack(2);
    }, 950);
  }

  // 30%
  if (numm < 4) {
    a = "anim-hit";
    tutorGirl.state.setAnimation(1, a, false);
    console.log(a);
    setTimeout(() => {
      tutorGirl.state.clearTrack(1);
    }, 3950);
  }
}

// загрузка ресурсов
var rezz;
loader.load((loader, res) => {
  rezz = res;
  addTutorGirl();
});
