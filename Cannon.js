class Cannon {
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rectMode("CENTER");
        rect(0, 0, this.w, this.h);
        pop();  
    }
}