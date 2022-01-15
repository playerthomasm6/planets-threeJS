// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext('2d');

// canvas.width = innerWidth - innerWidth/10;
// canvas.height = innerHeight/1.5;

// console.log(canvas.width);
// console.log(canvas.height);

// function Square(x, y, oX, oY, w, h, color) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.color = color;
//     this.oX = oX;
//     this.oY = oY;

//     this.update = function() {
//         this.draw();
//         this.reset();
//     }

//     this.reset = function() {
//         if (this.y + this.h < 0) {
//             this.y = 800;
//             this.w = 50;
//             this.h = 50;
//             this.x = this.oX;
//             this.y = this.oY;
//         }
//     }

//     this.changePosition = function(x, y) {
//         this.x = this.x + x; 
//         this.y = this.y + y;
//     }

//     this.changeSize = function(w, h) {
//         this.w = this.w + w;
//         this.h = this.h + h;
//     }

//     this.draw = function() {
//         ctx.beginPath()
//         ctx.strokeStyle = this.color;
//         ctx.fillStyle = this.color;
//         ctx.lineWidth = "3"
//         ctx.fillRect(this.x, this.y, this.w, this.h);
//         ctx.stroke();
//     }
// }

// let squares = [
//     new Square(100, 600, 100, 600,  50, 50, "red"),
//     new Square(200, 600, 200, 600, 50, 50, "blue"),
//     new Square(300, 600, 300, 600, 50, 50, "purple"),
//     new Square(400, 600, 400, 600, 50, 50, "black"),
//     new Square(500, 600, 500, 600, 50, 50, "orange"),
//     new Square(600, 600, 600, 600, 50, 50, "cyan"),
    

// ];

// const calcXPosition = (x) => {
//     let xChange = x/10;
//     return xChange;
// }

// const animate = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     squares.forEach(square => {
//         square.update();
//         square.changePosition(calcXPosition(square.oX/5), -3)
//         square.changeSize(-.1, -.1)
//     })
    
//     requestAnimationFrame(animate)
// }

// animate();