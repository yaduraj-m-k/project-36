class Food{
    constructor(x,y,width,height){
       var options = {
            restitution:1,
            friction:0,
            density:0.8,              
            isStatic:true
        }
        this.body=Bodies.rectangle  (x,y,width,height,options);
       this.width=width;
       this.height=height
       this.image=loadImage("Milk.png")
       
       World.add(world,this.body)

       var foodStock
    }  

    display(){
      var x=80,y=100;

      imageMode(CENTRE);
      image(this.image,720,220,70,70);

      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.iamge,x,y,50,50);
          x=x+30
        }
      }

    }
    
}
   
    
     
    
  