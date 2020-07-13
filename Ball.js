class Ball {
    constructor(x, y,width,height) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.ball=Bodies.rectangle(x, y,width,height, options)
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png");
      
      World.add(world, this.ball);
    }
    display(){
      var pos = this.ball.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);

    }
  };
  