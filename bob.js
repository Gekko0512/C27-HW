class bob{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
             restitution:0.5,
             density:1.2,
             friction:0.5,
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;

    }      
}