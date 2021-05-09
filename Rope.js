class Rope
{
    constructor(pointA,bodyB){
        var options = {
            pointA:pointA,
            bodyB:bodyB,
            stiffness: 0.04,
            length:300
        }
        this.pointA = pointA
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        var pointB = this.rope.bodyB.position
        var pointA = this.pointA
        strokeWeight(3)
        stroke("purple")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}