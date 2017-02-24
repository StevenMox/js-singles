function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

//snake eating the random bits to grow bigger
  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  };

//kills your snake and starts it back at 0
  this.death = function(){
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  };

//update loop for everytime you eat a piece of food without hitting your own snake
  this.update = function(){
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  };

//shows the food on the screen in random locations
  this.show = function () {
    fill(255);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };
}

//using p5 library and this youtube video I crated the snake game along with him https://www.youtube.com/watch?v=AaGK-fj-BAM&index=8&list=WL
//need to add this script to head to work properly <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
