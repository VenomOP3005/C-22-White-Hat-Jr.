class Chain {
    constructor(bodyA, bodyB, pointA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 0.5,

        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}