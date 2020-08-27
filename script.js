let Circle = function(radius){
    this.radius= radius;
}
Circle.prototype.getRadius= function(){
    return this.radius;
}
Circle.prototype.getArea= function(){
    return Math.PI * radius * radius;
}

let cirle = new Circle(2);
let radius= cirle.getRadius();
let area= cirle.getArea();
alert('Radius: '+ radius +'- Area: '+ area);