/*
 * FapTitans.js
 */
var FapTitans = function(){
	this.stage = null;
    // var hit = null;
    // var hitStars = [];
    // var hitText = null;
    // var hitTextCoin = null;
    this.blast = null;
    this.monsterHit = null;
    this.hit = null;
    this.autohit = false;
    this.bgImage = null;
    this.hitStars = [];
    // this.hitText = null;
    // this.autohitText = null;

    this.setBg = function( bgImageUrl ){
    	if(this.stage != null){
    		// this.bgImage = null;
    		var bg = null;
    		//this.bgImage;
    		var stage = this.stage;
    		// console.log(stage);
            PIXI.loader.add('bg', bgImageUrl).load(function (loader, resources) {
                bg = new PIXI.Sprite(resources.bg.texture);
                bg.position.x = -550;
                bg.position.y = -111;
                // console.log(bg);
               	stage.addChildAt(bg, 0);
            });
    	}
    };

    this.newRoom = function( roomImage ){
        if(this.stage != null){
            var stage = this.stage;
            PIXI.loader.add('room', roomImage).load(function (loader, resources) {
                var room = new PIXI.Sprite(resources.room.texture);
                room.position.x = -60;
                room.position.y = 229;
                room.width = 540;
                stage.addChildAt(room, 1);
            });
        }
    };

	this.init = function(element){

// var renderer = new PIXI.autoDetectRenderer(474, 529);
// var stage = new PIXI.Container();
// PIXI.animate.load(lib.Untitled2, function(instance){
//     console.log(instance);
//     stage.addChild(instance);
// });
// // function update() {
// //      renderer.render(stage);
// //      update();
// // }
// // update();
// console.log("ANIM")

//         return;
		// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
        // which will try to choose the best renderer for the environment you are in.
        var renderer = new PIXI.WebGLRenderer(474, 529);
        // The renderer will create a canvas element for you that you can then insert into the DOM.
        // document.body.appendChild(renderer.view);
        element.appendChild(renderer.view);
        // You need to create a root container that will hold the scene you want to draw.
        // var stage = new PIXI.Container();
        var stage = this.stage = new PIXI.Container();

        // var bg = null;

		// // Add blast layer
  //       var blast = new PIXI.Graphics(); 
  //       blast.width = 10; blast.height = 10;
  //       blast.position.x = 20; blast.position.y = 20;
  //       blast.lineStyle(0);
  //       blast.beginFill(0x00ff00, 0.5);
  //       blast.drawCircle(0,0,10);
  //       blast.beginFill(0xaaffaa, 0.75);
  //       blast.drawCircle(0,0,5);
  //       blast.beginFill(0xffffff);
  //       blast.drawCircle(0,0,2);
  //       blast.alpha = 0;
  //       stage.addChild(blast);
  //       this.blast = blast;

        var autohit = new PIXI.Graphics(); 
        autohit.width = 10; autohit.height = 10;
        autohit.position.x = 0; autohit.position.y = 0;
        autohit.lineStyle(0);
        autohit.beginFill(0xffff00, 0.5);
        autohit.drawCircle(0,0,10);
        autohit.beginFill(0xffffaa, 0.75);
        autohit.drawCircle(0,0,5);
        autohit.beginFill(0xffffff);
        autohit.drawCircle(0,0,2);
        autohit.alpha = 0;
        stage.addChild(autohit);
        this.autohit = autohit;


        /* hit text layer */
        var htl = new PIXI.Graphics();
        htl.alpha = 0;
        stage.addChild(htl);
        htl.text = new PIXI.Text('XXX');
        htl.text.style = {
            font : 'bold 25px Arial',
            fill: '#ffc',
            stroke: '#222',
            strokeThickness : 4,
            dropShadow : true,
            dropShadowColor : '#111',
            dropShadowAngle : 1.5,
            dropShadowDistance : 4
        }
        htl.text.position.y = - htl.text.height / 2;
        htl.addChild(htl.text);
        


        // /* Autohit text layer + childs */
        // var autohitTextLayer = hitTextLayer.clone();
        // autohitTextLayer.alpha = 1;
        // stage.addChild(autohitTextLayer);
        // this.autohitTextLayer = autohitTextLayer;

        // var autohitText = new PIXI.Text('XXX');
        // autohitText.style = hitText.style;
        // autohitText.position.y = - autohitText.height / 2;
        // autohitTextLayer.addChild(autohitText);

        var ahtl = new PIXI.Graphics();
        ahtl.alpha = 0;
        stage.addChild(ahtl);
        ahtl.text = new PIXI.Text('---');
        ahtl.text.style = htl.text.style;
        ahtl.text.position.y = - ahtl.text.height / 2;
        ahtl.addChild(ahtl.text);



        PIXI.loader.add('hitTextCoin', './rc/ico-gold.png').load(function (loader, resources) {
            // htl.coin = new PIXI.Sprite(resources.hitTextCoin.texture);
            // // hitTextCoin.pivot.x = hitTextCoin.width / 2;
            // // hitTextCoin.pivot.y = hitTextCoin.height / 2;
            // // hitTextCoin.position.x = hitTextLayer.width / 2 - hitText.width / 2 - hitTextCoin.width / 2;
            // // hitTextCoin.alpha = 0;
            // htl.coin.position.y = - htl.coin.height / 2 - 2;
            // htl.addChild(htl.coin);
            htl.coin = new PIXI.Sprite(resources.hitTextCoin.texture);
            htl.coin.position.y = - htl.coin.height / 2 - 2;
            htl.addChild(htl.coin);  

            ahtl.coin = new PIXI.Sprite(resources.hitTextCoin.texture);
            ahtl.coin.position.y = - ahtl.coin.height / 2 - 2;
            ahtl.addChild(ahtl.coin);            

            // var autohitTextCoin = new PIXI.Sprite(resources.hitTextCoin.texture);
            // autohitTextCoin.position.y = - autohitTextCoin.height / 2 - 2;            
            // autohitTextLayer.addChild(autohitTextCoin);
            // console.log("aa: ", autohitTextLayer, autohitTextLayer.children);
            // autohitTextLayer.coin = hitTextCoin;
        });









        monsterHit = new PIXI.Graphics(); 
        // monsterHit.width = 100; monsterHit.height = 100;
        // monsterHit.position.x = 200; monsterHit.position.y = 200;
        
        // monsterHit.lineStyle(0);
        // monsterHit.beginFill(0xff0000, 0.5);
        // monsterHit.drawRect(-50,-50,100,100);
        // monsterHit.beginFill(0xaaffaa, 0.75);
        // monsterHit.drawCircle(0,0,5);
        // monsterHit.beginFill(0xffffff);
        // monsterHit.drawCircle(0,0,2);
        monsterHit.alpha = 0;
        this.stage.addChild(monsterHit);

        hit = new PIXI.Graphics(); 
        hit.width = 10; hit.height = 10;
        hit.position.x = 0; hit.position.y = 0;
        
        hit.lineStyle(0);
        hit.beginFill(0x00ff00, 0.5);
        hit.drawCircle(0,0,10);
        hit.beginFill(0xaaffaa, 0.75);
        hit.drawCircle(0,0,5);
        hit.beginFill(0xffffff);
        hit.drawCircle(0,0,2);
        // hit.alpha = 0;
        monsterHit.addChild(hit);

        var hitStars = this.hitStars;

        PIXI.loader.add('hit', './rc/star1.png').load(function (loader, resources) {
            for(var i=0; i<5; i++){
                var h = new PIXI.Sprite(resources.hit.texture);
                h.pivot.x = h.width / 2;
                h.pivot.y = h.height / 2;
                h.position.x = h.position.y = 100;
                // h.alpha = 0;
                // h.anim = false;
                h.num = i;
                hitStars.push(h);
                monsterHit.addChild(h);
            }
            // console.log(hitStars);
            // hitStars.anim = false;
        });






        // this.addHitLayer = function(){
        //     hit = new PIXI.Graphics(); 
        //     hit.width = 10; hit.height = 10;
        //     hit.position.x = 0; hit.position.y = 0;
            
        //     hit.lineStyle(0);
        //     hit.beginFill(0x00ff00, 0.5);
        //     hit.drawCircle(0,0,10);
        //     hit.beginFill(0xaaffaa, 0.75);
        //     hit.drawCircle(0,0,5);
        //     hit.beginFill(0xffffff);
        //     hit.drawCircle(0,0,2);
        //     hit.alpha = 0;
        //     stage.addChild(hit);

        //     PIXI.loader.add('hit', './rc/star1.png').load(function (loader, resources) {
        //         for(var i=0; i<5; i++){
        //             var h = new PIXI.Sprite(resources.hit.texture);
        //             h.pivot.x = h.width / 2;
        //             h.pivot.y = h.height / 2;
        //             h.position.x = 100;
        //             h.position.y = 100;
        //             h.alpha = 0;
        //             h.anim = false;
        //             hitStars.push(h);
        //             stage.addChild(h);
        //         }
        //         // console.log(hitStars);
        //         hitStars.anim = false;
        //     });

        //     hitText = new PIXI.Text('xxx');
        //     hitText.style = {
        //         font : 'bold 25px Arial',
        //         fill: '#ffc',
        //         stroke: '#222',
        //         strokeThickness : 4,
        //         dropShadow : true,
        //         dropShadowColor : '#111',
        //         dropShadowAngle : 1.5,
        //         dropShadowDistance : 4
        //     }
        //     hitText.pivot.x = hitText.width / 2;
        //     hitText.pivot.y = hitText.height / 2;
        //     hitText.frames = 0;
        //     hitText.alpha = 0;
        //     stage.addChild(hitText);

        //     PIXI.loader.add('hitTextCoin', './rc/ico-gold.png').load(function (loader, resources) {
        //         hitTextCoin = new PIXI.Sprite(resources.hitTextCoin.texture);
        //         hitTextCoin.pivot.x = hitTextCoin.width / 2;
        //         hitTextCoin.pivot.y = hitTextCoin.height / 2;
        //         hitTextCoin.position.x = 100;
        //         hitTextCoin.position.y = 100;
        //         hitTextCoin.alpha = 0;
        //         stage.addChild(hitTextCoin);
        //     });

        // };


        // setBg( bgImageUrl );
        // this.addBlastLayer();
        // this.addAutoautohitLayer();
        // this.addHitLayer();

        function setHitText(layer, s){
            layer.text.text = s;
            var aw = layer.text.width + 1 + layer.coin.width;
            layer.coin.position.x = -aw / 2;
            layer.text.position.x = layer.coin.position.x + layer.coin.width + 1;
            // hitText.text = s;
            // var aw = hitText.width + 1 + hitTextCoin.width;
            // // console.log(aw);
            // hitTextCoin.position.x = -aw / 2;
            // hitText.position.x = hitTextCoin.position.x + hitTextCoin.width + 1;
        }

        function animate(time) {
            // start the timer for the next animation loop
            requestAnimationFrame(animate);
            TWEEN.update(time);
            // var obj = null;
            // for(var i=0; i< stage.children.length; i++){
            //     obj = stage.children[i];
            //     if(obj.animation){
            //         obj.animation();
            //     }
            // }
            // this is the main render call that makes pixi draw your container and its children.
            renderer.render(stage);
            // console.log(stage)
        }
        animate();


        this.newLocation = function(level, bkImage){
        	// store level
        	this.setBg(bkImage);
        };

        this.autohit.start = function(){
        	console.log("AUTOHIT START");
        	this.hit();
        }
        this.autohit.interval = 250;
        this.autohit.hitcount = 2;

        this.autohit.hit = function(){
        	// autohit.position.x = Math.round(Math.random() * monster.width) + monster.position.x - monster.pivot.x;
         //    autohit.position.y = Math.round(Math.random() * monster.height) + monster.position.y - monster.pivot.y;
            autohit.position.x = Math.round(Math.random() * monster.img.width) + monster.position.x - monster.pivot.x;
            autohit.position.y = Math.round(Math.random() * monster.img.height) + monster.position.y - monster.pivot.y;

            if(autohit.count > 0){
                autohit.count--;
            } else {
                setHitText(ahtl, Math.round(9999 * Math.random()));
                ahtl.position.x = autohit.position.x;
                ahtl.position.y = autohit.position.y;
                var t0 = new TWEEN.Tween({ y:ahtl.position.y, z:0 })
                    .to({ y: [ahtl.position.y, ahtl.position.y+5, ahtl.position.y-150], z: [1, 1, 1, 0]}, 500)
                    .onUpdate(function() {
                        ahtl.position.y = this.y;
                        ahtl.alpha = this.z;
                    }).start();
                autohit.count = 2;    
                // setHitText(Math.round(9999 * Math.random()));
                // hitTextLayer.position.x = autohit.position.x;
                // hitTextLayer.position.y = autohit.position.y;

                // var t0 = new TWEEN.Tween({ y:hitTextLayer.position.y, z:0 })
                //     .to({ y: [hitTextLayer.position.y, hitTextLayer.position.y+5, hitTextLayer.position.y-150], z: [1, 1, 1, 0]}, 500)
                //     .onUpdate(function() {
                //         hitTextLayer.position.y = this.y;
                //         hitTextLayer.alpha = this.z;
                //     });
                // t0.start();
                // autohit.count = 2;
            }

            autohit.scale.x = autohit.scale.y = 1;
            autohit.alpha = 1;

            var f = Math.random();
			var tween = new TWEEN.Tween({ x: 0, y: 0, z: 0.50 })
			    .to({ x: f, y: f, z: 0 }, 150)
			    .onUpdate(function() {
			        // console.log(this.x, this.y, this.z);
			        autohit.scale.x = this.x*15+10;
			        autohit.scale.y = this.y*15+10;
			        autohit.alpha   = this.z;
			        // monster.scale.x = 1 - Math.random() * 0.05;
			        // monster.scale.y = 1 - Math.random() * 0.05;
			        monster.scale.x = 1 - 0.05*f;
			        monster.scale.y = 1 - 0.08*f;
			    })
			    .onComplete(function(){
			    	// console.log("asdasd", autohit.start);
			    	monster.scale.x = monster.scale.y = 1;
			    	setTimeout(function(){
			    		autohit.hit();	
			    	}, autohit.interval);
			    	// autohit.hit();
			    })
			    .start();

        }


        this.monster = null;
        this.nextMonster = function(img){
        	console.log('new monster: ', img);
            PIXI.loader.add('monster', img).load(function (loader, resources) {
                var monsterImg = new PIXI.Sprite(resources.monster.texture);
                monsterImg.width = 237;
                monsterImg.height = 410;
                monster = new PIXI.Graphics(); 
                monster.pivot.x = Math.round(monsterImg.width / 2);
                // monster.pivot.y = Math.round(monsterImg.height / 2);
                monster.pivot.y = Math.round(monsterImg.height  - 100);
                monster.position.x = 237;
                // monster.position.y = 244;
                monster.position.y = stage.height - monsterImg.height -50;
                monster.addChild(monsterImg);
                stage.addChildAt(monster, 2);
                monster.img = monsterImg;

                // blast.position.x = monster.position.x;
                // blast.position.y = monster.position.y + 150;

                monster.scale.x = monster.scale.y = 0;
                monster.alpha = 0;
                var filter = new PIXI.filters.ColorMatrixFilter();
                monster.img.filters = [filter];


                // monster.animation = function(){
                //     monster.scale.y += 0.15;
                //     monster.scale.x += 0.15;
                //     if(monster.scale.y >= 1.22) {
                //         monster.scale.x = monster.scale.y = 1;
                //         monster.animation = null;
                //         autoHit();

                //         stage.interactive = true;
                //         stage.on('mousedown', onDownMonster);
                //         stage.on('touchstart', onDownMonster);

                //         var filter = new PIXI.filters.ColorMatrixFilter();
                //         monster.filters = [filter];
                //         // console.log(filter.matrix);
                //     }
                // };
                // $('.main .monster-prg .health .prg').css({width: '100%'}).animate({opacity: 1},50);
                // $('.main .monster-prg .timer .prg').css({width: '100%'}).animate({opacity: 1},50);
                // $('.main .pic-prg .prg-box .prg').css({width: '0%'}).animate({opacity: 1},50);

                // var autoHit = this.autoHit;

				var tween = new TWEEN.Tween({ x: 0, y: 0, z: 0 })
				    .to({ x: [0,1.15,0.98,1], y: [0,1.15,0.98,1], z: [0,1,1,1] }, 350)
				    // .to({ x: 1, y: 1, z: 1 }, 50)
				    .onUpdate(function() {
				        // console.log(this.x, this.y, this.z);
				        monster.scale.x = this.x;
				        monster.scale.y = this.y;
				        monster.alpha   = this.z;
				    })
				    .onComplete(function(){
				    	// console.log("asdasd", autohit.start);
				    	autohit.start();
                        stage.interactive = true;
                        stage.on('mousedown', onDownMonster);
                        stage.on('touchstart', onDownMonster);
				    })
				    .start();
				// tween.aHit = autoHit;

            });

        };

        function onDownMonster (eventData) {
            // console.log(eventData);

            monsterHit.position.x = eventData.data.global.x;
            monsterHit.position.y = eventData.data.global.y;
            // monsterHit.scale.x = monsterHit.scale.y = 1;
            monsterHit.alpha = 1;

            for(var i=0; i<5; i++){
                var hs = hitStars[i];
                // console.log(hs.num);
                hs.position.x = hs.position.y = 0 ;
                hs.speed = 150 * Math.random() + 150;
                hs.scale.x = hs.scale.y = 0.5;

                // var tx = 300 * Math.random() - 150;
                // var ty = 300 * Math.random() - 150;
                // var z = 1;

                // var tw = new TWEEN.Tween(hs.position)
                //     .to({ x: tx, y: ty, z: 1 }, 500)
                //     .onUpdate(function() {
                //         hs.alpha = this.z;
                //     })
                //     .start();

                // var tw = new TWEEN.Tween({ x: 0, y: 0, z: 1 })
                //     .to({ x: 100, y: 100, z: 1 }, 500)
                //     .onUpdate(function() {
                //         // console.log(this.x);
                //         hs.position.x = this.x ;
                //         hs.position.y = this.y ;
                //     })
                //     .onComplete(function(){
                //         console.log(hs.num);
                //     })
                //     .start();
                // console.log(hs.speed);
            }
            hitStars.vector = Math.round(Math.random() * 180);
            var tw = new TWEEN.Tween({ x: 0})
                .to({ x: 1 }, 300)
                .onUpdate(function() {
                    // console.log(this.x);
                    // hs.position.x = this.x ;
                    // hs.position.y = this.y ;
                    for(var i=0; i<5; i++){
                        var hs = hitStars[i];
                        // hs.position.x += Math.round(hs.speed * Math.cos(hitStars.vector + 72*i));
                        // hs.position.y += Math.round(hs.speed * Math.sin(hitStars.vector + 72*i));
                        hs.position.x = Math.round(this.x * hs.speed * Math.cos(hitStars.vector + 72*i));
                        hs.position.y = Math.round(this.x * hs.speed * Math.sin(hitStars.vector + 72*i));
                        // hs.alpha = 2 - this.x;
                        hs.scale.x = hs.scale.y = this.x + 0.25;
                    }
                    // console.log("sdfasdfasd");
                })
                // .onComplete(function(){
                //     console.log(hs.num);
                // })
                .start();

                setHitText(htl, Math.round(9999 * Math.random()));
                htl.position.x = monsterHit.position.x;
                htl.position.y = monsterHit.position.y;
                var t0 = new TWEEN.Tween({ y:htl.position.y, z:0, a:1 })
                    .to({ y: [htl.position.y, htl.position.y+5, htl.position.y-150], z: [1, 1, 1, 0], a:[0.75,1.25,0.90,1,1]}, 500)
                    .onUpdate(function() {
                        htl.position.y = this.y;
                        htl.alpha = this.z;
                        htl.scale.x = htl.scale.y = this.a;
                    }).start();

            // setHitText(Math.round(9999 * Math.random()));
            // hitTextLayer.position.x = monsterHit.position.x;
            // hitTextLayer.position.y = monsterHit.position.y;

            // var t0 = new TWEEN.Tween({ y:hitTextLayer.position.y, z:0 })
            //     .to({ y: [hitTextLayer.position.y, hitTextLayer.position.y+5, hitTextLayer.position.y-150], z: [1, 1, 1, 0]}, 500)
            //     .onUpdate(function() {
            //         hitTextLayer.position.y = this.y;
            //         hitTextLayer.alpha = this.z;
            //     }).start();




            // hitStars.vector = Math.round(Math.random() * 180);
            // var hs;
            // for(var i=0; i<5; i++){
            //     var hs = hitStars[i];
            //     // hs.speed = 10 * Math.random() + 10;
            //     // hs.position.x = hs.position.y = 0;
            //     // hs.scale.x = hs.scale.y = 0.25;
            //     // hs.alpha = 1;


            //     // var speed = 10 * Math.random() + 10;

            //     var tx = 200 * Math.random() - 100;
            //     var ty = 200 * Math.random() - 100;
            //     // console.log(tx);

            //     var tw = new TWEEN.Tween({ xx: 0, yy: 0, zz: 1 })
            //         .to({ xx: tx, yy: ty, zz: 1 }, 500)
            //         .onUpdate(function() {
            //             hs.position.x = this.xx;
            //             hs.position.y = this.yy;
            //             hs.alpha = 1;


            //         }).start();

            //     console.log(tw);

            // }

            // if(monster.filters && monster.filters.length > 0){
            //     var filter = monster.filters[0];
            //     filter.brightness(2);
            // }

            var f = Math.random();
            var tween = new TWEEN.Tween({ x: 0, y: 0, z: 0.50, k: 2})
                .to({ x: f, y: f, z: 0 , k: 1}, 150)
                .onUpdate(function() {
                    // console.log(this.x, this.y, this.z);
                    hit.scale.x = this.x*15+10;
                    hit.scale.y = this.y*15+10;
                    hit.alpha   = this.z;
                    monster.scale.x = 1 - 0.15*f;
                    monster.scale.y = 1 - 0.15*f;
                    // monster.br = this.k;

                    if(monster.img.filters && monster.img.filters.length > 0){
                        var filter = monster.img.filters[0];
                        filter.brightness(this.k);
                    }


                    // if(monster.filters && monster.filters.length > 0){
                    //     var filter = monster.filters[0];
                    //     filter.brightness(monster.br);
                    // }


                    // for(var i=0; i<5; i++){
                    //     hs = hitStars[i];
                    //     // console.log(hs);
                    //     // hs.alpha = 1;
                    //     hs.position.x += Math.round(hs.speed * Math.cos(hitStars.vector + 72*i));
                    //     hs.position.y += Math.round(hs.speed * Math.sin(hitStars.vector + 72*i));
                    //     hs.scale.x += 0.07;
                    //     hs.scale.y += 0.07;
                    //     hs.alpha -= 0.1; 
                    //     // if(!hitStars.anim) hs.alpha = 0;
                    // }

                })
                .onComplete(function(){
                    monster.scale.x = monster.scale.y = 1;
                    monsterHit.alpha = 0;

                    if(monster.img.filters && monster.img.filters.length > 0){
                        var filter = monster.img.filters[0];
                        filter.brightness(1);
                    }

                })
                .start();


        }



	};
};