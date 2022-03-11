class Car{
    constructor(image,x,y,width,height,src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width =width;
        this.height = height;
        this.src = src;
    }
    drawImage(ctx){
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
    }
    moveRight(){
        this.x += 20;
    }
    moveLeft(){
        this.x -= 20;
    }
    moveUp(){
        this.y -= 30
    }
    moveDown(){
        this.y += 30
    }
    setSrc(src){
        this.src = src
    }
    getSrc(){
        return this.src
    }
}
