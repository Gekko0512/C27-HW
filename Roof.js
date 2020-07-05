class Roof{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
             restitution:0,
             density:1.2,
             friction:0,
        }
           this.body=Bodies.rectangle(x,y,width,height,options)
           this.width=width;
           this.height=height;
         
       
    }
        
}