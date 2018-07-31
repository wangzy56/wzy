//加载图片
// let app = new PIXI.Application({
//         width: 256,
//         height: 256,
//         antialias: true,
//         transparent: false,
//         resolution: 1
//     }
// );
//
// //将Pixi自动创建的画布添加到HTML文档中
// document.body.appendChild(app.view);
//
// //加载图像并在完成时运行“安装”函数
// PIXI.loader
//     .add("img/cat.png")
//     .load(setup);
//
// //这个“设置”函数将在图像加载时运行。
// function setup() {
//
//     //Create the cat sprite
//     let cat = new PIXI.Sprite(PIXI.loader.resources["img/cat.png"].texture);
//
//     //Add the cat to the stage
//     app.stage.addChild(cat);
// }
//

//让图片旋转
var app = new PIXI.Application(1000,600,{backgroundColor:0x1099bb});
document.body.appendChild(app.view);
var bunny = PIXI.Sprite.from('img/cat.png');
bunny.anchor.set(0.5);

bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);
app.ticker.add(function(delta){
    bunny.rotation += 0.1 *delta;
});

// 多个图片旋转
// var app = new PIXI.Application();
// document.body.appendChild(app.view);
//
// // create a texture from an image path
// var texture = PIXI.Texture.fromImage('img/cat.png');
//
// /* create a tiling sprite ...
//  * requires a texture, a width and a height
//  * in WebGL the image size should preferably be a power of two
//  */
// var tilingSprite = new PIXI.extras.TilingSprite(
//     texture,
//     app.screen.width,
//     app.screen.height
// );
// app.stage.addChild(tilingSprite);
//
// var count = 0;
//
// app.ticker.add(function() {
//
//     count += 0.005;
//
//     tilingSprite.tileScale.x = .5 + Math.sin(count);
//     tilingSprite.tileScale.y = .5 + Math.cos(count);
//
//     tilingSprite.tilePosition.x += 1;
//     tilingSprite.tilePosition.y += 1;
// });

// 文字
// var app = new PIXI.Application(1000, 600, {backgroundColor: 0x1099bb});
// document.body.appendChild(app.view);
//
// var basicText = new PIXI.Text('haoweilai好未来');
// basicText.x = 30;
// basicText.y = 90;
//
// app.stage.addChild(basicText);
//
// var style = new PIXI.TextStyle({
//     fontFamily: 'Arial',
//     fontSize: 36,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     fill: ['#ffffff', '#00ff99'], // gradient
//     stroke: '#4a1850',
//     strokeThickness: 5,
//     dropShadow: true,
//     dropShadowColor: '#000000',
//     dropShadowBlur: 4,
//     dropShadowAngle: Math.PI / 6,
//     dropShadowDistance: 6,
//     wordWrap: true,
//     wordWrapWidth: 300
// });
//
// var richText = new PIXI.Text([
//    'haoweilai',
//     '好未来',
//     'haoweilai',
//     '好未来',
//     'haoweilai',
//     '好未来',
//
// ] ,style);
// richText.x = 10;
// richText.y = 180;
// app.stage.addChild(richText);

//绘制图形
// var app = new PIXI.Application(1000, 600, { antialias: true });
// document.body.appendChild(app.view);
//
// var graphics = new PIXI.Graphics();
//
// // set a fill and line style
// //三角形
// graphics.beginFill(0xFF3300);
// graphics.lineStyle(4, 0xffd900, 1);
// graphics.moveTo(50,50);
// graphics.lineTo(250, 50);
// graphics.lineTo(100, 100);
// graphics.lineTo(50, 50);
// graphics.endFill();
//
// // set a fill and a line style again and draw a rectangle
// //正方形
// graphics.lineStyle(2, 0x0000FF, 1);
// graphics.beginFill(0xFF700B, 1);
// graphics.drawRect(50, 250, 120, 120);
//
// // draw a rounded rectangle
// //长方形
// graphics.lineStyle(2, 0xFF00FF, 1);
// graphics.beginFill(0xFF00BB, 0.25);
// graphics.drawRoundedRect(150, 450, 300, 100, 15);
// graphics.endFill();
//
// // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
// //圆
// graphics.lineStyle(0);
// graphics.beginFill(0xFFFF0B, 0.5);
// graphics.drawCircle(470, 90,60);
// graphics.endFill();
//
// app.stage.addChild(graphics);

//播放视频
// var app = new PIXI.Application(800, 600, { transparent: true });
// document.body.appendChild(app.view);
//
// // Create play button that can be used to trigger the video
// var button = new PIXI.Graphics()
//     .beginFill(0x0, 0.5)
//     .drawRoundedRect(0, 0, 100, 100, 10)
//     .endFill()
//     .beginFill(0xffffff)
//     .moveTo(36, 30)
//     .lineTo(36, 70)
//     .lineTo(70, 50);
//
// // Position the button
// button.x = (app.screen.width - button.width) / 2;
// button.y = (app.screen.height - button.height) / 2;
//
// // Enable interactivity on the button
// button.interactive = true;
// button.buttonMode = true;
//
// // Add to the stage
// app.stage.addChild(button);
//
// button.on('pointertap', onPlayVideo);
//
// function onPlayVideo() {
//
//     // Don't need the button anymore
//     button.destroy();
//
//     // create a video texture from a path
//     var texture = PIXI.Texture.fromVideo('https://pic.ibaotu.com/00/51/94/95v888piCsFB.mp4');
//
//     // create a new Sprite using the video texture (yes it's that easy)
//     var videoSprite = new PIXI.Sprite(texture);
//
//     // Stetch the fullscreen
//     videoSprite.width = app.screen.width;
//     videoSprite.height = app.screen.height;
//
//     app.stage.addChild(videoSprite);
// }


var app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader
    .add('required/assets/basics/fighter.json')
    .load(onAssetsLoaded);

function onAssetsLoaded()
{
    // create an array of textures from an image path
    var frames = [];

    for (var i = 0; i < 30; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    var anim = new PIXI.extras.AnimatedSprite(frames);

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.x = app.screen.width / 2;
    anim.y = app.screen.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();

    app.stage.addChild(anim);

    // Animate the rotation
    app.ticker.add(function() {
        anim.rotation += 0.01;
    });
}