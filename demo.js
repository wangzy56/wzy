var app = new PIXI.Application(1000,700,{backgroundColor:0xFFFF00,antialias:true});
document.body.appendChild(app.view);
// var bunny = PIXI.Sprite.from('img/1.jpg'); // 加入一张图片
//
// var base = new PIXI.Text('佛系人生'); //加入一个文字标题
// bunny.anchor.set(0.5);
//
// bunny.x = app.screen.width / 2; //控制图片横坐标的位置
// bunny.y = app.screen.height / 2;//控制图片纵坐标的位置

// app.stage.addChild(bunny);
// app.ticker.add(function(delta){
//     bunny.rotation += 0.1 *delta; //添加一个旋转效果
// });

// app.stage.addChild(base);
// base.x = 30; // 控制文字横坐标的位置
// base.y = 90; // 控制文字纵坐标的位置

var grap = new PIXI.Graphics();
grap.lineStyle(2, 0x0000FF, 1);
grap.beginFill(0xFF700B, 1);
grap.drawRect(50, 250, 120, 120);
app.stage.addChild(grap);

// grap.beginFill(0xFF3300);  //填充一种颜色
// grap.lineStyle(4, 0xffd900, 1); //设置线条样式
// grap.moveTo(50,50); //控制当前图形的位置
// grap.lineTo(250,50); //当前线条样式绘制一条从当前绘图位置开始到 (x, y) 结束的直线；当前绘图位置随后会设置为 (x, y)。
// grap.lineTo(100,100); //当前线条样式绘制一条从当前绘图位置开始到 (x, y) 结束的直线；
// grap.lineTo(50,50);//当前线条样式绘制一条从当前绘图位置开始到 (x, y) 结束的直线；
// grap.endFill();// 对上一次调用beginFill（）方法之后添加的直线应用进行填充


//
// var sprite = PIXI.Sprite.from('img/1.jpg');
//
// sprite.anchor.set(0.5);
// sprite.x = app.screen.width / 2;
// sprite.y = app.screen.height / 2;
//
// sprite.interactive = true;      // 值为true的时候允许响应鼠标和触摸事件
//
// sprite.buttonMode = true;  //按钮模式
//
// sprite.on('pointerdown', onClick);
//
// app.stage.addChild(sprite);
//
// function onClick () {
//     sprite.scale.x *= 0.99;
//     sprite.scale.y *= 0.99;
// }


// var texture = PIXI.Texture.from('img/1.jpg');
// texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
// for(var i=0;i<3;i++){
//     createby(
//         Math.floor(Math.random() * app.screen.width),
//         Math.floor(Math.random() * app.screen.height)
//     )
// }
//  function createby(x,y){
//     var by = new PIXI.Sprite(texture);
//
//     by.interactive = true;  //值为true的时候允许响应鼠标和触摸事件
//     by.buttonMode = true;
//     by.anchor.set(0.5);  //把锚点放入中心
//     by.scale.set(0.2); //让它变大一点
//
//      by.on("pointerdown",onDragStart).on("pointerup",onDragEnd).on('pointerupoutside', onDragEnd).on("pointermove",onDragMove);
//
//      by.x = x;
//      by.y = y;
//      app.stage.addChild(bunny);
//
//      function onDragStart(event){
//          this.data = event.data;
//          this.alpha = 0.5;
//          this.dragging = true;
//      }
//
//      function onDragEnd(){
//          this.dragging = false;
//          this.data = null;
//          this.alpha = 0.5;
//      }
//
//      function onDragMove(){
//          if (this.dragging){
//              var newPosition = this.data.getLocalPosition(parent);
//              this.x = newPosition.x;
//              this.y = newPosition.y;
//          }
//      }
//  }

// var textureButton = PIXI.Texture.fromImage('img/button.png');
// var textureButtonDown = PIXI.Texture.fromImage('img/buttonDown.png');
// var textureButtonOver = PIXI.Texture.fromImage('img/buttonOver.png');
//
// var button = new PIXI.Sprite(textureButton);
// button.buttonMode = true;
// button.interactive = true;
//
// button.on('pointerdown', onButtonDown)
//     .on('pointerup', onButtonUp)
//     .on('pointerupoutside', onButtonUp)
//     .on('pointerover', onButtonOver)
//     .on('pointerout', onButtonOut);
// app.stage.addChild(button);
//
// function onButtonDown() {
//     this.isdown = true;
//     this.texture = textureButtonDown;
//     this.alpha = 1;
// }
//
// function onButtonUp() {
//     this.isdown = false;
//     if(this.isOver) {
//         this.texture = textureButtonOver;
//     } else {
//         this.texture = textureButton;
//     }
// }
//
// function onButtonOver() {
//     this.isOver = true;
//     if(this.isdown) {
//         return;
//     }
//     this.texture = textureButtonOver;
// }
//
// function onButtonOut() {
//     this.isOver = false;
//     if(this.isdown) {
//         return;
//     }
//     this.texture = textureButton;
// }



console.log(123);
