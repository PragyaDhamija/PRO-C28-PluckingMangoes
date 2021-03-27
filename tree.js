class tree {
    constructor(x, y) {
        this.width = 450;
        this.height = 600;
        this.thickness = 10;

        this.image = loadImage("tree.png")
        this.body = Bodies.rectangle(x, y, width, height)

        World.add(world, this.body)


    }

    display() {
        var posB = this.body.position;
        imageMode(CENTER);
        image(this.image, 1000, 300, 450, 600)
        //rectMode(CENTER);
        //rect(1000,300,100, 200)
    }
}