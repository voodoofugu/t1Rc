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
clickBox = document.getElementById("clickBox");

// ресурсы
const loader = PIXI.Loader.shared;
loader.add("tutorGirl", "../spine/tutor-girl/tutorGirl.json");
loader.add("drop", "../spine/tutor-girl/drop.json");
loader.add("hover", "../spine/tutor-girl/cursor-hover.svg");
loader.add("active", "../spine/tutor-girl/cursor-active.svg");
loader.add("load", "../spine/tutor-girl/cursor-load.svg");
var tutorGirl, drop;

// курсоры
const hovertIcon = "url('../spine/tutor-girl/cursor-hover.svg'),auto";
const activeIcon = "url('../spine/tutor-girl/cursor-active.svg'),auto";
const loadIcon = "url('../spine/tutor-girl/cursor-load.svg'),auto";
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
  drop.y = y;
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
          app.stage.removeChild(e.drop);
        });
      }
    },
  });
  app.stage.addChild(drop);
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
  tutorGirl.interactive = true;

  var handleMouseHover = function (event) {
    clickBox.style.cursor = hovertIcon;
  };
  clickBox.addEventListener("mouseover", handleMouseHover, false);

  var handleMousedownClick = function (event) {
    clickBox.style.cursor = activeIcon;
  };
  clickBox.addEventListener("mousedown", handleMousedownClick, false);

  var handleMouseupClick = function (ev) {
    clickBox.removeEventListener("mouseover", handleMouseHover, false);
    clickBox.removeEventListener("mousedown", handleMousedownClick, false);
    clickBox.removeEventListener("mouseup", handleMouseupClick, false);
    clickBox.style.cursor = loadIcon;
    tutorGirl.state.setAnimation(0, "anim-fly", false);
    tutorGirl.state.setAnimation(1, "anim-click", false);
    tutorGirl.state.setAnimation(2, "anim-click", false);
    tutorGirl.state.setAnimation(3, "anim-click", false);
    setTimeout(() => {
      tutorGirl.state.clearTrack(1);
      tutorGirl.state.clearTrack(2);
      tutorGirl.state.clearTrack(3);
      clickBox.style.cursor = hovertIcon;
      clickBox.addEventListener("mouseover", handleMouseHover, false);
      clickBox.addEventListener("mousedown", handleMousedownClick, false);
      clickBox.addEventListener("mouseup", handleMouseupClick, false);
    }, 3950);

    // высчитываем позицию курсора
    var app = document.getElementById("app").getBoundingClientRect();
    var appDifX = ev.clientX - app.left;
    var appDifY = ev.clientY - app.top;

    var rect = ev.target.getBoundingClientRect();
    var boxDifX = ev.clientX - rect.left;
    var boxDifY = ev.clientY - rect.top;

    var sumX = boxDifX + appDifX;
    var differenceX = boxDifX - appDifX;
    var sumY = boxDifY + appDifY;
    var differenceY = boxDifY - appDifY;

    var x = sumX - differenceX;
    var y = sumY - differenceY;
    dropText(x, y);
  };
  clickBox.addEventListener("mouseup", handleMouseupClick, false);
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
