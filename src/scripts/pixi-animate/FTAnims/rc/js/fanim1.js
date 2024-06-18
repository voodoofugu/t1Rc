const app = new PIXI.Application({
    // backgroundColor:0xFFFFFF,
    backgroundAlpha: 0,
    antialias:true,
    width:640,
    height:640
});

document.getElementById('app').appendChild(app.view);
const loader = PIXI.Loader.shared;

loader.add('kaban','../rc/spine/01_Kaban/bibbop.json');
loader.add('hit','../rc/spine/hit/hit.json');
loader.add('drop','../rc/spine/hit/drop.json');

PIXI.BitmapFont.from("MyFont", {
    fontFamily: "Arial",
    fontSize: 80,
    strokeThickness: 14,
    fill: "white",
    stroke: "#400000"
});


var clickBox = new PIXI.Sprite;
function addClickEvents(){
    clickBox.interactive = true;
    clickBox.on('mousedown', onDown);
    clickBox.on('touchstart', onDown);
}
clickBox.width = 640;
clickBox.height = 640;
app.stage.addChild(clickBox);
addClickEvents();

function addKaban(){
    kaban = new PIXI.spine.Spine(rezz.kaban.spineData);
    kaban.scale.set(0.35);
    kaban.state.addListener({
        complete: nextBossAnim
    });
    var a = ['Skin_1','Skin_2','Skin_3','Skin_4','Skin_5','Skin_6'][Math.round(Math.random()*5)];
    kaban.skeleton.setSkinByName(a);
    kaban.x = 360;
    kaban.y = 525;
    app.stage.addChildAt(kaban, 1);
    bossIdle();
}



var hitCount = 10;

function onDown (eventData) {
    // console.log(eventData);
    var x = eventData.data.global.x;
    var y = eventData.data.global.y;
    hit.x = x; hit.y = y;
    // console.log(x, y);

    hit.rotation = Math.round(Math.random()*360);
    hit.state.tracks[0].trackTime = 0;
    hit.renderable = true;
    // var a = ["damage_1","damage_2","damage_3"][Math.round(Math.random()*2)];
    var a = "damage_1";
    if(x < 355) a = "damage_2";
    if(y < 320) a = "damage_3";
    if(y > 440) a = "damage_4";
    if(Math.random() > 0.75) a = ["damage_1","damage_2","damage_3"][Math.round(Math.random()*2)];
    // console.log(a);
    nextAnim = "idle";
    kaban.state.setAnimation(0,a,false);

    dropNumber(x, y);

    if(hitCount-- < 1){
        clickBox.off('mousedown', onDown);
        clickBox.off('touchstart', onDown);
        kaban.state.addListener({
            complete: function(entry) { 
                console.log("-----------------REINIT--------------------");
                hitCount = 10;
                setTimeout(function(){
                    kaban.parent.removeChild(kaban);
                    addKaban();
                }, 1);
                addClickEvents();
                return;
            }
        });
        kaban.state.setAnimation(0,"death", false);
        return;
    }

}

var drop = false;
function dropNumber(x, y){
    drop = new PIXI.spine.Spine(rezz.drop.spineData);
    drop.scale.set(0.5);
    drop.state.setAnimation(0,'drop', false).drop = drop;
    drop.x = x;
    drop.y = y;
    drop.rotation = Math.random() * 0.2 - 0.1;
    drop.renderable = true;
    var bt = new PIXI.BitmapText( "" + Math.round(Math.random()*15 + 1) , {
      fontName: "MyFont",
      fontSize: 80,
      align: "center"
    });
    // bt.scale.y = -1;
    bt.x = 0 - bt.width/2; bt.y = 0 - bt.height/2;
    drop.children[0].children[0].addChild(bt);
    drop.state.addListener({
        complete: function(e){
            // console.log("eeee: ", e);
            if(e && e.drop){
                e.drop.renderable = false;
                window.setTimeout(
                    function(){
                        // console.log("DROOP: ", e.drop);
                        app.stage.removeChild(e.drop);   
                    },
                    1
                );
            }
        },
    });
    app.stage.addChild(drop);
}

var nextAnim = null;
var hit, kaban, drop;

function nextBossAnim(entry){
    if(hitCount > 0){
        bossIdle();
    }
}

function bossIdle(){
    var a = ["idle_1","idle_2","idle_3"][Math.round(Math.random()*2)];
    if(Math.random() > 0.8) a = "take_damage";
    console.log(a);
    kaban.state.setAnimation(0,a,true);
}


var rezz;
loader.load((loader,res)=>{
    let options = [''];
    rezz = res;
    addKaban();

    // hit
    hit = new PIXI.spine.Spine(res.hit.spineData);
    hit.scale.set(0.45);
    hit.state.setAnimation(0,'hit_2', false);
    // hit.state.tracks[0].trackTime = 0;
    hit.x = 320;
    hit.y = 300;
    //hit.drawDebug = true;
    // hit.autoPlay = false;
    hit.blendMode = PIXI.BLEND_MODES.ADD;
    console.log("hit.blendMode: " + hit.blendMode);
    hit.renderable = false;
    app.stage.addChild(hit);
});