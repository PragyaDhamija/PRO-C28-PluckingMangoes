class SlingShot{
    constructor(mybody,mypoint) {
        var options={
            bodyA : mybody,
            pointB : mypoint,
            stiffness: 0.004,
            length : 1
        }
        this.pointB = mypoint;
        this.sling1 = Constraint.create(options)
        World.add(world,this.sling1)
    }
    fly() {
        this.sling1.bodyA = null;
    }

    attach(mybody){
        this.sling1.bodyA = mybody;
    }
    display(){
        if(this.sling1.bodyA) {
            var pointA = this.sling1.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(5);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}