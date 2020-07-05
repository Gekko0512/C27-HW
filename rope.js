class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
     this.offsetX = offsetX
     this.offsetY = offsetY
     
     pointB:{x:this.offsetX; y : this.offsetY}

      var options = {
     
     bodyA:bodyA,bodyB:bodyB,
     stiffness:0.04,
     length:10
      }
    
      this.rope = Constraint.create(options);
     World.add(world,this.rope);
    
    
    }
        display(){
         var pointA = this.chain.bodyA.position;
         var pointB = this.chain.bodyB.position;

         strokeWeight(2);

         var Anchor1X=pointA.x ;
         var Anchor1Y=pointA.y ;
    
         var Anchor2X=pointB.x ;
         var Anchor2Y=pointB.y ;
      

         line(Anchor1X.x,Anchor1Y.y,Anchor2X.x,Anchor2Y.y);
      
        }
     
    
}